import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users, Lightbulb, Heart, ArrowRight, ExternalLink } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patriotisme béninois",
    description: "Nous bâtissons pour le Bénin, par le Bénin.",
  },
  {
    icon: Lightbulb,
    title: "Innovation de terrain",
    description: "Nos solutions naissent des besoins réels des Béninois.",
  },
  {
    icon: Users,
    title: "Solidarité collective",
    description: "Ensemble, nous sommes plus forts.",
  },
];

export default function APropos() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient pattern-overlay">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold mb-6">
              <span className="text-sm font-medium">Mouvement d'indépendance technologique</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              À propos de <span className="text-gold">MIDEESSI</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg lg:text-xl">
              MIDEESSI est un mouvement d'indépendance technologique né au cœur du Bénin.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Notre Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous concevons, fabriquons et innovons avec nos idées, notre savoir-faire et 
                notre intelligence collective béninoise. Chaque trimestre, nous nous immergeons 
                dans un nouveau secteur pour créer des solutions adaptées aux réalités béninoises.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                De l'agriculture au commerce, de l'éducation à la santé, nous innovons là où 
                le Bénin en a besoin. <strong>MIKPLÉ</strong> est notre solution pour le secteur 
                des télécommunications.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Notre Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous refusons la dépendance technologique et bâtissons notre souveraineté 
                numérique avec fierté. Chaque solution MIDEESSI est un acte d'amour pour 
                notre pays et notre continent africain.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium italic">
                « Du Dahomey au Bénin, l'esprit d'indépendance perdure. »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted african-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos <span className="text-gold">Valeurs</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              MIDEESSI est guidé par des valeurs profondes qui façonnent chaque solution que nous créons.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl border border-border p-8 text-center hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About MIKPLÉ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Qu'est-ce que <span className="text-gold">MIKPLÉ</span> ?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl border border-border p-8 lg:p-10 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">MIKPLÉ</strong> est un service de mise en relation 
                  développé par MIDEESSI pour permettre aux Béninois de profiter des forfaits famille 
                  Moov sans les contraintes habituelles. NOUS NE VENDONS PAS LES FORFAITS .
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Le problème que nous résolvons est simple : pour bénéficier des tarifs avantageux 
                  des forfaits famille Moov, il faut constituer un groupe de 4 personnes au maximum. 
                  Beaucoup de Béninois aimeraient profiter de ces économies mais ne connaissent pas 
                  assez de personnes intéressées.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">MIKPLÉ</strong> crée ce pont : nous mettons en 
                  relation les personnes souhaitant rejoindre un groupe famille avec ceux qui ont des 
                  places disponibles. Vous économisez jusqu'à 40% sur vos forfaits internet, sans effort.
                </p>
                
                <div className="bg-gold/10 rounded-xl p-6 mt-8">
                  <h4 className="font-heading font-bold text-foreground mb-3">
                    Notre engagement
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-gold">✓</span>
                      Mise en relation sous 24h
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">✓</span>
                      Aucun frais d'inscription
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">✓</span>
                      Support WhatsApp disponible
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">✓</span>
                      Service 100% béninois
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button asChild variant="gold" size="xl">
                <a href="/inscription">
                  Rejoindre MIKPLÉ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="midnight-outline" size="xl">
                <a href="https://mideessi.com" target="_blank" rel="noopener noreferrer">
                  Visiter MIDEESSI.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 hero-gradient pattern-overlay">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Nous contacter
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Une question sur MIKPLÉ ou MIDEESSI ? Notre équipe est là pour vous aider.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:contact@mideessi.com"
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/20 transition-colors"
              >
                <span className="text-gold text-2xl mb-2 block">📧</span>
                <span className="text-primary-foreground font-medium">contact@mideessi.com</span>
              </a>
              <a
                href="https://wa.me/22964409691"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/20 transition-colors"
              >
                <span className="text-gold text-2xl mb-2 block">💬</span>
                <span className="text-primary-foreground font-medium">WhatsApp</span>
              </a>
            </div>
            
            <p className="text-primary-foreground/60 text-sm mt-8">
              MIDEESSI - Fondé en 2025, Cotonou, République du Bénin
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
