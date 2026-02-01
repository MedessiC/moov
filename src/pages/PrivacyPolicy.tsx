import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient pattern-overlay">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Politique de <span className="text-gold">Confidentialité</span>
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
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  MIDEESSI (exploitant du service MIKPLÉ) s'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles.
                </p>
              </div>

              {/* Data Collection */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  2. Données Collectées
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous collectons les informations suivantes lors de votre inscription :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Nom complet et prénom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Numéro de téléphone Moov</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Adresse e-mail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Forfait souhaité</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Localisation (région/ville)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Adresse IP (automatique)</span>
                  </li>
                </ul>
              </div>

              {/* Data Usage */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  3. Utilisation des Données
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vos données sont utilisées pour :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Traiter votre inscription et mettre en relation avec un chef de famille</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Vous envoyer des confirmations et mises à jour via email ou WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Améliorer notre service et vos expériences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Analyser les tendances d'utilisation du site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Prévenir la fraude et assurer la sécurité</span>
                  </li>
                </ul>
              </div>

              {/* Data Protection */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  4. Protection des Données
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous utilisons EmailJS pour envoyer vos données d'inscription de manière sécurisée. Vos informations sont protégées par des mesures de sécurité techniques et organisationnelles appropriées. Cependant, aucune transmission de données sur Internet n'est 100% sécurisée.
                </p>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  5. Partage des Données
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous partageons vos données uniquement avec :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Les chefs de famille Moov avec qui vous serez mis en relation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Notre équipe MIDEESSI pour le traitement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Les prestataires de services tiers (EmailJS, hébergement)</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Nous ne vendons jamais vos données à des tiers sans consentement.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  6. Cookies et Technologies de Suivi
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Notre site utilise des cookies et des technologies de suivi (Google Analytics) pour améliorer votre expérience. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  7. Vos Droits
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vous avez le droit de :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Accéder à vos données personnelles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Corriger les informations inexactes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Demander la suppression de vos données</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Vous opposer au traitement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Retirer votre consentement à tout moment</span>
                  </li>
                </ul>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  8. Durée de Conservation
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services. Vous pouvez demander la suppression de vos données à tout moment par email.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  9. Nous Contacter
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pour toute question concernant cette Politique de Confidentialité ou pour exercer vos droits :
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

              {/* Changes */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  10. Modifications de cette Politique
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous pouvons modifier cette Politique de Confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour. Votre utilisation continue du site après les modifications constitue votre acceptation des changements.
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
