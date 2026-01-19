import { type Event } from "@shared/schema";
import { motion } from "framer-motion";
import { ArrowRight, Ticket } from "lucide-react";

interface EventCardProps {
  event: Event;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  // Determine color based on category
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "cultural": return "bg-accent text-accent-foreground border-accent"; // Yellow
      case "sports": return "bg-secondary text-secondary-foreground border-secondary"; // Teal
      case "technical": return "bg-primary text-primary-foreground border-primary"; // Red
      default: return "bg-foreground text-white border-foreground"; // Dark
    }
  };

  const themeClass = getCategoryColor(event.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl border-2 border-border hover:border-foreground transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col h-full"
    >
      <div className={`px-4 py-1.5 absolute top-4 right-4 rounded-full text-xs font-black uppercase tracking-wider border border-black/10 shadow-sm ${themeClass}`}>
        {event.category}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-black text-foreground mb-2 mt-6 font-display leading-tight group-hover:text-primary transition-colors">
          {event.name}
        </h3>
        
        <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-6 line-clamp-3">
          {event.description}
        </p>

        <div className="mt-auto pt-4 border-t border-dashed border-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground/70">
            <Ticket className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Day {event.day}</span>
          </div>
          
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-white font-bold text-sm hover:bg-primary transition-colors duration-300"
          >
            Register
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
