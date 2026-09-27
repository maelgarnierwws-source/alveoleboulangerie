# Site de L'Alvéole — mode d'emploi

Ce dossier contient un site complet, prêt à être mis en ligne. Il fonctionne sans aucun logiciel à installer.

## Contenu du dossier

- `index.html` : page d'accueil
- `pro.html` : espace professionnels, avec le formulaire de contact
- `merci.html` : page affichée après l'envoi du formulaire
- `mentions-legales.html` : mentions légales (à compléter, obligatoires en France)
- `assets/style.css` : les couleurs, polices et mises en page
- `assets/gamme.js` : **la liste des produits** (c'est le fichier à modifier pour faire évoluer la gamme)
- `assets/main.js` : le menu mobile et la gamme interactive (pas besoin d'y toucher)
- `assets/img/` : les photos utilisées ; `assets/img/reserve/` : les photos non utilisées, gardées sous le coude

## Mettre le site en ligne gratuitement (Netlify, recommandé)

1. Créez un compte gratuit sur https://app.netlify.com
2. Allez sur https://app.netlify.com/drop
3. Glissez-déposez **le dossier entier** (celui qui contient `index.html`) dans la page.
4. Le site est en ligne en quelques secondes, avec une adresse du type `nom-au-hasard.netlify.app`.
5. Dans « Site configuration », vous pouvez changer ce nom (ex. `lalveole-lorient.netlify.app`)
   ou brancher un nom de domaine acheté (ex. `lalveole.fr`).

**Le formulaire pro fonctionne automatiquement sur Netlify** : les demandes arrivent dans l'onglet
« Forms » de votre site Netlify. Activez les notifications par e-mail dans
« Forms > Form notifications » pour les recevoir directement.

Pour mettre à jour le site : modifiez les fichiers, puis glissez à nouveau le dossier dans
l'onglet « Deploys » du site.

## Autre option : GitHub Pages

Le site fonctionne aussi sur GitHub Pages, mais **le formulaire n'y fonctionnera pas** (il faudrait
alors le remplacer par un service comme Formspree, ou par un simple lien e-mail).

## À compléter avant la mise en ligne

Cherchez ces mentions dans les fichiers HTML (elles apparaissent surlignées sur le site) :

- Les coordonnées de l'hébergeur : dans `mentions-legales.html` (tout le reste est déjà rempli)

## Modifier la gamme

Ouvrez `assets/gamme.js` avec un éditeur de texte (Bloc-notes, TextEdit, VS Code…).
Chaque produit ressemble à ceci :

    { nom: "Le K-Boss", desc: "Cacao, chocolat noir et levain.", img: "k-boss", formule: "", commande: false, pro: "" },

- Pour changer une description : modifiez le texte entre les guillemets de `desc`.
- Pour mettre une photo : ajoutez-la dans `assets/img/` (format .jpg, largeur ~1600 px max) et
  écrivez son nom sans « .jpg » dans `img`. Sans photo, l'hexagone du logo s'affiche.
- Pour ajouter un produit : copiez une ligne, collez-la en dessous et modifiez-la
  (attention à garder la virgule en fin de ligne).

Aucun prix n'est affiché sur le site, comme demandé.
