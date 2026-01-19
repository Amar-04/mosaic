import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import Events from "@/pages/Events";
import Rulebook from "@/pages/Rulebook";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-white">
      <Navigation />
      <main className="md:pt-20 pb-20 md:pb-0">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/rulebook" component={Rulebook} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
