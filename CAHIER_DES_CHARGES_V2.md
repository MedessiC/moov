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

MIKPLÉ v2.0 transforme le service d'une plateforme de **mise en relation simple** à une **plateforme de gestion complète** des forfaits Moov Famille avec suivi temps réel, authentification, et notifications.

### Changement majeur:
- **v1**: Inscrivez-vous → Nous vous contactons → Vous rejoignez un groupe
- **v2**: Inscrivez-vous → Accédez à votre compte → Gérez votre forfait en temps réel

---

## 🎪 OBJECTIFS

### Objectifs Commerciaux:
1. ✅ Réduire le support WhatsApp manuel (-70%)
2. ✅ Augmenter la rétention utilisateurs (+50%)
3. ✅ Paiements en avance pour cash flow (+35%)
4. ✅ Upsell réservation de places premium

### Objectifs Techniques:
1. ✅ Architecture scalable (1000+ utilisateurs)
2. ✅ Notifications temps réel (<2s latence)
3. ✅ Intégration WhatsApp automatisée
4. ✅ Dashboard responsive mobile-first

### Objectifs UX:
1. ✅ Expérience utilisateur fluide
2. ✅ Réduction friction post-inscription
3. ✅ Engagement accrû via notifications
4. ✅ Transparence complète forfait

---

## 🏗️ ARCHITECTURE GLOBALE

```
┌─────────────────────────────────────────────────────────┐
│                    MIKPLÉ v2.0 STACK                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Frontend (React + Vite)                                │
│  ├─ Landing Page (v1 - inchangée)                       │
│  ├─ Inscription Form                                    │
│  ├─ Auth Pages (Login/Register)                         │
│  └─ Dashboard Utilisateur (NOUVEAU)                     │
│                                                         │
│  ↓↓↓ API REST / WebSocket ↓↓↓                          │
│                                                         │
│  Backend (Node.js/Express ou Python/FastAPI)           │
│  ├─ User Management Service                            │
│  ├─ Family Group Service                               │
│  ├─ Forfait Management Service                         │
│  ├─ Notification Service                               │
│  ├─ Payment Service                                    │
│  ├─ WhatsApp Integration Service                       │
│  └─ Analytics Service                                  │
│                                                         │
│  ↓↓↓ Databases & External Services ↓↓↓                │
│                                                         │
│  PostgreSQL/MongoDB (User, Group, Forfait data)       │
│  Redis (Real-time notifications, Caching)             │
│  Firebase/Pusher (WebSocket real-time)                │
│  Twilio/WhatsApp API (SMS/WhatsApp automation)        │
│  Stripe/Paypal (Payment processing)                   │
│  SendGrid/Brevo (Email notifications)                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 FONCTIONNALITÉS V2

### 1️⃣ SYSTÈME D'AUTHENTIFICATION & COMPTES UTILISATEURS

#### 1.1 Inscription Améliorée
**Avant (v1)**:
- Formulaire simple
- Email + Numéro Moov
- Validation manuelle par MIKPLÉ

**Après (v2)**:
```
ÉTAPE 1: Formulaire Inscription
- Prénom, Nom
- Email
- Numéro WhatsApp (+ validation SMS)
- Numéro Moov (+ vérification Moov)
- Mot de passe fort (minimum 8 caractères)
- Acceptation CGU + Privacy

ÉTAPE 2: Vérification Email
- Lien de confirmation (24h)
- Code OTP (6 digits)

ÉTAPE 3: Vérification WhatsApp
- Code SMS auto-envoyé via Twilio
- Confirmation du numéro

ÉTAPE 4: Créer Profil
- Photo de profil (optionnel)
- Bio courte (optionnel)
- Notifications preferences
```

**Données stockées**:
```json
{
  "user_id": "uuid",
  "email": "user@example.com",
  "phone_whatsapp": "+22964409691",
  "phone_moov": "+22964409691",
  "password_hash": "bcrypt_hash",
  "first_name": "Jean",
  "last_name": "Kouassi",
  "profile_picture": "url_s3",
  "bio": "Étudiant à Cotonou",
  "email_verified": true,
  "phone_verified": true,
  "created_at": "2026-02-02T10:00:00Z",
  "updated_at": "2026-02-02T10:00:00Z",
  "last_login": "2026-02-02T10:00:00Z",
  "status": "active|suspended|deleted",
  "notification_preferences": {
    "email": true,
    "whatsapp": true,
    "push": true,
    "expiration_reminder": 7  // jours avant
  }
}
```

#### 1.2 Connexion & Sessions
- Login: Email + Mot de passe
- JWT tokens (Access: 15min, Refresh: 7 jours)
- "Se souvenir de moi" (30 jours)
- Sessions multiples autorisées (max 5)
- Logout automatique après 30 min inactivité
- Historique connexions (dernières 10)

#### 1.3 Récupération de Compte
- Mot de passe oublié → Email reset
- 2FA optionnel (code SMS/authenticator)
- Blocage après 5 tentatives échouées
- IP whitelisting optionnel

---

### 2️⃣ ATTRIBUTION AUTOMATIQUE PAR WHATSAPP

#### 2.1 Flux Post-Inscription

```
UTILISATEUR S'INSCRIT
        ↓
MIKPLÉ BACKEND:
- Crée le compte utilisateur
- Génère identifiants de connexion
- Crée identifiant unique: MIKPLÉ_XXXXX
- Crée mot de passe temporaire: TMP_XXXXXX
        ↓
ENVOIE MESSAGE WHATSAPP via Twilio/WhatsApp API:
        ↓
┌──────────────────────────────────────────────────┐
│ Message WhatsApp Automatique:                     │
├──────────────────────────────────────────────────┤
│ 👋 Bonjour Jean!                                  │
│                                                   │
│ Bienvenue sur MIKPLÉ! 🎉                        │
│                                                   │
│ ✅ Votre compte a été créé avec succès           │
│                                                   │
│ 📱 Vos identifiants de connexion:                │
│ • Identifiant: MIKPLÉ_A7K9M2                    │
│ • Mot de passe temporaire: TmpPass2026!         │
│                                                   │
│ 🔐 IMPORTANT:                                    │
│ • Changez votre mot de passe à la 1ère connexion│
│ • Ne partagez jamais vos identifiants           │
│                                                   │
│ 🔗 Accédez à votre compte:                       │
│ https://app.mikple.com/login                    │
│                                                   │
│ ❓ Besoin d'aide? Répondez simplement à ce msg  │
│                                                   │
│ - Team MIKPLÉ 🇧🇯                               │
└──────────────────────────────────────────────────┘
        ↓
