import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
          <div>
            <h3 className="font-headline text-2xl font-bold">Flex Voyages</h3>
            <p className="mt-2 text-muted-foreground">Your journey, personalized.</p>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold">Contact Us</h4>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li className="flex items-center justify-center gap-2 md:justify-start">
                <Mail className="h-4 w-4" />
                <span>contact@flexvoyages.com</span>
              </li>
              <li className="flex items-center justify-center gap-2 md:justify-start">
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold">Follow Us</h4>
            <div className="mt-2 flex justify-center gap-2 md:justify-start">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Flex Voyages. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
