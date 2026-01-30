import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { QuoteForm } from '@/components/quote-form';
import { FadeIn } from '@/components/fade-in';
import { Award, Gem, Heart, Map, Users, Wrench } from 'lucide-react';

const destinations = [
  {
    name: 'Kyoto, Japan',
    description: 'Immerse yourself in the ancient culture, serene temples, and breathtaking gardens of Japan\'s former imperial capital.',
    image: 'https://placehold.co/600x400.png',
    hint: 'Kyoto Japan'
  },
  {
    name: 'Amalfi Coast, Italy',
    description: 'Experience the stunning coastal views, charming cliffside villages, and delicious Italian cuisine.',
    image: 'https://placehold.co/600x400.png',
    hint: 'Amalfi Coast'
  },
  {
    name: 'Santorini, Greece',
    description: 'Discover the iconic white-washed buildings, blue-domed churches, and romantic sunsets of this Aegean gem.',
    image: 'https://placehold.co/600x400.png',
    hint: 'Santorini Greece'
  },
];

const whyChooseUs = [
  {
    icon: <Map className="h-10 w-10 text-accent" />,
    title: 'Custom Trips',
    description: 'We craft personalized itineraries tailored to your unique interests and travel style. Your adventure, your way.'
  },
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    title: 'Incredible Deals',
    description: 'Our partnerships with top hotels and airlines mean you get exclusive access to unbeatable prices.'
  },
  {
    icon: <Heart className="h-10 w-10 text-accent" />,
    title: 'Zero Stress',
    description: 'From planning to booking and beyond, we handle all the details so you can relax and enjoy the journey.'
  }
];

const packages = [
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'Customizable Tours',
    description: 'Build your dream vacation from scratch. Mix and match destinations, activities, and accommodation to create a trip that’s uniquely yours.'
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Luxury Travel',
    description: 'Indulge in the finest experiences the world has to offer. We provide access to exclusive resorts, private tours, and VIP services.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Group Discounts',
    description: 'Traveling with family or friends? We offer special rates and coordinated itineraries for groups of all sizes.'
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section id="hero" className="relative h-[80svh] min-h-[500px] w-full">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Tropical beach at sunset"
            fill
            className="object-cover"
            priority
            data-ai-hint="tropical beach"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <FadeIn>
              <h1 className="font-headline text-5xl font-bold leading-tight md:text-7xl">
                Discover the World with Flexibility
              </h1>
              <p className="mt-4 max-w-2xl text-lg md:text-xl">
                Custom trips. Incredible deals. Zero stress.
              </p>
              <Button size="lg" className="mt-8" asChild>
                <a href="#quote">Start Planning</a>
              </Button>
            </FadeIn>
          </div>
        </section>

        <section id="destinations" className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="font-headline text-center text-4xl font-bold md:text-5xl">
                Popular Destinations
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
                Get inspired for your next adventure with our curated selection of must-see places around the globe.
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {destinations.map((dest, index) => (
                <FadeIn key={dest.name} className="transition-all duration-300 hover:scale-105">
                  <Card className="h-full overflow-hidden">
                    <CardHeader className="p-0">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        width={600}
                        height={400}
                        className="h-60 w-full object-cover"
                        data-ai-hint={dest.hint}
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="font-headline text-2xl">{dest.name}</CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {dest.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-secondary py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="font-headline text-center text-4xl font-bold md:text-5xl">
                Why Choose Flex Voyages?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
                We believe travel should be an extension of you. Here’s how we make every trip unforgettable.
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              {whyChooseUs.map((item) => (
                <FadeIn key={item.title} className="text-center">
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="font-headline mt-6 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="font-headline text-center text-4xl font-bold md:text-5xl">
                Travel Packages
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
                Whether you seek luxury, adventure, or relaxation, we have a package that fits your desires.
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {packages.map((pkg) => (
                <FadeIn key={pkg.title}>
                  <Card className="flex h-full flex-col p-6 text-center">
                    <CardHeader className="items-center">
                      <div className="rounded-full bg-secondary p-4">
                        {pkg.icon}
                      </div>
                      <CardTitle className="font-headline mt-4 text-2xl">{pkg.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground">{pkg.description}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
            <FadeIn className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Explore All Packages
              </Button>
            </FadeIn>
          </div>
        </section>

        <section id="quote" className="bg-secondary py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="font-headline text-center text-4xl font-bold md:text-5xl">
                Let's Plan Your Next Getaway
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
                Fill out the form below, and one of our travel experts will get back to you with a personalized quote.
              </p>
            </FadeIn>
            <FadeIn className="mx-auto mt-12 max-w-xl">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <QuoteForm />
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