UTILISATEUR CLIQUE LIEN
        ↓
DASHBOARD UTILISATEUR (voir section Dashboard)
```

#### 2.2 Format Identifiant de Connexion

**Identifiant unique MIKPLÉ**:
- Format: `MIKPLÉ_XXXXX` (8 caractères alphanumériques)
- Unique, irrécupérable si oublié
- Envoyé à l'inscription et mémorisé
- Visible dans settings du compte

**Exemples**:
- `MIKPLÉ_A7K9M2`
- `MIKPLÉ_K2P8V5`
- `MIKPLÉ_Q4R6X1`

#### 2.3 Template WhatsApp Varié

**Variante 1 - Invitation simple**:
```
Salut [PRÉNOM] 👋

Tu t'es inscrit sur MIKPLÉ! 🎉

Identifiant: MIKPLÉ_[CODE]
Mot de passe: [TMP_PASSWORD]

Accède ici: [LIEN]
```

**Variante 2 - Avec offre promotionnelle**:
```
Bienvenue [PRÉNOM]! 🎊

Tu as accès à MIKPLÉ - Forfait Moov Famille

📱 Identifiants:
ID: MIKPLÉ_[CODE]
Mdp: [TMP_PASSWORD]

💰 PROMO: Réserve ta place -10% ce mois!

[LIEN TABLEAU BORD]
```

**Variante 3 - Avec urgence (places limitées)**:
```
🚨 [PRÉNOM], places disponibles!

MIKPLÉ_[CODE]
Mdp: [TMP_PASSWORD]

⏰ Réserve MAINTENANT (10 places restantes)
📅 Expiration: dans 3 jours

[LIEN TABLEAU BORD]
```

---

### 3️⃣ DASHBOARD UTILISATEUR (NOUVEAU)

#### 3.1 Structure Générale

```
┌─────────────────────────────────────────────────────────────┐
│ MIKPLÉ - MON TABLEAU DE BORD                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│ [👤 Jean Kouassi] [🔔 Notifications] [⚙️ Settings] [Déco]  │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│ 📊 SECTION 1: MON FORFAIT (Hero Card)                       │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 📱 Moov Famille - Plan Plus                          │   │
│ │ Statut: ✅ ACTIF                                     │   │
│ │ Groupe: Famille Kouassi (4/4 membres)               │   │
│ │                                                       │   │
│ │ 📅 DURÉE RESTANTE:                                  │   │
│ │ ████████████░░░░ 18 jours (Expire: 20 fév)         │   │
│ │                                                       │   │
│ │ 💾 Data restante: 45 GB / 100 GB                    │   │
│ │ 📞 Appels: Illimités                                 │   │
│ │ 💬 SMS: 500/mois                                     │   │
│ │                                                       │   │
│ │ [🔄 Renouveler] [📊 Détails] [⚠️ Problème]         │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│ 👥 SECTION 2: MEMBRES DE MA FAMILLE                        │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ [ADMIN] Jean Kouassi (Toi)                           │   │
│ │ Phone: +229 64 40 96 91 | Status: ✅ Actif         │   │
│ │                                                       │   │
│ │ [MEMBRE] Marie Kouassi                               │   │
│ │ Phone: +229 67 XX XX XX | Status: ✅ Actif         │   │
│ │                                                       │   │
│ │ [MEMBRE] Pierre Kouassi                              │   │
│ │ Phone: +229 69 XX XX XX | Status: ⏱️ Invité        │   │
│ │                                                       │   │
│ │ [PLACE LIBRE]                                         │   │
│ │ [+ Ajouter un membre]                                │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│ 💰 SECTION 3: PAIEMENT & FACTURATION                       │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Dernier paiement: 1 500 XOF (payé 26 jan)          │   │
│ │ Prochain paiement: 1 500 XOF (dû 26 fév)           │   │
│ │ Montant total groupe: 6 000 XOF / 4 = 1 500 XOF    │   │
│ │                                                       │   │
│ │ [💳 Payer maintenant] [📜 Factures] [Historique]   │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│ 🔔 SECTION 4: ALERTES & RAPPELS                           │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ ⚠️ URGENT: Forfait expire dans 5 jours!             │   │
│ │    Renouvelez maintenant pour ne pas interrompre    │   │
│ │    [RENOUVELER MAINTENANT]                          │   │
│ │                                                       │   │
│ │ ℹ️ Places réservables: 2 (avant 5 fév)              │   │
│ │    Réservez vos places en payant en avance          │   │
│ │    [RÉSERVER MAINTENANT]                            │   │
│ │                                                       │   │
│ │ ✅ Bienvenue! Complétez votre profil (50%)          │   │
│ │    [COMPLÉTER]                                       │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

#### 3.2 Pages du Dashboard

**Page 1: Aperçu (Home)**
- Mon forfait actuel (status, jours restants, data usage)
- Membres de ma famille (liste)
- Alertes temps réel
- Boutons d'action rapides

**Page 2: Détails Forfait**
- Informations forfait Moov complètes
- Utilisation data détaillée (graphiques)
- Historique consommation (7, 30, 90 jours)
- Détails techniques Moov

**Page 3: Gestion Famille**
- Liste complète des membres
- Status de chaque membre (actif, invité, suspendu)
- Historique des membres (who joined when)
- Possibilité de retirer/inviter membres
- Gestion permissions (admin/membre)

**Page 4: Facturation & Paiements**
- Historique paiements (tableau)
- Prochaines dates de paiement
- Factures PDF téléchargeables
- Méthodes de paiement sauvegardées
- Récurrences & renouvellements

**Page 5: Réservations & Renouvellement**
- Voir places disponibles à venir
- Réserver place future en payant en avance
- Voir renouvellements programmés
- Options de upgrade/downgrade

