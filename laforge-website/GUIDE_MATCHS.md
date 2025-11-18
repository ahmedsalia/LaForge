# 🏀 Guide Complet - Gestion des Matchs

## 📍 Où Apparaissent les Matchs?

Quand vous ajoutez un match dans Sanity, il apparaît automatiquement à **plusieurs endroits** selon son statut:

### Matchs À Venir (`upcoming`)
- **Page d'accueil** → Section "Prochains Matchs"
- **Page Calendrier** (`/calendrier`) → Liste complète des matchs à venir

### Matchs Terminés (`finished`)
- **Page d'accueil** → Section "Derniers Résultats" (avec MVP, X-Factor)
- **Page Calendrier** → Section des résultats avec scores
- **Page Actualités** → Peut générer automatiquement un article (option)

---

## ✅ Workflow Complet: Ajouter un Match

### 1. **Créer le Match (Avant)**

Dans Sanity Studio (`/studio`):

1. Cliquez sur **"Matchs"**
2. **"Create"** → Nouveau match
3. Remplissez les informations de base:
   - **Adversaire**: Nom de l'équipe adverse
   - **Date et heure**: Quand le match aura lieu
   - **Lieu**: Pavillon Durocher, Centre Bell, etc.
   - **Domicile/Extérieur**: Cochez "Match à domicile" si applicable
   - **Statut**: Choisissez "À venir"
   - **Période**: Septembre-Décembre, Janvier-Mars, ou Éliminatoires
   - **Logo adverse** (optionnel): Image du logo de l'équipe adverse
4. **"Publish"**

✅ **Le match apparaît maintenant dans "Prochains Matchs" sur la homepage et le calendrier!**

---

### 2. **Compléter Après le Match (MVP, Stats, X-Factor)**

Une fois le match terminé:

1. Retournez dans **Sanity Studio** → **"Matchs"**
2. Trouvez le match et cliquez dessus
3. **Changez le statut** à "Terminé"
4. De nouveaux champs apparaissent! Remplissez:

#### 📊 Scores et Résultats
   - **Notre score**: Score de La Forge
   - **Score adverse**: Score de l'adversaire
   - **Résumé du match**: Description de ce qui s'est passé

#### 🏆 MVP du Match
   - Cliquez sur **"MVP du match"**
   - Sélectionnez le joueur le plus performant
   - Le système affichera son numéro, nom et stats automatiquement

#### ⚡ X-Factor du Match
   - Cliquez sur **"X-Factor du match"**
   - Sélectionnez le joueur clé qui a fait la différence
   - Peut être différent du MVP (ex: défense exceptionnelle, moment décisif)

#### 📈 Statistiques de l'Équipe
   Remplissez les stats globales de l'équipe:
   - **Pourcentage de tirs réussis** (ex: 45%)
   - **Pourcentage de 3 points** (ex: 38%)
   - **Pourcentage de lancers francs** (ex: 85%)
   - **Rebonds totaux** (ex: 42)
   - **Passes décisives** (ex: 24)
   - **Interceptions** (ex: 8)
   - **Contres** (ex: 5)
   - **Pertes de balle** (ex: 12)

#### 👤 Statistiques Individuelles (Optionnel mais recommandé)
   Pour chaque joueur ayant joué:
   - Cliquez sur **"Add item"** dans "Statistiques individuelles"
   - Sélectionnez le **joueur**
   - Entrez ses stats:
     - Points marqués
     - Rebonds
     - Passes décisives
     - Minutes jouées
   - Répétez pour tous les joueurs

#### 📰 Génération Automatique d'Article
   - Cochez **"Générer automatiquement un article"** si vous voulez créer une actualité automatiquement
   - L'article sera créé avec:
     - Le score
     - Le MVP et X-Factor
     - Les stats principales
     - Le résumé du match

5. **"Publish"** pour sauvegarder

✅ **Le match apparaît maintenant dans "Derniers Résultats" avec MVP et X-Factor!**

---

## 🎯 Exemple Concret

