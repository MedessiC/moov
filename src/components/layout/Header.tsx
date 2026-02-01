import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Forfaits", href: "/forfaits" },
  { name: "S'inscrire", href: "/inscription" },
  { name: "À propos", href: "/a-propos" },
  { name: "FAQ", href: "/faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gold flex items-center justify-center">
              <span className="font-heading font-bold text-midnight-600 text-lg lg:text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-gold text-xl tracking-tight">MIKPLÉ</span>
              <span className="text-primary-foreground text-xs block opacity-80">by MIDEESSI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-gold text-midnight-600"
                    : "text-primary-foreground hover:bg-gold/20 hover:text-gold"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="hero" size="lg">
              <Link to="/inscription">Rejoindre Moov Famille</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-primary-foreground hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gold/20 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-heading text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-gold text-midnight-600"
                      : "text-primary-foreground hover:bg-gold/20"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild variant="hero" size="lg" className="mt-4">
                <Link to="/inscription" onClick={() => setMobileMenuOpen(false)}>
                  Rejoindre Moov Famille
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