**Page 6: Notifications & Préférences**
- Historique notifications (7 derniers jours)
- Préférences: Email / WhatsApp / Push
- Fréquence rappels (avant 7, 3, 1 jour)
- Zones données à tracker (important)

**Page 7: Compte & Sécurité**
- Info profil (éditable)
- Changer mot de passe
- 2FA (activer/désactiver)
- Sessions actives
- Logs connexions (date, heure, IP, device)
- Déconnexion de tous les appareils

---

### Responsive Design - Tailles et Breakpoints

#### **MOBILE (< 640px)**
```css
/* Typographie */
- Heading 1 (h1):       font-size: 18px, line-height: 1.3
- Heading 2 (h2):       font-size: 16px, line-height: 1.3
- Heading 3 (h3):       font-size: 14px, line-height: 1.2
- Paragraphe:           font-size: 13px, line-height: 1.5
- Label/Badge:          font-size: 11px, line-height: 1.4
- Bouton texte:         font-size: 12px, font-weight: 600

/* Espacement */
- Padding conteneur:    12px (réduit)
- Margin sections:      8px
- Gap entre éléments:   8px

/* Composants */
- Barre de progression: Full width - 100%
- Boutons:              Hauteur: 40px, Padding: 10px 12px
- Cards:                Width: 100%, Padding: 10px
- Input fields:         Width: 100%, Padding: 8px

/* Layout */
- Colonnes:             1 colonne
- Header:               Sticky en haut
- Sidebar:              Drawer/Hamburger menu (hidden)
- Espacement vertical:  Augmenté (scrolling long)
```

#### **TABLETTE (640px - 1024px)**
```css
/* Typographie */
- Heading 1 (h1):       font-size: 22px, line-height: 1.4
- Heading 2 (h2):       font-size: 18px, line-height: 1.3
- Heading 3 (h3):       font-size: 16px, line-height: 1.2
- Paragraphe:           font-size: 14px, line-height: 1.6
- Label/Badge:          font-size: 12px, line-height: 1.4
- Bouton texte:         font-size: 13px, font-weight: 600

/* Espacement */
- Padding conteneur:    16px (moyen)
- Margin sections:      12px
- Gap entre éléments:   12px

/* Composants */
- Barre de progression: 400px - 90% width
- Boutons:              Hauteur: 44px, Padding: 12px 16px
- Cards:                Width: calc(50% - 8px), Padding: 12px
- Input fields:         Width: 100%, Padding: 10px

/* Layout */
- Colonnes:             2 colonnes
- Header:               Sticky en haut, plus d'espace
- Sidebar:              Collapsible side panel
- Espacement vertical:  Modéré
```

#### **DESKTOP (> 1024px)**
```css
/* Typographie */
- Heading 1 (h1):       font-size: 28px, line-height: 1.4
- Heading 2 (h2):       font-size: 22px, line-height: 1.3
- Heading 3 (h3):       font-size: 18px, line-height: 1.2
- Paragraphe:           font-size: 15px, line-height: 1.6
- Label/Badge:          font-size: 13px, line-height: 1.4
- Bouton texte:         font-size: 14px, font-weight: 600

/* Espacement */
- Padding conteneur:    20px (généreux)
- Margin sections:      16px
- Gap entre éléments:   16px

/* Composants */
- Barre de progression: 500px (fixe)
- Boutons:              Hauteur: 48px, Padding: 14px 24px
- Cards:                Width: calc(33.33% - 12px), Padding: 16px
- Input fields:         Width: 100%, Padding: 12px

/* Layout */
- Colonnes:             3 colonnes
- Header:               Fixed ou sticky
- Sidebar:              Toujours visible (collapsible optionnel)
- Espacement vertical:  Généreux et aéré
```

#### **Breakpoints Tailwind CSS (Recommandé)**
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    screens: {
      'sm':   '640px',   // Mobile
      'md':   '768px',   // Tablette
      'lg':   '1024px',  // Petit Desktop
      'xl':   '1280px',  // Desktop Standard
      '2xl':  '1536px'   // Grand Desktop
    }
  }
}
```

#### **Responsive Components Structure**

**Dashboard Layout - Code Example**
```tsx
// Dashboard.tsx avec Tailwind responsive

