
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Shield, Users, Globe, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EcoTrack</h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to make environmental data accessible, understandable, and actionable for everyone.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  At EcoTrack, we believe that access to accurate environmental data is essential for making informed decisions that affect our planet. 
                  Our platform brings together cutting-edge monitoring technology, data science, and user-friendly design to create a powerful tool 
                  for environmental awareness and action.
                </p>
                <p className="text-lg text-muted-foreground">
                  Whether you're a scientist, policy maker, educator, or concerned citizen, EcoTrack provides the insights you need to understand 
                  environmental changes and take meaningful steps toward a more sustainable future.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg p-6 text-center">
                    <Shield className="h-10 w-10 mx-auto mb-4 text-eco-forest" />
                    <h3 className="text-xl font-medium">Protection</h3>
                    <p className="text-sm text-muted-foreground mt-2">Safeguarding our environment through awareness</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 text-center">
                    <Users className="h-10 w-10 mx-auto mb-4 text-eco-sky" />
                    <h3 className="text-xl font-medium">Community</h3>
                    <p className="text-sm text-muted-foreground mt-2">Building a network of environmental advocates</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 text-center">
                    <Globe className="h-10 w-10 mx-auto mb-4 text-eco-ocean" />
                    <h3 className="text-xl font-medium">Global Impact</h3>
                    <p className="text-sm text-muted-foreground mt-2">Making worldwide environmental differences</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 text-center">
                    <Leaf className="h-10 w-10 mx-auto mb-4 text-eco-leaf" />
                    <h3 className="text-xl font-medium">Sustainability</h3>
                    <p className="text-sm text-muted-foreground mt-2">Promoting sustainable practices and policies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-square bg-accent"></div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">Team Member {i}</h3>
                    <p className="text-sm text-muted-foreground">Environmental Scientist</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for passionate individuals and organizations to join us in our mission to 
              protect and preserve our environment through data-driven insights and action.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium">
                Join Our Team
              </button>
              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium">
                Partner With Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
