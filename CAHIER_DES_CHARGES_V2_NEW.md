# 📋 CAHIER DES CHARGES - MIKPLÉ v2.0
## Plateforme Intelligente de Gestion de Profils et Abonnements Moov Famille

**Date**: 05 Février 2026  
**Version**: 2.0 - Version Complète  
**Client**: MIDEESSI  
**Produit**: MIKPLÉ - Plateforme Intelligente d'Abonnement Moov Famille  
**Status**: Spécification Révisée  

---

## 📑 TABLE DES MATIÈRES

1. [Vue d'ensemble](#vue-densemble)
2. [Objectifs](#objectifs)
3. [Flux Utilisateur Complet](#flux-utilisateur-complet)
4. [Système d'Inscription & EmailJS](#système-dinscription--emailjs)
5. [Page Admin - Création de Profils](#page-admin---création-de-profils)
6. [Dashboard Utilisateur](#dashboard-utilisateur)
7. [Système de Parrainage](#système-de-parrainage)
8. [Base de données](#base-de-données)
9. [Intégration EmailJS](#intégration-emailjs)
10. [Partage Social](#partage-social)
11. [Infrastructure & Déploiement](#infrastructure--déploiement)
12. [Timeline & Livrables](#timeline--livrables)

---

## 🎯 VUE D'ENSEMBLE

MIKPLÉ v2.0 est une **plateforme intelligente de gestion d'abonnements** qui automatise complètement le processus d'attribution des profils et de suivi des forfaits Moov Famille. 

### Vision Simplifiée:
1. **Inscription**: L'utilisateur s'inscrit via le formulaire principal
2. **Notification Admin**: Admin reçoit un email via EmailJS avec les détails
3. **Création Profil**: Admin génère l'abonnement et les identifiants depuis une page privée
4. **Accès Utilisateur**: Utilisateur accède à son tableau de bord avec barre de progression
5. **Partage & Parrainage**: Utilisateur peut partager sur réseaux sociaux et générer codes de parrainage
6. **Suivi Admin**: Admin voit qui a créé quel code de parrainage dans sa page privée

---

## 🎪 OBJECTIFS

### Objectifs Commerciaux:
1. ✅ Automatiser la création de profils utilisateurs
2. ✅ Réduire le délai entre inscription et accès (de jours à minutes)
3. ✅ Augmenter engagement via barre de progression visuelle
4. ✅ Encourager partage viral via système de parrainage
5. ✅ Générer code parrainage traçable pour marketing
6. ✅ Augmenter rétention utilisateurs (+50%)

### Objectifs Techniques:
1. ✅ Stack moderne: React + TypeScript + Supabase
2. ✅ EmailJS pour notifications automatisées
3. ✅ Dashboard responsive & optimisé tous écrans
4. ✅ Animations fluides & professionnelles
5. ✅ Base de données Supabase (PostgreSQL)
6. ✅ Génération automatique identifiants & codes

### Objectifs UX:
1. ✅ Processus ultra-simplifié pour utilisateur
2. ✅ Dashboard magnifique & intuitif
3. ✅ Barre de progression engageante
4. ✅ Partage social intégré & frictionless
5. ✅ Responsive parfait sur tous appareils
6. ✅ Performance optimale (<2s load time)

---

## 🔄 FLUX UTILISATEUR COMPLET

### Phase 1: Inscription & Notification Admin

```
┌──────────────────────────────────────────────────────┐
│ ÉTAPE 1: INSCRIPTION UTILISATEUR                     │
├──────────────────────────────────────────────────────┤
│ URL: https://mikple.com/inscription               │
│                                                      │
│ Formulaire:                                          │
│ • Prénom: Jean                                       │
│ • Nom: Kouassi                                       │
│ • Email: jean.kouassi@example.com                  │
│ • WhatsApp: +229 64 40 96 91                       │
│ • Numéro Moov: +229 64 40 96 91                    │
│ • Mot de passe: [Sécurisé]                         │
│ • Code de parrainage (optionnel): MK-202605-001-XYZ│
│ • ☑️ J'accepte les CGU                             │
│                                                      │
│ [CRÉER MON COMPTE]                                  │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼ Données sauvegardées en Supabase
                   (table: users, status: "pending")
                 │
                 ▼
┌──────────────────────────────────────────────────────┐
│ ÉTAPE 2: NOTIFICATION EMAIL ADMIN VIA EMAILJS        │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Email reçu par l'administrateur:                     │
│                                                      │
│ SUJET: 📩 Nouvel Utilisateur - Jean Kouassi      │
│                                                      │
│ Bonjour Admin,                                       │
│                                                      │
│ Un nouvel utilisateur s'est inscrit sur MIKPLÉ:   │
│                                                      │
│ ────────────────────────────────────────           │
│ • Prénom: Jean                                       │
│ • Nom: Kouassi                                       │
│ • Email: jean.kouassi@example.com                  │
│ • WhatsApp: +229 64 40 96 91                       │
│ • Numéro Moov: +229 64 40 96 91                    │
│ • Date d'Inscription: 05/02/2026 10:30             │
│ • IP Utilisateur: 192.168.x.x                       │
│ • Code Parrainage Utilisé: MK-202605-001-XYZ      │
│   (Si oui: vous gagnez une commission!)            │
│ ────────────────────────────────────────           │
│                                                      │
│ 👉 CRÉER SON PROFIL:                               │
│ [ACCÉDER À LA PAGE ADMIN]                          │
│                                                      │
│ Dashboard Temporaire:                                │
│ En attente de création de profil (statut: PENDING) │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

### Phase 2: Création de Profil par l'Admin

```
┌──────────────────────────────────────────────────────┐
│ ÉTAPE 3: PAGE ADMIN PRIVÉE - CRÉATION PROFIL        │
├──────────────────────────────────────────────────────┤
│ URL: /admin/create-profile                          │
│ Accès: Admin uniquement (authentification Supabase) │
│                                                      │
│ 🔹 SÉLECTION UTILISATEUR:                          │
│ ┌────────────────────────────────────────┐         │
│ │ Utilisateur à activer:                 │         │
│ │ [Dropdown v] Jean Kouassi              │         │
│ │ Email: jean.kouassi@example.com        │         │
│ │ Status: ⏳ EN ATTENTE                  │         │
│ └────────────────────────────────────────┘         │
│                                                      │
│ 🔹 SÉLECTION ABONNEMENT:                           │
│ ┌────────────────────────────────────────┐         │
│ │ Quel forfait pour cet utilisateur?     │         │
│ │ ◯ Moov Famille Basique (2 nº)         │         │
│ │ ◉ Moov Famille Plus (3 nº)            │         │
│ │ ◯ Moov Famille Premium (5 nº)         │         │
│ │                                        │         │
│ │ Forfait sélectionné: PLUS              │         │
│ │ Nombre de numéros: 3 (1 principal + 2) │         │
│ │ Prix: 45 000 XOF / mois                │         │
│ │ Durée: 30 jours                        │         │
│ └────────────────────────────────────────┘         │
│                                                      │
│ 🔹 NUMÉROS COMPLÉMENTAIRES:                        │
│ ┌────────────────────────────────────────┐         │
│ │ Numéro Principal (pré-rempli):         │         │
│ │ +229 64 40 96 91 ✓                     │         │
│ │                                        │         │
│ │ Ajouter 2 numéros complémentaires:     │         │
│ │ Numéro 1: [+229 ____________] (req)   │         │
│ │ Numéro 2: [+229 ____________] (req)   │         │
│ │                                        │         │
│ │ Format: +229 XX XX XX XX (9 chiffres) │         │
│ └────────────────────────────────────────┘         │
│                                                      │
│ 🔹 DATE DE DÉBUT:                                  │
│ ┌────────────────────────────────────────┐         │
│ │ Quand activation?                      │         │
│ │ [v] Aujourd'hui (05/02/2026)          │         │
│ │ ◯ Demain                               │         │
│ │ ◯ Personnalisé: [Date picker]         │         │
│ │                                        │         │
│ │ Date expiration: 05/03/2026            │         │
│ └────────────────────────────────────────┘         │
│                                                      │
│ 🔹 ACTION FINALE:                                  │
│ ┌────────────────────────────────────────┐         │
│ │ [GÉNÉRER IDENTIFIANTS ET ACTIVER]    │         │
│ └────────────────────────────────────────┘         │
│                                                      │
│ ✅ RÉSULTAT GÉNÉRÉ (affiché immédiatement):      │
│ ┌────────────────────────────────────────┐         │
│ │ ✅ PROFIL CRÉÉ AVEC SUCCÈS!           │         │
│ │                                        │         │
│ │ Identifiant Utilisateur (ID):          │         │
│ │ MIKPLE_A7K9M2  [COPIER]               │         │
│ │                                        │         │
│ │ Mot de Passe Temporaire:               │         │
│ │ Temp#2026ABC   [COPIER]               │         │
│ │                                        │         │
│ │ Code Unique du Forfait:                │         │
│ │ MK-202605-001-XYZ  [COPIER]           │         │
│ │                                        │         │
│ │ Numéros Actifs:                        │         │
│ │ • +229 64 40 96 91 (Principal)        │         │
│ │ • +229 67 12 34 56 (Secondaire 1)     │         │
│ │ • +229 69 87 65 43 (Secondaire 2)     │         │
│ │                                        │         │
│ │ Dates:                                 │         │
│ │ • Activation: 05/02/2026 10:45        │         │
│ │ • Expiration: 05/03/2026 10:45        │         │
│ │ • Jours restants: 30                   │         │
│ │                                        │         │
│ │ [ENVOYER LES IDENTIFIANTS PAR EMAIL]  │         │
│ │ [COPIER TOUT]                         │         │
│ │ [RETOUR À LA LISTE]                   │         │
│ └────────────────────────────────────────┘         │
└──────────────────────────────────────────────────────┘
```

---

### Phase 3: Utilisateur Reçoit Identifiants

```
┌──────────────────────────────────────────────────────┐
│ ÉTAPE 4: EMAILS AUTOMATIQUES VIA EMAILJS            │
├──────────────────────────────────────────────────────┤
│                                                      │
│ EMAIL 1: Identifiants de Connexion                  │
│ ─────────────────────────────────────              │
│ DESTINATAIRE: jean.kouassi@example.com             │
│ SUJET: 🔑 Vos identifiants de connexion MIKPLÉ    │
│                                                      │
│ Bonjour Jean,                                        │
│                                                      │
│ Felicitations! Votre profil MIKPLÉ a été créé ✅ │
│ Vous pouvez maintenant vous connecter et accéder   │
│ à votre tableau de bord.                            │
│                                                      │
│ ════════════════════════════════════════            │
│ 📱 VOS IDENTIFIANTS DE CONNEXION:                 │
│ ════════════════════════════════════════            │
│ Identifiant: MIKPLE_A7K9M2                        │
│ Mot de passe: Temp#2026ABC                         │
│                                                      │
│ 🔐 IMPORTANT:                                      │
│ • Changez votre mot de passe à votre première      │
│   connexion                                         │
│ • Ne partagez JAMAIS vos identifiants             │
│ • Gardez cet email en lieu sûr                     │
│                                                      │
│ 🔗 ACCÉDER À VOTRE COMPTE:                         │
│ [CLIQUER ICI POUR SE CONNECTER]                    │
│ https://app.mikple.com/login                       │
│                                                      │
│ En cas de problème: support@mikple.com             │
│ ════════════════════════════════════════            │
│                                                      │
│ ─────────────────────────────────────              │
│ EMAIL 2: Détails de l'Abonnement                   │
│ ─────────────────────────────────────              │
│ SUJET: 📋 Récapitulatif de votre abonnement MIKPLÉ│
│                                                      │
│ Bonjour Jean,                                        │
│                                                      │
│ Voici les détails de votre abonnement MIKPLÉ:    │
│                                                      │
│ ════════════════════════════════════════            │
│ 📦 FORFAIT ACTIVÉ:                                │
│ ════════════════════════════════════════            │
│ Plan: Moov Famille Plus                            │
│ Numéros actifs: 3                                  │
│ Durée: 30 jours                                    │
│ Statut: ✅ ACTIF ET ILLIMITÉ                      │
│                                                      │
│ 📱 NUMÉROS INCLUS:                                │
│ 1. +229 64 40 96 91 (Principal - Votre numéro)    │
│ 2. +229 67 12 34 56 (Secondaire 1)                │
│ 3. +229 69 87 65 43 (Secondaire 2)                │
│                                                      │
│ 📅 DATES:                                          │
│ Date d'activation: 05/02/2026                      │
│ Date d'expiration: 05/03/2026                      │
│ Jours restants: 30 jours                           │
│                                                      │
│ 🎯 AVANTAGES:                                      │
│ ✓ Appels illimités                                 │
│ ✓ SMS illimités                                    │
│ ✓ Internet illimité (si inclus)                    │
│ ✓ Support 24/7 via MIKPLÉ                        │
│                                                      │
│ 🔗 ACCÉDER À VOTRE TABLEAU DE BORD:              │
│ [VOIR MON ABONNEMENT]                              │
│ https://app.mikple.com/dashboard                   │
│                                                      │
│ ════════════════════════════════════════            │
│ Support: support@mikple.com | WhatsApp: +229...   │
│ ════════════════════════════════════════            │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 📊 DASHBOARD UTILISATEUR

### Design & Layout

```
┌────────────────────────────────────────────────────────────────┐
│ HEADER                                                          │
│ ┌─────────────────────────────────────────────────────────┐   │
│ │ MIKPLÉ  [🔔 Notifications (0)]  [⚙️ Settings]  [Déco]  │   │
│ └─────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                      DASHBOARD PRINCIPAL                       │
│                                                                 │
│ 🎊 BIENVENUE JEAN KOUASSI!                                    │
│                                                                 │
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│ ┃  📱 MOOV FAMILLE PLUS - ILLIMITÉ & ACTIF ✅             ┃ │
│ ┃                                                           ┃ │
│ ┃  ⏰ TEMPS RESTANT:                                       ┃ │
│ ┃  ███████████████████░░░░░ 18 jours 12 heures           ┃ │
│ ┃                                                           ┃ │
│ ┃  📅 Expire le: Mardi 05 Mars 2026 à 10:45              ┃ │
│ ┃  ⚡ Statut: ACTIF - Connexion illimitée garantie ✅    ┃ │
│ ┃                                                           ┃ │
│ ┃  📞 Appels: Illimités        💬 SMS: Illimités         ┃ │
│ ┃  🌐 Internet: Illimité       📱 Numéros: 3             ┃ │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
│                                                                 │
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│ ┃  📢 PARTAGER MON ABONNEMENT                              ┃ │
│ ┃                                                           ┃ │
│ ┃  Message recommandé:                                     ┃ │
│ ┃  "Rejoins-moi sur MIKPLÉ! Économise -50% sur tes      ┃ │
│ ┃   forfaits Moov Famille. Appels illimités, SMS         ┃ │
│ ┃   illimités et plus. Réserve ta place maintenant!      ┃ │
│ ┃   Code: JEAN2026"                                       ┃ │
│ ┃                                                           ┃ │
│ ┃  [🔵 Facebook] [🟢 WhatsApp] [🔗 Copier Lien]          ┃ │
│ ┃  [Copy] Code de partage copié! ✓                        ┃ │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
│                                                                 │
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│ ┃  💰 MON CODE DE PARRAINAGE                               ┃ │
│ ┃                                                           ┃ │
│ ┃  Code Unique: MK-202605-001-XYZ [COPIER]              ┃ │
│ ┃                                                           ┃ │
│ ┃  Partage ce code avec tes amis:                          ┃ │
│ ┃  "Utilise mon code MK-202605-001-XYZ sur MIKPLÉ       ┃ │
│ ┃   et obtiens une réduction!"                            ┃ │
│ ┃                                                           ┃ │
│ ┃  📊 STATISTIQUES:                                        ┃ │
│ ┃  • Utilisateurs qui m'ont rejoint: 0                    ┃ │
│ ┃  • Bonus gagnés: 0 XOF                                  ┃ │
│ ┃  • Réductions appliquées: 0 XOF                         ┃ │
│ ┃                                                           ┃ │
│ ┃  [PARTAGER CODE] [VOIR DÉTAILS]                         ┃ │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
│                                                                 │
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│ ┃  📞 MES NUMÉROS ACTIFS                                   ┃ │
│ ┃                                                           ┃ │
│ ┃  1️⃣  +229 64 40 96 91  (Principal - Votre numéro)     ┃ │
│ ┃  2️⃣  +229 67 12 34 56  (Secondaire 1)                 ┃ │
│ ┃  3️⃣  +229 69 87 65 43  (Secondaire 2)                 ┃ │
│ ┃                                                           ┃ │
│ ┃  Tous les numéros ont accès aux mêmes services! ✅     ┃ │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
│                                                                 │
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│ ┃  🎯 ACTIONS RAPIDES                                      ┃ │
│ ┃                                                           ┃ │
│ ┃  [RENOUVELER] [VOIR DÉTAILS] [AIDE & SUPPORT]         ┃ │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### Responsive & Adaptations

**Desktop (> 1024px)**:
- Layout 3 colonnes
- Barre de progression large (400px)
- Texte taille 16px
- Animations fluides

**Tablette (768px - 1024px)**:
- Layout 2 colonnes
- Barre de progression moyenne (300px)
- Texte taille 14px
- Boutons plus grands pour touch

**Mobile (< 768px)**:
- Layout 1 colonne, scroll vertical
- Barre de progression full width
- Texte taille 13px
- Boutons 48px+ (accessibilité)
- Espacement généreux entre éléments

### Animations & Interactions

```javascript
// Barre de progression
- Animation continue du décompte
- Couleur change: VERT (> 10j) → ORANGE (3-10j) → ROUGE (< 3j)
- Pulsation légère quand < 3 jours
- Effet particules au chargement

// Boutons de partage
- Hover: Augmentation taille 5%
- Click: Petit bounce animation
- Feedback: "Copié! ✓" toast notification
- Icônes sociales avec couleurs officielles

// Chiffres (jours, bonus, etc)
- Décompte en temps réel (jours changent à minuit)
- Compte à rebours visible (jours, heures, minutes, secondes)

// Entrée/Sortie
- Fade-in au chargement
- Slide-in des cartes
- Transition smooth entre sections
```

---

## 💰 SYSTÈME DE PARRAINAGE

### Fonctionnement

```
UTILISATEUR JEAN
├─ Code personnel: MK-202605-001-XYZ
├─ Lien de parrainage: https://mikple.com/ref/MK-202605-001-XYZ
└─ Partage avec: Pierre, Marie, etc.

UTILISATEUR PIERRE (nouveau)
├─ S'inscrit avec code: MK-202605-001-XYZ
├─ Pierre reçoit: -10% réduction
└─ Jean reçoit: 5 000 XOF bonus

SUIVI DANS LE DASHBOARD:
Jean voit:
- Pierre Kouassi a rejoint grâce à mon code ✓
- Bonus gagné: 5 000 XOF
- Nombre total parrainés: 1
```

### Page Admin - Suivi Parrainage

```
┌─────────────────────────────────────────────────────┐
│ PAGE ADMIN: Codes de Parrainage                    │
│ URL: /admin/referral-codes                         │
├─────────────────────────────────────────────────────┤
│                                                     │
│ 🔍 Filtres:                                        │
│ [Recherche utilisateur] [Trier par date] [Actif]  │
│                                                     │
│ TABLEAU:                                            │
│ ┌───────────────────────────────────────────────┐ │
│ │ Utilisateur    │ Code      │ Créé  │ Utilisé │ │
│ ├───────────────────────────────────────────────┤ │
│ │ Jean Kouassi   │ MK-202605 │ 05/02 │ 1 fois  │ │
│ │ Marie Kouassi  │ MK-202605 │ 02/02 │ 0 fois  │ │
│ │ Pierre Kouassi │ MK-202605 │ 01/02 │ 3 fois  │ │
│ │                                               │ │
│ └───────────────────────────────────────────────┘ │
│                                                     │
│ 📊 STATISTIQUES GLOBALES:                         │
│ • Codes générés: 1 247                            │
│ • Codes utilisés: 523 (42%)                       │
│ • Utilisateurs acquis par parrainage: 523        │
│ • Revenue parrainage: 2 615 000 XOF             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 📊 BASE DE DONNÉES SUPABASE

### Tables Principales

```sql
-- TABLE: users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone_whatsapp VARCHAR(20) UNIQUE NOT NULL,
  phone_moov VARCHAR(20),
  user_id_display VARCHAR(50) UNIQUE,  -- MIKPLE_XXXXX
  temp_password VARCHAR(100),  -- Temp#2026ABC
  status ENUM('pending', 'active', 'suspended') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  referral_code_used VARCHAR(100),  -- Code utilisé à l'inscription
  INDEX(email),
  INDEX(status)
);

-- TABLE: subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  subscription_type VARCHAR(100) NOT NULL,  -- 'basic', 'plus', 'premium'
  main_number VARCHAR(20) NOT NULL,
  secondary_numbers JSONB,  -- Array de numéros secondaires
  additional_numbers_count INT DEFAULT 0,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  days_remaining INT,
  status ENUM('active', 'pending', 'expired', 'canceled') DEFAULT 'pending',
  subscription_code VARCHAR(100) UNIQUE,  -- MK-202605-001-XYZ
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX(user_id),
  INDEX(status),
  INDEX(end_date)
);

-- TABLE: referral_codes
CREATE TABLE referral_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  code VARCHAR(100) UNIQUE NOT NULL,  -- MK-202605-001-XYZ
  created_at TIMESTAMP DEFAULT NOW(),
  times_used INT DEFAULT 0,
  users_referred JSONB,  -- Array of user IDs who used this code
  is_active BOOLEAN DEFAULT TRUE,
  INDEX(user_id),
  INDEX(code)
);

-- TABLE: referral_history
CREATE TABLE referral_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id UUID NOT NULL REFERENCES users(id),
  referred_user_id UUID NOT NULL REFERENCES users(id),
  referral_code VARCHAR(100),
  bonus_amount DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(referrer_id, referred_user_id),
  INDEX(referrer_id)
);

-- TABLE: admin_logs
CREATE TABLE admin_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES users(id),
  action VARCHAR(100),  -- 'profile_created', 'subscription_activated', etc
  user_id UUID REFERENCES users(id),
  details JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX(admin_id),
  INDEX(action)
);
```

---

## 📧 INTÉGRATION EMAILJS

### Configuration

```javascript
// emailjs.conf.ts
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_mikple_gmail',
  TEMPLATE_ID_SIGNUP: 'template_new_user_signup',
  TEMPLATE_ID_CREDENTIALS: 'template_user_credentials',
  TEMPLATE_ID_SUBSCRIPTION: 'template_subscription_details',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE'
};

// Initialiser EmailJS au démarrage
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
```

### Templates EmailJS

**Template 1: Notification Admin (Nouvel Utilisateur)**
```
Service: Gmail
Template Name: template_new_user_signup
Variables: {{user_first_name}}, {{user_email}}, {{user_phone}}, {{referral_code_used}}
Destinataire: admin@mikple.com
```

**Template 2: Identifiants Utilisateur**
```
Service: Gmail
Template Name: template_user_credentials
Variables: {{user_first_name}}, {{user_id}}, {{temp_password}}, {{login_link}}
Destinataire: {{user_email}}
```

**Template 3: Détails Abonnement**
```
Service: Gmail
Template Name: template_subscription_details
Variables: {{user_first_name}}, {{subscription_type}}, {{main_number}}, {{secondary_numbers}}, {{start_date}}, {{end_date}}, {{days_remaining}}, {{dashboard_link}}
Destinataire: {{user_email}}
```

### Appels EmailJS depuis React/TypeScript

```typescript
// services/emailService.ts

import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.conf';

interface NewUserEmailData {
  user_first_name: string;
  user_email: string;
  user_phone: string;
  user_whatsapp: string;
  referral_code_used?: string;
}

export const sendNewUserNotificationToAdmin = async (data: NewUserEmailData) => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_SIGNUP,
      {
        to_email: 'admin@mikple.com',
        user_first_name: data.user_first_name,
        user_email: data.user_email,
        user_phone: data.user_phone,
        user_whatsapp: data.user_whatsapp,
        referral_code_used: data.referral_code_used || 'Aucun',
        message_html: `
          <p>Nouvel utilisateur inscrit!</p>
          <p>Nom: ${data.user_first_name}</p>
          <p>Email: ${data.user_email}</p>
        `
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    console.log('Email sent:', result);
    return result;
  } catch (error) {
    console.error('Email send failed:', error);
    throw error;
  }
};

interface CredentialsEmailData {
  user_first_name: string;
  user_email: string;
  user_id: string;
  temp_password: string;
  login_link: string;
}

export const sendCredentialsEmail = async (data: CredentialsEmailData) => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_CREDENTIALS,
      {
        to_email: data.user_email,
        user_first_name: data.user_first_name,
        user_id: data.user_id,
        temp_password: data.temp_password,
        login_link: data.login_link
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return result;
  } catch (error) {
    console.error('Credentials email send failed:', error);
    throw error;
  }
};

interface SubscriptionEmailData {
  user_first_name: string;
  user_email: string;
  subscription_type: string;
  main_number: string;
  secondary_numbers: string[];
  start_date: string;
  end_date: string;
  days_remaining: number;
  dashboard_link: string;
}

export const sendSubscriptionDetailsEmail = async (data: SubscriptionEmailData) => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_SUBSCRIPTION,
      {
        to_email: data.user_email,
        user_first_name: data.user_first_name,
        subscription_type: data.subscription_type,
        main_number: data.main_number,
        secondary_numbers: data.secondary_numbers.join(', '),
        start_date: data.start_date,
        end_date: data.end_date,
        days_remaining: data.days_remaining,
        dashboard_link: data.dashboard_link
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return result;
  } catch (error) {
    console.error('Subscription email send failed:', error);
    throw error;
  }
};
```

---

## 🔗 PARTAGE SOCIAL

### Intégration

**Facebook Share**:
```typescript
const shareOnFacebook = () => {
  const url = 'https://www.facebook.com/sharer/sharer.php';
  const params = {
    u: window.location.href,
    quote: "Rejoins-moi sur MIKPLÉ et économise -50% sur les forfaits Moov!"
  };
  window.open(
    `${url}?${new URLSearchParams(params)}`,
    'facebookShare',
    'width=600,height=400'
  );
};
```

**WhatsApp Share**:
```typescript
const shareOnWhatsApp = () => {
  const message = "Rejoins-moi sur MIKPLÉ et économise -50% sur les forfaits Moov! Code: JEAN2026";
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url);
};
```

**Copy Link**:
```typescript
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  showToast({ type: 'success', message: 'Copié! ✓' });
};
```

---

## 🏗️ ARCHITECTURE & DÉPLOIEMENT

### Stack Technique

```
Frontend:
├─ React 18 + TypeScript
├─ Vite (bundler)
├─ Tailwind CSS (styling)
├─ shadcn/ui (components)
├─ React Router (navigation)
├─ Zustand (state management)
└─ EmailJS SDK

Backend:
├─ Supabase (PostgreSQL + Auth + Real-time)
├─ Supabase Edge Functions (serverless)
└─ TypeScript

Database:
├─ PostgreSQL (Supabase)
└─ Real-time subscriptions (Supabase)

External Services:
├─ EmailJS (email sending)
├─ Facebook SDK (share)
└─ WhatsApp API (share)
```

### Déploiement

**Frontend** (Netlify):
```
- Branch: main → Auto deploy
- Build: bun run build
- Publish: dist/
- Environment: .env.production
```

**Base de Données** (Supabase):
```
- PostgreSQL managed
- Backups automatiques
- Row-level security (RLS)
- Real-time subscriptions
```

---

## ⏱️ TIMELINE & LIVRABLES

### Phase 1: Configuration & Setup (Semaine 1)
- [x] Supabase project setup
- [x] Database schema création
- [x] EmailJS configuration
- [x] Authentication Supabase setup
- [x] Environment variables configuration

### Phase 2: Frontend Inscription & Admin (Semaine 2)
- [x] Formulaire d'inscription
- [x] Page admin création profils
- [x] Génération automatique identifiants
- [x] Intégration EmailJS
- [ ] Tests formulaires

### Phase 3: Dashboard Utilisateur (Semaine 3)
- [x] Layout dashboard
- [x] Barre de progression
- [x] Affichage abonnement
- [x] Partage social
- [x] Système de parrainage affichage

### Phase 4: Admin Dashboard & Suivi (Semaine 4)
- [x] Page suivi codes parrainage
- [x] Analytics simple
- [x] Export données
- [ ] Tests admin features

### Phase 5: Polish & Optimisation (Semaine 5)
- [ ] Responsive optimization
- [ ] Performance tuning
- [ ] SEO optimization
- [ ] Tests utilisateur
- [ ] Corrections bugs

### Phase 6: Launch (Semaine 6)
- [ ] Production deployment
- [ ] Monitoring setup
- [ ] Documentation finalisée
- [ ] Formation utilisateurs
- [ ] Support launch

---

## 📦 LIVRABLES FINAUX

```
frontend/
├─ src/
│  ├─ pages/
│  │  ├─ Inscription.tsx
│  │  ├─ Login.tsx
│  │  ├─ Dashboard.tsx
│  │  └─ AdminCreateProfile.tsx
│  ├─ components/
│  │  ├─ ProgressBar.tsx
│  │  ├─ SocialShare.tsx
│  │  ├─ ReferralCode.tsx
│  │  └─ SubscriptionCard.tsx
│  ├─ services/
│  │  ├─ emailService.ts
│  │  ├─ supabaseClient.ts
│  │  └─ referralService.ts
│  ├─ config/
│  │  └─ emailjs.conf.ts
│  └─ App.tsx
└─ package.json

database/
├─ schema.sql (DDL)
├─ migrations/ (version control)
└─ seeds/ (données test)

docs/
├─ API.md
├─ DATABASE.md
├─ SETUP.md
├─ USER_GUIDE.md
└─ ADMIN_GUIDE.md
```

---

## 🎯 RÉSUMÉ EXÉCUTIF

### Avantages pour l'Admin:
✅ Processus entièrement automatisé  
✅ Voir qui a créé quel code de parrainage  
✅ Analytics simples & claires  
✅ Réduction travail manuel  
✅ Traçabilité complète  

### Avantages pour Utilisateurs:
✅ Accès immédiat après inscription  
✅ Dashboard beau et informatif  
✅ Barre de progression engageante  
✅ Partage facile sur réseaux sociaux  
✅ Gains via parrainage  

### Avantages pour l'Entreprise:
💰 Croissance virale via parrainage  
📈 Réduction coûts opérationnels  
🚀 Time-to-value réduit  
📊 Données utilisateurs détaillées  
🌍 Scalabilité maximale  

---

**Document Version**: 2.0 Complète  
**Date**: 05 Février 2026  
**Status**: ✅ PRÊT POUR DÉVELOPPEMENT

*Plateforme intelligente, efficace et scalable pour MIKPLÉ* 🇧🇯
