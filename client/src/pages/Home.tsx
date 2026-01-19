import { motion } from "framer-motion";
import { Carousel } from "@/components/Carousel";
import { Calendar, Trophy, Users, Star } from "lucide-react";
import { Link } from "wouter";

// Import static assets
import img1 from "@assets/image_1768844721359.png";
import img2 from "@assets/Screenshot_2026-01-19_231532_1768844762789.png";
import img3 from "@assets/stock_images/vibrant_college_fest_4554f366.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="pb-24 pt-4 md:pt-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Carousel images={[img1, img2, img3]} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4 uppercase tracking-tighter">
            Mosaic <span className="text-primary">2026</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto">
            The Ultimate College Fest where creativity meets chaos. 
            Three days of non-stop action, music, and competition.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <div className="cursor-pointer px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(26,83,92,1)] hover:shadow-[2px_2px_0px_0px_rgba(26,83,92,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                Explore Events
              </div>
            </Link>
            <Link href="/contact">
              <div className="cursor-pointer px-8 py-4 bg-white text-foreground rounded-2xl font-bold text-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(26,83,92,1)] hover:shadow-[2px_2px_0px_0px_rgba(26,83,92,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                Contact Us
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <Star className="w-8 h-8 text-accent fill-accent" />
          <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Highlights</h2>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={item} className="bg-secondary/10 p-8 rounded-3xl border-2 border-secondary/20 hover:border-secondary transition-colors group">
            <div className="w-14 h-14 bg-secondary text-secondary-foreground rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform">
              <Trophy size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">₹5 Lakh+</h3>
            <p className="text-muted-foreground font-medium">Worth of cash prizes to be won across technical and cultural events.</p>
          </motion.div>

          <motion.div variants={item} className="bg-primary/10 p-8 rounded-3xl border-2 border-primary/20 hover:border-primary transition-colors group">
            <div className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform">
              <Calendar size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">3 Days</h3>
            <p className="text-muted-foreground font-medium">Of non-stop entertainment, celebrity nights, and fierce competition.</p>
          </motion.div>

          <motion.div variants={item} className="bg-accent/20 p-8 rounded-3xl border-2 border-accent/40 hover:border-accent-foreground transition-colors group">
            <div className="w-14 h-14 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">30+ Events</h3>
            <p className="text-muted-foreground font-medium">From coding marathons to fashion shows, there's something for everyone.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Teaser */}
      <section className="bg-foreground text-white rounded-3xl p-8 md:p-12 relative overflow-hidden border-4 border-black/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6 font-display">THE LEGACY CONTINUES</h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
            Mosaic isn't just a fest; it's a feeling. Since its inception, we've been bringing together the brightest minds and the wildest spirits. Get ready to witness the spectacular.
          </p>
          <Link href="/events">
            <div className="inline-block cursor-pointer px-8 py-3 bg-accent text-accent-foreground rounded-xl font-bold hover:scale-105 transition-transform">
              View Schedule
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
