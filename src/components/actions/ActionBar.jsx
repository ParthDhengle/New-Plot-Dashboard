"use client"
import { Button } from "../ui/button"
import { Download, FileDown, RefreshCw } from "lucide-react"

function ActionBar({ onDownloadCSV, onExportPDF, onRerun, loading }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      <Button
        variant="outline"
        onClick={onDownloadCSV}
        disabled={loading}
        aria-label="Download simulation data as CSV"
        className="flex items-center gap-2 bg-transparent"
      >
        <Download className="h-4 w-4" />
        Download CSV
      </Button>

      <Button
        variant="outline"
        onClick={onExportPDF}
        disabled={loading}
        aria-label="Export dashboard as PDF"
        className="flex items-center gap-2 bg-transparent"
      >
        <FileDown className="h-4 w-4" />
        Export PDF
      </Button>

      <Button
        onClick={onRerun}
        disabled={loading}
        aria-label="Re-run battery simulation"
        className="flex items-center gap-2"
      >
        <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
        Re-run Simulation
      </Button>
    </div>
  )
}

export default ActionBar
