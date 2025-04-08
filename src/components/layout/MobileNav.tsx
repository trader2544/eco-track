
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Leaf, Menu } from 'lucide-react';

export const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[385px] pr-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 py-4">
            <Leaf className="h-6 w-6 text-eco-leaf" />
            <span className="font-bold text-xl">EcoTrack</span>
          </div>
          <nav className="grid gap-4 py-6">
            <Link 
              to="/" 
              className="group flex w-full items-center py-2 text-lg font-medium transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="group flex w-full items-center py-2 text-lg font-medium transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/map" 
              className="group flex w-full items-center py-2 text-lg font-medium transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Map
            </Link>
            <Link 
              to="/about" 
              className="group flex w-full items-center py-2 text-lg font-medium transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </nav>
          <div className="mt-auto pb-6 grid gap-2">
            <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
              Login
            </Button>
            <Button className="w-full" onClick={() => setOpen(false)}>
              Sign up
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