<div className="p-4 sm:p-6 md:p-8 lg:p-10">
  {/* Bienvenue */}
  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
    Bienvenue {userName}!
  </h1>

  {/* Grille responsive */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    
    {/* Card abonnement */}
    <div className="col-span-1 md:col-span-2 lg:col-span-3 p-4 md:p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 md:mb-4">
        Moov Famille Premium
      </h2>
      
      {/* Barre de progression */}
      <div className="mb-4">
        <p className="text-sm md:text-base font-medium mb-2">
          Temps restant: 18 jours
        </p>
        <div className="w-full bg-gray-300 rounded-full h-3 md:h-4 overflow-hidden">
          <div 
            className="bg-green-500 h-full rounded-full transition-all duration-300"
            style={{ width: '60%' }}
          />
        </div>
      </div>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
        <button className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-white text-blue-600 rounded text-sm md:text-base font-medium hover:bg-gray-100 transition-all">
          Partager
        </button>
        <button className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-blue-700 text-white rounded text-sm md:text-base font-medium hover:bg-blue-800 transition-all">
          Renouveler
        </button>
      </div>
    </div>

    {/* Card parrainage */}
    <div className="col-span-1 md:col-span-1 lg:col-span-1 p-4 md:p-6 bg-gray-50 border border-gray-200 rounded-lg">
      <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3">
        Mon Code de Parrainage
      </h3>
      <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
        Partage et gagne des bonus!
      </p>
      <code className="text-xs md:text-sm bg-gray-200 p-2 md:p-3 rounded block mb-2 md:mb-3 break-all">
        MK-202605-001-XYZ
      </code>
      <button className="w-full px-2 md:px-3 py-1 md:py-2 bg-blue-500 text-white text-xs md:text-sm rounded hover:bg-blue-600 transition-all">
        Copier Code
      </button>
    </div>
  </div>
</div>
```

#### **Directives Responsive - CSS/Tailwind**

```css
/* Header - Responsive */
header {
  @apply flex justify-between items-center 
         px-4 sm:px-6 md:px-8 lg:px-10
         py-3 sm:py-4
         text-sm sm:text-base;
}

/* Cards - Responsive */
.card {
  @apply p-3 sm:p-4 md:p-6 lg:p-8
         text-sm sm:text-base
         rounded-lg shadow-md
         transition-all duration-300;
}

/* Boutons - Responsive */
button {
  @apply px-3 sm:px-4 md:px-6
         py-2 sm:py-2.5 md:py-3
         text-xs sm:text-sm md:text-base
         font-medium
         min-h-[40px] sm:min-h-[44px] md:min-h-[48px];
}

/* Typographie - Responsive */
h1 { @apply text-lg sm:text-xl md:text-2xl lg:text-3xl; }
h2 { @apply text-base sm:text-lg md:text-xl lg:text-2xl; }
h3 { @apply text-sm sm:text-base md:text-lg lg:text-xl; }
p  { @apply text-xs sm:text-sm md:text-base; }

/* Grilles - Responsive */
.grid-responsive {
  @apply grid 
         grid-cols-1 
         sm:grid-cols-2 
         md:grid-cols-2 
         lg:grid-cols-3
         gap-4 md:gap-6 lg:gap-8;
}
```

#### **Mobile-First Approach (RECOMMANDÉ)**

```tsx
// Toujours commencer par MOBILE, puis ajouter les breakpoints

// ❌ MAUVAIS - Desktop first
<div className="p-20 md:p-4">  // Gros sur desktop, réduit sur mobile

// ✅ BON - Mobile first
<div className="p-4 md:p-6 lg:p-8">  // Petit sur mobile, plus grand sur desktop
```

#### **Tests Responsive**
```
FAIRE DES TESTS SUR:
- iPhone SE (375px)
- iPhone 12 Pro (390px)
- iPhone 14 Pro Max (430px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop 1280px
- Desktop 1920px
- Desktop 2560px (4K)

UTILISER: Chrome DevTools > Device Toggle
```

---

### 4️⃣ NOTIFICATIONS TEMPS RÉEL

#### 4.1 Types de Notifications

**Type 1: Expiration Prochaine (CRITIQUE)**
```
Déclenchement: 
- 7 jours avant expiration
- 3 jours avant expiration
- 1 jour avant expiration
- Le jour de l'expiration

Canaux:
- ✅ WhatsApp (urgent)
- ✅ Email
- ✅ Push (si app installée)
- ✅ Dashboard banner

Message WhatsApp:
"⏰ [PRÉNOM]! Ton forfait expire dans [X] jours 
Renouvelle maintenant pour garder ta connexion 🌐
[LIEN TABLEAU BORD]"
```

**Type 2: Places Disponibles (PROMO)**
```
Déclenchement:
- Nouvelle place libérée dans groupe
- À la demande des places réservables
- Limite temps (48h avant placement)

Canaux:
- ✅ WhatsApp (si activé)
- ✅ Push notification
- ✅ Email digest

Message WhatsApp:
"🎉 [PRÉNOM]! Place disponible dans ton groupe
Réserve-la maintenant avec 10% de remise! 💰
Expire dans 48h
[LIEN RÉSERVATION]"
```

**Type 3: Confirmation Actions**
```
- Paiement reçu ✅
- Membre ajouté ✅
- Forfait renouvelé ✅
- Réservation confirmée ✅
- Changement mot de passe ✅

Canaux:
- Email confirmations
- WhatsApp pour paiements (important)
- Push notifications
```

**Type 4: Problèmes/Alertes**
```
- Paiement échoué ❌
- Carte déclinée
- Forfait en attente de paiement
- Membre suspendu
- Problème connexion

Canaux:
- ✅ WhatsApp (urgent)
- ✅ Email
- ✅ Push
- ✅ Dashboard banner rouge
```

**Type 5: Maintenance**
```
- Maintenance prévue
- Mise à jour système
- Nouvelles fonctionnalités

Canaux:
- Email (24h avant)
- Banner dashboard
- WhatsApp (si important)
```

#### 4.2 Système de Priorités

```
PRIORITÉ 1 (URGENT):
- Expiration 1 jour avant
- Paiement échoué
- Forfait suspendu
Distribution: WhatsApp + Email + Push
Retry: Toutes les 2h jusqu'à 24h

PRIORITÉ 2 (IMPORTANTE):
- Expiration 3-7 jours
- Places disponibles
Distribution: WhatsApp + Email + Push
Retry: 1x par jour pendant 3 jours

PRIORITÉ 3 (INFO):
- Confirmations paiement
- Mise à jour profil
Distribution: Email + Dashboard
Retry: N/A (one-time)

PRIORITÉ 4 (REMINDER):
- Complétez votre profil
- Téléchargez factures
Distribution: Email + Push
Retry: 1x par semaine
```

#### 4.3 Architecture Notifications

```
┌──────────────────────────────────────────────────┐
│ EVENT TRIGGER (Cron + Real-time events)         │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│ NOTIFICATION SERVICE                             │
│ - Vérifier trigger conditions                    │
│ - Chercher utilisateurs concernés                │
│ - Créer notification objects                     │
│ - Vérifier préférences utilisateur               │
└────────────────┬─────────────────────────────────┘
                 │
    ┌────────────┼────────────┬────────────┐
    │            │            │            │
    ▼            ▼            ▼            ▼
  WhatsApp    Email         Push       Dashboard
  (Twilio)   (SendGrid)  (Firebase)   (Real-time)
    │            │            │            │
    └────────────┴────────────┴────────────┘
                 │
                 ▼
        ┌─────────────────────┐
        │ Notification Log    │
        │ (historique, stats) │
        └─────────────────────┘
```

#### 4.4 Temps Réel avec WebSocket

```javascript
// Client-side (React)
useEffect(() => {
  const ws = new WebSocket('wss://api.mikple.com/notifications');
  
  ws.onmessage = (event) => {
    const notification = JSON.parse(event.data);
    
    // Si expiration, afficher banner rouge
    if (notification.type === 'EXPIRATION_WARNING') {
      showBanner({
        type: 'warning',
        title: 'Forfait expire bientôt!',
        action: 'Renouveler'
      });
    }
    
    // Sons/vibrations sur mobile
    playNotificationSound();
  };
  
  return () => ws.close();
}, []);
```

---

### 5️⃣ RÉSERVATION & PAIEMENTS EN AVANCE

#### 5.1 Système de Réservation

**Concept**:
- L'utilisateur voit les dates d'expiration et places futures
- Peut réserver sa place pour le prochain cycle
- Paye en avance pour confirmer la réservation

**Workflow Réservation**:

```
UTILISATEUR ACCÈDE À "RÉSERVATIONS"
        ↓
VOIR LES PLACES FUTURES DISPONIBLES:
- Cycle 1: 20 fév - 20 mar (Forfait XYZ)
  Status: 2 places dispo | Expire dans 5 jours
- Cycle 2: 20 mar - 20 avr (Forfait XYZ)
  Status: 3 places dispo | Ouvre dans 10 jours
- Cycle 3: 20 avr - 20 mai (Forfait XYZ)
  Status: 4 places dispo | Ouvre dans 35 jours
        ↓
CHOISIR UNE RÉSERVATION
        ↓
AJOUTER AU PANIER
        ↓
PAYER EN AVANCE (déduction du solde)
        ↓
CONFIRMATION:
"✅ Place réservée pour 20 mar - 20 avr!
📧 Confirmation envoyée
🔄 Renouvellement automatique"
```

#### 5.2 Règles de Réservation

```
RÈGLES:
1. Max 1 réservation future par utilisateur
2. Paiement requis pour confirmer (non-remboursable)
3. Réservation valide jusqu'à 48h avant nouvelle période
4. Après 48h: renouvellement automatique ou annulation
5. Crédits utilisés automatiquement le jour du renouvellement

CRÉDITS:
- Crédits pas utilisés: conservés 30 jours
- Crédits utilisés même mois: crédite le mois suivant
- Crédits expirés (>30j): notif d'utilisation

PRIORITÉ:
1. Réservations (ont priorité absolue)
2. Renouvellements automatiques
3. Demandes ad-hoc
```

#### 5.3 Paiements

**Méthodes acceptées**:
- 💳 Carte bancaire (Stripe/PayPal)
- 📱 Mobile Money (Orange Money, MTN Money)
- 🏦 Virement bancaire
- 💰 Porte-monnaie MIKPLÉ (crédits)

**Sécurité**:
- PCI-DSS compliant
- Chiffrement SSL
- Tokenisation cartes
- Détection fraude (Stripe Radar)

**Flux Paiement**:
```
Utilisateur → Sélectionner montant
    ↓
Choisir méthode paiement
    ↓
Remplir formulaire sécurisé (iFrame Stripe)
    ↓
2FA si nécessaire (OTP SMS)
    ↓
CONFIRMATION:
- Email reçu
- WhatsApp notification
- Crédits apparaissent instantanément
- Dashboard actualise en temps réel
    ↓
Crédit utilisé automatiquement pour:
- Renouvellement forfait
- Paiement membre
- Réservation nouvelle place
```

---

### 6️⃣ FOLLOW-UP AUTOMATISÉ

#### 6.1 Séquence d'Emails

**Jour 0** - Confirmation inscription:
```
Subject: ✅ Bienvenue sur MIKPLÉ!

Contenu:
- Confirmation compte créé
- Guide démarrage rapide
- Comment accéder tableau bord
- FAQ link
```

**Jour 1** - Accès granted + WhatsApp envoyé:
```
Subject: 🎉 Accédez à votre compte MIKPLÉ

Contenu:
- ID login: MIKPLÉ_XXXXX
- Lien tableau bord
- Tutoriel vidéo (optionnel)
- Support contact
```

**Jour 3** - Rappel si pas connecté:
```
Subject: ⏰ Activez votre compte MIKPLÉ

Contenu:
- "Vous ne vous êtes pas connecté"
- Bénéfices d'accès dashboard
- Lien connexion rapide
- Support disponible
```

**Jour 7** - Réengagement:
```
Subject: 📊 Découvrez votre tableau de bord MIKPLÉ

Contenu:
- Capture dashboard
- Fonctionnalités expliquées
- Prochaines étapes
- Offre spéciale (optionnel)
```

---

## 📊 BASE DE DONNÉES

### Schéma Utilisateurs

```sql
-- TABLE USERS
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone_whatsapp VARCHAR(20) UNIQUE NOT NULL,
  phone_moov VARCHAR(20) UNIQUE,
  profile_picture_url VARCHAR(500),
  bio TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  phone_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP,
  status ENUM('active', 'suspended', 'deleted') DEFAULT 'active',
  login_token VARCHAR(255),  -- MIKPLÉ_XXXXX
  INDEX(email),
  INDEX(phone_whatsapp)
);

-- TABLE FAMILY_GROUPS
CREATE TABLE family_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  admin_id UUID NOT NULL REFERENCES users(id),
  forfait_type VARCHAR(100) NOT NULL,  -- Moov Famille Plan type
  max_members INT DEFAULT 4,
  current_members INT DEFAULT 0,
  status ENUM('active', 'expired', 'pending') DEFAULT 'pending',
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX(admin_id),
  INDEX(status)
);

