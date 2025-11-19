# 🖼️ Guide de Gestion des Images et Logos

## 📸 Problème des Limites de Taille d'Images

### Pourquoi ces limites ?

Sanity a des restrictions sur le **plan gratuit**:
- ✅ **Gratuit**: Upload limité, taille max ~2MB par image
- 💰 **Payant (Growth)**: Pas de limite, meilleure performance

### Solutions Immédiates

#### Option 1: Compresser vos images avant upload (RECOMMANDÉ)

**Outils gratuits en ligne:**
- [TinyPNG](https://tinypng.com/) - Compression sans perte de qualité
- [Squoosh](https://squoosh.app/) - Par Google, excellent
- [CompressJPEG](https://compressjpeg.com/)

**Tailles recommandées:**
- **Photos de joueurs**: 800x800px (ou 600x600px)
- **Images d'articles**: 1200x800px
- **Galeries**: 1920x1080px max
- **Logos/Icônes**: 512x512px

#### Option 2: Utiliser des URLs externes

Pour les très grandes images, utilisez:
- Google Drive ou Dropbox (avec lien public)
- CDN externe
- Stockage cloud

#### Option 3: Upgrade au plan Growth

Si vous avez besoin de beaucoup d'uploads:
- Allez sur [sanity.io/manage](https://sanity.io/manage)
- Sélectionnez votre projet
- Plans → Growth ($49/mois)
- Limites beaucoup plus élevées

---

## 🎨 Configuration des Logos

### Étape 1: Créer les Paramètres du Site dans Sanity Studio

1. **Démarrez le serveur:**
   ```bash
   npm run dev
   ```

2. **Allez sur le Studio:** `http://localhost:3000/studio`

3. **Dans le menu de gauche**, cherchez **"Paramètres du Site"** (ou "siteSettings")

4. **Cliquez sur le "+"** ou "Create" pour créer un nouveau document

5. **Remplissez les champs:**
   - **Titre du site**: "La Forge Basketball"
   - **Description**: Votre description
   - **Logo**: Choisissez parmi:
     - Logo Principal 1 (`logo-primary-1.svg`)
     - Logo Principal 2 (`logo-primary-2.svg`)
     - LetterMark 1 (`lettermark-1.svg`)
     - LetterMark 2 (`lettermark-2.svg`)
   - **Liens sociaux**: Vos URLs Instagram, Facebook, etc.
   - **Contact**: Email, téléphone, adresse

6. **Cliquez sur "Publish"**

### Étape 2: Vérifier que les Logos SVG Existent

Les logos doivent être dans `/public/`:

```bash
ls /home/user/LaForge/laforge-website/public/

# Vous devriez voir:
# logo-primary-1.svg
# logo-primary-2.svg
# lettermark-1.svg
# lettermark-2.svg
```

### Étape 3: Comment le Logo s'Affiche

Le logo est maintenant configuré dans:
- **Header** (haut de page)
- **Footer** (bas de page)

**Le logo actuellement utilisé** est défini en dur dans le code. Pour qu'il utilise vos paramètres Sanity:

1. Créez le document "Paramètres du Site" (étape 1)
2. Sélectionnez votre logo préféré
3. Publiez

---

## 🔧 Changer Temporairement le Logo (Sans Sanity)

Si vous voulez changer rapidement le logo sans passer par Sanity:

**Modifiez le fichier `.env.local`:**

```bash
# Ajoutez cette ligne
NEXT_PUBLIC_LOGO=lettermark-2.svg
```

**Valeurs possibles:**
- `logo-primary-1.svg`
- `logo-primary-2.svg`
- `lettermark-1.svg`
- `lettermark-2.svg`

**Redémarrez le serveur:**
```bash
# Arrêtez avec Ctrl+C
npm run dev
```

---

## 🆘 Dépannage

### "Le logo ne change pas"

1. **Vérifiez que le fichier SVG existe:**
   ```bash
   ls public/*.svg
   ```

2. **Videz le cache du navigateur:**
   - Chrome/Edge: Ctrl+Shift+Del
   - Rechargez avec Ctrl+F5

3. **Redémarrez le serveur de développement:**
   ```bash
   npm run dev
   ```

### "Les images ne s'uploadent pas"

**Vérifications:**
1. Taille du fichier < 2MB
2. Format supporté: JPG, PNG, WebP, GIF
3. Compressez l'image avec [TinyPNG](https://tinypng.com/)

### "Le document Paramètres du Site n'apparaît pas"

**Solution:**

1. Vérifiez que le schema est bien exporté dans `sanity/schemas/index.ts`
2. Redémarrez le serveur
3. Rechargez le Studio

---

## 📊 Workflow Recommandé pour les Images

### Pour les Photos de Joueurs

1. **Prenez/récupérez la photo**
2. **Compressez-la** sur [Squoosh.app](https://squoosh.app/)
   - Format: WebP ou JPEG
   - Qualité: 80%
   - Taille cible: 600x600px ou 800x800px
3. **Uploadez dans Sanity Studio**
4. **Publiez**

### Pour les Photos de Matchs/Articles

1. **Compressez sur TinyPNG**
2. **Taille recommandée**: 1200x800px
3. **Format**: JPEG (meilleur pour photos)
4. **Upload dans Sanity**

### Pour les Logos/Icônes

✅ **Utilisez les SVG** (déjà dans `/public/`)
- Pas de perte de qualité
- Taille infiniment variable
- Pas de limite de taille

---

## 💡 Astuces

### Batch Compression (Plusieurs Images)

**Outils:**
- [ILoveIMG](https://www.iloveimg.com/compress-image) - Compresse plusieurs images
- [Compressor.io](https://compressor.io/)

### Vérifier la Taille d'une Image

**Sur Mac/Linux:**
```bash
du -h votre-image.jpg
```

**Sur Windows:**
- Clic droit → Propriétés

### Formats d'Images Recommandés

| Type | Format Recommandé | Pourquoi |
|------|------------------|----------|
| Photos | JPEG / WebP | Meilleure compression |
| Logos | SVG | Vectoriel, aucune perte |
| Screenshots | PNG | Texte net |
| Animations | GIF / WebP | Support animation |

---

## 🎯 Résumé Rapide

**Pour uploader des images:**
1. Compressez sur [TinyPNG.com](https://tinypng.com/)
2. Visez ~800px de large maximum
3. Gardez < 2MB par fichier

**Pour changer le logo:**
1. Studio → Paramètres du Site
2. Choisissez votre logo
3. Publiez

**Si ça ne marche pas:**
1. Vérifiez que les SVG sont dans `/public/`
2. Créez le document "Paramètres du Site" dans Sanity
3. Redémarrez le serveur

---

Besoin d'aide? Consultez ce guide! 🚀
