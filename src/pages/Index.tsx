
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { Stats } from '@/components/home/Stats';
import { Cta } from '@/components/home/Cta';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Stats />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
