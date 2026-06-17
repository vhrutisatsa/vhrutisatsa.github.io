import { foragingbehav } from "./pages/foragingbehav";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider } from "./components/ThemeProvider";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Research } from "./pages/Research";
import { Essays } from "./pages/Essays";
import { Art } from "./pages/Art";
import { CV } from "./pages/CV";
import { Contact } from "./pages/Contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Nav />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/research" component={Research} />
          <Route path="/essays" component={Essays} />
          <Route path="/essays/foragingbehav" component={foragingbehav} />
          <Route path="/art" component={Art} />
          <Route path="/cv" component={CV} />
          <Route path="/contact" component={Contact} />
          <Route component={Home} /> {/* Fallback to home */}
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
