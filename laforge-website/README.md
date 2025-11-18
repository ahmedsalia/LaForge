# La Forge Basketball - Site Web Officiel 🏀

Site web moderne et professionnel pour l'équipe de basketball La Forge, basée à Montréal, Québec.

**Excellence • Passion • Performance**

## ✨ Fonctionnalités

- **Page d'accueil** avec hero animé et sections dynamiques
- **Page Équipe** pour afficher tous les joueurs avec filtres
- **Calendrier** des matchs et entraînements
- **Actualités** avec système de blog
- **Galerie** photos et vidéos
- **Page Contact** avec formulaire
- **Admin Sanity CMS** pour gérer tout le contenu facilement

## 🚀 Technologies Utilisées

- **Next.js 16** - Framework React moderne
- **TypeScript** - Pour un code plus robuste
- **Tailwind CSS** - Styling responsive et moderne
- **Sanity CMS** - Gestion de contenu headless
- **Framer Motion** - Animations fluides
- **React Icons** - Bibliothèque d'icônes

## 📦 Installation et Configuration

### 1. Installer les dépendances

```bash
npm install
```

### 2. Configurer Sanity CMS

1. Créez un compte sur [sanity.io](https://www.sanity.io/)
2. Créez un nouveau projet Sanity
3. Copiez le Project ID
4. Modifiez le fichier `.env.local` :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=votre-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-18
```

### 3. Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### 4. Accéder à l'interface admin Sanity

Naviguez vers [http://localhost:3000/studio](http://localhost:3000/studio)

## 🎨 Couleurs de la Marque

Le site utilise la palette de couleurs officielle de La Forge Basketball :

- **Vert Forge** : `#0F3B2C` - Couleur principale
- **Platine** : `#E5E4E2` - Accents et titres
- **Vert Forêt** : `#1B4B3A` - Couleur secondaire
- **Blanc Platine** : `#F0F0F0` - Texte principal
- **Noir Profond** : `#0D0D0D` - Arrière-plans

## 📝 Guide d'Utilisation de Sanity CMS

### Accéder à l'Admin

1. Démarrez le site avec `npm run dev`
2. Allez sur `http://localhost:3000/studio`
3. Connectez-vous avec votre compte Sanity

### Gérer les Joueurs

1. Dans Sanity Studio, cliquez sur **"Joueurs"**
2. Cliquez sur **"Create"** pour ajouter un nouveau joueur
3. Remplissez les informations :
   - Nom complet
   - Photo du joueur
   - Numéro de maillot
   - Position (Guard, Forward, Center)
   - Taille et poids
   - Informations personnelles
   - Statistiques
4. Cliquez sur **"Publish"** pour sauvegarder

### Ajouter des Articles/Actualités

1. Cliquez sur **"Articles"**
2. **"Create"** → Nouveau article
3. Remplissez :
   - Titre
   - Extrait (résumé court)
   - Image principale
   - Catégorie
   - Contenu (éditeur riche avec images)
4. **"Publish"** pour publier

### Créer des Matchs

1. Cliquez sur **"Matchs"**
2. **"Create"** → Nouveau match
3. Informations :
   - Adversaire
   - Date et heure
   - Lieu
   - Domicile ou Extérieur
   - Statut (À venir, En cours, Terminé)
   - Scores (si terminé)
4. **"Publish"**

### Gérer la Galerie

1. Cliquez sur **"Galerie"**
2. **"Create"** → Nouvelle galerie
3. Ajoutez :
   - Titre de la galerie
   - Description
   - Date
   - Catégorie
   - Image de couverture
   - Multiple images
   - Liens vidéos (optionnel)
4. **"Publish"**

## 🛠️ Commandes Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Vérifier le code
npm run lint
```

## 📁 Structure du Projet

```
laforge-website/
├── app/                      # Pages Next.js
│   ├── page.tsx             # Page d'accueil
│   ├── equipe/              # Page équipe
│   ├── calendrier/          # Page calendrier
│   ├── actualites/          # Page actualités
│   ├── galerie/             # Page galerie
│   ├── contact/             # Page contact
│   └── studio/              # Sanity Studio
├── components/
│   ├── common/              # Composants réutilisables
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/            # Sections de page
│       ├── Hero.tsx
│       ├── TeamStats.tsx
│       ├── FeaturedNews.tsx
│       ├── UpcomingMatches.tsx
│       └── LatestGallery.tsx
├── sanity/
│   ├── schemas/             # Schémas de données
│   │   ├── player.ts
│   │   ├── article.ts
│   │   ├── match.ts
│   │   ├── training.ts
│   │   └── gallery.ts
│   └── lib/                 # Utilitaires Sanity
├── types/                   # Types TypeScript
└── public/                  # Fichiers statiques
```

## 🎯 Prochaines Étapes

Pour compléter le site, vous devrez :

1. ✅ Configurer votre compte Sanity avec un vrai Project ID
2. ✅ Ajouter les vrais joueurs dans Sanity Studio
3. ✅ Télécharger les photos des joueurs
4. ✅ Importer le calendrier des matchs 2025-2026
5. ✅ Créer les premiers articles d'actualités
6. ✅ Ajouter des galeries photos
7. ✅ Connecter le formulaire de contact à un service email
8. ✅ Déployer sur Vercel ou votre hébergeur préféré

## 🌐 Déploiement

### Déployer sur Vercel (recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre repository GitHub
3. Ajoutez les variables d'environnement
4. Déployez !

## 💡 Support

Pour toute question :

- Email : laforgebasketball@gmail.com
- Téléphone : (514) 999-2550

## 📄 Licence

© 2025 La Forge Basketball. Tous droits réservés.
