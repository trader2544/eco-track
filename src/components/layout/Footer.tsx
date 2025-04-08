import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Github, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-eco-leaf" />
              <span className="font-bold text-xl">EcoTrack</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Monitoring our environment for a sustainable future. Real-time data to empower better decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-base">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
                <li><Link to="/map" className="hover:text-foreground transition-colors">Map View</Link></li>
                <li><Link to="/reports" className="hover:text-foreground transition-colors">Reports</Link></li>
                <li><Link to="/alerts" className="hover:text-foreground transition-colors">Alerts</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-base">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="font-medium text-base">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors text-muted-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors text-muted-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors text-muted-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
              <div className="mt-4">
                <h5 className="text-sm font-medium">Subscribe to our newsletter</h5>
                <div className="mt-2 flex gap-2">
                  <input 
                    type="email" 
                    placeholder="youremail@example.com" 
                    className="px-3 py-2 bg-background rounded-md border text-sm flex-1"
                  />
                  <button className="px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EcoTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
