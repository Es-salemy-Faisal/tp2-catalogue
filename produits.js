
const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];

console.log(produits);

console.log('Catalogue des produits :');

for (const produit of produits) {
  console.log(produit.nom, '-', produit.prix, 'MAD');
}

const disponibles = produits.filter((produit) => produit.stock > 0);

console.log('Produits disponibles :');

for (const produit of disponibles) {
  console.log(produit.nom);
}

console.log('Nombre de produits disponibles :', disponibles.length);

const valeurStock = produits.reduce((total, produit) => {
  return total + produit.prix * produit.stock;
}, 0);

console.log('Valeur totale du stock :', valeurStock, 'MAD');

function produitMoinsCher(liste) {
  if (liste.length === 0) {
    return null;
  }

  let moinsCher = liste[0];

  for (const produit of liste) {
    if (produit.prix < moinsCher.prix) {
      moinsCher = produit;
    }
  }

  return moinsCher;
}

const moinsCher = produitMoinsCher(disponibles);

if (moinsCher !== null) {
  console.log('Produit le moins cher :', moinsCher.nom);
  console.log('Prix :', moinsCher.prix, 'MAD');
} else {
  console.log('Aucun produit disponible');
}

const resume = produits.map((produit) => {
  return `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`;
});

console.log('Résumé du catalogue :');

for (const ligne of resume) {
  console.log(ligne);
}

console.log('Test 1 - Stock nul :');

const ecranDisponible = disponibles.some(
  (produit) => produit.nom === 'Écran'
);

console.log('Écran disponible :', ecranDisponible);

console.log('Test 2 - Tous les stocks à zéro :');

const produitsSansStock = produits.map((produit) => {
  return { ...produit, stock: 0 };
});

const disponiblesTest = produitsSansStock.filter(
  (produit) => produit.stock > 0
);

console.log('Produits disponibles :', disponiblesTest.length);

const moinsCherTest = produitMoinsCher(disponiblesTest);

if (moinsCherTest === null) {
  console.log('Aucun produit disponible');
}

console.log('Test 3 - Catalogue vide :');

const catalogueVide = [];

const valeurVide = catalogueVide.reduce((total, produit) => {
  return total + produit.prix * produit.stock;
}, 0);

console.log('Valeur totale du stock :', valeurVide, 'MAD');

function estValide(produit) {
  return Number.isFinite(produit.prix) &&
         Number.isFinite(produit.stock) &&
         produit.prix >= 0 &&
         produit.stock >= 0;
}

console.log('Test 4 - Vérification des données :');

console.log('Produit valide :', estValide(produits[0]));

console.log('Prix négatif :', estValide({
  id: 5,
  nom: 'Test',
  categorie: 'Accessoires',
  prix: -50,
  stock: 2
}));

console.log('Stock négatif :', estValide({
  id: 6,
  nom: 'Test',
  categorie: 'Accessoires',
  prix: 100,
  stock: -3
}));

console.log('Défi - Déstructuration :');

if (moinsCher !== null) {
  const { nom, prix, stock } = moinsCher;

  console.log('Nom :', nom);
  console.log('Prix :', prix, 'MAD');
  console.log('Stock :', stock, 'unités');
}

