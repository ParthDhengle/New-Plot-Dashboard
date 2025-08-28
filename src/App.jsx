import AppShell from "./components/layout/AppShell"
import HeaderTitle from "./components/layout/HeaderTitle"
import SummarySection from "./components/summary/SummarySection"
import {MetricTabs} from "./components/tabs/MetricTabs"
import ActionBar from "./components/actions/ActionBar.jsx"
import { useSimulationData } from "./hooks/useSimulationData"
import { exportCSV, exportPDF } from "./utils/exporters"

function App() {
  const { data, kpis, rerun, toCSV, loading } = useSimulationData()

  const handleDownloadCSV = () => {
    const csvString = toCSV()
    exportCSV("battery-simulation-data.csv", csvString)
  }

  const handleExportPDF = () => {
    exportPDF("dashboard-root", "battery-simulation.pdf")
  }

  return (
    <AppShell>
      <div className="space-y-6">
        <HeaderTitle />
        <SummarySection kpis={kpis} />
        <MetricTabs data={data} />
        <ActionBar onDownloadCSV={handleDownloadCSV} onExportPDF={handleExportPDF} onRerun={rerun} loading={loading} />
      </div>
    </AppShell>
  )
}

export default App
