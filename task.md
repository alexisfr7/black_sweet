# Migration Black Sweet — Séparation Frontend & Backend

## Phase 1 — Restructuration des dossiers
- [x] Créer le dossier `frontend`
- [x] Déplacer les fichiers et dossiers frontend existants dans `frontend/`
- [x] Déplacer les fichiers résiduels (.next, package-lock, next-env, eslint)

## Phase 2 — Configuration du Backend
- [x] Créer le dossier `backend/` et `backend/src/`
- [x] Créer `backend/package.json`
- [x] Créer `backend/tsconfig.json`
- [x] Créer `backend/src/server.ts`

## Phase 3 — Liaison API côté Frontend
- [x] Créer `frontend/src/lib/api.ts`
- [x] Mettre à jour `frontend/src/components/ui/MenuSection.tsx` pour consommer `/api/menu`
- [x] Mettre à jour `frontend/src/components/ui/HeroSection.tsx` pour consommer `/api/status`
- [x] Mettre à jour `frontend/src/components/ui/VisitSection.tsx` pour consommer `/api/status`

## Phase 4 — Intégration Netlify & Git
- [x] Configurer l'export statique Next.js (`output: "export"`)
- [x] Créer `netlify.toml` à la racine pointant vers `frontend` et `out`
- [x] Mettre à jour `.gitignore` pour ignorer `.next/`, `out/` et `.workspace/`
- [x] Réinitialiser le dépôt Git propre à la racine
- [x] Configurer le dépôt distant GitHub `https://github.com/alexisfr7/black_sweet.git`
- [x] Pousser la branche `main` vers le dépôt distant GitHub

## Phase 5 — Validation finale
- [x] Valider le build backend (`npm run build`)
- [x] Valider le build frontend Next.js en mode export statique (`npm run build`)
