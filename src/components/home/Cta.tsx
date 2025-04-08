
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Cta = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-eco-forest/10 to-eco-ocean/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Start Monitoring Your Environment Today</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of organizations using EcoTrack to monitor, analyze, and protect our environment for a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
