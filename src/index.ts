// import { sayHello } from "./App/greet";
import { Humain } from "./App/Humain";
import { Produit } from "./App/Produit";
import { Commentaire } from "./App/Commentaire";


function showInHTML(divName: string, output: string) {
    const elt = document.getElementById(divName);
    elt.innerHTML = output;
}


var francois = new Humain('François','Sis','Marron','Brun','1.89m','72kg');
var florent = new Humain('Florent','Dinet','Bleu','Chataing','1.86m','66kg');

florent.setPrenom('Georges');


var florentInJumbo =
                `<div class='jumbotron'>
                <h1>${florent.getPrenom()}</h1>
                <p>${florent.getNom()}</p>
                <p>${florent.getCouleurYeux()}</p>
                <p>${florent.getCouleurCheveux()}</p>
                <span class='badge'>${florent.getniveauLangue()}</span>`
;       

/*showInHTML("output", florentInJumbo);*/


//// PRODUIT


var gameBoy = new Produit("GameBoy","Commodo magna nostrud consequat ad enim.",1,250);
var nintendo = new Produit("Nintendo","Ullamco magna esse fugiat ipsum.",1,450);

gameBoy.setAccessoires(['écouteurs','chargeur']);
nintendo.setAccessoires(['manettes','cables']);

gameBoy.addStock(4);


florent.modifierQuantiteProduit(gameBoy,15);
florent.modifierPrixProduit(gameBoy,300);
florent.ajouterAuPanier(nintendo,francois);
florent.ajouterAuPanier(gameBoy,francois);
//florent.supprimerDuPanier(gameBoy);
florent.getPanier();
florent.ajouterAuPanier(nintendo,francois);
florent.prixTotalPanier();
/*gameBoy.setQuantite(50);*/

showInHTML("output", gameBoy.fastShow());
console.log(florent.lireSMS());

console.log("prix gameboy",gameBoy.prix);

florent.modifierQuantiteProduitPanier(gameBoy,34);
florent.accessoiresTotauxPanier();

francois.carottePanier(florent);
showInHTML("panier", francois.afficherPanier());


francois.moyennePrixPanier();

francois.ajouterCommentaires(gameBoy,['De la balle , la gameBoy']);


