import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

function ChartCard({ title, children }) {
  return (
    <Card className="rounded-2xl shadow-sm border-gray-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">{children}</CardContent>
    </Card>
  )
}

export default ChartCard
