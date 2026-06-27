"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { X, RefreshCw } from "lucide-react";
import { useMediaQuery } from "@/lib/useMediaQuery";

// -- Config --
const NAGPUR_COORDS: [number, number] = [79.0882, 21.1458];
const RADIUS_KM = 200;
const KM_PER_DEGREE_LAT = 111.32; // Approx

const CITIES = [
  { name: "Amravati", state: "Maharashtra", coords: [77.7796, 20.9374] as [number, number], dist: 111 },
  { name: "Wardha", state: "Maharashtra", coords: [78.6022, 20.7453] as [number, number], dist: 59 },
  { name: "Chandrapur", state: "Maharashtra", coords: [79.2961, 19.9615] as [number, number], dist: 113 },
  { name: "Yavatmal", state: "Maharashtra", coords: [78.1204, 20.3888] as [number, number], dist: 120 },
  { name: "Bhandara", state: "Maharashtra", coords: [79.6500, 21.1667] as [number, number], dist: 56 },
  { name: "Gondia", state: "Maharashtra", coords: [80.1947, 21.4624] as [number, number], dist: 117 },
  { name: "Chhindwara", state: "Madhya Pradesh", coords: [78.9382, 22.0574] as [number, number], dist: 93 },
  { name: "Seoni", state: "Madhya Pradesh", coords: [79.5451, 22.0871] as [number, number], dist: 109 },
  { name: "Balaghat", state: "Madhya Pradesh", coords: [80.1859, 21.8137] as [number, number], dist: 145 },
];

