/* Menu mobile */
(function () {
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', function () {
    var ouvert = menu.classList.toggle('ouvert');
    burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('ouvert');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* Gamme interactive */
(function () {
  var zone = document.getElementById('gamme');
  if (!zone || !window.FAMILLES) return;

  var etat = { public: zone.dataset.depart || 'boutique', famille: 0 };
  var puces = zone.querySelector('.puces');
  var banniere = zone.querySelector('.banniere');
  var grille = zone.querySelector('.grille-produits');
  var boutonsPublic = zone.querySelectorAll('[data-public]');

  function el(tag, classe, texte) {
    var n = document.createElement(tag);
    if (classe) n.className = classe;
    if (texte) n.textContent = texte;
    return n;
  }

  function dessinerPuces() {
    puces.innerHTML = '';
    window.FAMILLES.forEach(function (f, i) {
      var b = el('button', '', f.nom);
      b.type = 'button';
      b.setAttribute('aria-pressed', i === etat.famille ? 'true' : 'false');
      b.addEventListener('click', function () { etat.famille = i; dessiner(); });
      puces.appendChild(b);
    });
  }

  function dessinerProduits() {
    var famille = window.FAMILLES[etat.famille];
    banniere.innerHTML = '';
    if (famille.banniere) {
      var img = el('img');
      img.src = 'assets/img/' + famille.banniere + '.jpg';
      img.alt = famille.nom + " à L'Alvéole";
      img.loading = 'lazy';
      banniere.appendChild(img);
      banniere.appendChild(el('p', '', famille.nom));
      banniere.hidden = false;
    } else {
      banniere.hidden = true;
    }

    grille.innerHTML = '';
    famille.produits
      .filter(function (p) { return etat.public === 'pro' || p.pro !== 'pro'; })
      .forEach(function (p) {
        var carte = el('article', 'produit');
        var visuel = el('div', 'produit-visuel');
        var img = el('img');
        if (p.img) {
          img.src = 'assets/img/' + p.img + '.jpg';
          img.alt = p.nom;
          img.loading = 'lazy';
        } else {
          img.src = 'assets/img/hexagone.png';
          img.alt = '';
          img.className = 'sans-photo';
        }
        visuel.appendChild(img);
        carte.appendChild(visuel);
        carte.appendChild(el('h3', '', p.nom));
        if (p.desc) carte.appendChild(el('p', '', p.desc));

        var etiquettes = el('div', 'etiquettes');
        if (etat.public === 'pro') etiquettes.appendChild(el('span', 'etiquette etiquette-pro', '−10 % pro'));
        if (p.commande) etiquettes.appendChild(el('span', 'etiquette', 'Sur commande'));
        if (p.formule && etat.public !== 'pro') etiquettes.appendChild(el('span', 'etiquette', 'Formule ' + p.formule));
        if (etiquettes.children.length) carte.appendChild(etiquettes);

        grille.appendChild(carte);
      });
  }

  function dessiner() {
    boutonsPublic.forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.public === etat.public ? 'true' : 'false');
    });
    dessinerPuces();
    dessinerProduits();
  }

  boutonsPublic.forEach(function (b) {
    b.addEventListener('click', function () { etat.public = b.dataset.public; dessiner(); });
  });

  dessiner();
})();
