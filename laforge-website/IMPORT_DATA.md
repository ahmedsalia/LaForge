# 📦 Guide d'Import de Données - La Forge Basketball

Ce guide explique comment importer des joueurs, matchs, staff et autres données en masse via des fichiers JSON.

## 🚀 Démarrage Rapide

### 1. Configuration du Token Sanity

Pour importer des données, vous avez besoin d'un token d'API Sanity avec permissions d'écriture.

**Obtenir le token:**

1. Allez sur [sanity.io/manage](https://sanity.io/manage)
2. Sélectionnez votre projet (`rz42wlut`)
3. Allez dans **API** → **Tokens**
4. Cliquez sur **Add New Token**
5. Donnez un nom (ex: "Import Script")
6. Sélectionnez les permissions: **Editor** ou **Admin**
7. Copiez le token généré

**Ajouter le token dans `.env.local`:**

```bash
# Ajoutez cette ligne à votre fichier .env.local
SANITY_API_TOKEN=votre-token-ici
```

### 2. Utilisation Basique

```bash
# Importer des joueurs
npm run import data/examples/sample-players.json

# Importer des matchs
npm run import data/examples/sample-matches.json

# Importer tout en une fois
npm run import data/examples/complete-import.json
```

## 📋 Format des Fichiers JSON

### Structure Générale

Vous pouvez créer un fichier JSON contenant un ou plusieurs types de données:

```json
{
  "players": [...],
  "staff": [...],
  "matches": [...],
  "articles": [...],
  "galleries": [...],
  "history": [...]
}
```

---

## 🏀 Format: Joueurs (Players)

### Exemple Complet

```json
{
  "players": [
    {
      "name": "Marcus Johnson",
      "jerseyNumber": 23,
      "position": "guard",
      "height": "6'2\"",
      "weight": 185,
      "birthDate": "2006-03-15",
      "age": 18,
      "nationality": "Canada",
      "canadianResident": true,
      "schoolLevel": "Cégep 1",
      "gpa": 3.8,
      "email": "marcus.johnson@example.com",
      "phone": "+1 514-555-0123",
      "instagram": "@marcusj23",
      "highlightVideo": "https://youtube.com/...",
      "bio": "Guard dynamique avec une excellente vision du jeu.",
      "stats": {
        "ppg": 22.5,
        "rpg": 4.2,
        "apg": 6.8,
        "fgPercentage": 48.5,
        "threePointPercentage": 42.0,
        "ftPercentage": 85.5
      },
      "isActive": true
    }
  ]
}
```

### Champs Obligatoires

- `name` (string): Nom complet du joueur
- `jerseyNumber` (number): Numéro de maillot
- `position` (string): Position - `"guard"`, `"forward"`, ou `"center"`

### Champs Optionnels

- `height` (string): Taille (ex: "6'2\"")
- `weight` (number): Poids en livres
- `birthDate` (string): Date de naissance (format ISO: "YYYY-MM-DD")
- `age` (number): Âge
- `nationality` (string): Nationalité (défaut: "Canada")
- `canadianResident` (boolean): Résident canadien (défaut: true)
- `schoolLevel` (string): Niveau scolaire
- `gpa` (number): Moyenne générale
- `email` (string): Courriel
- `phone` (string): Téléphone
- `instagram` (string): Compte Instagram
- `highlightVideo` (string): URL vidéo highlights
- `bio` (string): Biographie
- `stats` (object): Statistiques (ppg, rpg, apg, etc.)
- `isActive` (boolean): Joueur actif (défaut: true)
- `slug` (string): Slug personnalisé (auto-généré si absent)

---

## 🏆 Format: Matchs (Matches)

### Match À Venir

```json
{
  "matches": [
    {
      "opponent": "Montreal Phoenix",
      "date": "2025-03-22T19:00:00",
      "location": "Pavillon Durocher",
      "isHome": true,
      "status": "upcoming",
      "isPlayoff": false,
      "period": "period2"
    }
  ]
}
```

### Match Terminé avec MVP

```json
{
  "matches": [
    {
      "opponent": "Quebec Warriors",
      "date": "2025-03-15T20:00:00",
      "location": "Centre Bell",
      "isHome": false,
      "status": "finished",
      "ourScore": 98,
      "opponentScore": 72,
      "mvpRef": 23,
      "xFactorRef": 7,
      "highlights": "Victoire dominante...",
      "recap": "La Forge Basketball a livré une performance impressionnante...",
      "teamStats": {
        "fgPercentage": 52.3,
        "threePointPercentage": 41.2,
        "ftPercentage": 82.5,
        "totalRebounds": 45,
        "assists": 24,
        "steals": 12,
        "blocks": 6,
        "turnovers": 11
      },
      "autoGenerateArticle": true
    }
  ]
}
```

### Champs Obligatoires

- `opponent` (string): Nom de l'équipe adverse
- `date` (string): Date et heure du match (format ISO: "YYYY-MM-DDTHH:MM:SS")
- `location` (string): Lieu du match
- `isHome` (boolean): Match à domicile

### Champs Optionnels

- `status` (string): Statut - `"upcoming"`, `"live"`, `"finished"`, `"cancelled"` (défaut: "upcoming")
- `isPlayoff` (boolean): Match de playoffs (défaut: false)
- `period` (string): Période - `"period1"`, `"period2"`, `"playoffs"`
- `ourScore` (number): Score de La Forge
- `opponentScore` (number): Score adversaire
- `mvpRef` (number): Numéro de maillot du MVP
- `xFactorRef` (number): Numéro de maillot du X-Factor
- `highlights` (string): Points saillants
- `recap` (string): Récapitulatif détaillé
- `teamStats` (object): Statistiques d'équipe
- `autoGenerateArticle` (boolean): Générer article automatiquement
- `slug` (string): Slug personnalisé (auto-généré si absent)

**Note:** `mvpRef` et `xFactorRef` doivent correspondre au numéro de maillot d'un joueur déjà créé.

---

## 👥 Format: Staff

### Exemple

```json
{
  "staff": [
    {
      "name": "Ahmed Salia Touré",
      "role": "head_coach",
      "bio": "Entraîneur-chef passionné...",
      "experience": 15,
      "specialties": [
        "Développement offensif",
        "Stratégies de jeu"
      ],
      "email": "ahmed@laforgebasketball.com",
      "phone": "+1 514-555-0100",
      "achievements": [
        "Champion provincial 2022",
        "Coach de l'année 2023"
      ]
    }
  ]
}
```

### Champs Obligatoires

- `name` (string): Nom complet
- `role` (string): Rôle - `"head_coach"`, `"assistant_coach"`, `"guard_coach"`, `"physical_trainer"`, `"physiotherapist"`, `"video_analyst"`, `"manager"`, `"general_manager"`, `"other"`

### Champs Optionnels

- `customRole` (string): Rôle personnalisé
- `bio` (string): Biographie
- `experience` (number): Années d'expérience
- `specialties` (array): Liste des spécialités
- `email` (string): Courriel
- `phone` (string): Téléphone
- `linkedin` (string): Profil LinkedIn
- `achievements` (array): Liste des réalisations
- `slug` (string): Slug personnalisé

---

## 📰 Format: Articles

### Exemple

```json
{
  "articles": [
    {
      "title": "Victoire éclatante contre les Titans",
      "excerpt": "Notre équipe a dominé le match...",
      "category": "match",
      "publishedAt": "2025-03-16T10:00:00",
      "content": "La Forge Basketball a livré une performance exceptionnelle...",
      "author": "La Forge Basketball",
      "featured": true
    }
  ]
}
```

### Champs Obligatoires

- `title` (string): Titre de l'article
- `excerpt` (string): Extrait/résumé
- `category` (string): Catégorie - `"match"`, `"training"`, `"team"`, `"player"`, `"event"`, `"other"`

### Champs Optionnels

- `publishedAt` (string): Date de publication (défaut: maintenant)
- `content` (string): Contenu complet
- `author` (string): Auteur (défaut: "La Forge Basketball")
- `featured` (boolean): Article en vedette (défaut: false)
- `slug` (string): Slug personnalisé

---

## 📸 Format: Galeries

### Exemple

```json
{
  "galleries": [
    {
      "title": "Match contre Montreal Phoenix",
      "description": "Photos du match épique...",
      "date": "2025-03-15T19:00:00",
      "category": "match"
    }
  ]
}
```

### Champs Obligatoires

- `title` (string): Titre de la galerie
- `category` (string): Catégorie - `"match"`, `"training"`, `"event"`, `"team"`, `"other"`

### Champs Optionnels

- `description` (string): Description
- `date` (string): Date (défaut: maintenant)
- `slug` (string): Slug personnalisé

**Note:** Les images doivent être ajoutées manuellement via Sanity Studio après l'import.

---

## 📜 Format: Histoire

### Exemple

```json
{
  "history": [
    {
      "title": "Fondation de La Forge Basketball",
      "year": 2020,
      "excerpt": "Création de l'équipe avec une vision claire d'excellence.",
      "content": "La Forge Basketball a été fondée en 2020...",
      "category": "foundation",
      "order": 1,
      "featured": true
    }
  ]
}
```

### Champs Obligatoires

- `title` (string): Titre de l'événement
- `year` (number): Année de l'événement
- `excerpt` (string): Extrait/résumé

### Champs Optionnels

- `content` (string): Description détaillée
- `category` (string): Catégorie - `"foundation"`, `"milestone"`, `"victory"`, `"expansion"`, `"other"` (défaut: "milestone")
- `order` (number): Ordre d'affichage
- `featured` (boolean): Événement en vedette (défaut: false)
- `slug` (string): Slug personnalisé

---

## 💡 Conseils et Bonnes Pratiques

### 1. Import Progressif

Importez les données dans cet ordre:

1. **Joueurs d'abord** (pour les références MVP/X-Factor)
2. **Staff**
3. **Matchs** (qui référencent les joueurs)
4. **Articles, galeries, histoire**

### 2. Validation des Données

Avant l'import, vérifiez:

- ✅ Les numéros de maillot sont uniques
- ✅ Les positions sont valides (`guard`, `forward`, `center`)
- ✅ Les dates sont au format ISO (YYYY-MM-DDTHH:MM:SS)
- ✅ Les références MVP/X-Factor correspondent à des joueurs existants

### 3. Gestion des Erreurs

Si un import échoue:

1. Vérifiez les messages d'erreur dans la console
2. Corrigez les données problématiques
3. Relancez l'import (les doublons seront évités)

### 4. Import Partiel

Vous pouvez créer des fichiers pour un seul type:

```json
{
  "players": [
    { ... },
    { ... }
  ]
}
```

### 5. Slugs Automatiques

Si vous ne spécifiez pas de `slug`, il sera généré automatiquement:

- "Marcus Johnson" → `"marcus-johnson"`
- "Montreal Phoenix - 2025-03-22" → `"montreal-phoenix-2025-03-22"`

---

## 🔧 Commandes Utiles

```bash
# Voir les exemples disponibles
ls data/examples/

# Importer un fichier spécifique
npm run import data/mes-joueurs.json

# Créer votre propre fichier d'import
cp data/examples/sample-players.json data/saison-2025.json
# Éditez data/saison-2025.json avec vos données
npm run import data/saison-2025.json
```

---

## 🚨 Dépannage

### Erreur: "SANITY_API_TOKEN is not defined"

Solution: Ajoutez votre token dans `.env.local`

```bash
SANITY_API_TOKEN=votre-token-ici
```

### Erreur: "Player not found for MVP"

Solution: Importez les joueurs AVANT les matchs qui les référencent

### Erreur: "Duplicate slug"

Solution: Sanity a déjà un document avec ce slug. Modifiez le slug ou supprimez le document existant dans le Studio.

---

## 📞 Support

Pour toute question ou problème:

1. Consultez les exemples dans `data/examples/`
2. Vérifiez les messages d'erreur détaillés dans la console
3. Assurez-vous que votre token Sanity a les bonnes permissions

---

## 🎯 Exemple Complet: Import de Saison

Voici comment importer une saison complète:

**Fichier: `data/saison-2025.json`**

```json
{
  "players": [
    { "name": "Player 1", "jerseyNumber": 1, "position": "guard" },
    { "name": "Player 2", "jerseyNumber": 2, "position": "forward" }
  ],
  "staff": [
    { "name": "Coach 1", "role": "head_coach" }
  ],
  "matches": [
    {
      "opponent": "Team A",
      "date": "2025-04-01T19:00:00",
      "location": "Our Gym",
      "isHome": true,
      "status": "upcoming"
    }
  ],
  "history": [
    {
      "title": "Saison 2025",
      "year": 2025,
      "excerpt": "Début de notre meilleure saison!"
    }
  ]
}
```

**Commande:**

```bash
npm run import data/saison-2025.json
```

**Résultat:**

```
🚀 Import de données depuis: data/saison-2025.json

🏀 Import de 2 joueurs...
  ✅ Player 1 (#1)
  ✅ Player 2 (#2)
📊 Joueurs: 2 réussis, 0 erreurs

👥 Import de 1 membres du staff...
  ✅ Coach 1 (head_coach)
📊 Staff: 1 réussis, 0 erreurs

🏆 Import de 1 matchs...
  ✅ Team A (2025-04-01T19:00:00)
📊 Matchs: 1 réussis, 0 erreurs

📜 Import de 1 événements historiques...
  ✅ 2025 - Saison 2025
📊 Histoire: 1 réussis, 0 erreurs

🎉 Import terminé!

📈 Résumé global:
  ✅ Total réussis: 5
  ❌ Total erreurs: 0
```

Vos données apparaissent immédiatement sur le site! 🎉
