
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-eco-leaf" />
            <span className="font-bold text-xl">EcoTrack</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/map" className="text-foreground/80 hover:text-foreground transition-colors">
              Map
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
          
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">
            Sign up
          </Button>
        </div>
        
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
