// src/components/charts/ChartSection.jsx
import { ChartCard } from './ChartCard';
import { LineChart } from './LineChart';

export function ChartSection({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ChartCard title="SOC vs Time">
        <LineChart
          x={data.t}
          y={data.soc.map(val => val * 100)}
          ySuffix="%"
          yRange={[20, 90]}
          percentage={true}
        />
      </ChartCard>

      <ChartCard title="Voltage vs Time">
        <LineChart
          x={data.t}
          y={data.voltage}
          ySuffix="V"
          yRange={[300, 420]}
        />
      </ChartCard>

      <ChartCard title="Current vs Time">
        <LineChart
          x={data.t}
          y={data.current}
          ySuffix="A"
          yRange={[-50, 50]}
        />
      </ChartCard>

      <ChartCard title="Efficiency vs Time">
        <LineChart
          x={data.t}
          y={data.efficiency.map(val => val * 100)}
          ySuffix="%"
          yRange={[70, 110]}
          percentage={true}
        />
      </ChartCard>
    </div>
  );
}