import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center">
                <span className="font-heading font-bold text-midnight-600 text-xl">M</span>
              </div>
              <div>
                <span className="font-heading font-bold text-gold text-2xl tracking-tight">MIKPLÉ</span>
                <span className="text-primary-foreground/80 text-xs block">par MIDEESSI</span>
              </div>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              MIKPLÉ vous connecte facilement aux forfaits Moov Famille. 
              Une solution 100% béninoise pour économiser ensemble.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-gold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: "Accueil", href: "/" },
                { name: "Forfaits", href: "/forfaits" },
                { name: "Inscription", href: "/inscription" },
                { name: "À propos", href: "/a-propos" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-gold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:contact@mideessi.com" className="hover:text-gold transition-colors">
                  contact@mideessi.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-gold" />
                <span>+229 64 40 96 91</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>Cotonou, République du Bénin</span>
              </li>
            </ul>
          </div>

          {/* MIDEESSI */}
          <div>
            <h4 className="font-heading font-bold text-gold mb-4">Légal</h4>
            <ul className="space-y-2">
              {[
                { name: "Politique de Confidentialité", href: "/privacy-policy" },
                { name: "Conditions d'Utilisation", href: "/terms-of-use" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MIDEESSI */}
          <div>
            <h4 className="font-heading font-bold text-gold mb-4">À Propos</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Mouvement d'indépendance technologique né au cœur du Bénin. 
              Nous concevons et innovons avec notre savoir-faire béninois.
            </p>
            <a
              href="https://mideessi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-300 transition-colors text-sm font-medium"
            >
              Visiter MIDEESSI.com
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>
              © {currentYear} MIKPLÉ par MIDEESSI. Tous droits réservés.
            </p>
            <p className="text-center md:text-right">
              « Développons des solutions adaptées à nos réalités »
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
