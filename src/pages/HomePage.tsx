import {Footer} from '../components/Footer';
import { DailyVerse } from '../components/DailyVerse';
import { Hero } from '../components/home/hero';
import { Events } from '../components/home/events';
import { Book } from '../components/home/book';
import { Team } from '../components/home/team';
import { Podcast } from '../components/home/podcast';

// Global gtag declaration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}


export const HomePage = () => {


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <Hero />

    <Book />
    <Team />
    <Events />

     <Podcast />

      {/* Daily Verse Section */}
      <section className="py-10 md:py-16 bg-primary-red text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <DailyVerse />
        </div>
      </section>

      <Footer />
    </div>
  );
};

