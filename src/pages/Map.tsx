
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Search, Filter, Layers } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Map = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Environmental Map</h1>
          <p className="text-muted-foreground">
            Interactive map of monitoring locations and environmental data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Map Controls</CardTitle>
                <CardDescription>Filter and search locations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Search Locations</label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-8" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Data Layers</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="layer-air" className="rounded text-primary" defaultChecked />
                      <label htmlFor="layer-air" className="text-sm">Air Quality</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="layer-water" className="rounded text-primary" defaultChecked />
                      <label htmlFor="layer-water" className="text-sm">Water Quality</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="layer-temp" className="rounded text-primary" defaultChecked />
                      <label htmlFor="layer-temp" className="text-sm">Temperature</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="layer-alerts" className="rounded text-primary" />
                      <label htmlFor="layer-alerts" className="text-sm">Alerts</label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <Button variant="outline" size="sm">
                    <Layers className="h-4 w-4 mr-2" />
                    Layers
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Locations</CardTitle>
                <CardDescription>Monitoring stations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 max-h-80 overflow-y-auto eco-scrollbar">
                <div className="p-3 bg-muted/50 rounded-lg flex items-start gap-3 cursor-pointer hover:bg-muted transition-colors">
                  <div className="mt-1 text-eco-success">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Portland Downtown</div>
                    <div className="text-xs text-muted-foreground">45.52, -122.68</div>
                    <div className="mt-1">
                      <Badge variant="outline" className="bg-eco-success/10 text-eco-success border-eco-success">Good</Badge>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg flex items-start gap-3 cursor-pointer hover:bg-muted transition-colors">
                  <div className="mt-1 text-eco-warning">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">East Side Industrial</div>
                    <div className="text-xs text-muted-foreground">45.53, -122.65</div>
                    <div className="mt-1">
                      <Badge variant="outline" className="bg-eco-warning/10 text-eco-warning border-eco-warning">Moderate</Badge>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg flex items-start gap-3 cursor-pointer hover:bg-muted transition-colors">
                  <div className="mt-1 text-eco-success">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Southwest Hills</div>
                    <div className="text-xs text-muted-foreground">45.51, -122.70</div>
                    <div className="mt-1">
                      <Badge variant="outline" className="bg-eco-success/10 text-eco-success border-eco-success">Good</Badge>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg flex items-start gap-3 cursor-pointer hover:bg-muted transition-colors">
                  <div className="mt-1 text-eco-danger">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">North Portland</div>
                    <div className="text-xs text-muted-foreground">45.58, -122.69</div>
                    <div className="mt-1">
                      <Badge variant="outline" className="bg-eco-danger/10 text-eco-danger border-eco-danger">Poor</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="md:col-span-3 h-[600px]">
            <CardContent className="p-0 h-full">
              <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center space-y-2">
                    <p>Interactive map will be loaded here</p>
                    <p className="text-xs">(Full map view simulation)</p>
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
                
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-md">
                    <span>+</span>
                  </Button>
                  <Button size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-md">
                    <span>-</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Map;
