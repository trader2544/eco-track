
import React from 'react';
import { BarChart2, CloudRain, MapPin, Shield, ThermometerSun, Wind } from 'lucide-react';

const features = [
  {
    icon: <BarChart2 className="h-10 w-10 text-eco-leaf" />,
    title: 'Real-time Monitoring',
    description: 'Track environmental metrics in real-time with immediate updates and alerts for critical changes.'
  },
  {
    icon: <ThermometerSun className="h-10 w-10 text-eco-warning" />,
    title: 'Temperature Tracking',
    description: 'Monitor temperature trends over time to identify patterns and anomalies in climate data.'
  },
  {
    icon: <Wind className="h-10 w-10 text-eco-sky" />,
    title: 'Air Quality Analysis',
    description: 'Measure pollutants and particulate matter with detailed breakdowns of air quality components.'
  },
  {
    icon: <CloudRain className="h-10 w-10 text-eco-ocean" />,
    title: 'Precipitation Data',
    description: 'Track rainfall patterns and water cycle metrics to understand hydrological changes.'
  },
  {
    icon: <MapPin className="h-10 w-10 text-eco-danger" />,
    title: 'Geospatial Mapping',
    description: 'Visualize data across geographic locations with interactive maps and location-based insights.'
  },
  {
    icon: <Shield className="h-10 w-10 text-eco-forest" />,
    title: 'Environmental Alerts',
    description: 'Receive notifications when environmental conditions exceed safe or normal thresholds.'
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Environmental Monitoring</h2>
          <p className="text-muted-foreground text-lg">
            Our platform provides the tools you need to track, analyze, and respond to environmental changes with precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border bg-card hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
