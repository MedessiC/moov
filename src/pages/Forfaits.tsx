import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Users, Wifi, Clock, ArrowRight, Info } from "lucide-react";

const forfaits = [
  {
    id: "famille-basic",
    name: "Famille Kpèvi",
    price: "5 000",
    duration: "Mois",
    data: "5 Go",
    members: "4 membres",
    perMember: "1 500 FCFA/membre",
    features: [
      "5 Go partagés",
      "Valable 1 mois",
      "4 membres maximum",
    ],
    popular: false,
  },
  {
    id: "famille-hebdo",
    name: "Famille Cléoun",
    price: "17 000",
    duration: "Mois",
    data: "55 Go",
    members: "4 membres",
    perMember: "4 500 FCFA/membre",
    features: [
      "55 Go partagés",
      "Valable 1 mois illimité",
      "4 membres maximum",
    ],
    popular: true,
  },
  {
    id: "famille-mensuel",
    name: "Famille Déssou",
    price: "20 000",
    duration: "Mois",
    data: "70 Go",
    members: "4 membres",
    perMember: "5 500 FCFA/membre",
    features: [
      "70 Go partagés",
      "Valable 30 jours",
    ],
    popular: false,
  },
  {
    id: "famille-premium",
    name: "Famille Jago",
    price: "25 000",
    duration: "Mois",
    data: "100 Go",
    members: "4 membres",
    perMember: "6 500 FCFA/membre",
    features: [
      "100 Go partagés",
      "Valable 30 jours",
    ],
    popular: false,
  },
];

export default function Forfaits() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient pattern-overlay bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Forfaits <span className="text-gold">Moov Famille</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg lg:text-xl mb-8">
              Découvrez nos forfaits partagés et économisez jusqu'à 40% sur vos dépenses internet. 
              Rejoignez un groupe familial via MIKPLÉ.
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 bg-gold/10 border-y border-gold/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Info className="w-6 h-6 text-gold flex-shrink-0" />
            <p className="text-foreground">
              <strong>Comment ça marche ?</strong> MIKPLÉ vous met en relation avec des groupes Moov Famille existants. 
              Vous payez uniquement votre part du forfait et profitez des avantages du tarif groupe.
            </p>
          </div>
        </div>
      </section>

      {/* Forfaits Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {forfaits.map((forfait) => (
              <div
                key={forfait.id}
                className={`relative rounded-2xl border-2 p-6 lg:p-8 transition-all duration-300 hover:shadow-card-hover ${
                  forfait.popular
                    ? "border-gold bg-gradient-to-b from-gold/5 to-transparent"
                    : "border-border bg-card hover:border-gold/50"
                }`}
              >
                {forfait.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-midnight-600 px-4 py-1 rounded-full text-sm font-bold font-heading">
                      Populaire
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {forfait.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-4xl font-heading font-bold text-gold">{forfait.price}</span>
                    <span className="text-muted-foreground">FCFA</span>
                  </div>
                  <span className="text-sm text-muted-foreground">/ {forfait.duration}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                  <div className="p-2 rounded-lg bg-muted">
                    <Wifi className="w-4 h-4 mx-auto text-gold mb-1" />
                    <span className="text-xs text-foreground font-medium">{forfait.data}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-muted">
                    <Users className="w-4 h-4 mx-auto text-gold mb-1" />
                    <span className="text-xs text-foreground font-medium">{forfait.members}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-muted">
                    <Clock className="w-4 h-4 mx-auto text-gold mb-1" />
                    <span className="text-xs text-foreground font-medium">{forfait.duration}</span>
                  </div>
                </div>
                
                <div className="bg-gold/10 rounded-lg p-3 mb-6 text-center">
                  <span className="text-sm text-foreground">
                    Votre part: <strong className="text-gold">{forfait.perMember}</strong>
                  </span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {forfait.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  asChild
                  variant={forfait.popular ? "gold" : "midnight-outline"}
                  className="w-full"
                  size="lg"
                >
                  <a href={`/inscription?forfait=${forfait.id}`}>
                    Souscrire
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Moov Famille Works */}
      <section className="py-16 lg:py-24 bg-muted african-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Comment fonctionne <span className="text-gold">Moov Famille</span> ?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  🏠 Le principe du forfait famille
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Moov Famille permet à un groupe de 4 à 6 personnes de partager un forfait internet commun. 
                  Le propriétaire du forfait (chef de famille) souscrit et ajoute des membres à son groupe.
                  Chaque membre bénéficie alors des données partagées et des avantages du forfait.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  💡 Le rôle de MIKPLÉ
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  MIKPLÉ vous met en relation avec des chefs de famille ayant des places disponibles dans leur forfait.
                  Vous n'avez pas besoin de connaître 3 autres personnes pour profiter des tarifs groupe.
                  Nous gérons la mise en relation et vous payez simplement votre part.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  ✅ Les avantages
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold" />
                    Économies jusqu'à 40% par rapport aux forfaits individuels
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold" />
                    Appels Moov à Moov illimités entre membres
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold" />
                    Bonus de données nocturnes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold" />
                    Pas d'engagement, pas de paperasse
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button asChild variant="gold" size="xl">
                <a href="/inscription">
                  Rejoindre un groupe famille
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
