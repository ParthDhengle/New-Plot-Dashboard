// src/components/summary/SummaryGrid.jsx
import { SummaryKpi } from './SummaryKpi';
export function SummaryGrid({ kpis }) {
  const kpiDefinitions = [
    { label: 'SOC', value: `${kpis.socNow}%` },
    { label: 'E', value: kpis.E.primary, subvalue: kpis.E.sub },
    { label: 'MMP', value: `${kpis.mmp} °C` },
    { label: 'η', value: `${kpis.eta}%` }
  ];

  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
      {kpiDefinitions.map((kpi, index) => (
        <SummaryKpi
          key={index}
          label={kpi.label}
          value={kpi.value}
          subvalue={kpi.subvalue}
        />
      ))}
    </div>
  );
}
