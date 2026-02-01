import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfUse() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient pattern-overlay">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Conditions <span className="text-gold">d'Utilisation</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Dernière mise à jour : Janvier 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert max-w-none space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  1. Acceptation des Conditions
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  En accédant et en utilisant le site MIKPLÉ et ses services, vous acceptez d'être lié par ces Conditions d'Utilisation. Si vous ne les acceptez pas, veuillez ne pas utiliser ce service.
                </p>
              </div>

              {/* Service Description */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  2. Description du Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MIKPLÉ est un service de mise en relation créé par MIDEESSI. Nous mettons en relation les utilisateurs souhaitant rejoindre un groupe Moov Famille avec des chefs de famille ayant des places disponibles. MIKPLÉ n'est pas un opérateur de téléphonie mobile et ne vend pas directement des forfaits. Les forfaits Moov Famille sont fournis par Moov Africa Bénin.
                </p>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  3. Responsabilités de l'Utilisateur
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En utilisant MIKPLÉ, vous vous engagez à :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Fournir des informations exactes et à jour</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Ne pas usurper l'identité d'autrui</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Ne pas utiliser le service à des fins illégales ou frauduleuses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Respecter les droits des autres utilisateurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Ne pas perturber ou interférer avec le service</span>
                  </li>
                </ul>
              </div>

              {/* Inscription */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  4. Processus d'Inscription
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'inscription à MIKPLÉ est gratuite. En remplissant le formulaire d'inscription, vous :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Confirmez que vous avez au moins 18 ans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Acceptez cette Politique de Confidentialité</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Autorisez MIDEESSI à vous contacter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Acceptez d'être mis en relation avec un chef de famille</span>
                  </li>
                </ul>
              </div>

              {/* Payment */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  5. Paiement et Forfaits
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MIKPLÉ ne collecte pas les paiements. Vous paierez directement votre part du forfait Moov Famille au chef de famille selon les modalités convenues entre vous. Les tarifs des forfaits sont fournis à titre informatif et peuvent être sujets à des changements de la part de Moov Africa Bénin.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  MIDEESSI ne prélève aucun frais supplémentaire sur les utilisateurs.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  6. Limitation de Responsabilité
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MIKPLÉ est fourni "tel quel" sans garanties. MIDEESSI ne peut être tenu responsable de :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Les interruptions ou dysfonctionnements du service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Les services fournis directement par les chefs de famille</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Les changements de politiques de Moov Africa Bénin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Les litiges entre utilisateurs et chefs de famille</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Les pertes de données ou dommages indirects</span>
                  </li>
                </ul>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  7. Indemnisation
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vous acceptez d'indemniser et de dégager de toute responsabilité MIDEESSI et ses dirigeants, employés, agents et partenaires contre toute réclamation, action, demande ou jugement découlant de votre utilisation du service ou de votre violation de ces Conditions.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  8. Résiliation
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MIDEESSI se réserve le droit de suspendre ou de résilier votre accès au service à tout moment, sans préavis, en cas de violation de ces Conditions d'Utilisation ou de toute activité jugée inappropriée.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  9. Propriété Intellectuelle
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tout contenu du site MIKPLÉ, y compris les textes, images, logos et logiciels, est la propriété de MIDEESSI. Vous n'êtes autorisé à utiliser ce contenu que conformément à ces Conditions. La reproduction ou la distribution non autorisée est interdite.
                </p>
              </div>

              {/* Third Party Links */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  10. Liens vers des Tiers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MIKPLÉ peut contenir des liens vers des sites web tiers. MIDEESSI n'est pas responsable du contenu de ces sites. L'accès à ces liens est à votre propre risque.
                </p>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  11. Modifications des Conditions
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MIDEESSI se réserve le droit de modifier ces Conditions d'Utilisation à tout moment. Les modifications seront publiées sur cette page. Votre utilisation continue du service après les modifications constitue votre acceptation des nouvelles Conditions.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  12. Droit Applicable
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ces Conditions d'Utilisation sont régies par les lois de la République du Bénin. Tout litige découlant de ou lié à ces Conditions sera soumis à la juridiction exclusive des tribunaux de Cotonou, Bénin.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  13. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pour toute question concernant ces Conditions d'Utilisation :
                </p>
                <div className="bg-card rounded-xl p-6 border border-border space-y-3">
                  <p className="text-muted-foreground">
                    <strong className="text-gold">Email :</strong> contact@mideessi.com
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-gold">WhatsApp :</strong> +229 64 40 96 91
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-gold">Adresse :</strong> Cotonou, République du Bénin
                  </p>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="bg-card rounded-xl p-6 border border-border mt-8">
                <p className="text-muted-foreground text-sm">
                  En accédant à MIKPLÉ, vous reconnaissez avoir lu, compris et accepté ces Conditions d'Utilisation ainsi que notre Politique de Confidentialité.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <Button asChild variant="gold" size="xl">
                <a href="/inscription">
                  Rejoindre MIKPLÉ
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
