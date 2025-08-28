import SummaryKpi from "./SummaryKpi"

function SummaryGrid({ kpis }) {
  const kpiDefinitions = [
    { label: "SOC", value: `${kpis.socNow}%` },
    { label: "E", value: "2.2 V", subvalue: "12.4 kWh" },
    { label: "MMP", value: `${kpis.mmp} °C` },
    { label: "η", value: `${kpis.eta}%` },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {kpiDefinitions.map((kpi, index) => (
        <SummaryKpi key={index} label={kpi.label} value={kpi.value} subvalue={kpi.subvalue} />
      ))}
    </div>
  )
}

export default SummaryGrid
