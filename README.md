# MIKPLÉ - Mise en relation Moov Famille

**MIKPLÉ** est un service de mise en relation créé par **MIDEESSI** pour connecter les Béninois aux forfaits Moov Famille. Économisez jusqu'à 40% sur vos forfaits internet sans contraintes.

## 🎯 À propos

- **Organisation** : MIDEESSI (Mouvement d'indépendance technologique béninois)
- **Service** : Mise en relation pour forfaits Moov Famille
- **Localisation** : Cotonou, République du Bénin
- **Fondation** : 2025
- **Objectif** : Apporter l'indépendance technologique et l'innovation au Bénin

## 📋 Stack Technique

- **Frontend** : React 18 + TypeScript + Vite
- **Styling** : Tailwind CSS
- **Components** : shadcn/ui (Radix UI)
- **Routing** : React Router v6
- **Email** : EmailJS
- **Build** : Vite
- **Tests** : Vitest

## 🚀 Installation & Setup

### Prérequis
- Node.js 18+ (recommandé) ou version compatible
- npm ou bun (gestionnaire de paquets)

### Étapes d'installation

```bash
# 1. Cloner le repository
git clone <YOUR_GIT_URL>
cd mikpleosc/moov-famille-connect-04-main

# 2. Installer les dépendances
npm install
# ou avec bun
bun install

# 3. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env et ajouter vos clés EmailJS

# 4. Démarrer le serveur de développement
npm run dev
# Le site sera accessible sur http://localhost:5173
```

## 🔐 Configuration EmailJS

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Créer un service et un template
3. Ajouter dans `.env` :

```bash
VITE_EMAILJS_SERVICE_ID=service_g6qpvd7
VITE_EMAILJS_TEMPLATE_ID=template_mideessi_work
VITE_EMAILJS_PUBLIC_KEY=votre_clé_publique
```

**Note** : La clé publique doit être définie pour envoyer de vrais emails. En mode démo, les envois sont simulés.

## 📁 Structure du Projet

```
src/
├── pages/
│   ├── Home.tsx           # Page d'accueil
│   ├── Forfaits.tsx       # Catalogue des forfaits
│   ├── Inscription.tsx    # Formulaire d'inscription
│   ├── FAQ.tsx            # Questions fréquentes
│   ├── APropos.tsx        # À propos de MIDEESSI
│   └── NotFound.tsx       # 404
├── components/
│   ├── layout/            # Layout global (Header, Footer)
│   ├── ui/                # Composants shadcn/ui
│   └── NavLink.tsx        # Composant NavLink personnalisé
├── hooks/                 # Hooks React personnalisés
├── lib/                   # Utilitaires
├── App.tsx                # Router principal
└── main.tsx               # Point d'entrée
```

## 🎨 Design & Branding

- **Couleurs** : Bleu nuit (#191970), Or (#FFD700), Blanc, Gris
- **Typographie** : Montserrat (titres), Open Sans (texte)
- **Système de design** : Inspiré par MIDEESSI brand guidelines

## 🧪 Tests & Build

```bash
# Tests unitaires
npm run test

# Build pour production
npm run build

# Aperçu du build
npm run preview
```

## 📱 Pages & Fonctionnalités

- **Accueil** : Présentation + CTA
- **Forfaits** : Catalogue des 4 forfaits Moov Famille avec prix et features
- **Inscription** : Formulaire avec validation, intégration EmailJS, récapitulatif
- **FAQ** : Questions/réponses sur Moov Famille, MIKPLÉ, paiements
- **À propos** : Histoire de MIDEESSI et valeurs

## 🌐 SEO

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph & Twitter Card
- ✅ JSON-LD Structured Data (Organization, Service)
- ✅ Canonical URL
- ✅ robots.txt & sitemap.xml
- ✅ Optimisation pour mobile (responsive)

## 📧 Support & Contact

- **Email** : contact@mideessi.com
- **WhatsApp** : [Lien WhatsApp](https://wa.me/22997000000)
- **Site** : https://mideessi.com

## 📝 Licence

Ce projet est créé par MIDEESSI. © 2025.

## 🤝 Contribution

Les contributions sont bienvenues. Veuillez suivre le guide de contribution de MIDEESSI.

---

**Fait avec ❤️ pour le Bénin par MIDEESSI**

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
