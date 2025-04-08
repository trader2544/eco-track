
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, MapPin, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex rounded-full bg-muted px-3 py-1 text-sm">
              <span className="text-primary font-medium">New features available</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Monitor Our Planet's <span className="text-primary">Environment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Real-time environmental data monitoring for air quality, water conditions, temperature trends, and more. Make informed decisions for a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/dashboard">
                  View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative animation-delay-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-eco-forest to-eco-ocean p-1 shadow-xl">
              <div className="h-full w-full rounded-lg bg-background p-3 sm:p-6">
                <div className="grid grid-cols-3 gap-3 h-full">
                  <div className="col-span-2 bg-muted rounded-md p-4 flex flex-col">
                    <div className="text-xs uppercase text-muted-foreground font-medium">Air Quality Index</div>
                    <div className="mt-2 text-2xl font-bold">72</div>
                    <div className="text-xs text-eco-forest font-medium">Moderate</div>
                    <div className="mt-auto h-24 bg-gradient-to-t from-eco-leaf/20 to-eco-leaf/5 rounded flex items-end justify-center">
                      <BarChart2 className="h-20 w-20 text-eco-leaf/30" />
                    </div>
                  </div>
                  <div className="space-y-3 flex flex-col">
                    <div className="bg-muted rounded-md p-4 flex-1 flex flex-col">
                      <div className="text-xs uppercase text-muted-foreground font-medium">Temperature</div>
                      <div className="mt-1 text-xl font-bold">76°F</div>
                      <div className="mt-auto flex justify-center">
                        <Wind className="h-6 w-6 text-eco-sky" />
                      </div>
                    </div>
                    <div className="bg-muted rounded-md p-4 flex-1 flex flex-col">
                      <div className="text-xs uppercase text-muted-foreground font-medium">Location</div>
                      <div className="mt-1 text-md font-medium">Portland</div>
                      <div className="mt-auto flex justify-center">
                        <MapPin className="h-6 w-6 text-eco-danger" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 -z-10 h-60 w-60 rounded-full bg-eco-ocean/20 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
