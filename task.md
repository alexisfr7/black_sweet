# Restauration One-Pager Black Sweet

## Phase 1 — Consolidation One-Pager
- [x] Mettre à jour `frontend/src/app/page.tsx` pour afficher toutes les sections
- [x] Supprimer `frontend/src/app/services/`
- [x] Supprimer `frontend/src/app/contact/`
- [x] Mettre à jour `frontend/src/app/sitemap.ts`

## Phase 2 — Navbar & Footer
- [x] Mettre à jour `frontend/src/components/layout/Navbar.tsx` avec les ancres et l'Observer
- [x] Mettre à jour `frontend/src/components/layout/Footer.tsx` avec le crédit Aureon digital
- [x] Corriger le texte de crédit du footer en "FAIT PAR AUREON DIGITAL"

## Phase 3 — Mise à jour Images et Aureon digital
- [x] Remplir `public/images/` avec les visuels physiques fournis
- [x] Réorganiser l'ordre des visuels dans la galerie (storefront, interior-butterfly, interior-menu, waffle-matcha, menu-waffle)
- [x] Renommer le crédit en "Aureon digital" dans le footer
- [x] Ajuster les espacements du footer (`pb-32` et centrage flex-col mobile) pour s'assurer que le crédit n'est pas masqué par la barre de navigation basse

## Phase 4 — Résolution des Anomalies (One-Pager, Hrefs, Highlight)
- [x] Corriger les liens "Découvrir la carte" (#menu) et "Nous trouver" (#visite) dans la section Hero
- [x] Attribuer l'ID `top` directement à la section Hero au lieu du conteneur global `<main>` pour corriger l'animation de surbrillance rose de la barre de navigation
- [x] Valider le bon comportement de défilement (IntersectionObserver)
- [x] Push final sur GitHub
