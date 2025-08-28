// src/components/charts/ChartCard.jsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ChartCard({ title, children }) {
  return (
    <Card className="rounded-xl border-gray-100 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {children}
      </CardContent>
    </Card>
  );
}