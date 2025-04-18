
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Shield, Users, Globe, Leaf } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Environmental Scientist",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 2,
      name: "James Anderson",
      role: "Data Analyst",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 3,
      name: "Sophie Williams",
      role: "Conservation Specialist",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 4,
      name: "Michael Roberts",
      role: "Tech Lead",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EcoTrack Kenya</h1>
            <p className="text-lg text-muted-foreground">
              We're dedicated to monitoring and protecting Kenya's rich environmental heritage through data-driven insights and community action.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  At EcoTrack Kenya, we believe in preserving our nation's natural treasures through cutting-edge environmental monitoring. 
                  From the savannas of Maasai Mara to the coastal regions of Mombasa, we provide real-time environmental data to support 
                  conservation efforts and sustainable development.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our platform brings together local expertise and modern technology to protect Kenya's diverse ecosystems, 
                  working closely with communities, researchers, and policymakers to ensure a sustainable future for generations to come.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg p-6 text-center">
                    <Shield className="h-10 w-10 mx-auto mb-4 text-eco-forest" />
                    <h3 className="text-xl font-medium">Conservation</h3>
                    <p className="text-sm text-muted-foreground mt-2">Protecting Kenya's biodiversity</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 text-center">
                    <Users className="h-10 w-10 mx-auto mb-4 text-eco-sky" />
                    <h3 className="text-xl font-medium">Community</h3>
                    <p className="text-sm text-muted-foreground mt-2">Empowering local communities</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 text-center">
                    <Globe className="h-10 w-10 mx-auto mb-4 text-eco-ocean" />
                    <h3 className="text-xl font-medium">Research</h3>
                    <p className="text-sm text-muted-foreground mt-2">Data-driven conservation</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 text-center">
                    <Leaf className="h-10 w-10 mx-auto mb-4 text-eco-leaf" />
                    <h3 className="text-xl font-medium">Sustainability</h3>
                    <p className="text-sm text-muted-foreground mt-2">Supporting eco-friendly practices</p>
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
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-square bg-accent relative">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
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
              Help us protect Kenya's natural heritage. Whether you're a scientist, conservationist, or passionate about 
              environmental protection, there's a place for you in our mission.
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
