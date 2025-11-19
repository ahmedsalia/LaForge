# ⚡ Solutions Rapides - Images et Logos

## 🖼️ Problème: Limite de Taille d'Images (400x300px)

### ✅ Solution Immédiate: Compresser vos images

**1. Allez sur [TinyPNG.com](https://tinypng.com/)**

**2. Glissez-déposez votre image**

**3. Téléchargez la version compressée**

**4. Uploadez dans Sanity Studio**

### 📐 Tailles Recommandées

- **Photos de joueurs**: 600x600px ou 800x800px
- **Images d'articles**: 1200x800px
- **Photos de matchs**: 1920x1080px

### 🔧 Outils de Compression Rapides

| Outil | Lien | Type |
|-------|------|------|
| TinyPNG | [tinypng.com](https://tinypng.com/) | En ligne, gratuit |
| Squoosh | [squoosh.app](https://squoosh.app/) | Par Google |
| ILoveIMG | [iloveimg.com](https://www.iloveimg.com/compress-image) | Batch |

---

## 🎨 Problème: Configuration des Logos Ne Marche Pas

### ✅ Solution en 3 Étapes

#### 1. Vérifiez que les logos sont présents

```bash
npm run check-assets
```

Vous devriez voir:
```
✅ logo-primary-1.svg
✅ logo-primary-2.svg
✅ lettermark-1.svg
✅ lettermark-2.svg
```

#### 2. Créez les "Paramètres du Site" dans Sanity

1. Démarrez le serveur: `npm run dev`
2. Allez sur `http://localhost:3000/studio`
3. Cherchez **"Paramètres du Site"** ou **"siteSettings"** dans le menu
4. Cliquez sur **"Create"** ou le bouton **"+"**
5. Remplissez:
   - **Titre**: "La Forge Basketball"
   - **Logo**: Choisissez votre logo préféré
   - **Liens sociaux**: Vos URLs (optionnel)
6. **Publiez** (bouton "Publish" en haut à droite)

#### 3. Rechargez le site

- Redémarrez avec `Ctrl+C` puis `npm run dev`
- Rechargez votre navigateur avec `Ctrl+F5`

### 🚀 Alternative: Changer le Logo Sans Sanity

**Modifiez `.env.local`:**

```bash
# Ajoutez cette ligne:
NEXT_PUBLIC_LOGO=lettermark-2.svg
```

**Choix disponibles:**
- `logo-primary-1.svg`
- `logo-primary-2.svg`
- `lettermark-1.svg`
- `lettermark-2.svg`

**Redémarrez:**
```bash
npm run dev
```

---

## 📋 Checklist de Dépannage

### Pour les Images

- [ ] L'image fait moins de 2MB
- [ ] L'image est compressée (TinyPNG)
- [ ] Format: JPG, PNG, ou WebP
- [ ] Taille raisonnable (max 1920px de large)

### Pour les Logos

- [ ] Script `npm run check-assets` passe ✅
- [ ] Document "Paramètres du Site" créé dans Sanity Studio
- [ ] Document publié (bouton Publish cliqué)
- [ ] Serveur redémarré
- [ ] Cache du navigateur vidé (Ctrl+F5)

---

## 🆘 Toujours des Problèmes?

### Images ne s'uploadent pas

**Essayez:**
1. Compressez davantage l'image
2. Réduisez la taille (ex: 800x800px au lieu de 2000x2000px)
3. Changez le format (essayez WebP ou JPEG)

### Logo ne change pas

**Vérifiez:**
1. Les fichiers SVG existent dans `/public/`
   ```bash
   ls public/*.svg
   ```

2. Le document "Paramètres du Site" existe et est publié

3. Pas d'erreurs dans la console du navigateur (F12)

---

## 💡 Astuces Pro

### Compresser Plusieurs Images d'un Coup

1. Allez sur [ILoveIMG.com](https://www.iloveimg.com/compress-image)
2. Glissez toutes vos images
3. Téléchargez le ZIP compressé

### Vérifier la Taille d'une Image

**Mac/Linux:**
```bash
du -h mon-image.jpg
```

**Windows:** Clic droit → Propriétés

### Formats Recommandés

- **Photos**: JPEG (meilleure compression)
- **Logos**: SVG (déjà fournis!)
- **Screenshots**: PNG
- **Moderne**: WebP (meilleur des deux mondes)

---

## ✅ Récapitulatif

**Pour les images trop grandes:**
→ Compressez sur [TinyPNG.com](https://tinypng.com/)

**Pour changer le logo:**
→ Studio → Paramètres du Site → Choisir logo → Publish

**Pour vérifier que tout est OK:**
→ `npm run check-assets`

---

**Guide complet:** Consultez `IMAGES_ET_LOGOS.md` pour plus de détails! 📚
