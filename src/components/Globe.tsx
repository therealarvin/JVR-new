import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1500 * 2,
      height: 1500 * 2,
      phi: 0,
      theta: 0,
      dark: 10,
      diffuse: 0,
      mapSamples: 50000,
      mapBrightness: 2,
      baseColor: [0.1, 0.1, 0.1], // Dark gray dots
      markerColor: [0.94, 0.71, 0.16], // Gold markers
      glowColor: [1, 1, 1], // No glow
      opacity: 0,
      markers: [
        // Major cities/data centers
        { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.0060], size: 0.05 }, // New York
        { location: [51.5074, -0.1278], size: 0.03 }, // London
        { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
        { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
        { location: [52.5200, 13.4050], size: 0.03 }, // Berlin
        { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
        { location: [19.0760, 72.8777], size: 0.03 }, // Mumbai
      ],
      onRender: (state) => {
        // Auto-rotate slower
        phi += 0.002;
        state.phi = phi;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: 1500,
        height: 1500,
        maxWidth: '100%',
        aspectRatio: 1,
      }}
    />
  );
}