-- TABLE FAMILY_MEMBERS
CREATE TABLE family_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_group_id UUID NOT NULL REFERENCES family_groups(id),
  user_id UUID NOT NULL REFERENCES users(id),
  role ENUM('admin', 'member') DEFAULT 'member',
  status ENUM('active', 'invited', 'suspended') DEFAULT 'active',
  joined_at TIMESTAMP DEFAULT NOW(),
  invited_at TIMESTAMP,
  left_at TIMESTAMP,
  UNIQUE(family_group_id, user_id),
  INDEX(family_group_id),
  INDEX(user_id)
);

-- TABLE FORFAITS
CREATE TABLE forfaits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_group_id UUID NOT NULL REFERENCES family_groups(id),
  moov_plan_id VARCHAR(100) NOT NULL,
  plan_name VARCHAR(255) NOT NULL,
  data_gb DECIMAL(10,2),
  price_xof DECIMAL(10,2),
  renewal_date DATE NOT NULL,
  status ENUM('active', 'expired', 'canceled') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX(family_group_id),
  INDEX(renewal_date)
);

-- TABLE PAYMENTS
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  family_group_id UUID NOT NULL REFERENCES family_groups(id),
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'XOF',
  payment_method ENUM('card', 'mobile_money', 'bank', 'wallet') NOT NULL,
  status ENUM('pending', 'successful', 'failed') DEFAULT 'pending',
  stripe_payment_id VARCHAR(255),
  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX(user_id),
  INDEX(family_group_id),
  INDEX(status)
);

