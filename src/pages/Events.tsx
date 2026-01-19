import { useState } from "react";
import { EventCard } from "@/components/EventCard";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Search } from "lucide-react";
import { clsx } from "clsx";

const hardcodedEvents = [
  // Day 1
  { id: 1, name: "Treasure Hunt", day: 1, category: "Adventure", description: "Solve clues to find the hidden treasure.", registrationLink: "https://forms.google.com/example" },
  { id: 2, name: "BGMI", day: 1, category: "Esports", description: "Battle Royale mobile tournament.", registrationLink: "https://forms.google.com/example" },
  { id: 3, name: "Business Quiz", day: 1, category: "Academic", description: "Test your business acumen.", registrationLink: "https://forms.google.com/example" },
  { id: 4, name: "Murder Mystery", day: 1, category: "Adventure", description: "Solve the mystery before time runs out.", registrationLink: "https://forms.google.com/example" },
  { id: 5, name: "Poster Presentation", day: 1, category: "Academic", description: "Present your innovative ideas.", registrationLink: "https://forms.google.com/example" },
  { id: 6, name: "Gully Cricket", day: 1, category: "Sports", description: "Traditional street cricket tournament.", registrationLink: "https://forms.google.com/example" },
  
  // Day 2
  { id: 7, name: "Cook Without Fire", day: 2, category: "Cultural", description: "Showcase culinary skills without fire.", registrationLink: "https://forms.google.com/example" },
  { id: 8, name: "DBI Exchange", day: 2, category: "Academic", description: "Stock market simulation game.", registrationLink: "https://forms.google.com/example" },
  { id: 9, name: "Beg Borrow Steal", day: 2, category: "Adventure", description: "Complete tasks by any means necessary.", registrationLink: "https://forms.google.com/example" },
  { id: 10, name: "Free Fire", day: 2, category: "Esports", description: "Battle Royale mobile tournament.", registrationLink: "https://forms.google.com/example" },
  { id: 11, name: "Ad Made", day: 2, category: "Creative", description: "Create and act out an advertisement.", registrationLink: "https://forms.google.com/example" },
  { id: 12, name: "Bollywood Quiz", day: 2, category: "Cultural", description: "Trivia for movie buffs.", registrationLink: "https://forms.google.com/example" },
  { id: 13, name: "Street Football", day: 2, category: "Sports", description: "5-a-side football tournament.", registrationLink: "https://forms.google.com/example" },

  // Day 3
  { id: 14, name: "Short Film & Documentary", day: 3, category: "Creative", description: "Screening of student films.", registrationLink: "https://forms.google.com/example" },
  { id: 15, name: "Photography", day: 3, category: "Creative", description: "Capture the best moments of the fest.", registrationLink: "https://forms.google.com/example" },
  { id: 16, name: "Reel Making", day: 3, category: "Creative", description: "Create trending reels.", registrationLink: "https://forms.google.com/example" },
  { id: 17, name: "Debate", day: 3, category: "Academic", description: "Voice your opinion on current topics.", registrationLink: "https://forms.google.com/example" },
  { id: 18, name: "Brand Tank", day: 3, category: "Academic", description: "Pitch your startup idea.", registrationLink: "https://forms.google.com/example" },
  { id: 19, name: "Roadies", day: 3, category: "Adventure", description: "Physical and mental endurance tasks.", registrationLink: "https://forms.google.com/example" },
];

export default function Events() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState("");

  const days = [1, 2, 3];
  
  const filteredEvents = hardcodedEvents.filter(event => 
    event.day === activeDay && 
    (event.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     event.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pb-24 pt-4 md:pt-24 space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-2 font-display uppercase tracking-tight">Events</h1>
          <p className="text-muted-foreground text-lg">Choose your arena and conquer.</p>
        </div>

        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search events..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 pl-10 pr-4 py-2 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors font-medium text-foreground bg-white"
          />
        </div>
      </div>

      {/* Day Tabs */}
      <div className="flex p-1 gap-2 bg-white rounded-2xl border-2 border-border w-full md:w-fit overflow-x-auto hide-scrollbar">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={clsx(
              "flex-1 md:flex-none px-8 py-3 rounded-xl font-black text-lg transition-all duration-200 whitespace-nowrap",
              activeDay === day 
                ? "bg-foreground text-white shadow-md" 
                : "text-muted-foreground hover:bg-muted/50"
            )}
          >
            Day {day}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredEvents && filteredEvents.length > 0 ? (
              filteredEvents.map((event, idx) => (
                <EventCard key={event.id} event={event} index={idx} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-24 text-muted-foreground">
                <p className="text-xl font-medium">No events found for Day {activeDay}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
