
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-lg px-4">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-muted mb-6">
            <AlertTriangle className="h-10 w-10 text-eco-warning" />
          </div>
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, the page you're looking for can't be found. It might have been moved, deleted, or never existed.
          </p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