-- TABLE RESERVATIONS
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  family_group_id UUID NOT NULL REFERENCES family_groups(id),
  forfait_cycle_date DATE NOT NULL,
  amount_paid DECIMAL(10,2) NOT NULL,
  status ENUM('reserved', 'confirmed', 'canceled') DEFAULT 'reserved',
  reserved_at TIMESTAMP DEFAULT NOW(),
  confirmed_at TIMESTAMP,
  canceled_at TIMESTAMP,
  INDEX(user_id),
  INDEX(family_group_id),
  INDEX(forfait_cycle_date)
);

-- TABLE NOTIFICATIONS
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  type VARCHAR(50) NOT NULL,  -- 'EXPIRATION_WARNING', 'PAYMENT_RECEIVED', etc
  title VARCHAR(255) NOT NULL,
  message TEXT,
  channels JSON,  -- {"whatsapp": true, "email": true, "push": false}
  sent_at TIMESTAMP DEFAULT NOW(),
  read_at TIMESTAMP,
  status ENUM('sent', 'failed', 'pending') DEFAULT 'sent',
  INDEX(user_id),
  INDEX(type)
);

-- TABLE NOTIFICATION_PREFERENCES
CREATE TABLE notification_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id),
  email_enabled BOOLEAN DEFAULT TRUE,
  whatsapp_enabled BOOLEAN DEFAULT TRUE,
  push_enabled BOOLEAN DEFAULT FALSE,
  expiration_reminder_days INT DEFAULT 7,
  digest_frequency ENUM('daily', 'weekly', 'none') DEFAULT 'weekly',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🔗 INTÉGRATION WHATSAPP

### 5.1 Fournisseur: Twilio

**Configuration Twilio**:
```
Account SID: ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Auth Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Messaging Service SID: MGxxxxxxxxxxxxxxxxxxxxxxxxx
WhatsApp Sandbox Number: +14155238886
Production Approved Number: +229XXXXXXXX (Bénin)
```

**Setup**:
1. Créer compte Twilio
2. Configurer WhatsApp Business Account
3. Soumettre pour approbation (48-72h)
4. Recevoir numéro WhatsApp Bénin (+229)

### 5.2 API Calls

**Envoyer message texte**:
```python
from twilio.rest import Client

client = Client(account_sid, auth_token)
message = client.messages.create(
    body="🎉 Bienvenue JEAN!\n\nMIKPLÉ_A7K9M2\nTmpPass2026!\n\nhttps://app.mikple.com/login",
    from_="+229XXXXXXXX",  # WhatsApp Bénin
    to="+22964409691"
)
```

**Envoyer template**:
```python
# Nécessite approbation template auprès de Meta
message = client.messages.create(
    messaging_service_sid="MGxxxxxxxxx",
    body_variables=["JEAN", "5", "20 fév"],
    template_name="forfait_expire_warning",
    to="+22964409691"
)
```

**Logs & Tracking**:
- Webhook pour status delivery (sent, delivered, failed)
- Retry automatique après 5min si failed
- Max 3 retries

### 5.3 Coûts Estimation

```
Tarifs Twilio WhatsApp:
- Message sortant: ~0.05 USD = ~30 XOF
- Message entrant: ~0.01 USD = ~6 XOF
- Session: 0.02 USD = ~12 XOF (24h)

Estimation 1000 users:
- 1000 confirmations inscription: 30 000 XOF
- 500 rappels expiration/mois: 15 000 XOF
- 200 confirmations paiement/mois: 6 000 XOF
- Total/mois: ~20 000-30 000 XOF
```

---

## 🏪 DASHBOARD - DÉTAILS TECHNIQUES

### 6.1 Stack Frontend

```
Framework: React 18 + TypeScript
Build tool: Vite
State Management: Redux/Zustand
UI Components: shadcn/ui (existant)
Charts: Recharts / Chart.js
Real-time: Pusher / Socket.io
Forms: React Hook Form
Validation: Zod / Yup
HTTP Client: Axios/TanStack Query
Styling: Tailwind CSS (existant)
Icons: Lucide-react (existant)
```

### 6.2 Pages & Routes

```
AUTHENTICATED ROUTES:
├─ /dashboard
│  ├─ /dashboard/home (Overview)
│  ├─ /dashboard/forfait (Détails forfait)
│  ├─ /dashboard/famille (Gestion famille)
│  ├─ /dashboard/facturation (Paiements)
│  ├─ /dashboard/reservations (Réservations)
│  ├─ /dashboard/notifications (Historique)
│  └─ /dashboard/account (Compte & Sécurité)
├─ /auth
│  ├─ /auth/login
│  ├─ /auth/register
│  ├─ /auth/forgot-password
│  ├─ /auth/reset-password
│  └─ /auth/2fa
└─ PUBLIC ROUTES:
   ├─ / (Landing page - existant)
   ├─ /inscription (Form - modifié)
   ├─ /forfaits (Inchangé)
   ├─ /a-propos (Inchangé)
   ├─ /faq (Inchangé)
   └─ /privacy-policy (Inchangé)
```

### 6.3 Components Nouveaux

```
Header:
├─ TopNav (logo, user menu, notifications bell)
├─ Sidebar (navigation principale)
└─ Breadcrumb

Dashboard Pages:
├─ HomeOverview (hero forfait + stats)
├─ ForfaitDetails (data usage, graphs)
├─ FamilyManagement (membres list, invite)
├─ BillingHistory (table paiements)
├─ Reservations (future cycles)
├─ NotificationCenter (log + preferences)
└─ AccountSettings (profile, security, sessions)

Shared Components:
├─ Card (forfait status)
├─ Alert (notifications inline)
├─ Modal (confirm actions)
├─ Loader (states)
├─ Avatar (user profile pics)
├─ Badge (status indicators)
└─ DataTable (members, payments)
```

---

