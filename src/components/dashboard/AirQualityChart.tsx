
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', pm25: 12, pm10: 24, o3: 32 },
  { time: '03:00', pm25: 16, pm10: 29, o3: 37 },
  { time: '06:00', pm25: 20, pm10: 36, o3: 45 },
  { time: '09:00', pm25: 22, pm10: 38, o3: 46 },
  { time: '12:00', pm25: 18, pm10: 34, o3: 52 },
  { time: '15:00', pm25: 15, pm10: 30, o3: 40 },
  { time: '18:00', pm25: 13, pm10: 28, o3: 36 },
  { time: '21:00', pm25: 10, pm10: 22, o3: 31 },
];

export const AirQualityChart = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Air Quality Trends</CardTitle>
        <CardDescription>24-hour air quality data for main pollutants</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPm25" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPm10" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#03A9F4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#03A9F4" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorO3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFC107" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FFC107" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }} />
              <Area type="monotone" dataKey="pm25" stroke="#4CAF50" fillOpacity={1} fill="url(#colorPm25)" name="PM2.5" />
              <Area type="monotone" dataKey="pm10" stroke="#03A9F4" fillOpacity={1} fill="url(#colorPm10)" name="PM10" />
              <Area type="monotone" dataKey="o3" stroke="#FFC107" fillOpacity={1} fill="url(#colorO3)" name="Ozone" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-eco-leaf"></div>
              <span className="text-sm text-muted-foreground">PM2.5</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-eco-sky"></div>
              <span className="text-sm text-muted-foreground">PM10</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-eco-warning"></div>
              <span className="text-sm text-muted-foreground">Ozone</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
