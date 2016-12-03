import * as moment from '../bower_components/moment/moment';

import {Humain} from "./App/Humain";
import {Produit} from "./App/Produit";
import {Commentaire} from './App/Commentaire';
import { Book } from './App/Book';

function showInHTML(divName: string, output: string) {
    const elt = document.getElementById(divName);
    elt.innerHTML = output;
}



var francois = new Humain('François', 'Sis', 'Marron', 'Brun', '1.89m', '72kg');
var florent = new Humain('Florent', 'Dinet', 'Bleu', 'Chataing', '1.86m', '66kg');

// florent.setPrenom('Georges');


// var florentInJumbo =
//     `<div class='jumbotron'>
//                 <h1>${florent.getPrenom()}</h1>
//                 <p>${florent.getNom()}</p>
//                 <p>${florent.getCouleurYeux()}</p>
//                 <p>${florent.getCouleurCheveux()}</p>
//                 <span class='badge'>${florent.getniveauLangue()}</span>`;

// /*showInHTML("output", florentInJumbo);*/


// //// PRODUIT


// var gameBoy = new Produit("GameBoy", "Commodo magna nostrud consequat ad enim.", 1, 250);
// var nintendo = new Produit("Nintendo", "Ullamco magna esse fugiat ipsum.", 1, 450);

// gameBoy.setAccessoires(['écouteurs', 'chargeur']);
// nintendo.setAccessoires(['manettes', 'cables']);

// gameBoy.addStock(4);


// florent.modifierQuantiteProduit(gameBoy, 15);
// florent.modifierPrixProduit(gameBoy, 300);
// florent.ajouterAuPanier(nintendo, francois);
// florent.ajouterAuPanier(gameBoy, francois);
// //florent.supprimerDuPanier(gameBoy);
// florent.getPanier();
// florent.ajouterAuPanier(nintendo, francois);
// florent.prixTotalPanier();
// /*gameBoy.setQuantite(50);*/

// showInHTML("output", gameBoy.fastShow());
// console.log(florent.lireSMS());

// console.log("prix gameboy", gameBoy.prix);

// florent.modifierQuantiteProduitPanier(gameBoy, 34);
// florent.accessoiresTotauxPanier();

// francois.carottePanier(florent);
// showInHTML("panier", francois.afficherPanier());

// francois.moyennePrixPanier();

// var comment1 = new Commentaire();
// var comment2 = new Commentaire();
// var comment3 = new Commentaire();

// francois.ecrireCommentaire({
//     commentaire: comment1,
//     produit: gameBoy,
//     texte: "Comme celle de mon enfance"
// });

// francois.ecrireCommentaires(
//     [{
//         commentaire: comment1,
//         produit: gameBoy,
//         texte: "Excellent la gameboy tout ça !!!"
//     }, {
//         commentaire: comment2,
//         produit: gameBoy,
//         texte: "Super, pas déçu !"
//     }, {
//         commentaire: comment3,
//         produit: nintendo,
//         texte: "La manette, bien carrée !"
//     }]);

// console.log("Commentaires de François : ", francois.$commentaires);
// console.log("Commentaires de gameBoy : ", gameBoy.$commentaires);
// console.log("Commentaires de nintendo : ", nintendo.$commentaires);

// console.log("Le titre du produit lié au commentaire", francois.voirTitreProduit(1));


var harryPotter = new Book("Harry Potter","Cillum sint amet aliqua est excepteur cupidatat aute laboris deserunt veniam non.",1900435565.56,"Glena",267,new Date(2013, 6, 25),[francois,florent]);

var eloquentJS = new Book("eloquent javascript","Anim quis ut ex cillum.",29,"O'Reilly",430,new Date(2016, 3, 5),[francois,florent]);

var vieuxBouquin = new Book("Vieux Bouquin","Exercitation reprehenderit irure eu velit minim eu esse officia esse ea voluptate.",10,"Vieil Autheur",650,new Date(1962, 9, 16),[francois,florent]);

console.log(harryPotter);

harryPotter.formatterTitre();

console.log(harryPotter);

console.log("Prix moyen : ",Book.calculerPrixMoyen());

console.log("Age du livre : " , harryPotter.calculerAgeLivre());

console.log("HP plus vieux que 1970 ? : ", harryPotter.isOlderThan1970());

console.log("Vieux Bouquin plus vieux que 1970 ? : ", vieuxBouquin.isOlderThan1970());

console.log("Prix formaté : ",harryPotter.formatterPrix());



/*console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));*/