export default function OperationsMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  const [selectedCity, setSelectedCity] = useState<(typeof CITIES)[0] | null>(null);
  const [showLegend, setShowLegend] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmall = useMediaQuery("(max-width: 480px)");

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const logicalWidth = 800;
    const logicalHeight = 800; // Square-ish is better for MA+MP

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${logicalWidth} ${logicalHeight}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    svg.selectAll("*").remove(); // Clear previous render

    const g = svg.append("g").attr("class", "map-group").style("will-change", "transform");
    
    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 6])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Setup projection (will be fitted after loading data)
    const projection = d3.geoMercator();
    const path = d3.geoPath().projection(projection);

    const loadData = async () => {
      try {
        // Fetch TopoJSON
        const response = await fetch("https://code.highcharts.com/mapdata/countries/in/in-all.topo.json");
        const topoData = await response.json();
        
        // Convert to GeoJSON
        const geoData = topojson.feature(topoData, topoData.objects.default) as unknown as d3.ExtendedFeatureCollection;
        
        // Find MA & MP to fit bounds
        const targetStates = geoData.features.filter(f => 
          f.properties?.name === "Maharashtra" || f.properties?.name === "Madhya Pradesh"
        );
        
        const targetFeatureCollection = { type: "FeatureCollection", features: targetStates } as d3.ExtendedFeatureCollection;

        // Fit projection to target states using logical dimensions
        projection.fitSize([logicalWidth, logicalHeight], targetFeatureCollection);

        // --- Render States ---
        g.selectAll("path")
          .data(geoData.features)
          .join("path")
          .attr("d", path as any)
          .attr("fill", d => {
            const name = d.properties?.name;
            if (name === "Maharashtra") return "#C9A96E"; // amber-gold
            if (name === "Madhya Pradesh") return "#4A7C59"; // forest green
            return "#CBD5E1"; // muted gray
          })
          .attr("stroke", "#ffffff")
          .attr("stroke-width", "1px")
          .style("transition", "fill 0.2s")
          .on("mouseover", function() {
             d3.select(this).style("filter", "brightness(1.1)");
          })
          .on("mouseout", function() {
             d3.select(this).style("filter", "none");
          });

        // --- Render State Labels ---
        if (!isSmall) {
          g.selectAll(".state-label")
            .data(targetStates)
            .join("text")
            .attr("class", "state-label")
            .text(d => d.properties?.name?.toUpperCase() || "")
            .attr("x", d => path.centroid(d as any)[0])
            .attr("y", d => path.centroid(d as any)[1])
            .attr("text-anchor", "middle")
            .attr("font-family", "Inter, sans-serif")
            .attr("font-size", "11px")
            .attr("font-weight", "700")
            .attr("fill", "#ffffff")
            .attr("letter-spacing", "0.12em")
            .style("pointer-events", "none")
            .style("text-shadow", "0px 1px 3px rgba(0,0,0,0.5)");
        }

        // --- Render 200km Radius ---
        const centerPx = projection(NAGPUR_COORDS);
        const edgePx = projection([NAGPUR_COORDS[0], NAGPUR_COORDS[1] + (RADIUS_KM / KM_PER_DEGREE_LAT)]);
        if (centerPx && edgePx) {
          const pixelRadius = Math.abs(edgePx[1] - centerPx[1]);

          g.append("circle")
            .attr("cx", centerPx[0])
            .attr("cy", centerPx[1])
            .attr("r", pixelRadius)
            .attr("fill", "rgba(220,38,38,0.05)")
            .attr("stroke", "#dc2626")
            .attr("stroke-width", isSmall ? 1 : 1.5)
            .attr("stroke-dasharray", "8 5")
            .style("pointer-events", "none");
        }

        // --- Render Nagpur HQ ---
        if (centerPx) {
          // Pulse Ring
          const pulseRing = g.append("circle")
            .attr("cx", centerPx[0])
            .attr("cy", centerPx[1])
            .attr("r", 7)
            .attr("fill", "rgba(220, 38, 38, 0.6)")
            .style("pointer-events", "none");
            
          const pulse = () => {
            pulseRing
              .attr("r", 7)
              .attr("opacity", 0.8)
              .transition()
              .duration(1500)
              .attr("r", 25)
              .attr("opacity", 0)
              .on("end", pulse);
          };
          pulse();

          // HQ Dot
          g.append("circle")
            .attr("cx", centerPx[0])
            .attr("cy", centerPx[1])
            .attr("r", 7)
            .attr("fill", "#dc2626")
            .attr("stroke", "#ffffff")
            .attr("stroke-width", 2);

          // HQ Label Pill
          const labelG = g.append("g")
            .attr("transform", `translate(${centerPx[0]}, ${centerPx[1] - 18})`)
            .style("pointer-events", "none");

          labelG.append("rect")
            .attr("x", -40)
            .attr("y", -10)
            .attr("width", 80)
            .attr("height", 20)
            .attr("rx", 10)
            .attr("fill", "#ffffff")
            .attr("stroke", "#dc2626")
            .attr("stroke-width", 1);
            
          labelG.append("text")
            .text("NAGPUR HQ")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .attr("y", 1)
            .attr("font-size", "9px")
            .attr("font-weight", "bold")
            .attr("fill", "#dc2626");
        }

        // --- Render City Dots ---
        const citiesG = g.append("g").attr("class", "cities");

        const cityGroups = citiesG.selectAll(".city-group")
          .data(CITIES)
          .join("g")
          .attr("class", "city-group")
          .attr("transform", d => {
            const p = projection(d.coords);
            return p ? `translate(${p[0]},${p[1]})` : "";
          })
          .style("cursor", "pointer")
          .on("click", (event, d) => {
            event.stopPropagation();
            setSelectedCity(d);
            // Highlight logic
            d3.selectAll(".city-visible-dot").attr("fill", (c: any) => c.state === "Maharashtra" ? "#b48c47" : "#32563e").attr("r", 6);
            d3.select(event.currentTarget).select(".city-visible-dot")
              .attr("fill", "#dc2626")
              .attr("r", 8.4); // 1.4x scale
          });

        // Visible Dot
        cityGroups.append("circle")
          .attr("class", "city-visible-dot")
          .attr("r", isSmall ? 8 : 6)
          .attr("fill", d => d.state === "Maharashtra" ? "#b48c47" : "#32563e") // dark amber / dark green
          .attr("stroke", "#fff")
          .attr("stroke-width", 1)
          .style("transition", "all 0.2s");

        // Invisible Hit Area
        cityGroups.append("circle")
          .attr("r", 18)
          .attr("fill", "transparent");

        // City Label
        if (!isSmall) {
          cityGroups.append("text")
            .text(d => d.name)
            .attr("x", 12)
            .attr("y", 4)
            .attr("font-size", "10px")
            .attr("font-weight", "600")
            .attr("fill", "#333")
            .style("text-shadow", "0px 1px 2px #fff, 0px -1px 2px #fff")
            .style("pointer-events", "none");
        }

        setIsLoaded(true);

      } catch (error) {
        console.error("Error loading TopoJSON data:", error);
      }
    };

    loadData();

    // Reset Zoom Handler
    (window as any).resetMapZoom = () => {
      svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
      setSelectedCity(null);
      d3.selectAll(".city-visible-dot")
        .attr("fill", (c: any) => c.state === "Maharashtra" ? "#b48c47" : "#32563e")
        .attr("r", isSmall ? 8 : 6);
    };

    // Handle Resize (not needed for projection since SVG viewBox + preserveAspectRatio handles it)
    // We can just clean up the zoom if needed
    return () => {
      // cleanup
    };

  }, [isMobile, isSmall]);

  return (
    <div className="relative w-full h-full min-h-[60vh] md:min-h-[80vh] flex flex-col font-sans">
      

      {/* Map Container */}
      <div ref={containerRef} className="relative flex-grow w-full bg-blue-50 overflow-hidden" onClick={() => {
        setSelectedCity(null);
        d3.selectAll(".city-visible-dot")
          .attr("fill", (c: any) => c.state === "Maharashtra" ? "#b48c47" : "#32563e")
          .attr("r", isSmall ? 8 : 6);
      }}>
        <svg ref={svgRef} className="w-full h-full outline-none" />

        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <RefreshCw className="w-8 h-8 text-gold animate-spin" />
          </div>
        )}

        {/* Reset Button */}
        <button 
          onClick={() => (window as any).resetMapZoom?.()}
          className="absolute top-4 md:top-32 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors z-20 flex items-center"
          style={{ minHeight: '44px' }}
        >
          <RefreshCw size={14} className="mr-2" /> Reset
        </button>

        {/* Mobile Legend Toggle */}
        {isMobile && (
          <button 
            onClick={() => setShowLegend(!showLegend)}
            className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm z-20"
            style={{ minHeight: '44px' }}
          >
            Legend
          </button>
        )}

        {/* Legend */}
        {(!isMobile || showLegend) && (
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl p-4 shadow-lg z-20 w-48 transition-opacity duration-300">
            <h4 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">Legend</h4>
            <div className="space-y-2 text-xs text-gray-700 font-medium">
              <div className="flex items-center"><div className="w-4 h-4 bg-[#C9A96E] rounded-sm mr-2" /> Maharashtra</div>
              <div className="flex items-center"><div className="w-4 h-4 bg-[#4A7C59] rounded-sm mr-2" /> Madhya Pradesh</div>
              <div className="flex items-center"><div className="w-4 h-4 bg-[#CBD5E1] rounded-sm mr-2" /> Other States</div>
              <div className="flex items-center mt-2"><div className="w-3 h-3 bg-[#b48c47] rounded-full mr-2.5 ml-0.5" /> Distribution City</div>
              <div className="flex items-center"><div className="w-3 h-3 bg-[#dc2626] rounded-full mr-2.5 ml-0.5 border border-white" /> Nagpur HQ</div>
              <div className="flex items-center"><div className="w-4 h-0 border-t border-dashed border-[#dc2626] border-[1.5px] mr-2" /> 200km Radius</div>
            </div>
          </div>
        )}

      </div>

      {/* City Info Card (HTML Overlay below map conceptually, but absolute positioned at bottom here) */}
      <div 
        className={`absolute bottom-0 left-0 w-full md:left-1/2 md:-translate-x-1/2 md:bottom-8 md:w-[480px] bg-white border border-gray-200 shadow-2xl z-30 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          selectedCity ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-[120%] opacity-0 pointer-events-none'
        } ${isMobile ? 'rounded-t-3xl pb-8 pt-6 px-6' : 'rounded-2xl p-6'}`}
      >
        {selectedCity && (
          <div className="relative">
            <button 
              onClick={() => setSelectedCity(null)}
              className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-1">{selectedCity.state}</p>
            <h3 className="text-3xl font-serif text-gray-900 mb-4">{selectedCity.name}</h3>
            
            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              <div>
                <p className="text-sm text-gray-500">Distance from HQ</p>
                <p className="text-xl font-bold text-gray-900">{selectedCity.dist} km</p>
              </div>
              
              <div>
                {selectedCity.dist <= 150 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2" /> Within Range
                  </span>
                )}
                {selectedCity.dist > 150 && selectedCity.dist <= 200 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mr-2" /> Near Boundary
                  </span>
                )}
                {selectedCity.dist > 200 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2" /> Outside Range
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
