"use client"

// src/hooks/useSimulationData.js
import { useState, useCallback, useMemo } from "react"

function generateSimulationData() {
  const timePoints = []
  for (let t = 0; t <= 2400; t += 100) {
    timePoints.push(t)
  }

  const soc = []
  const voltage = []
  const current = []
  const efficiency = []

  let currentVal = 0

  timePoints.forEach((t, i) => {
    // SOC: starts ~0.85 and trends to ~0.30 with noise
    const socBase = 0.85 - (t / 2400) * 0.55
    const socNoise = (Math.random() - 0.5) * 0.05
    soc.push(Math.max(0, Math.min(1, socBase + socNoise)))

    // Voltage: base ~375 ± 15 sine-ish + noise
    const voltageBase = 375 + 15 * Math.sin(t / 400) + (Math.random() - 0.5) * 10
    voltage.push(Math.max(300, Math.min(420, voltageBase)))

    // Current: random walk between -40..40 with occasional spikes
    currentVal += (Math.random() - 0.5) * 8
    if (Math.random() < 0.1) currentVal += (Math.random() - 0.5) * 20
    currentVal = Math.max(-40, Math.min(40, currentVal))
    current.push(currentVal)

    // Efficiency: base ~0.95, brief dip to ~0.80 near t≈600–800
    let effBase = 0.95
    if (t >= 600 && t <= 800) {
      effBase = 0.8 + (Math.random() - 0.5) * 0.1
    } else if (t > 800) {
      effBase = 0.92 + Math.random() * 0.08
    }
    const effNoise = (Math.random() - 0.5) * 0.03
    efficiency.push(Math.max(0.7, Math.min(1.1, effBase + effNoise)))
  })

  return { t: timePoints, soc, voltage, current, efficiency }
}

function computeKPIs(data) {
  const socNow = Math.round(data.soc[data.soc.length - 1] * 100)
  const mmp = 42 // Mock max module temp
  const eta = Math.round(data.efficiency[data.efficiency.length - 1] * 100)

  return { socNow, mmp, eta }
}

export function useSimulationData() {
  const [data, setData] = useState(() => generateSimulationData())
  const [loading, setLoading] = useState(false)

  const kpis = useMemo(() => computeKPIs(data), [data])

  const rerun = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setData(generateSimulationData())
      setLoading(false)
    }, 600)
  }, [])

  const toCSV = useCallback(() => {
    const headers = ["time", "soc", "voltage", "current", "efficiency"]
    const rows = data.t.map((t, i) => [
      t,
      data.soc[i].toFixed(4),
      data.voltage[i].toFixed(2),
      data.current[i].toFixed(2),
      data.efficiency[i].toFixed(4),
    ])

    return [headers, ...rows].map((row) => row.join(",")).join("\n")
  }, [data])

  return { data, kpis, rerun, toCSV, loading }
}
