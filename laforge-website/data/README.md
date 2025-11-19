# 📦 Import de Données - Guide Rapide

Ce dossier contient vos fichiers de données à importer dans Sanity.

## 🚀 Démarrage Rapide en 3 Étapes

### 1. Obtenez votre Token Sanity

```bash
# 1. Allez sur https://sanity.io/manage
# 2. Sélectionnez votre projet (rz42wlut)
# 3. API → Tokens → Add New Token
# 4. Permissions: Editor ou Admin
# 5. Copiez le token
```

### 2. Ajoutez le Token dans .env.local

```bash
# Ouvrez .env.local et ajoutez:
SANITY_API_TOKEN=votre-token-ici
```

### 3. Lancez l'Import

```bash
# Importer les exemples
npm run import data/examples/sample-players.json

# Ou créez votre propre fichier
npm run import data/mes-donnees.json
```

## 📋 Fichiers d'Exemples Disponibles

Dans le dossier `examples/`:

- **sample-players.json** - 3 joueurs exemples
- **sample-matches.json** - 3 matchs (à venir et terminés)
- **sample-staff.json** - 4 membres du staff
- **complete-import.json** - Tous les types de données

## 📝 Format des Données

### Joueurs (Minimum)

```json
{
  "players": [
    {
      "name": "Marcus Johnson",
      "jerseyNumber": 23,
      "position": "guard"
    }
  ]
}
```

### Matchs À Venir

```json
{
  "matches": [
    {
      "opponent": "Montreal Phoenix",
      "date": "2025-03-22T19:00:00",
      "location": "Pavillon Durocher",
      "isHome": true,
      "status": "upcoming"
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
      "xFactorRef": 7
    }
  ]
}
```

**Note:** `mvpRef` et `xFactorRef` sont les numéros de maillot des joueurs.

### Staff

```json
{
  "staff": [
    {
      "name": "Ahmed Salia Touré",
      "role": "head_coach",
      "experience": 15
    }
  ]
}
```

## 📚 Documentation Complète

Consultez **[IMPORT_DATA.md](../IMPORT_DATA.md)** à la racine du projet pour:

- Tous les champs disponibles pour chaque type
- Exemples détaillés
- Validation des données
- Dépannage

## 🔄 Workflow Recommandé

### Import d'une Nouvelle Saison

**1. Créez votre fichier `saison-2025.json`:**

```json
{
  "players": [
    { "name": "Joueur 1", "jerseyNumber": 1, "position": "guard" },
    { "name": "Joueur 2", "jerseyNumber": 2, "position": "forward" }
  ],
  "staff": [
    { "name": "Coach 1", "role": "head_coach" }
  ],
  "matches": [
    {
      "opponent": "Équipe A",
      "date": "2025-04-01T19:00:00",
      "location": "Notre Gym",
      "isHome": true,
      "status": "upcoming"
    }
  ]
}
```

**2. Importez:**

```bash
npm run import data/saison-2025.json
```

**3. Vérifiez sur le site:**

- Les joueurs apparaissent sur `/equipe`
- Les matchs sur la page d'accueil
- Le staff sur `/equipe`

## ⚡ Commandes Utiles

```bash
# Voir les exemples
ls data/examples/

# Copier un exemple
cp data/examples/sample-players.json data/mes-joueurs.json

# Éditer vos données
nano data/mes-joueurs.json  # ou utilisez votre éditeur préféré

# Importer
npm run import data/mes-joueurs.json
```

## 🎯 Ordre d'Import Recommandé

Pour éviter les erreurs de référence:

1. **Joueurs** (car ils sont référencés par les matchs)
2. **Staff**
3. **Matchs** (qui référencent les joueurs pour MVP/X-Factor)
4. **Articles, Galeries, Histoire**

Ou importez tout en une fois avec `complete-import.json`!

## ✅ Checklist Avant Import

- [ ] Token Sanity ajouté dans `.env.local`
- [ ] Numéros de maillot uniques
- [ ] Positions valides: `guard`, `forward`, `center`
- [ ] Dates au format ISO: `YYYY-MM-DDTHH:MM:SS`
- [ ] MVP/X-Factor correspondent à des numéros de maillot existants

## 🆘 Besoin d'Aide?

1. Consultez `IMPORT_DATA.md` pour la documentation complète
2. Vérifiez les messages d'erreur dans la console
3. Testez avec les fichiers d'exemples d'abord

Bon import! 🚀
