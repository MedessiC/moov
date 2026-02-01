import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, ArrowRight } from "lucide-react";

const faqCategories = [
  {
    title: "Moov Famille",
    questions: [
      {
        question: "Qu'est-ce que Moov Famille ?",
        answer: "Moov Famille est un service de Moov Africa Bénin qui permet à un groupe de 4 personnes maximum de partager un forfait internet commun. Le chef de famille souscrit au forfait et ajoute des membres à son groupe. Tous les membres bénéficient alors des données partagées et des appels Moov illimités entre eux.",
      },
      {
        question: "Quels sont les avantages de Moov Famille ?",
        answer: "Les avantages sont nombreux : économies jusqu'à 40% par rapport aux forfaits individuels, appels Moov à Moov illimités entre membres du groupe, bonus de données nocturnes, et un suivi simplifié de la consommation. C'est idéal pour les familles, amis ou collègues.",
      },
      {
        question: "Comment fonctionne le partage de données ?",
        answer: "Le forfait offre un volume de données total (ex: 55 Go ILLIMITE) partagé entre tous les membres. Chaque membre peut utiliser les données selon ses besoins. Le chef de famille peut suivre la consommation de chaque membre via l'application Moov ou par USSD.",
      },
      {
        question: "Qui peut être membre d'un groupe Moov Famille ?",
        answer: "Tout abonné Moov peut rejoindre un groupe Moov Famille. Il suffit d'avoir un numéro Moov actif. Les membres n'ont pas besoin d'être de la même famille biologique - ce peut être des amis, collègues, ou connaissances.",
      },
    ],
  },
  {
    title: "MIKPLÉ",
    questions: [
      {
        question: "Qu'est-ce que MIKPLÉ ?",
        answer: "MIKPLÉ est un service de mise en relation créé par MIDEESSI. Nous connectons les personnes souhaitant rejoindre un groupe Moov Famille avec des chefs de famille ayant des places disponibles. Vous profitez des avantages du forfait famille sans avoir à constituer votre propre groupe.",
      },
      {
        question: "Comment fonctionne MIKPLÉ ?",
        answer: "C'est simple : 1) Vous remplissez notre formulaire d'inscription avec vos coordonnées et le forfait souhaité. 2) Notre équipe vous contacte sous 24h via WhatsApp. 3) Nous vous mettons en relation avec un chef de famille. 4) Vous payez votre part et profitez du forfait.",
      },
      {
        question: "L'inscription à MIKPLÉ est-elle gratuite ?",
        answer: "Oui, l'inscription est totalement gratuite. Vous ne payez que votre part du forfait Moov Famille que vous avez choisi. MIKPLÉ ne prélève aucun frais supplémentaire sur les utilisateurs.",
      },
      {
        question: "MIKPLÉ est-il un service officiel de Moov ?",
        answer: "Non, MIKPLÉ est un service indépendant créé par MIDEESSI. Nous facilitons la mise en relation entre utilisateurs Moov, mais nous ne sommes pas affiliés à Moov Africa. Les forfaits restent des produits officiels Moov.",
      },
    ],
  },
  {
    title: "Inscription & Paiement",
    questions: [
      {
        question: "Comment m'inscrire ?",
        answer: "Rendez-vous sur notre page d'inscription, remplissez le formulaire avec votre nom, prénom, numéro Moov, numéro WhatsApp et le forfait souhaité. Soumettez le formulaire et notre équipe vous contactera sous 24h.",
      },
      {
        question: "Comment payer ma part du forfait ?",
        answer: "Une fois mis en relation avec un groupe, vous payez votre part directement au chef de famille via Moov Money ou le moyen de paiement convenu entre vous. MIKPLÉ ne gère pas les paiements entre membres.",
      },
      {
        question: "Que se passe-t-il si je veux quitter le groupe ?",
        answer: "Vous pouvez quitter un groupe Moov Famille à tout moment. Il suffit de prévenir le chef de famille. Vous pouvez ensuite vous réinscrire sur MIKPLÉ pour rejoindre un autre groupe si vous le souhaitez.",
      },
      {
        question: "Sous quel délai serai-je ajouté à un groupe ?",
        answer: "En général, vous êtes contacté sous 24h et ajouté à un groupe dans les 48-72h suivant votre inscription. Le délai peut varier selon la disponibilité des places pour le forfait choisi.",
      },
    ],
  },
  {
    title: "Support & Contact",
    questions: [
      {
        question: "Comment contacter l'équipe MIKPLÉ ?",
        answer: "Vous pouvez nous contacter via WhatsApp pour une réponse rapide, ou par email à contact@mideessi.com. Notre équipe est disponible du lundi au samedi, de 8h à 20h.",
      },
      {
        question: "Que faire en cas de problème avec mon groupe ?",
        answer: "Contactez-nous via WhatsApp en expliquant votre situation. Notre équipe interviendra pour résoudre le problème ou vous proposer un nouveau groupe si nécessaire.",
      },
      {
        question: "Mes données personnelles sont-elles protégées ?",
        answer: "Oui, nous prenons la protection de vos données très au sérieux. Vos informations ne sont utilisées que pour la mise en relation et ne sont jamais partagées avec des tiers. MIDEESSI s'engage à respecter votre vie privée.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient pattern-overlay">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Questions <span className="text-gold">Fréquentes</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg lg:text-xl">
              Tout ce que vous devez savoir sur Moov Famille et MIKPLÉ. 
              Trouvez rapidement les réponses à vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold text-sm font-bold">
                    {categoryIndex + 1}
                  </span>
                  {category.title}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.title}-${index}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/50 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-gold hover:no-underline py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 lg:py-24 bg-muted african-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Notre équipe est disponible pour vous aider. Contactez-nous via WhatsApp 
              pour une réponse rapide.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="gold" size="xl">
                <a href="https://wa.me/22997000000" target="_blank" rel="noopener noreferrer">
                  Contacter via WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="midnight-outline" size="xl">
                <a href="/inscription">
                  S'inscrire maintenant
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