### Avant le Match
```
Adversaire: Montreal Phoenix
Date: 22 mars 2025, 19:00
Lieu: Pavillon Durocher
Domicile: ✅ Oui
Statut: À venir
```
→ Apparaît dans "Prochains Matchs"

### Après le Match (Victoire 98-72)
```
Notre score: 98
Score adverse: 72
Statut: Terminé

MVP: Marcus Johnson (#23)
- 28 points, 12 rebonds, 5 passes

X-Factor: Alex Dubois (#7)
- 18 points, 4 rebonds, 8 passes (clé en 4e quart)

Stats d'équipe:
- Tirs réussis: 52%
- 3 points: 41%
- Lancers francs: 87%
- Rebonds: 48
- Passes: 26
- Interceptions: 11
- Contres: 6

Résumé: "Victoire dominante de La Forge contre les Phoenix.
Marcus Johnson a brillé avec 28 points et 12 rebonds.
L'équipe a excellé au tir avec 52% de réussite."

Générer article: ✅ Oui
```
→ Apparaît dans "Derniers Résultats" avec toutes les stats!
→ Un article est créé automatiquement dans "Actualités"!

---

## 💡 Conseils Pratiques

### Pour le MVP
- Choisissez le joueur avec la **meilleure performance globale**
- Généralement celui avec le plus de points ou l'impact le plus important
- Pas obligé d'être dans l'équipe gagnante (peut être MVP même en défaite)

### Pour le X-Factor
- Le joueur qui a **changé le cours du match**
- Peut être celui qui a fait la différence en défense
- Peut être un joueur de banc qui a donné l'étincelle
- Différent du MVP pour mettre en valeur plusieurs joueurs

### Pour les Stats d'Équipe
- Consultez la feuille de match officielle
- Les pourcentages sont importants pour l'analyse
- Ne pas oublier les stats défensives (interceptions, contres)

### Pour l'Article Automatique
- Si coché, un article sera créé avec toutes les infos
- Vous pouvez ensuite l'éditer pour ajouter des photos, citations, etc.
- Pratique pour ne jamais oublier de publier un résumé!

---

## 🔄 Flux Visuel

```
1. AVANT LE MATCH
   Sanity: Créer match → Statut "À venir"
   ↓
   Site: Apparaît dans "Prochains Matchs"

2. LE MATCH A LIEU
   (Jouez le match! 🏀)

3. APRÈS LE MATCH
   Sanity: Éditer match → Statut "Terminé"
   ↓
   Sanity: Ajouter scores + MVP + X-Factor + Stats
   ↓
   Sanity: (Optionnel) Cocher "Générer article"
   ↓
   Sanity: Publish
   ↓
   Site: Apparaît dans "Derniers Résultats" avec highlights
   Site: (Si article coché) Nouvelle actualité créée
```

---

## ❓ Questions Fréquentes

**Q: Puis-je modifier un match après l'avoir publié?**
R: Oui! Retournez simplement dans Sanity, trouvez le match et éditez-le.

**Q: Que se passe-si je ne remplis pas le MVP ou X-Factor?**
R: Le match s'affichera quand même, mais sans ces highlights spéciaux.

**Q: Puis-je ajouter des stats plus tard?**
R: Absolument! Vous pouvez revenir éditer le match à tout moment.

**Q: L'article automatique remplace-t-il un article manuel?**
R: Non, c'est un gain de temps. Vous pouvez ensuite l'éditer ou écrire un article complètement personnalisé.

**Q: Combien de matchs s'affichent sur la homepage?**
R: Les 2-3 derniers résultats et les 3 prochains matchs (configurable).

---

## 🎨 Design et Affichage

### Section "Derniers Résultats"
- Badge VICTOIRE (vert) ou DÉFAITE (rouge)
- MVP avec badge doré 🏆
- X-Factor avec badge violet ⚡
- Stats de chaque joueur
- Design moderne avec animations

### Section "Prochains Matchs"
- Badge Domicile/Extérieur
- Date et heure formatées
- Compte à rebours (à venir)
- Logo de l'adversaire si fourni

---

Besoin d'aide? Contactez: laforgebasketball@gmail.com 🏀
