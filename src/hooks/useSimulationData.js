// src/hooks/useSimulationData.js
import { useState, useCallback } from 'react';

function generateSimulationData() {
  // Time array: 0 to 2400 seconds, step 100
  const t = Array.from({ length: 25 }, (_, i) => i * 100);
  
  // SOC: starts ~0.85, trends to ~0.30 with noise
  const soc = t.map(time => {
    const trend = 0.85 - (time / 2400) * 0.55;
    const noise = (Math.random() - 0.5) * 0.05;
    return Math.max(0, Math.min(1, trend + noise));
  });

  // Voltage: base ~375 ± 15 with sine wave + noise
  const voltage = t.map(time => {
    const base = 375;
    const sine = 15 * Math.sin(time / 400);
    const noise = (Math.random() - 0.5) * 10;
    return Math.max(300, Math.min(420, base + sine + noise));
  });

  // Current: random walk between -40..40 with occasional spikes
  let currentValue = 0;
  const current = t.map(() => {
    currentValue += (Math.random() - 0.5) * 8;
    if (Math.random() < 0.1) currentValue += (Math.random() - 0.5) * 30;
    currentValue = Math.max(-40, Math.min(40, currentValue));
    return currentValue;
  });

  // Efficiency: base ~0.95, brief dip around t≈600-800
  const efficiency = t.map(time => {
    let base = 0.95;
    if (time >= 600 && time <= 800) {
      const dipProgress = Math.sin(((time - 600) / 200) * Math.PI);
      base = 0.95 - 0.15 * dipProgress;
    } else if (time > 800) {
      base = 0.92 + Math.random() * 0.08;
    }
    const noise = (Math.random() - 0.5) * 0.02;
    return Math.max(0.7, Math.min(1.1, base + noise));
  });

  return { t, soc, voltage, current, efficiency };
}

function computeKpis(data) {
  const socNow = Math.round(data.soc[data.soc.length - 1] * 100);
  const E = {
    primary: "2.2 V",
    sub: "12.4 kWh"
  };
  const mmp = 42; // Mock max module temp
  const eta = Math.round(data.efficiency[data.efficiency.length - 1] * 100);

  return { socNow, E, mmp, eta };
}

export function useSimulationData() {
  const [data, setData] = useState(() => generateSimulationData());
  
  const kpis = computeKpis(data);

  const rerun = useCallback(() => {
    setData(generateSimulationData());
  }, []);

  const toCSV = useCallback(() => {
    const headers = ['time', 'soc', 'voltage', 'current', 'efficiency'];
    const rows = data.t.map((time, i) => [
      time,
      data.soc[i].toFixed(4),
      data.voltage[i].toFixed(2),
      data.current[i].toFixed(2),
      data.efficiency[i].toFixed(4)
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }, [data]);

  return { data, kpis, rerun, toCSV };
}