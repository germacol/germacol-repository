import React, { useMemo, useState, useRef, useEffect } from 'react';
import { geoPath, geoGraticule, geoMercator } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Hub, HubDetail } from '../types';
import { worldData } from '../data/world-110m';
import { AIRPORT_COORDINATES } from '../data/airports';

interface RouteMapProps {
  hubs: Hub;
  mainRoutes: string[];
}

interface Point {
  code: string;
  name: string;
  coordinates: [number, number];
  isHub: boolean;
}

interface Tooltip {
  x: number;
  y: number;
  content: string;
}

const RouteMap: React.FC<RouteMapProps> = ({ hubs, mainRoutes }) => {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 450 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0]) {
        const { width } = entries[0].contentRect;
        setDimensions({ width, height: width / 1.77 });
      }
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);
  
  const land = useMemo(() => feature(worldData, worldData.objects.land), []);

  const projection = useMemo(() => geoMercator()
    .scale(dimensions.width / 2 / Math.PI * 0.9)
    .translate([dimensions.width / 2, dimensions.height / 2 * 1.2]), [dimensions]);

  const pathGenerator = geoPath().projection(projection);

  const graticule = geoGraticule();

  const mapElements = useMemo(() => {
    // FIX: The HubDetail type does not contain `lat` and `lon` properties.
    // Coordinates are looked up from the AIRPORT_COORDINATES map. Hubs without
    // coordinates are filtered out to prevent errors.
    const allHubs: Point[] = [...hubs.main, ...hubs.secondary]
      .map((h) => {
        const coords = AIRPORT_COORDINATES[h.code];
        if (!coords) {
          return null;
        }
        return {
          code: h.code,
          name: h.name,
          coordinates: [coords.lon, coords.lat] as [number, number],
          isHub: true,
        };
      })
      .filter((p): p is Point => p !== null);

    const routePoints = new Map<string, Point>();
    allHubs.forEach(h => routePoints.set(h.code, h));

    const routeLines = mainRoutes.slice(0, 10).map(routeStr => {
      const parts = routeStr.match(/\((.*?)\)/g);
      if (!parts || parts.length < 2) return null;
      
      const originCode = parts[0].slice(1, -1);
      const destCode = parts[1].slice(1, -1);

      const origin = allHubs.find(h => h.code === originCode);
      let dest = routePoints.get(destCode);

      if (!dest) {
        const destCoords = AIRPORT_COORDINATES[destCode];
        if(destCoords) {
           dest = { code: destCode, name: destCode, coordinates: [destCoords.lon, destCoords.lat], isHub: false };
           routePoints.set(destCode, dest);
        }
      }

      if (origin && dest) {
        return {
          type: "LineString",
          coordinates: [origin.coordinates, dest.coordinates],
          tooltip: `${origin.code} - ${dest.code}`
        };
      }
      return null;
    }).filter(Boolean);

    return { points: Array.from(routePoints.values()), lines: routeLines };
  }, [hubs, mainRoutes, projection]);


  return (
    <div ref={containerRef} className="w-full h-full relative text-xs">
       {tooltip && (
        <div 
          className="absolute z-10 px-2 py-1 bg-gray-900 text-white rounded-md pointer-events-none transition-opacity"
          style={{ top: tooltip.y, left: tooltip.x, transform: 'translate(10px, -100%)' }}
        >
          {tooltip.content}
        </div>
      )}
      <svg width="100%" height="100%" viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
        <g>
          <path
            d={pathGenerator(graticule()) || ''}
            fill="none"
            stroke="rgba(128,128,128,0.2)"
            strokeWidth={0.5}
          />
          <path
            d={pathGenerator(land) || ''}
            className="fill-gray-200 dark:fill-gray-700"
          />
          {mapElements.lines.map((line, i) => (
             <path
              key={i}
              // FIX: The d3-geo path generator expects a valid GeoJSON object.
              // The original `line` object had an extra `tooltip` property, causing a type error.
              // This creates a compliant GeoJSON LineString object for the generator.
              d={pathGenerator({ type: 'LineString', coordinates: line.coordinates }) || ''}
              className="fill-none stroke-blue-500/50 dark:stroke-blue-400/50"
              strokeWidth={1.5}
              onMouseMove={(e) => setTooltip({ x: e.clientX, y: e.clientY, content: line.tooltip })}
              onMouseLeave={() => setTooltip(null)}
            />
          ))}
          {mapElements.points.map((point) => {
            const [cx, cy] = projection(point.coordinates);
            return (
              <circle
                key={point.code}
                cx={cx}
                cy={cy}
                r={point.isHub ? 4 : 2.5}
                className={point.isHub ? "fill-red-500 dark:fill-red-400" : "fill-blue-600 dark:fill-blue-300"}
                stroke={point.isHub ? 'rgba(255,255,255,0.7)' : 'none'}
                strokeWidth={0.5}
                onMouseMove={(e) => setTooltip({ x: e.clientX, y: e.clientY, content: `${point.code}: ${point.name}` })}
                onMouseLeave={() => setTooltip(null)}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default RouteMap;
