import { Link, useLocation } from "wouter";
import { Home, Calendar, BookOpen, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/rulebook", label: "Rules", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <>
      {/* Desktop Navigation - Top Bar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md border-b border-border z-50 px-8 items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-3xl font-black text-primary font-display tracking-tighter">MOSAIC</span>
            <span className="text-3xl font-bold text-foreground font-display tracking-tighter">2026</span>
          </div>
        </Link>
        <div className="flex gap-8">
          {links.map((link) => {
            const isActive = location === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <div className={clsx(
                  "flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 font-bold",
                  isActive 
                    ? "bg-primary text-white shadow-lg shadow-primary/20 translate-y-[-2px]" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}>
                  <Icon size={18} strokeWidth={2.5} />
                  <span>{link.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 pb-safe">
        <div className="flex justify-around items-center h-16 px-2">
          {links.map((link) => {
            const isActive = location === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <div className="flex flex-col items-center justify-center w-full h-full py-1 cursor-pointer">
                  <div className="relative">
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -inset-3 bg-primary/10 rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <Icon 
                      size={24} 
                      className={clsx(
                        "transition-colors duration-200",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )} 
                      strokeWidth={isActive ? 3 : 2}
                    />
                  </div>
                  <span className={clsx(
                    "text-[10px] font-bold mt-1 transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}>
                    {link.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
