import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function DiscBody() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.z -= dt * 1.6;
  });

  const segments = useMemo(() => Array.from({ length: 14 }, (_, i) => i), []);

  return (
    <group ref={group}>
      {/* Main steel body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.85, 1.85, 0.06, 96]} />
        <meshStandardMaterial
          color="#0a1626"
          metalness={0.95}
          roughness={0.18}
        />
      </mesh>

      {/* Blue branded face */}
      <mesh position={[0, 0.035, 0]}>
        <cylinderGeometry args={[1.55, 1.55, 0.005, 96]} />
        <meshStandardMaterial
          color="#2563eb"
          metalness={0.6}
          roughness={0.35}
          emissive="#2563eb"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Inner steel ring */}
      <mesh position={[0, 0.04, 0]}>
        <ringGeometry args={[0.95, 1.05, 64]} />
        <meshStandardMaterial color="#142e49" metalness={0.9} roughness={0.25} side={THREE.DoubleSide} />
      </mesh>

      {/* Center hub */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.08, 48]} />
        <meshStandardMaterial color="#e5e7eb" metalness={1} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.05, 32]} />
        <meshStandardMaterial color="#0a1626" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Diamond segments around the rim */}
      {segments.map((i) => {
        const angle = (i / segments.length) * Math.PI * 2;
        const r = 1.92;
        return (
          <group key={i} rotation={[0, angle, 0]}>
            <mesh position={[r, 0, 0]} castShadow>
              <boxGeometry args={[0.12, 0.12, 0.42]} />
              <meshStandardMaterial
                color="#cbd5e1"
                metalness={0.7}
                roughness={0.35}
              />
            </mesh>
          </group>
        );
      })}

      {/* Cooling slots (visible cut lines) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <group key={`slot-${i}`} rotation={[0, angle, 0]}>
            <mesh position={[1.35, 0.045, 0]}>
              <boxGeometry args={[0.45, 0.012, 0.06]} />
              <meshStandardMaterial color="#020617" metalness={0.5} roughness={0.6} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function Sparks() {
  const ref = useRef<THREE.Points>(null);
  const COUNT = 220;
  const positions = useMemo(() => {
    const p = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 1.9 + Math.random() * 0.2;
      p[i * 3] = Math.cos(a) * r;
      p[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
      p[i * 3 + 2] = Math.sin(a) * r;
    }
    return p;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] += 0.02 + Math.random() * 0.02;
      if (arr[i * 3 + 1] > 1.8) arr[i * 3 + 1] = -0.2;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = t * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#7dd3fc"
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function DiamondDisc3D() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.6, 3.4], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[3, 4, 2]}
        intensity={1.6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-3, 1, -2]} intensity={0.8} color="#2563eb" />
      <pointLight position={[2, -1, 2]} intensity={0.5} color="#38bdf8" />

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <group rotation={[0.55, 0, 0]}>
          <DiscBody />
        </group>
      </Float>

      <Sparks />

      <ContactShadows
        position={[0, -1.05, 0]}
        opacity={0.55}
        scale={6}
        blur={2.6}
        far={3}
        color="#000"
      />
      <Environment preset="warehouse" />
    </Canvas>
  );
}
