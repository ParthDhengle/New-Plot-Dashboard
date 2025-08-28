// src/components/summary/SummarySection.jsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SummaryGrid } from './SummaryGrid';

export function SummarySection({ kpis }) {
  return (
    <Card className="rounded-2xl shadow-sm border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">
          Simulation Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SummaryGrid kpis={kpis} />
      </CardContent>
    </Card>
  );
}