## 🔐 SYSTÈME D'AUTHENTIFICATION

### 7.1 Authentification & JWT

**Processus Login**:
```
1. User rentre email + password
2. Vérifier existance user
3. Comparer password hash (bcrypt)
4. Générer tokens:
   - Access Token (15 minutes) - Claims: user_id, role, exp
   - Refresh Token (7 jours) - Stocké en HttpOnly Cookie
5. Retourner access token au client
6. Client stocke en localStorage/sessionStorage
7. Chaque requête API: header Authorization: Bearer [token]
```

**Tokens JWT**:
```json
ACCESS TOKEN (15min):
{
  "sub": "user_uuid",
  "email": "user@example.com",
  "role": "member",
  "family_id": "family_uuid",
  "iat": 1675220000,
  "exp": 1675220900
}

REFRESH TOKEN (7 jours):
{
  "sub": "user_uuid",
  "type": "refresh",
  "iat": 1675220000,
  "exp": 1675825600
}
```

### 7.2 Sécurité

- ✅ Passwords hashed avec bcrypt (12 rounds)
- ✅ Sessions timeout après 30min inactivité
- ✅ CSRF protection sur formulaires
- ✅ Rate limiting login (5 tentatives/5min)
- ✅ IP logging pour chaque login
- ✅ Détection device non autorisé
- ✅ 2FA optionnel (SMS OTP)
- ✅ Logout depuis tous appareils

---

## 💳 PAIEMENTS

### 8.1 Intégration Stripe

```
Publishable Key: pk_live_xxxxxxxxxxxxx
Secret Key: sk_live_xxxxxxxxxxxxx (backend only!)

Produits:
- Moov Famille Plan Plus: price_1234567890
- Moov Famille Plan Pro: price_0987654321

Webhooks:
- payment_intent.succeeded
- payment_intent.payment_failed
- charge.refunded
```

### 8.2 Flux Checkout

```
User clique "Payer" 
    ↓
Crée Payment Intent (Stripe backend)
    ↓
Retourne client secret
    ↓
Frontend: Charg form (Stripe Elements)
    ↓
User rentre détails + 3D Secure si nécessaire
    ↓
Confirm payment (frontend)
    ↓
Stripe webhook: payment_intent.succeeded
    ↓
Backend: Créditer compte user
    ↓
Email: Confirmer paiement
    ↓
WhatsApp: "Paiement reçu ✅"
    ↓
Dashboard: Crédits apparaissent
```

---

## 🔔 NOTIFICATIONS TEMPS RÉEL (TECH)

### 9.1 Architecture

**Option 1: Pusher**
```
Avantages:
- Managed service (moins de devops)
- Scalable automatiquement
- Support excellent

Tarif:
- Free tier: 100k messages/jour (dev)
- Starter: $49/mois + usage

Setup:
- npm install pusher
- API key + secret
- Subscribe à channels
```

**Option 2: Firebase Realtime DB**
```
Avantages:
- Free tier généreux
- Google infrastructure
- Intégration facile

Tarif:
- Free: 100 connexions simultanées
- Payant: $1/GB données

Setup:
- Firebase project
- Realtime DB
- Firebase SDK
```

**Recommandation**: Firebase (coût + scalabilité)

### 9.2 Exemple Notification Temps Réel

```javascript
// Backend (Node.js)
const db = admin.database();

// Déclenche notification expiration
async function checkExpirations() {
  const forfaits = await db.ref('forfaits')
    .orderByChild('days_remaining')
    .startAt(0)
    .endAt(7)
    .get();
  
  forfaits.forEach(forfait => {
    const user = forfait.val();
    
    // Envoyer WhatsApp
    await sendWhatsAppMessage(user.phone, 
      `⏰ Ton forfait expire dans ${user.days_remaining} jours!`
    );
    
    // Push real-time update
    db.ref(`notifications/${user.id}`).push({
      type: 'EXPIRATION_WARNING',
      message: `Forfait expire dans ${user.days_remaining} jours`,
      timestamp: Date.now()
    });
  });
}

// Frontend (React)
useEffect(() => {
  const db = getDatabase();
  const notifRef = ref(db, `notifications/${userId}`);
  
  onValue(notifRef, (snapshot) => {
    const notification = snapshot.val();
    if (notification) {
      showAlert({
        type: 'warning',
        title: notification.message
      });
    }
  });
}, [userId]);
```

---

## 📈 ANALYTICS

### 10.1 Métriques Clés

**Utilisateurs**:
- Total users
- Active users (monthly, weekly)
- New signups/jour
- Retention rate (7, 30, 90 jours)
- Churn rate

**Engagement**:
- Dashboard login frequency
- Average session duration
- Feature adoption rates
- WhatsApp message open rates

**Business**:
- Revenue MRR
- Average payment value
- Conversion rate (signup → payment)
- Lifetime value (LTV)
- Customer acquisition cost (CAC)

**Forfaits**:
- Forfaits actifs par type
- Moyennes par groupe
- Data usage patterns
- Renouvellement success rate

### 10.2 Implementation

```
Google Analytics 4 (frontend)
├─ Track page views
├─ User signup events
├─ Payment events
└─ Feature interactions

Mixpanel (backend)
├─ Server-side events
├─ API call tracking
├─ Database events
└─ Error tracking

Sentry (error tracking)
├─ JavaScript errors
├─ API errors
├─ Performance monitoring
└─ Alerting
```

---

## 🏗️ INFRASTRUCTURE

### 11.1 Architecture Proposée

```
┌─────────────────────────────────────────────┐
│          CLOUDFLARE CDN                     │
│  (Cache static assets, DDoS protection)     │
└────────────────┬────────────────────────────┘
                 │
    ┌────────────┴────────────┐
    │                         │
    ▼                         ▼
┌─────────────┐         ┌──────────────┐
│ Frontend    │         │  Backend API │
│ (Netlify)   │         │  (Heroku/    │
│             │         │   Railway)   │
│ React App   │         │              │
│ (React18)   │         │ Node.js      │
│ Vite        │         │ Express/     │
│ Tailwind    │         │ Fastify      │
└────────────┬┘         └──────┬───────┘
             │                 │
             │                 ▼
             │          ┌──────────────────┐
             │          │ PostgreSQL DB    │
             │          │ (AWS RDS)        │
             │          └──────────────────┘
             │
             │          ┌──────────────────┐
             └─────────→│ Redis Cache      │
                        │ (Real-time)      │
                        └──────────────────┘

External Services:
├─ Twilio (WhatsApp)
├─ Stripe (Payments)
├─ SendGrid (Email)
├─ Firebase (Real-time DB)
├─ AWS S3 (File storage)
└─ Google Analytics
```

