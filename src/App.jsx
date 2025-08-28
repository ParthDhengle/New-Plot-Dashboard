// src/App.jsx
import { AppShell } from './components/layout/AppShell';
import { HeaderTitle } from './components/layout/HeaderTitle';
import { SummarySection } from './components/summary/SummarySection';
import { MetricTabs } from './components/tabs/MetricTabs';
import { ActionBar } from './components/actions/ActionBar';
import { useSimulationData } from './hooks/useSimulationData';
import { exportCSV, exportPDF } from './utils/exporters';
import { useState } from 'react';

function App() {
  const { data, kpis, rerun, toCSV } = useSimulationData();
  const [loading, setLoading] = useState(false);

  const handleRerun = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600)); // Simulate loading
    rerun();
    setLoading(false);
  };

  const handleDownloadCSV = () => {
    const csvString = toCSV();
    exportCSV('battery-simulation-data.csv', csvString);
  };

  const handleExportPDF = async () => {
    await exportPDF('dashboard-root', 'battery-simulation.pdf');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppShell>
        <div className="space-y-6">
          <HeaderTitle />
          <SummarySection kpis={kpis} />
          <MetricTabs data={data} />
          <ActionBar
            onDownloadCSV={handleDownloadCSV}
            onExportPDF={handleExportPDF}
            onRerun={handleRerun}
            loading={loading}
          />
        </div>
      </AppShell>
    </div>
  );
}

export default App;