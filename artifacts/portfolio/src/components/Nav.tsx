import { Link, useLocation } from "wouter";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

export function Nav() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research" },
    { href: "/essays", label: "Essays" },
    { href: "/art", label: "Art" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg tracking-wide hover:text-primary transition-colors">
          Shruti Vatsa
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`hover:text-primary transition-colors ${location === link.href ? "text-primary font-medium" : "text-foreground/80"}`}
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={toggleTheme} 
            className="p-2 text-foreground/80 hover:text-primary transition-colors"
            data-testid="button-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 text-foreground/80"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border/50 shadow-lg py-4 px-6 flex flex-col gap-4 text-center">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-lg py-2 hover:text-primary transition-colors ${location === link.href ? "text-primary font-medium" : "text-foreground/80"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
