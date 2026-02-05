import { useState, useRef } from 'react';
import LetterLanding from './components/LetterLanding';
import CoupleReveal from './components/CoupleReveal';
import FamilyBlessings from './components/FamilyBlessings';
import EventCard from './components/EventCard';
import Countdown from './components/Countdown';
import ClosingMessage from './components/ClosingMessage';
import { weddingData } from './data/wedding';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const contentRef = useRef(null);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    // Smooth reveal of the rest of the page
  };

  return (
    <main className="relative min-h-screen bg-cream-100 selection:bg-rose-gold-200">
      {/* 1. Monogram Entrance (Option 1) */}
      <LetterLanding onComplete={handleIntroComplete} />

      {/* 2. Invitation Details - Automatically fade in after intro */}
      <div
        ref={contentRef}
        className={`w-full transition-all duration-1000 ${introComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        {/* We keep the details "alive" or mount them after intro for performance/SEO */}
        {introComplete && (
          <div className="bg-cream-100">
            <CoupleReveal />
            <FamilyBlessings />
            {weddingData.events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
            <Countdown />
            <ClosingMessage />
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        html { 
          scroll-behavior: smooth; 
          background-color: #E5E0D8;
        }
        * { -webkit-tap-highlight-color: transparent; }
        
        /* Premium custom scrollbar (minimal) */
        ::-webkit-scrollbar {
          width: 0px;
        }
      `}} />
    </main>
  );
}

export default App;
