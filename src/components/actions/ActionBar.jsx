// src/components/actions/ActionBar.jsx
import { Button } from '@/components/ui/button';
import { Download, FileDown, RefreshCw } from 'lucide-react';

export function ActionBar({ onDownloadCSV, onExportPDF, onRerun, loading }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      <Button
        variant="outline"
        onClick={onDownloadCSV}
        className="rounded-xl"
        aria-label="Download simulation data as CSV"
      >
        <Download className="w-4 h-4 mr-2" />
        Download CSV
      </Button>
      
      <Button
        variant="outline"
        onClick={onExportPDF}
        className="rounded-xl"
        aria-label="Export dashboard as PDF"
      >
        <FileDown className="w-4 h-4 mr-2" />
        Export PDF
      </Button>
      
      <Button
        onClick={onRerun}
        disabled={loading}
        className="rounded-xl"
        aria-label="Re-run battery simulation"
      >
        <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
        Re-run Simulation
      </Button>
    </div>
  );
}