export function SummaryKpi({ label, value, subvalue }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col justify-center items-start h-full">
      <div className="text-sm font-medium text-gray-600 mb-1">
        {label}
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">
        {value}
      </div>
      {subvalue && (
        <div className="text-sm text-gray-500">
          {subvalue}
        </div>
      )}
    </div>
  );
}
