// src/components/charts/LineChart.jsx
import Plot from 'react-plotly.js';
import { useEffect, useRef, useState } from 'react';

export function LineChart({ x, y, ySuffix = '', yRange, percentage = false }) {
  const plotRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 400, height: 260 });

  useEffect(() => {
    const updateSize = () => {
      if (plotRef.current) {
        const container = plotRef.current.parentElement;
        const width = container?.offsetWidth || 400;
        setDimensions({ width, height: 260 });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const data = [
    {
      x: x,
      y: y,
      type: 'scatter',
      mode: 'lines',
      line: {
        color: '#3B82F6',
        width: 2
      },
      hovertemplate: `%{y}${ySuffix}<extra></extra>`
    }
  ];

  const layout = {
    width: dimensions.width,
    height: dimensions.height,
    margin: { l: 50, r: 20, t: 20, b: 40 },
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: 'rgba(0,0,0,0)',
    xaxis: {
      gridcolor: '#E5E7EB',
      gridwidth: 1,
      showline: true,
      linecolor: '#D1D5DB',
      linewidth: 1,
      tickfont: { size: 11, color: '#6B7280' },
      title: { text: 'Time (s)', font: { size: 12, color: '#374151' } }
    },
    yaxis: {
      gridcolor: '#E5E7EB',
      gridwidth: 1,
      showline: true,
      linecolor: '#D1D5DB',
      linewidth: 1,
      tickfont: { size: 11, color: '#6B7280' },
      ticksuffix: ySuffix,
      range: yRange
    },
    showlegend: false,
    hovermode: 'x'
  };

  const config = {
    displayModeBar: false,
    responsive: true
  };

  return (
    <div ref={plotRef} className="w-full">
      <Plot
        data={data}
        layout={layout}
        config={config}
        style={{ width: '100%', height: '260px' }}
      />
    </div>
  );
}