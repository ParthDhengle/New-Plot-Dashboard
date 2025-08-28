function SummaryKpi({ label, value, subvalue }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <div className="text-sm font-medium text-gray-500 mb-1">{label}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      {subvalue && <div className="text-sm text-gray-600 mt-1">{subvalue}</div>}
    </div>
  )
}

export default SummaryKpi