### 11.2 Déploiement

**Frontend (Netlify)**:
```
- Branch: main → Auto deploy
- Build: bun run build
- Publish: dist/
- CDN: Netlify CDN
- SSL: Auto (Let's Encrypt)
- Performance: Core Web Vitals optimized
```

**Backend (Railway/Heroku)**:
```
- Docker container
- Node.js runtime
- Environment variables: .env
- Database: PostgreSQL managed
- Auto-scaling: Based on CPU/memory
- Health checks: /health endpoint
```

**Database**:
```
PostgreSQL 14+ (AWS RDS)
├─ Multi-AZ for HA
├─ Daily automated backups
├─ Read replicas for scaling
├─ SSL connections
└─ Monitoring via CloudWatch
```

---

## ⏱️ TIMELINE & LIVRABLES

### Phase 1: Foundation (Semaines 1-2)

**Livrables**:
- [ ] Auth system (Register, Login, JWT)
- [ ] Database schema finalisé
- [ ] API endpoints de base (CRUD users)
- [ ] Twilio integration setup
- [ ] Stripe integration setup

**Tests**:
- [ ] Unit tests (Auth, DB models)
- [ ] API integration tests
- [ ] Manual testing scenarios

---

### Phase 2: Dashboard (Semaines 3-4)

**Livrables**:
- [ ] Dashboard layout (Sidebar, Header)
- [ ] Home overview page
- [ ] Forfait details page
- [ ] Family management page
- [ ] Real-time updates (WebSocket)

**UI/UX**:
- [ ] Responsive design (mobile-first)
- [ ] Dark mode support (optionnel)
- [ ] Accessibility (WCAG 2.1 AA)

---

### Phase 3: Notifications & Payments (Semaines 5-6)

**Livrables**:
- [ ] WhatsApp automation (template messages)
- [ ] Email notifications (SendGrid)
- [ ] Push notifications (Firebase)
- [ ] Payment integration (Stripe checkout)
- [ ] Webhooks setup (Stripe, Twilio)

**Features**:
- [ ] Expiration reminders
- [ ] Payment confirmations
- [ ] Reservation system

---

### Phase 4: Testing & Polish (Semaines 7-8)

**QA**:
- [ ] End-to-end tests (Cypress)
- [ ] Load testing (k6)
- [ ] Security audit (OWASP)
- [ ] Performance testing (Lighthouse)

**Optimizations**:
- [ ] SEO audit
- [ ] Performance optimization
- [ ] Bug fixes & refinement

---

### Phase 5: Deployment & Launch (Semaine 9)

**Pre-launch**:
- [ ] Staging deployment
- [ ] User acceptance testing (UAT)
- [ ] Production database setup
- [ ] Monitoring & alerting setup

**Launch**:
- [ ] Production deployment
- [ ] User onboarding
- [ ] Support training
- [ ] Analytics monitoring

---

## 📦 LIVRABLES FINAUX

```
├─ Frontend (React)
│  ├─ src/
│  │  ├─ pages/ (Dashboard pages)
│  │  ├─ components/ (Reusable components)
│  │  ├─ hooks/ (Custom hooks)
│  │  ├─ services/ (API clients)
│  │  ├─ store/ (State management)
│  │  ├─ types/ (TypeScript types)
│  │  └─ utils/ (Helpers)
│  ├─ vite.config.ts
│  ├─ tsconfig.json
│  └─ package.json
│
├─ Backend (Node.js)
│  ├─ src/
│  │  ├─ routes/ (API endpoints)
│  │  ├─ controllers/ (Business logic)
│  │  ├─ models/ (Database models)
│  │  ├─ services/ (External integrations)
│  │  ├─ middleware/ (Auth, validation)
│  │  ├─ utils/ (Helpers)
│  │  └─ config/ (Configuration)
│  ├─ Dockerfile
│  ├─ docker-compose.yml
│  ├─ .env.example
│  └─ package.json
│
├─ Database
│  ├─ migrations/ (Schema versions)
│  ├─ seeds/ (Test data)
│  └─ schema.sql (Full DDL)
│
├─ Documentation
│  ├─ API.md (API documentation)
│  ├─ ARCHITECTURE.md (System design)
│  ├─ DEPLOYMENT.md (Deployment guide)
│  ├─ TESTING.md (Test strategy)
│  └─ USER_GUIDE.md (End-user guide)
│
└─ Tests
   ├─ __tests__/
   │  ├─ unit/ (Unit tests)
   │  ├─ integration/ (Integration tests)
   │  └─ e2e/ (End-to-end tests)
   └─ coverage/ (Test coverage reports)
```

---

## 🎯 RÉSUMÉ EXÉCUTIF

### Objectifs Atteints:
✅ Automatiser la gestion post-inscription  
✅ Fournir suivi temps réel aux utilisateurs  
✅ Générer revenue via paiements en avance  
✅ Réduire charge support via dashboard  
✅ Améliorer retention & engagement  

### Avantages pour MIDEESSI:
💰 Revenue supplémentaire (réservations)  
📈 Meilleur engagement utilisateurs  
🤖 Automatisation support (moins de ressources)  
📊 Analytics détaillées (insights business)  
🌍 Scalabilité internationale  

### Avantages pour Utilisateurs:
📱 Accès 24/7 au statut forfait  
🔔 Alertes proactives (jamais d'expiration surprise)  
💳 Paiements flexibles & en avance  
👥 Gestion facile de la famille  
🛡️ Sécurité & transparence complète  

---

**Document préparé pour: MIDEESSI**  
**Version: 2.0 Beta Specification**  
**Status: FINAL - Prêt pour développement**

---

*Remerciements: Merci d'avoir choisi MIKPLÉ pour votre indépendance technologique béninoise! 🇧🇯*
