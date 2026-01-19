import { motion } from "framer-motion";
import { Phone, MapPin, Mail, User } from "lucide-react";

const hardcodedContacts = [
  { id: 1, name: "Aarav Sharma", role: "Student Coordinator", phone: "+91 98765 43210", department: "Computer Science Dept" },
  { id: 2, name: "Diya Patel", role: "Event Head", phone: "+91 87654 32109", department: "Computer Science Dept" },
  { id: 3, name: "Rohan Gupta", role: "Logistics Head", phone: "+91 76543 21098", department: "Computer Science Dept" },
  { id: 4, name: "Ananya Singh", role: "Public Relations", phone: "+91 65432 10987", department: "Computer Science Dept" },
];

export default function Contact() {
  const contacts = hardcodedContacts;

  return (
    <div className="pb-24 pt-4 md:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-foreground font-display uppercase tracking-tight">Get in Touch</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Have questions? Need help finding a venue? Our team is here to help you out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Department Address Card */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-foreground text-white p-8 rounded-3xl h-full shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-8">
              <div>
                <h2 className="text-2xl font-black font-display mb-6 border-b border-white/20 pb-4">Headquarters</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <p className="text-white/80 font-medium leading-relaxed">
                      Mosaic Department,<br/>
                      Student Activity Center,<br/>
                      University Campus,<br/>
                      City Code - 400123
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                    <p className="text-white/80 font-medium">contact@mosaic2026.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Cards Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts && contacts.map((contact, idx) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-6 rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(255,107,107,1)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <User size={24} strokeWidth={2.5} />
                </div>
                <div className="px-3 py-1 rounded-full bg-muted/50 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {contact.department || "Core Team"}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-1">{contact.name}</h3>
              <p className="text-primary font-medium text-sm mb-6">{contact.role}</p>
              
              <a 
                href={`tel:${contact.phone}`} 
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-foreground text-white font-bold hover:bg-foreground/90 transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
