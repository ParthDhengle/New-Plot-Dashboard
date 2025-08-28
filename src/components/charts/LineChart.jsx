"use client"

// src/components/charts/LineChart.jsx
import { useEffect, useRef } from "react"
import Plot from "react-plotly.js"
import Plotly from "plotly.js/dist/plotly";  // Add this import for resizing

function LineChart({ x, y, ySuffix = "", yRange, percentage = false }) {
  const plotRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (plotRef.current && plotRef.current.el) {
        Plotly.Plots.resize(plotRef.current.el);  // Correct resize method
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize();  // Initial resize on mount
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const tickformat = percentage ? ".0%" : ".0f"

  return (
    <div style={{ width: "100%", height: "260px" }}>
      <Plot
        ref={plotRef}
        data={[
          {
            x: x,
            y: y,
            type: "scatter",
            mode: "lines",
            line: { color: "#3b82f6", width: 2 },
            hovertemplate: `%{y}${ySuffix}<extra></extra>`,
          },
        ]}
        layout={{
          margin: { l: 40, r: 20, t: 20, b: 40 },
          paper_bgcolor: "transparent",
          plot_bgcolor: "transparent",
          xaxis: {
            showgrid: true,
            gridcolor: "#f3f4f6",
            showline: false,
            zeroline: false,
            title: { text: "" },
          },
          yaxis: {
            showgrid: true,
            gridcolor: "#f3f4f6",
            showline: false,
            zeroline: false,
            title: { text: "" },
            range: yRange,
            tickformat: percentage ? ".0f" : undefined,
            ticksuffix: ySuffix,
          },
          font: { family: "Inter, system-ui, sans-serif", size: 12 },
          hovermode: "x unified",
        }}
        config={{
          displayModeBar: false,
          responsive: true,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}

export default LineChart