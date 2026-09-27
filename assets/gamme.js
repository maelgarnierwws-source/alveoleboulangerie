/*
  GAMME DE L'ALVÉOLE : c'est ici que vous modifiez les produits du site.

  Pour chaque produit :
    nom      : le nom affiché
    desc     : une courte description (peut rester vide : "")
    img      : nom d'une photo du dossier assets/img, sans ".jpg"
               (laisser "" pour afficher l'hexagone du logo)
    formule  : "Tourmentin", "Bon plein" ou ""
    commande : true si le produit est uniquement sur commande
    pro      : "pro" = visible seulement côté professionnels, "" = partout

  Aucun prix n'est affiché. La remise pro de 10 % est indiquée automatiquement.
*/

window.FAMILLES = [
  {
    nom: "Nos pains",
    banniere: "pains-vitrine",
    produits: [
      { nom: "L'Alouette", desc: "", img: "miches-grignes", formule: "", commande: false, pro: "" },
      { nom: "L'Alvéolé", desc: "", img: "mie-alveolee", formule: "", commande: false, pro: "" },
      { nom: "Le Viking", desc: "", img: "", formule: "", commande: false, pro: "" },
      { nom: "Le Ki-Boost", desc: "", img: "", formule: "", commande: false, pro: "" },
      { nom: "Le K-Boss", desc: "Cacao, chocolat noir et levain.", img: "k-boss", formule: "", commande: false, pro: "" },
      { nom: "Le Khorasan", desc: "Au blé ancien khorasan.", img: "", formule: "", commande: false, pro: "" },
      { nom: "Le Petit Épeautre", desc: "Une céréale ancienne, douce et légèrement noisettée.", img: "", formule: "", commande: false, pro: "" },
      { nom: "L'Intégral", desc: "Farine complète, goût franc de céréale.", img: "", formule: "", commande: false, pro: "" },
      { nom: "La Tourte de seigle", desc: "Mie dense et parfumée.", img: "tourte", formule: "", commande: false, pro: "" },
      { nom: "La ciabatta", desc: "Le pain italien à la mie grande ouverte.", img: "", formule: "", commande: false, pro: "" }
    ]
  },
  {
    nom: "Viennoiseries",
    banniere: "viennoiseries-plateau",
    produits: [
      { nom: "Croissant", desc: "Feuilletage au beurre, doré le matin même.", img: "croissants", formule: "", commande: false, pro: "" },
      { nom: "Pain au chocolat", desc: "Deux barres de chocolat, feuilletage léger.", img: "viennoiseries", formule: "", commande: false, pro: "" },
      { nom: "Suisse", desc: "", img: "suisse", formule: "", commande: false, pro: "" },
      { nom: "Viennoise au chocolat", desc: "Pâte moelleuse et pépites de chocolat.", img: "", formule: "", commande: false, pro: "" },
      { nom: "Brioche feuilletée", desc: "Le moelleux de la brioche, le feuilletage en plus.", img: "brioche-feuilletee", formule: "", commande: false, pro: "" },
      { nom: "Brioche vendéenne", desc: "", img: "", formule: "", commande: false, pro: "" },
      { nom: "Fingers", desc: "Version caramel ou chocolat.", img: "fingers-caramel", formule: "", commande: false, pro: "" },
      { nom: "Mini-viennoiseries", desc: "Les mêmes, en format bouchée.", img: "", formule: "", commande: false, pro: "" },
      { nom: "Maxi-viennoiseries", desc: "Nos viennoiseries en grand format, à partager.", img: "maxi-viennoiseries", formule: "", commande: true, pro: "" }
    ]
  },
  {
    nom: "Douceurs",
    banniere: "vitrine-flans",
    produits: [
      { nom: "Flan vanille", desc: "Notre fierté : crème vanillée, onctueuse, à la part.", img: "flan-vanille-entier", formule: "", commande: false, pro: "" },
      { nom: "Flan chocolat", desc: "Le même flan, version chocolat.", img: "flan-chocolat", formule: "", commande: false, pro: "" },
      { nom: "Flan praliné", desc: "Le même flan, version praliné.", img: "", formule: "", commande: false, pro: "" },
      { nom: "Kanelbullar", desc: "La brioche suédoise roulée à la cannelle.", img: "kanelbullar", formule: "", commande: false, pro: "" },
      { nom: "Cookies", desc: "Croustillants au bord, fondants au cœur.", img: "cookies", formule: "", commande: false, pro: "" },
      { nom: "Brownies", desc: "Chocolat et noix, dense et fondant.", img: "brownies", formule: "", commande: false, pro: "" },
      { nom: "Cake citron-pavot", desc: "Citron acidulé, graines de pavot croquantes.", img: "cake-citron-pavot", formule: "", commande: false, pro: "" },
      { nom: "Kouign-amann", desc: "La spécialité bretonne, beurre et sucre caramélisés.", img: "", formule: "", commande: false, pro: "" },
      { nom: "Chausson aux pommes", desc: "Feuilleté doré et pommes fondantes.", img: "", formule: "", commande: false, pro: "" }
    ]
  },
  {
    nom: "Sandwichs",
    banniere: "sandwichs-poulet",
    produits: [
      { nom: "Sandwich au levain", desc: "Sur notre pain au levain en format tradition, garni le matin.", img: "sandwich-vegetarien", formule: "Tourmentin", commande: false, pro: "" },
      { nom: "Focaccia gourmande", desc: "Moelleuse, dorée et généreusement garnie.", img: "sandwichs-focaccia", formule: "Bon plein", commande: false, pro: "" },
      { nom: "Hot dog saucisse", desc: "La saucisse, bien chaude, dans un pain moelleux.", img: "hot-dogs", formule: "Tourmentin", commande: false, pro: "" },
      { nom: "Hot dog pulled pork", desc: "Porc effiloché et chou rouge.", img: "hot-dog-pulled-pork", formule: "Tourmentin", commande: false, pro: "" },
      { nom: "Bruschetta", desc: "Tranche de pain au levain, grillée et garnie.", img: "bruschetta", formule: "Bon plein", commande: false, pro: "" },
      { nom: "Panini bœuf cheddar", desc: "Bœuf et cheddar fondu, pressé et bien doré.", img: "", formule: "Bon plein", commande: false, pro: "" },
      { nom: "Croque-monsieur", desc: "Jambon et fromage, gratiné au four.", img: "", formule: "Bon plein", commande: false, pro: "" },
      { nom: "Paniers événements", desc: "Séminaires, réceptions, tournages : un panier par personne.", img: "sandwichs-focaccia", formule: "", commande: true, pro: "pro" },
      { nom: "Paniers navigateurs", desc: "Des provisions qui tiennent la mer plusieurs jours.", img: "sandwich-levain", formule: "", commande: true, pro: "pro" }
    ]
  },
  {
    nom: "Quiches, salades & dahl",
    banniere: "salades-quinoa",
    produits: [
      { nom: "Quiche lorraine", desc: "Dans une pâte à croissant feuilletée.", img: "quiches", formule: "Tourmentin", commande: false, pro: "" },
      { nom: "Quiche aux légumes", desc: "Dans une pâte à croissant feuilletée.", img: "", formule: "Tourmentin", commande: false, pro: "" },
      { nom: "Salade génoise", desc: "Une salade de pâtes.", img: "salade-genoise", formule: "Bon plein", commande: false, pro: "" },
      { nom: "Salade végétarienne", desc: "À base de quinoa.", img: "salade-quinoa", formule: "Bon plein", commande: false, pro: "" },
      { nom: "Dahl de lentilles", desc: "Lentilles mijotées aux épices, servi avec du riz.", img: "dahl", formule: "", commande: false, pro: "" }
    ]
  }
];
