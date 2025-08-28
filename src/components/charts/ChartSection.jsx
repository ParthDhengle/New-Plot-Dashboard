// src/components/charts/ChartSection.jsx
import dynamic from 'next/dynamic' // 1. Import dynamic from next
import ChartCard from "./ChartCard"
// 2. Dynamically import LineChart with SSR turned off
const LineChart = dynamic(() => import("./LineChart"), {
  ssr: false,
  loading: () => <p className="text-center p-4">Loading chart...</p> // Optional: Show a loading message
})

function ChartSection({ data }) {
  if (!data) {
    return <div className="text-center p-4">Loading charts...</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ChartCard title="SOC vs Time">
        <LineChart x={data.t} y={data.soc.map((v) => v * 100)} ySuffix="%" yRange={[0, 100]} percentage={true} />
      </ChartCard>
      <ChartCard title="Voltage vs Time">
        <LineChart x={data.t} y={data.voltage} ySuffix="V" yRange={[300, 420]} />
      </ChartCard>
      <ChartCard title="Current vs Time">
        <LineChart x={data.t} y={data.current} ySuffix="A" yRange={[-50, 50]} />
      </ChartCard>
      <ChartCard title="Efficiency vs Time">
        <LineChart
          x={data.t}
          y={data.efficiency.map((v) => v * 100)}
          ySuffix="%"
          yRange={[70, 110]}
          percentage={true}
        />
      </ChartCard>
    </div>
  );
}

export default ChartSection