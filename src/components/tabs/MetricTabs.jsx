// src/components/tabs/MetricTabs.jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import ChartSection from '../charts/ChartSection';

export function MetricTabs({ data }) {
  return (
    <Card className="rounded-2xl shadow-sm border border-gray-200">
      <CardContent className="p-6">
        <Tabs defaultValue="performance" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="thermal">Thermal</TabsTrigger>
            <TabsTrigger value="life">Life</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="mt-6">
            <ChartSection data={data} />
          </TabsContent>
          
          <TabsContent value="thermal" className="mt-6">
            <Card className="rounded-xl border-gray-100">
              <CardContent className="p-8 text-center">
                <div className="text-gray-500">
                  <h3 className="text-lg font-medium mb-2">Thermal Analysis</h3>
                  <p>Coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="life" className="mt-6">
            <Card className="rounded-xl border-gray-100">
              <CardContent className="p-8 text-center">
                <div className="text-gray-500">
                  <h3 className="text-lg font-medium mb-2">Life Cycle Analysis</h3>
                  <p>Coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}