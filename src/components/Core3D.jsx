import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, MeshDistortMaterial, Sphere } from '@react-three/drei';

const AnimatedSphere = () => {
    const sphereRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (sphereRef.current) {
            sphereRef.current.rotation.x = t * 0.2;
            sphereRef.current.rotation.y = t * 0.3;
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
                color="#00f3ff"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0}
                metalness={1}
                wireframe={true}
            />
        </Sphere>
    );
};

const Core3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#bc13fe" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00f3ff" />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <AnimatedSphere />
                </Float>
            </Canvas>
        </div>
    );
};

export default Core3D;
