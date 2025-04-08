
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { AirQualityChart } from '@/components/dashboard/AirQualityChart';
import { LocationMap } from '@/components/dashboard/LocationMap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThermometerSun, CloudRain, Wind, Droplets, Leaf, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Environmental Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time monitoring of key environmental metrics for Portland, Oregon
          </p>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="air">Air Quality</TabsTrigger>
            <TabsTrigger value="water">Water Quality</TabsTrigger>
            <TabsTrigger value="climate">Climate</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
              <MetricCard
                title="Temperature"
                value="76°F"
                description="Current outdoor temperature"
                icon={<ThermometerSun />}
                trend={{ value: 3, isPositive: true }}
              />
              <MetricCard
                title="Humidity"
                value="62%"
                description="Relative humidity"
                icon={<Droplets />}
                trend={{ value: 2, isPositive: false }}
              />
              <MetricCard
                title="Air Quality Index"
                value="72"
                description="Moderate air quality"
                icon={<Wind />}
                trend={{ value: 5, isPositive: false }}
              />
              <MetricCard
                title="Precipitation"
                value="0.2 in"
                description="Last 24 hours"
                icon={<CloudRain />}
                trend={{ value: 12, isPositive: true }}
              />
              <AirQualityChart />
              <LocationMap />
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-eco-warning" />
                    <span>Recent Alerts</span>
                  </CardTitle>
                  <CardDescription>Environmental alerts from the past 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-muted/50 rounded-lg flex items-start gap-3">
                      <div className="mt-1 text-eco-warning">
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Elevated Ozone Levels</div>
                        <div className="text-sm text-muted-foreground">Today at 2:30 PM - East Side Industrial</div>
                      </div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg flex items-start gap-3">
                      <div className="mt-1 text-eco-warning">
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">PM2.5 Concentration High</div>
                        <div className="text-sm text-muted-foreground">Today at 10:15 AM - North Portland</div>
                      </div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg flex items-start gap-3">
                      <div className="mt-1 text-eco-success">
                        <Leaf className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">Air Quality Improved</div>
                        <div className="text-sm text-muted-foreground">Yesterday at 7:45 PM - Downtown Portland</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="air">
            <div className="text-center py-10">
              <Wind className="h-12 w-12 mx-auto text-muted" />
              <h3 className="text-xl font-medium mt-4">Air Quality Details</h3>
              <p className="text-muted-foreground mt-2">
                Detailed air quality metrics will be available here
              </p>
            </div>
          </TabsContent>
          <TabsContent value="water">
            <div className="text-center py-10">
              <Droplets className="h-12 w-12 mx-auto text-muted" />
              <h3 className="text-xl font-medium mt-4">Water Quality Details</h3>
              <p className="text-muted-foreground mt-2">
                Detailed water quality metrics will be available here
              </p>
            </div>
          </TabsContent>
          <TabsContent value="climate">
            <div className="text-center py-10">
              <ThermometerSun className="h-12 w-12 mx-auto text-muted" />
              <h3 className="text-xl font-medium mt-4">Climate Data</h3>
              <p className="text-muted-foreground mt-2">
                Detailed climate metrics will be available here
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
