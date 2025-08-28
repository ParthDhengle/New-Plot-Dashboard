import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import SummaryGrid from "./SummaryGrid"

function SummarySection({ kpis }) {
  return (
    <Card className="rounded-2xl shadow-sm border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Simulation Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <SummaryGrid kpis={kpis} />
      </CardContent>
    </Card>
  )
}

export default SummarySection
