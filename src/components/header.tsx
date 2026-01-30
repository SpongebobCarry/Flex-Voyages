"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Plane } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Destinations', href: '#destinations' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Packages', href: '#packages' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Plane className={cn("h-8 w-8", scrolled ? "text-primary" : "text-white")} />
          <span className={cn(
            "font-headline text-xl font-bold",
            scrolled ? "text-foreground" : "text-white"
          )}>
            Flex Voyages
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="accent" asChild>
             <Link href="#quote">Get a Quote</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(scrolled ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-background">
              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button variant="accent" asChild>
                  <Link href="#quote">Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
