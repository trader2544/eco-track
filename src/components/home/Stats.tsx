
import React from 'react';

const stats = [
  {
    value: '50+',
    label: 'Environmental Metrics',
  },
  {
    value: '1000+',
    label: 'Monitoring Locations',
  },
  {
    value: '24/7',
    label: 'Real-time Updates',
  },
  {
    value: '99.9%',
    label: 'System Uptime',
  },
];

export const Stats = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
