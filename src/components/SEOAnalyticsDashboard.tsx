
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Mock data for demo purposes - would be replaced with real analytics data
const pageViewData = [
  { date: 'May 11', views: 120 },
  { date: 'May 12', views: 145 },
  { date: 'May 13', views: 132 },
  { date: 'May 14', views: 167 },
  { date: 'May 15', views: 189 },
  { date: 'May 16', views: 210 },
  { date: 'May 17', views: 198 },
  { date: 'May 18', views: 212 },
];

const pagePerformanceData = [
  { name: 'Home', views: 1200, avgTimeOnPage: 125 },
  { name: 'WiFi Safety', views: 850, avgTimeOnPage: 180 },
  { name: 'Device Safety', views: 920, avgTimeOnPage: 160 },
  { name: 'App Safety', views: 780, avgTimeOnPage: 145 },
  { name: 'Resources', views: 640, avgTimeOnPage: 90 },
];

const keywordPerformanceData = [
  { keyword: 'child online safety', position: 12, clicks: 450 },
  { keyword: 'parental controls app', position: 8, clicks: 620 },
  { keyword: 'kids internet safety', position: 15, clicks: 380 },
  { keyword: 'wifi safety for kids', position: 5, clicks: 720 },
  { keyword: 'screen time app', position: 18, clicks: 290 },
];

const SEOAnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState('traffic');

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">SEO & Analytics Dashboard</h2>
      <p className="text-muted-foreground">Monitor your website traffic and search engine performance.</p>
      
      <Tabs defaultValue="traffic" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="traffic">Traffic Overview</TabsTrigger>
          <TabsTrigger value="pages">Page Performance</TabsTrigger>
          <TabsTrigger value="keywords">Keyword Rankings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Website Traffic</CardTitle>
              <CardDescription>Daily page views over the last 7 days</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={pageViewData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">1,245</p>
                <p className="text-xs text-muted-foreground">+15.8% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Bounce Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">42.8%</p>
                <p className="text-xs text-muted-foreground">-2.4% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Avg. Session</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">2m 45s</p>
                <p className="text-xs text-muted-foreground">+30s from last month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Page Performance</CardTitle>
              <CardDescription>Visits and time on page by section</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={pagePerformanceData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="views" fill="#8884d8" name="Page Views" />
                  <Bar yAxisId="right" dataKey="avgTimeOnPage" fill="#82ca9d" name="Avg. Time (sec)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="keywords" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Rankings</CardTitle>
              <CardDescription>Top performing keywords and their positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left p-2">Keyword</th>
                      <th className="text-right p-2">Position</th>
                      <th className="text-right p-2">Clicks</th>
                      <th className="text-right p-2">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keywordPerformanceData.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2">{item.keyword}</td>
                        <td className="text-right p-2">{item.position}</td>
                        <td className="text-right p-2">{item.clicks}</td>
                        <td className="text-right p-2">
                          {index % 2 === 0 ? (
                            <span className="text-green-500">↑</span>
                          ) : (
                            <span className="text-red-500">↓</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEOAnalyticsDashboard;
