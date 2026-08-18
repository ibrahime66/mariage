# Site de mariage — Ibrahima Sory Barry

Site 100% statique, construit avec **Next.js 14 (App Router)**, **TypeScript**,
**Tailwind CSS** et **Framer Motion**. Aucun backend, aucune base de données —
déployable directement sur GitHub Pages, Netlify ou Vercel.

## 🚀 Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

## 📦 Build statique

```bash
npm run build
```

Grâce à `output: "export"` dans `next.config.mjs`, le build génère un dossier
`out/` 100% statique (HTML/CSS/JS), prêt à être hébergé n'importe où.

### Déployer sur GitHub Pages
1. `npm run build`
2. Publier le contenu du dossier `out/` sur la branche `gh-pages`
   (par exemple avec l'action GitHub `peaceiris/actions-gh-pages`).

### Déployer sur Netlify
- Build command : `npm run build`
- Publish directory : `out`

### Déployer sur Vercel
- Vercel détecte Next.js automatiquement. Vous pouvez laisser
  `output: "export"` ou le retirer si vous préférez l'hébergement Next.js
  natif de Vercel (SSR non nécessaire ici de toute façon, le site étant
  100% statique).

## ✏️ Modifier le contenu

Toutes les informations (noms, date, lieu, programme, FAQ, contact, etc.)
sont centralisées dans **`lib/weddingData.ts`**. C'est le seul fichier à
modifier au quotidien :

- `weddingDateISO` → date du mariage (met à jour le compte à rebours)
- `bride` → dès que la future mariée est connue, remplacez le nom, le rôle
  et la photo
- `location` → adresse et lien Google Maps
- `program`, `story`, `faq`, `dressCode`, `contact` → contenu des sections
  correspondantes

## 🖼️ Ajouter de vraies photos

Déposez vos images dans `public/images/` puis remplacez les icônes
placeholder dans `components/Couple.tsx` par des balises `<Image />`
(module `next/image`).

## 🎨 Palette & typographie

- Couleurs : blanc (ivory), doré (gold), noir (charcoal), beige, vert émeraude
  léger — définies dans `tailwind.config.ts`
- Typographies : Cormorant Garamond (titres) + Jost (texte courant), chargées
  via `next/font/google` dans `app/layout.tsx`

## 🧩 Structure du projet

```
app/
  layout.tsx        Layout racine, polices, métadonnées SEO
  page.tsx          Assemble toutes les sections
  globals.css       Styles globaux + classes utilitaires
components/
  Loader.tsx        Écran de chargement élégant
  Petals.tsx         Pluie discrète de pétales
  Navbar.tsx         Navigation sticky
  Hero.tsx           Section d'accueil + parallax
  Countdown.tsx      Compte à rebours animé
  StoryTimeline.tsx  Timeline humoristique de l'histoire
  Couple.tsx         Cartes des mariés
  Witness.tsx        Section témoin
  Program.tsx        Programme de la journée
  LocationSection.tsx Lieu + carte Google Maps intégrée
  DressCode.tsx      Recommandations vestimentaires
  FAQSection.tsx     FAQ en accordéon
  Contact.tsx        Appel / WhatsApp
  Footer.tsx         Pied de page premium
lib/
  weddingData.ts     ⚙️ Configuration centrale du contenu
```

## ✅ Bonnes pratiques respectées

- Mobile-first, entièrement responsive
- Dark mode via la classe `dark` (Tailwind `darkMode: "class"`)
- SEO : métadonnées Open Graph dans `app/layout.tsx`
- Animations fluides et discrètes (Framer Motion), pas de sur-effets
- Aucune dépendance serveur : formulaires, appel et WhatsApp passent par de
  simples liens `tel:` / `wa.me`
- Code modulaire : chaque section est un composant indépendant, facilement
  modifiable ou réorganisable
