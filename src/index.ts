// import { sayHello } from "./App/greet";
import { Humain } from "./App/Humain";
import { Produit } from "./App/Produit";


function showInHTML(divName: string, output: string) {
    const elt = document.getElementById(divName);
    elt.innerHTML = output;
}


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

gameBoy.addStock(4);


florent.modifierQuantiteProduit(gameBoy,15);
florent.modifierPrixProduit(gameBoy,300);
florent.ajouterAuPanier(nintendo);
florent.ajouterAuPanier(gameBoy);
florent.supprimerDuPanier(gameBoy);
florent.getPanier();
florent.ajouterAuPanier(nintendo);
florent.prixTotalPanier();
/*gameBoy.setQuantite(50);*/

showInHTML("output", gameBoy.fastShow());