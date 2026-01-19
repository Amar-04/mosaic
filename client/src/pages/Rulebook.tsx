import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

const hardcodedRules = [
  { id: 1, description: "Participants must carry their college ID cards.", eventId: null },
  { id: 2, description: "Decisions of the judges will be final and binding.", eventId: null },
  { id: 3, description: "Alcohol and banned substances are strictly prohibited.", eventId: null },
  { id: 4, description: "Respect the venue and other participants.", eventId: null },
  { id: 5, description: "Registration for all events must be completed at least 1 hour prior to start.", eventId: 1 },
];

export default function Rulebook() {
  const generalRules = hardcodedRules.filter(r => !r.eventId);
  const eventRules = hardcodedRules.filter(r => r.eventId);

  return (
    <div className="pb-24 pt-4 md:pt-24 space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-4 bg-accent/20 rounded-full mb-4">
          <BookOpen className="w-8 h-8 text-accent-foreground" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-foreground font-display uppercase tracking-tight">Rulebook</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Fair play is the name of the game. Read carefully before you compete.
        </p>
      </div>

      <div className="space-y-8">
        {/* General Rules Card */}
        <div className="bg-white rounded-3xl border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(26,83,92,0.2)] overflow-hidden">
          <div className="bg-foreground p-6 flex items-center gap-3">
            <AlertCircle className="text-white w-6 h-6" />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">General Guidelines</h2>
          </div>
          <div className="p-8">
            <ul className="space-y-4">
              {generalRules.length > 0 ? (
                generalRules.map((rule) => (
                  <li key={rule.id} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-foreground font-medium leading-relaxed">{rule.description}</p>
                  </li>
                ))
              ) : (
                <p className="text-muted-foreground italic">No general rules listed.</p>
              )}
            </ul>
          </div>
        </div>

        {/* Event Specific Rules - Accordion Style */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-foreground pl-2 border-l-4 border-primary">Event Specific Rules</h2>
          
          {eventRules.length > 0 ? (
            <div className="grid gap-4">
              {/* Note: In a real app we would group these by Event Name. 
                  Since we only have IDs here, I'll display them simply. 
                  If I had access to events, I'd map eventId -> event.name */}
              {eventRules.map((rule) => (
                <RuleItem key={rule.id} rule={rule} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border-2 border-border border-dashed">
              <p className="text-muted-foreground">No specific event rules loaded yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RuleItem({ rule }: { rule: Rule }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden transition-all duration-200 hover:border-primary/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg text-foreground">Event Rule #{rule.eventId}</span>
        </div>
        {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-muted-foreground" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-border"
          >
            <div className="p-5 text-muted-foreground font-medium bg-muted/5 leading-relaxed">
              {rule.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
