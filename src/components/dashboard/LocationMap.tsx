
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const locations = [
  { id: 1, name: "Portland Downtown", lat: 45.52, lng: -122.68, status: "good" },
  { id: 2, name: "East Side Industrial", lat: 45.53, lng: -122.65, status: "moderate" },
  { id: 3, name: "Southwest Hills", lat: 45.51, lng: -122.70, status: "good" },
  { id: 4, name: "North Portland", lat: 45.58, lng: -122.69, status: "poor" }
];

export const LocationMap = () => {
  return (
    <Card className="col-span-2 row-span-2">
      <CardHeader>
        <CardTitle>Monitoring Locations</CardTitle>
        <CardDescription>Active environmental monitoring stations</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-[400px] bg-muted rounded-b-lg overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-muted-foreground">
            <div className="text-center space-y-2">
              <p>Interactive map will be loaded here</p>
              <p className="text-xs">(Map view simulation)</p>
            </div>
          </div>
          
          {/* Simulated map pins */}
          <div className="absolute top-1/4 left-1/3">
            <MapPin 
              className="h-6 w-6 text-eco-success animate-bounce" 
              style={{ animationDuration: '2s' }}
            />
          </div>
          <div className="absolute top-1/3 left-2/3">
            <MapPin 
              className="h-6 w-6 text-eco-warning animate-bounce" 
              style={{ animationDuration: '2.2s' }}
            />
          </div>
          <div className="absolute top-2/3 left-1/5">
            <MapPin 
              className="h-6 w-6 text-eco-success animate-bounce" 
              style={{ animationDuration: '1.8s' }}
            />
          </div>
          <div className="absolute top-1/2 left-3/4">
            <MapPin 
              className="h-6 w-6 text-eco-danger animate-bounce" 
              style={{ animationDuration: '2.5s' }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
