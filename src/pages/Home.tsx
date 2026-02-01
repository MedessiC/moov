import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Users, Smartphone, Wallet, Shield, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const heroSlides = [
  {
    image: heroImage,
    title: "À la recherche d'un forfait",
    highlight: "Moov Famille ?",
    subtitle: "On s'occupe de tout !",
    description: "MIKPLÉ vous connecte à des groupes familiaux Moov pour profiter des meilleurs tarifs internet. Économisez jusqu'à 40% sur vos forfaits, sans contraintes.",
  },
  {
    image: heroImage,
    title: "Partagez votre forfait",
    highlight: "en famille",
    subtitle: "et économisez ensemble",
    description: "Rejoignez des groupes Moov Famille et divisez les frais avec vos proches. Une solution simple et rapide pour des économies garanties.",
  },
  {
    image: heroImage,
    title: "Internet au meilleur prix",
    highlight: "100% béninois",
    subtitle: "service MIDEESSI",
    description: "MIKPLÉ est une solution d'indépendance technologique créée au Bénin, pour les Béninois. Pas de contraintes, pas de paperasse.",
  },
];

const features = [
  {
    icon: Users,
    title: "Forfait Partagé",
    description: "Partagez un forfait internet avec votre famille et économisez jusqu'à 40%.",
  },
  {
    icon: Smartphone,
    title: "Simple & Rapide",
    description: "Inscription en quelques clics. Pas de compte à créer, pas de paperasse.",
  },
  {
    icon: Wallet,
    title: "Économies Garanties",
    description: "Profitez des tarifs famille sans les contraintes. Plus besoin de chercher 4 membres.",
  },
  {
    icon: Shield,
    title: "Service Sécurisé",
    description: "Vos données sont protégées. MIKPLÉ est un service de confiance par MIDEESSI.",
  },
];

const steps = [
  { step: 1, title: "Choisissez votre forfait", description: "Sélectionnez le forfait Moov Famille qui vous convient." },
  { step: 2, title: "Remplissez le formulaire", description: "Donnez vos informations de contact et votre numéro Moov." },
  { step: 3, title: "Nous vous contactons", description: "Notre équipe vous recontacte sous 24h pour finaliser." },
  { step: 4, title: "Profitez du forfait", description: "Vous êtes ajouté à un groupe et profitez des avantages Famille." },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <Layout>
      {/* Hero Section - Carousel */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient pattern-overlay overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 transition-opacity duration-1000">
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-medium">Solution 100% béninoise</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up min-h-[1.2em]">
              {slide.title}{" "}
              <span className="text-gold">{slide.highlight}</span>{" "}
              {slide.subtitle}
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed animate-slide-up min-h-[2.5em]" style={{ animationDelay: "0.1s" }}>
              {slide.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild variant="hero" size="xl">
                <a href="/inscription">
                  S'inscrire maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <a href="/forfaits">Voir les forfaits</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gold/80 border-2 border-primary flex items-center justify-center"
                  >
                    <span className="text-midnight-600 font-bold text-sm">+</span>
                  </div>
                ))}
              </div>
              <p className="text-primary-foreground/70 text-sm">
                <span className="text-gold font-bold">+100</span> béninois ont déjà rejoint MIKPLÉ
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-gold/20 hover:bg-gold/30 text-gold transition-all"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-gold/20 hover:bg-gold/30 text-gold transition-all"
          aria-label="Slide suivant"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-gold w-8" : "bg-gold/40 hover:bg-gold/60"
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pourquoi choisir <span className="text-gold">MIKPLÉ</span> ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Une solution innovante pour accéder aux forfaits famille Moov sans les contraintes habituelles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 lg:py-24 bg-muted african-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comment ça <span className="text-gold">marche</span> ?
            </h2>
            <p className="text-muted-foreground text-lg">
              En 4 étapes simples, rejoignez un groupe Moov Famille et commencez à économiser.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl font-heading font-bold text-gold">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                {item.step < 4 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gold/30" />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="gold" size="xl">
              <a href="/inscription">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-gradient pattern-overlay">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Prêt à économiser sur vos forfaits internet ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Rejoignez MIKPLÉ aujourd'hui et bénéficiez des avantages Moov Famille sans attendre.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button asChild variant="hero" size="xl">
                <a href="/inscription">S'inscrire gratuitement</a>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <a href="/a-propos">En savoir plus</a>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 text-sm">
              {["Inscription gratuite", "Aucun engagement", "Support WhatsApp"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
