(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/**
 * Commentaire
 */
var Commentaire = (function () {
    // Constructeur
    function Commentaire(id, writer, produit, content) {
        if (id === void 0) { id = 0; }
        if (writer === void 0) { writer = null; }
        if (produit === void 0) { produit = null; }
        if (content === void 0) { content = ""; }
        this.writer = writer.getPrenom() + " " + writer.getNom();
        this.produit = produit.getTitre();
        this.id = id;
        this.date = new Date();
    }
    return Commentaire;
}());
exports.Commentaire = Commentaire;

},{}],2:[function(require,module,exports){
"use strict";
var Commentaire_1 = require('./Commentaire');
/**
 * name
 */
var Humain = (function () {
    // Constructeur
    function Humain(prenom, nom, couleurYeux, couleurCheveux, taille, poids, langue, niveauLangue, sms) {
        if (prenom === void 0) { prenom = 'John'; }
        if (nom === void 0) { nom = 'Doe'; }
        if (couleurYeux === void 0) { couleurYeux = 'vert'; }
        if (couleurCheveux === void 0) { couleurCheveux = 'brun'; }
        if (taille === void 0) { taille = '1.60m'; }
        if (poids === void 0) { poids = '65kg'; }
        if (langue === void 0) { langue = 'Français'; }
        if (niveauLangue === void 0) { niveauLangue = 1; }
        if (sms === void 0) { sms = []; }
        this.panier = [];
        // Constante en typescript : "readonly"
        this.ANNEE = 2016;
        /*
            Ecrire sms
        */
        this.ecrireSMS = function (sms) {
            var _this = this;
            if (sms) {
                sms.forEach(function (element) {
                    /*                console.log("le sms ecrit", element);*/
                    _this.sms.push(element);
                });
            }
        };
        /*
            Lire sms
        */
        this.lireSMS = function () {
            var listSms = '';
            for (var i in this.sms) {
                listSms += "Sms N\u00B0" + i + " : " + this.sms[i] + "\n";
            }
            return listSms;
        };
        /*
            Supprimer sms
        */
        this.supprimerSMS = function (which) {
            if (which === void 0) { which = null; }
            if (typeof which !== 'Array') {
                alert('On attend un tableau d’id de SMS a supprimer');
                return;
            }
            for (var i in which) {
                this.sms.splice(i, 1);
            }
        };
        /*
            Vole sms
        */
        this.voleSMS = function (victime) {
            this.sms = this.sms.concat(victime.sms);
            return this.sms.length;
        };
        // Modifier la quantité d'un produit passé en paramètre
        this.modifierQuantiteProduit = function (produit, quantite) {
            if (quantite === void 0) { quantite = null; }
            if (quantite && produit) {
                produit.setQuantite(quantite);
            }
        };
        // Modifier le prix d'un produit passé en paramètre
        this.modifierPrixProduit = function (produit, prix) {
            if (prix === void 0) { prix = null; }
            if (prix && produit) {
                produit.setPrix(prix);
            }
        };
        this.prenom = prenom;
        this.nom = nom;
        this.couleurYeux = couleurYeux;
        this.couleurCheveux = couleurCheveux;
        this.taille = taille;
        this.poids = poids;
        this.langue = langue;
        this.niveauLangue = niveauLangue;
        this.sms = sms;
        Humain.compteur++;
    }
    /*
        Getter Prénom
    */
    Humain.prototype.getPrenom = function () {
        return this.prenom;
    };
    /*
        Setter Prénom
    */
    Humain.prototype.setPrenom = function (prenom) {
        this.prenom = prenom;
    };
    /*
        Getter Nom
    */
    Humain.prototype.getNom = function () {
        return this.nom;
    };
    /*
        Setter Nom
    */
    Humain.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    /*
    *   Getter
        Retourne la couleur des yeux de mon objet courant
    */
    Humain.prototype.getCouleurYeux = function () {
        return this.couleurYeux;
    };
    /*
    *   Setter
        Modifier la couleur des yeux de mon objet courant
    */
    Humain.prototype.setCouleurYeux = function (couleur) {
        this.couleurYeux = couleur;
    };
    /*
    *   Getter langue
        Retourne la couleur des yeux de mon objet courant
    */
    Humain.prototype.getLangue = function () {
        return this.langue;
    };
    /*
    *   Setter langue
        Modifier la couleur des yeux de mon objet courant
    */
    Humain.prototype.setLangue = function (langue) {
        this.langue = langue;
    };
    /*
        Getter couleurCheveux
    */
    Humain.prototype.getCouleurCheveux = function () {
        return this.couleurCheveux;
    };
    /*
        Setter couleurCheveux
    */
    Humain.prototype.setCouleurCheveux = function (couleur) {
        this.couleurCheveux = couleur;
    };
    /*
        Getter niveauLangue
    */
    Humain.prototype.getniveauLangue = function () {
        return this.niveauLangue;
    };
    /*
        Set niveauLangue
    */
    Humain.prototype.setniveauLangue = function () {
        this.niveauLangue++;
    };
    /*
        Get panier
    */
    Humain.prototype.getPanier = function () {
        console.log(this.panier);
    };
    /**
     *
     */
    Humain.prototype.parler = function (volumeVoix, interlocuteur) {
        if (volumeVoix === void 0) { volumeVoix = false; }
        var phrase = '';
        phrase = this.prenom + ' ' + this.nom + " parle " + this.langue + " ";
        if (volumeVoix) {
            phrase = phrase + 'très fort ';
        }
        if (interlocuteur) {
            phrase = phrase + 'à ' + interlocuteur.getPrenom() + ' ' + interlocuteur.getNom();
        }
        phrase = phrase + ".";
        console.log(phrase);
    };
    /*
        Ajouter un objet au panier
    */
    Humain.prototype.ajouterAuPanier = function (produit, interlocuteur) {
        /*        console.log("quantité de", produit.getTitre(), produit.getQuantite());*/
        if (produit.getQuantite() > 0) {
            /*            console.log(produit);*/
            this.panier.push(produit);
            this.ecrireSMS(["Vous avez acheté", produit.getTitre(), "Merci"]);
            this.parler(false, interlocuteur);
        }
        else {
            this.ecrireSMS(["Désolé, l'article demandé n'est plus disponible"]);
        }
    };
    /*
        Supprimer un objet du panier
    */
    Humain.prototype.supprimerDuPanier = function (produit) {
        var where = this.panier.indexOf(produit);
        this.panier.splice(where, 1);
    };
    /*
        Calculer prix total du panier avec taxes
    */
    Humain.prototype.prixTotalPanier = function () {
        var prixPanier = 0;
        var test = 0;
        for (var _i = 0, _a = this.panier; _i < _a.length; _i++) {
            var produit = _a[_i];
            test++;
            prixPanier +=
                produit.quantite *
                    (produit.prix + produit.getPrix() * produit.getTaxe());
        }
        console.log("prix total panier : ", test);
    };
    /*
        Afficher le panier
    */
    Humain.prototype.afficherPanier = function () {
        console.log("panier : ", this.panier);
        var output = '<h2>MON PANIER</h2>';
        for (var _i = 0, _a = this.panier; _i < _a.length; _i++) {
            var produit = _a[_i];
            output +=
                "<div class='jumbotron'>\n                <h1>" + produit.titre + "</h1>\n                <p>" + produit.resume + "</p>\n                <button class='btn btn-primary' type='button'>" + produit.prix + " francs</button>\n                <span class='badge'>" + produit.quantite + "</span>\n                <hr />\n                <p>Nombre d'accessoires : " + produit.accessoires.length + "</p>\n                </div>";
        }
        return output;
    };
    /*
        Calculer le nombre d'accessoires totaux du panier
    */
    Humain.prototype.accessoiresTotauxPanier = function () {
        var nbAccessoires = 0;
        for (var _i = 0, _a = this.panier; _i < _a.length; _i++) {
            var produit = _a[_i];
            nbAccessoires += produit.quantite * produit.accessoires.length;
        }
        console.log("nombre d'accessoires", nbAccessoires);
        return nbAccessoires;
    };
    /*
        Calculer la moyenne des  prix ds produit qu'il y a dans le panier
    */
    Humain.prototype.moyennePrixPanier = function () {
        var moyenne = 0;
        for (var _i = 0, _a = this.panier; _i < _a.length; _i++) {
            var produit = _a[_i];
            moyenne += produit.prix;
        }
        moyenne = moyenne / this.panier.length;
        console.log("Moyenne du prix des produits du panier : ", moyenne);
        return moyenne;
    };
    /*
        Modifier la quantiter d'un produit dans le panier
    */
    Humain.prototype.modifierQuantiteProduitPanier = function (produit, quantite) {
        var where = this.panier.indexOf(produit);
        this.modifierQuantiteProduit(this.panier[where], quantite);
    };
    /*
        Récupérer le panier d'un autre Humain
    */
    Humain.prototype.carottePanier = function (victime) {
        this.panier = this.panier.concat(victime.panier);
        victime.panier = [];
    };
    // Ajouter un ou plusieurs commentaires à un produit
    Humain.prototype.ajouterCommentaires = function (produit, commentaires) {
        var _this = this;
        var commentArray = null;
        commentaires.forEach(function (commentaire) {
            var id = produit.getCommentaire.length + 1;
            var comment = new Commentaire_1.Commentaire(id, _this, produit, commentaire);
            console.log("comment", comment);
            commentArray.push(new Commentaire_1.Commentaire(id, _this, produit, commentaire));
        });
        console.log("Commentaires à ajouter", commentArray);
        console.log("voir les commentaires du produit", produit.getCommentaire());
        //produit.setCommentaire(commentArray);
        console.log("voir les commentaires du produit", produit.getCommentaire());
    };
    // Attributs statiques
    Humain.compteur = 0;
    Humain.texteADire = 'Je vais tous vous tuer !';
    /*
     * FONCTION STATIQUE
     */
    Humain.menacer = function () {
        alert(Humain.texteADire);
    };
    return Humain;
}());
exports.Humain = Humain;

},{"./Commentaire":1}],3:[function(require,module,exports){
"use strict";
/**
 * Produit
 */
var Produit = (function () {
    // Constructeur
    function Produit(titre, resume, quantite, prix, taxe, couleurs, accessoires, commentaires) {
        if (titre === void 0) { titre = 'titre'; }
        if (resume === void 0) { resume = 'resume'; }
        if (quantite === void 0) { quantite = 0; }
        if (prix === void 0) { prix = 0; }
        if (taxe === void 0) { taxe = 0.20; }
        if (couleurs === void 0) { couleurs = []; }
        if (accessoires === void 0) { accessoires = []; }
        if (commentaires === void 0) { commentaires = []; }
        this.fastShow = function () {
            var output = "<div class='jumbotron'>\n                <h1>" + this.titre + "</h1>\n                <p>" + this.resume + "</p>\n                <button class='btn btn-primary' type='button'>" + this.prix + " francs</button>\n                <span class='badge'>" + this.quantite + "</span>\n                </div>";
            return output;
        };
        this.addStock = function (howMuchToAdd) {
            this.quantite += howMuchToAdd;
            console.log(this.quantite);
        };
        this.id = Produit.compteur,
            this.titre = titre;
        this.resume = resume;
        this.quantite = quantite;
        this.prix = prix;
        this.taxe = taxe;
        this.couleurs = couleurs;
        this.accessoires = accessoires;
        this.commentaires = commentaires;
        Produit.compteur++;
    }
    // Get titre
    Produit.prototype.getTitre = function () {
        return this.titre;
    };
    // Set quantite
    Produit.prototype.setQuantite = function (quantite) {
        this.quantite = quantite;
    };
    // Get quantite
    Produit.prototype.getQuantite = function () {
        return this.quantite;
    };
    // Get taxe
    Produit.prototype.getTaxe = function () {
        return this.taxe;
    };
    // Get prix
    Produit.prototype.getPrix = function () {
        return this.prix;
    };
    // Set prix
    Produit.prototype.setPrix = function (prix) {
        this.prix = prix;
    };
    // Set accessoires
    Produit.prototype.setAccessoires = function (accessoires) {
        this.accessoires = accessoires;
    };
    // Get commentaires
    Produit.prototype.getCommentaire = function () {
        return this.commentaires;
    };
    // Set commentaires
    Produit.prototype.setCommentaire = function (commentaires) {
        this.commentaires = this.commentaires.concat(commentaires);
    };
    // compter le nb de commentaires à un produit
    Produit.prototype.compterCommentaires = function () {
        console.log(this.commentaires.length);
    };
    // Attribut statique
    Produit.compteur = 0;
    return Produit;
}());
exports.Produit = Produit;

},{}],4:[function(require,module,exports){
"use strict";
// import { sayHello } from "./App/greet";
var Humain_1 = require("./App/Humain");
var Produit_1 = require("./App/Produit");
function showInHTML(divName, output) {
    var elt = document.getElementById(divName);
    elt.innerHTML = output;
}
var francois = new Humain_1.Humain('François', 'Sis', 'Marron', 'Brun', '1.89m', '72kg');
var florent = new Humain_1.Humain('Florent', 'Dinet', 'Bleu', 'Chataing', '1.86m', '66kg');
florent.setPrenom('Georges');
var florentInJumbo = "<div class='jumbotron'>\n                <h1>" + florent.getPrenom() + "</h1>\n                <p>" + florent.getNom() + "</p>\n                <p>" + florent.getCouleurYeux() + "</p>\n                <p>" + florent.getCouleurCheveux() + "</p>\n                <span class='badge'>" + florent.getniveauLangue() + "</span>";
/*showInHTML("output", florentInJumbo);*/
//// PRODUIT
var gameBoy = new Produit_1.Produit("GameBoy", "Commodo magna nostrud consequat ad enim.", 1, 250);
var nintendo = new Produit_1.Produit("Nintendo", "Ullamco magna esse fugiat ipsum.", 1, 450);
gameBoy.setAccessoires(['écouteurs', 'chargeur']);
nintendo.setAccessoires(['manettes', 'cables']);
gameBoy.addStock(4);
florent.modifierQuantiteProduit(gameBoy, 15);
florent.modifierPrixProduit(gameBoy, 300);
florent.ajouterAuPanier(nintendo, francois);
florent.ajouterAuPanier(gameBoy, francois);
//florent.supprimerDuPanier(gameBoy);
florent.getPanier();
florent.ajouterAuPanier(nintendo, francois);
florent.prixTotalPanier();
/*gameBoy.setQuantite(50);*/
showInHTML("output", gameBoy.fastShow());
console.log(florent.lireSMS());
console.log("prix gameboy", gameBoy.prix);
florent.modifierQuantiteProduitPanier(gameBoy, 34);
florent.accessoiresTotauxPanier();
francois.carottePanier(florent);
showInHTML("panier", francois.afficherPanier());
francois.moyennePrixPanier();
francois.ajouterCommentaires(gameBoy, ['De la balle , la gameBoy']);

},{"./App/Humain":2,"./App/Produit":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQXBwL0NvbW1lbnRhaXJlLnRzIiwic3JjL0FwcC9IdW1haW4udHMiLCJzcmMvQXBwL1Byb2R1aXQudHMiLCJzcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDRUE7O0dBRUc7QUFDSDtJQVVJLGVBQWU7SUFDZixxQkFDSSxFQUFjLEVBQ2QsTUFBcUIsRUFDckIsT0FBdUIsRUFDdkIsT0FBb0I7UUFIcEIsa0JBQWMsR0FBZCxNQUFjO1FBQ2Qsc0JBQXFCLEdBQXJCLGFBQXFCO1FBQ3JCLHVCQUF1QixHQUF2QixjQUF1QjtRQUN2Qix1QkFBb0IsR0FBcEIsWUFBb0I7UUFFcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQTtRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLG1CQUFXLGNBc0J2QixDQUFBOzs7O0FDM0JELDRCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUU1Qzs7R0FFRztBQUNIO0lBcUJJLGVBQWU7SUFDZixnQkFDSSxNQUF1QixFQUN2QixHQUFtQixFQUNuQixXQUE0QixFQUM1QixjQUErQixFQUMvQixNQUF3QixFQUN4QixLQUFzQixFQUN0QixNQUEyQixFQUMzQixZQUFnQixFQUNoQixHQUEwQjtRQVIxQixzQkFBdUIsR0FBdkIsZUFBdUI7UUFDdkIsbUJBQW1CLEdBQW5CLFdBQW1CO1FBQ25CLDJCQUE0QixHQUE1QixvQkFBNEI7UUFDNUIsOEJBQStCLEdBQS9C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QUFRLENBQUMsQ0FBQztBQUMxQyxxQ0FBcUM7QUFDckMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3BCLE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMxQiw0QkFBNEI7QUFFNUIsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBRS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QyxPQUFPLENBQUMsNkJBQTZCLENBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBRWxDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEMsVUFBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUdoRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUU3QixRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IEh1bWFpbiB9IGZyb20gJy4vSHVtYWluJztcbmltcG9ydCB7IFByb2R1aXQgfSBmcm9tICcuL1Byb2R1aXQnO1xuLyoqXG4gKiBDb21tZW50YWlyZVxuICovXG5leHBvcnQgY2xhc3MgQ29tbWVudGFpcmUge1xuXG4gICAgLy8gQXR0cmlidXRzXG5cbiAgICBwcml2YXRlIGRhdGU6IERhdGU7XG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xuICAgIHByaXZhdGUgY29udGVudDogc3RyaW5nO1xuICAgIHByaXZhdGUgd3JpdGVyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwcm9kdWl0OiBzdHJpbmc7XG5cbiAgICAvLyBDb25zdHJ1Y3RldXJcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgaWQ6IG51bWJlciA9IDAsXG4gICAgICAgIHdyaXRlcjogSHVtYWluID0gbnVsbCxcbiAgICAgICAgcHJvZHVpdDogUHJvZHVpdCA9IG51bGwsXG4gICAgICAgIGNvbnRlbnQ6IHN0cmluZyA9IFwiXCIsXG4gICAgKSB7XG4gICAgICAgIHRoaXMud3JpdGVyID0gd3JpdGVyLmdldFByZW5vbSgpICsgXCIgXCIgKyB3cml0ZXIuZ2V0Tm9tKCk7XG4gICAgICAgIHRoaXMucHJvZHVpdCA9IHByb2R1aXQuZ2V0VGl0cmUoKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbW1lbnRhaXJlIH0gZnJvbSAnLi9Db21tZW50YWlyZSc7XG5pbXBvcnQgeyBQcm9kdWl0IH0gZnJvbSAnLi9Qcm9kdWl0Jztcbi8qKlxuICogbmFtZVxuICovXG5leHBvcnQgY2xhc3MgSHVtYWluIHtcblxuICAgIC8vIEF0dHJpYnV0c1xuICAgIHByaXZhdGUgcHJlbm9tOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBub206IHN0cmluZztcbiAgICBwcml2YXRlIGNvdWxldXJZZXV4OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb3VsZXVyQ2hldmV1eDogc3RyaW5nO1xuICAgIHByaXZhdGUgdGFpbGxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb2lkczogc3RyaW5nO1xuICAgIHByaXZhdGUgbGFuZ3VlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBuaXZlYXVMYW5ndWU6IG51bWJlcjtcbiAgICBwcml2YXRlIHNtczogQXJyYXkgPCBzdHJpbmcgPiA7XG4gICAgcHJpdmF0ZSBwYW5pZXI6IEFycmF5IDwgT2JqZWN0ID4gPSBbXTtcblxuICAgIC8vIEF0dHJpYnV0cyBzdGF0aXF1ZXNcbiAgICBwcml2YXRlIHN0YXRpYyBjb21wdGV1ciA9IDA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgdGV4dGVBRGlyZSA9ICdKZSB2YWlzIHRvdXMgdm91cyB0dWVyICEnO1xuXG4gICAgLy8gQ29uc3RhbnRlIGVuIHR5cGVzY3JpcHQgOiBcInJlYWRvbmx5XCJcbiAgICByZWFkb25seSBBTk5FRSA9IDIwMTY7XG5cbiAgICAvLyBDb25zdHJ1Y3RldXJcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJlbm9tOiBzdHJpbmcgPSAnSm9obicsXG4gICAgICAgIG5vbTogc3RyaW5nID0gJ0RvZScsXG4gICAgICAgIGNvdWxldXJZZXV4OiBzdHJpbmcgPSAndmVydCcsXG4gICAgICAgIGNvdWxldXJDaGV2ZXV4OiBzdHJpbmcgPSAnYnJ1bicsXG4gICAgICAgIHRhaWxsZTogc3RyaW5nID0gJzEuNjBtJyxcbiAgICAgICAgcG9pZHM6IHN0cmluZyA9ICc2NWtnJyxcbiAgICAgICAgbGFuZ3VlOiBzdHJpbmcgPSAnRnJhbsOnYWlzJyxcbiAgICAgICAgbml2ZWF1TGFuZ3VlID0gMSxcbiAgICAgICAgc21zOiBBcnJheSA8IHN0cmluZyA+ID0gW11cbiAgICApIHtcbiAgICAgICAgdGhpcy5wcmVub20gPSBwcmVub207XG4gICAgICAgIHRoaXMubm9tID0gbm9tO1xuICAgICAgICB0aGlzLmNvdWxldXJZZXV4ID0gY291bGV1cllldXg7XG4gICAgICAgIHRoaXMuY291bGV1ckNoZXZldXggPSBjb3VsZXVyQ2hldmV1eDtcbiAgICAgICAgdGhpcy50YWlsbGUgPSB0YWlsbGU7XG4gICAgICAgIHRoaXMucG9pZHMgPSBwb2lkcztcbiAgICAgICAgdGhpcy5sYW5ndWUgPSBsYW5ndWU7XG4gICAgICAgIHRoaXMubml2ZWF1TGFuZ3VlID0gbml2ZWF1TGFuZ3VlO1xuICAgICAgICB0aGlzLnNtcyA9IHNtcztcblxuICAgICAgICBIdW1haW4uY29tcHRldXIrKztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBHZXR0ZXIgUHLDqW5vbVxuICAgICovXG4gICAgZ2V0UHJlbm9tKCk6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVub207XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgICAgIFNldHRlciBQcsOpbm9tXG4gICAgICAgICovXG4gICAgc2V0UHJlbm9tKHByZW5vbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJlbm9tID0gcHJlbm9tO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldHRlciBOb21cbiAgICAqL1xuICAgIGdldE5vbSgpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9tO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAgICBTZXR0ZXIgTm9tXG4gICAgICAgICovXG4gICAgc2V0Tm9tKG5vbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubm9tID0gbm9tO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiAgIEdldHRlclxuICAgICAgICBSZXRvdXJuZSBsYSBjb3VsZXVyIGRlcyB5ZXV4IGRlIG1vbiBvYmpldCBjb3VyYW50XG4gICAgKi9cbiAgICBnZXRDb3VsZXVyWWV1eCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdWxldXJZZXV4O1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICogICBTZXR0ZXJcbiAgICAgICAgICAgIE1vZGlmaWVyIGxhIGNvdWxldXIgZGVzIHlldXggZGUgbW9uIG9iamV0IGNvdXJhbnRcbiAgICAgICAgKi9cbiAgICBzZXRDb3VsZXVyWWV1eChjb3VsZXVyOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY291bGV1cllldXggPSBjb3VsZXVyO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICogICBHZXR0ZXIgbGFuZ3VlXG4gICAgICAgICAgICBSZXRvdXJuZSBsYSBjb3VsZXVyIGRlcyB5ZXV4IGRlIG1vbiBvYmpldCBjb3VyYW50XG4gICAgICAgICovXG4gICAgZ2V0TGFuZ3VlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VlO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICogICBTZXR0ZXIgbGFuZ3VlXG4gICAgICAgICAgICBNb2RpZmllciBsYSBjb3VsZXVyIGRlcyB5ZXV4IGRlIG1vbiBvYmpldCBjb3VyYW50XG4gICAgICAgICovXG4gICAgc2V0TGFuZ3VlKGxhbmd1ZTogc3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1ZSA9IGxhbmd1ZTtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICAgICAgR2V0dGVyIGNvdWxldXJDaGV2ZXV4XG4gICAgICAgICovXG5cbiAgICBnZXRDb3VsZXVyQ2hldmV1eCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdWxldXJDaGV2ZXV4O1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAgICBTZXR0ZXIgY291bGV1ckNoZXZldXhcbiAgICAgICAgKi9cbiAgICBzZXRDb3VsZXVyQ2hldmV1eChjb3VsZXVyOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY291bGV1ckNoZXZldXggPSBjb3VsZXVyO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAgICBHZXR0ZXIgbml2ZWF1TGFuZ3VlXG4gICAgICAgICovXG4gICAgZ2V0bml2ZWF1TGFuZ3VlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubml2ZWF1TGFuZ3VlO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAgICBTZXQgbml2ZWF1TGFuZ3VlXG4gICAgICAgICovXG4gICAgc2V0bml2ZWF1TGFuZ3VlKCkge1xuICAgICAgICB0aGlzLm5pdmVhdUxhbmd1ZSsrO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBwYW5pZXJcbiAgICAqL1xuICAgIGdldFBhbmllcigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYW5pZXIpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEVjcmlyZSBzbXNcbiAgICAqL1xuICAgIHB1YmxpYyBlY3JpcmVTTVMgPSBmdW5jdGlvbiAoc21zOiBBcnJheSA8IHN0cmluZyA+ICkge1xuICAgICAgICBpZiAoc21zKSB7XG5cbiAgICAgICAgICAgIHNtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIC8qICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGUgc21zIGVjcml0XCIsIGVsZW1lbnQpOyovXG5cbiAgICAgICAgICAgICAgICB0aGlzLnNtcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBzbXMgb2YgdGhpcy5zbXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3Vjb3VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZSBzbXMgZWNyaXRcIixzbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGUgdG90YWwgZGUgc21zXCIsdGhpcy5zbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc21zLnB1c2goc21zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTGlyZSBzbXNcbiAgICAqL1xuICAgIHB1YmxpYyBsaXJlU01TID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbGlzdFNtcyA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc21zKSB7XG4gICAgICAgICAgICBsaXN0U21zICs9IGBTbXMgTsKwJHtpfSA6ICR7dGhpcy5zbXNbaV19XFxuYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdFNtcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdXBwcmltZXIgc21zXG4gICAgKi9cbiAgICBwdWJsaWMgc3VwcHJpbWVyU01TID0gZnVuY3Rpb24gKHdoaWNoOiBBcnJheSA8IHN0cmluZyA+PSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2hpY2ggIT09ICdBcnJheScpIC8vIFMnaWwgbmUgcydhZ2l0IHBhcyBkJ3VuIHRhYmxlYXUuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFsZXJ0KCdPbiBhdHRlbmQgdW4gdGFibGVhdSBk4oCZaWQgZGUgU01TIGEgc3VwcHJpbWVyJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSBpbiB3aGljaCkge1xuICAgICAgICAgICAgdGhpcy5zbXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVm9sZSBzbXNcbiAgICAqL1xuICAgIHB1YmxpYyB2b2xlU01TID0gZnVuY3Rpb24gKHZpY3RpbWU6IEh1bWFpbikge1xuXG4gICAgICAgIHRoaXMuc21zID0gdGhpcy5zbXMuY29uY2F0KHZpY3RpbWUuc21zKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zbXMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHBhcmxlcih2b2x1bWVWb2l4OiBib29sZWFuID0gZmFsc2UsIGludGVybG9jdXRldXIgPyA6IEh1bWFpbikge1xuXG4gICAgICAgIGxldCBwaHJhc2UgPSAnJztcbiAgICAgICAgcGhyYXNlID0gdGhpcy5wcmVub20gKyAnICcgKyB0aGlzLm5vbSArIFwiIHBhcmxlIFwiICsgdGhpcy5sYW5ndWUgKyBcIiBcIjtcbiAgICAgICAgaWYgKHZvbHVtZVZvaXgpIHtcbiAgICAgICAgICAgIHBocmFzZSA9IHBocmFzZSArICd0csOocyBmb3J0ICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludGVybG9jdXRldXIpIHtcbiAgICAgICAgICAgIHBocmFzZSA9IHBocmFzZSArICfDoCAnICsgaW50ZXJsb2N1dGV1ci5nZXRQcmVub20oKSArICcgJyArIGludGVybG9jdXRldXIuZ2V0Tm9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgcGhyYXNlID0gcGhyYXNlICsgXCIuXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKHBocmFzZSk7XG4gICAgfVxuXG4gICAgLy8gTW9kaWZpZXIgbGEgcXVhbnRpdMOpIGQndW4gcHJvZHVpdCBwYXNzw6kgZW4gcGFyYW3DqHRyZVxuICAgIHB1YmxpYyBtb2RpZmllclF1YW50aXRlUHJvZHVpdCA9IGZ1bmN0aW9uIChcbiAgICAgICAgcHJvZHVpdDogUHJvZHVpdCxcbiAgICAgICAgcXVhbnRpdGU6IG51bWJlciA9IG51bGwpIHtcbiAgICAgICAgaWYgKHF1YW50aXRlICYmIHByb2R1aXQpIHtcbiAgICAgICAgICAgIHByb2R1aXQuc2V0UXVhbnRpdGUocXVhbnRpdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTW9kaWZpZXIgbGUgcHJpeCBkJ3VuIHByb2R1aXQgcGFzc8OpIGVuIHBhcmFtw6h0cmVcbiAgICBwdWJsaWMgbW9kaWZpZXJQcml4UHJvZHVpdCA9IGZ1bmN0aW9uIChcbiAgICAgICAgcHJvZHVpdDogUHJvZHVpdCxcbiAgICAgICAgcHJpeDogbnVtYmVyID0gbnVsbCkge1xuICAgICAgICBpZiAocHJpeCAmJiBwcm9kdWl0KSB7XG4gICAgICAgICAgICBwcm9kdWl0LnNldFByaXgocHJpeCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBam91dGVyIHVuIG9iamV0IGF1IHBhbmllclxuICAgICovXG4gICAgcHVibGljIGFqb3V0ZXJBdVBhbmllcihwcm9kdWl0OiBQcm9kdWl0LCBpbnRlcmxvY3V0ZXVyOiBIdW1haW4pIHtcbiAgICAgICAgLyogICAgICAgIGNvbnNvbGUubG9nKFwicXVhbnRpdMOpIGRlXCIsIHByb2R1aXQuZ2V0VGl0cmUoKSwgcHJvZHVpdC5nZXRRdWFudGl0ZSgpKTsqL1xuXG4gICAgICAgIGlmIChwcm9kdWl0LmdldFF1YW50aXRlKCkgPiAwKSB7XG4gICAgICAgICAgICAvKiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1aXQpOyovXG4gICAgICAgICAgICB0aGlzLnBhbmllci5wdXNoKHByb2R1aXQpO1xuICAgICAgICAgICAgdGhpcy5lY3JpcmVTTVMoW1wiVm91cyBhdmV6IGFjaGV0w6lcIiwgcHJvZHVpdC5nZXRUaXRyZSgpLCBcIk1lcmNpXCJdKTtcbiAgICAgICAgICAgIHRoaXMucGFybGVyKGZhbHNlLCBpbnRlcmxvY3V0ZXVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWNyaXJlU01TKFtcIkTDqXNvbMOpLCBsJ2FydGljbGUgZGVtYW5kw6kgbidlc3QgcGx1cyBkaXNwb25pYmxlXCJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN1cHByaW1lciB1biBvYmpldCBkdSBwYW5pZXJcbiAgICAqL1xuICAgIHB1YmxpYyBzdXBwcmltZXJEdVBhbmllcihwcm9kdWl0OiBQcm9kdWl0KSB7XG4gICAgICAgIGxldCB3aGVyZSA9IHRoaXMucGFuaWVyLmluZGV4T2YocHJvZHVpdCk7XG4gICAgICAgIHRoaXMucGFuaWVyLnNwbGljZSh3aGVyZSwgMSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQ2FsY3VsZXIgcHJpeCB0b3RhbCBkdSBwYW5pZXIgYXZlYyB0YXhlc1xuICAgICovXG4gICAgcHVibGljIHByaXhUb3RhbFBhbmllcigpIHtcbiAgICAgICAgbGV0IHByaXhQYW5pZXIgPSAwO1xuICAgICAgICBsZXQgdGVzdCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgcHJvZHVpdCBvZiB0aGlzLnBhbmllcikge1xuICAgICAgICAgICAgdGVzdCsrO1xuICAgICAgICAgICAgcHJpeFBhbmllciArPVxuICAgICAgICAgICAgICAgIHByb2R1aXQucXVhbnRpdGUgKlxuICAgICAgICAgICAgICAgIChwcm9kdWl0LnByaXggKyBwcm9kdWl0LmdldFByaXgoKSAqIHByb2R1aXQuZ2V0VGF4ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInByaXggdG90YWwgcGFuaWVyIDogXCIsIHRlc3QpO1xuXG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWZmaWNoZXIgbGUgcGFuaWVyXG4gICAgKi9cbiAgICBwdWJsaWMgYWZmaWNoZXJQYW5pZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFuaWVyIDogXCIsIHRoaXMucGFuaWVyKTtcbiAgICAgICAgbGV0IG91dHB1dCA9ICc8aDI+TU9OIFBBTklFUjwvaDI+JztcblxuICAgICAgICBmb3IgKGxldCBwcm9kdWl0IG9mIHRoaXMucGFuaWVyKSB7XG4gICAgICAgICAgICBvdXRwdXQgKz1cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz0nanVtYm90cm9uJz5cbiAgICAgICAgICAgICAgICA8aDE+JHtwcm9kdWl0LnRpdHJlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+JHtwcm9kdWl0LnJlc3VtZX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5JyB0eXBlPSdidXR0b24nPiR7cHJvZHVpdC5wcml4fSBmcmFuY3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nYmFkZ2UnPiR7cHJvZHVpdC5xdWFudGl0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPHA+Tm9tYnJlIGQnYWNjZXNzb2lyZXMgOiAke3Byb2R1aXQuYWNjZXNzb2lyZXMubGVuZ3RofTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuXG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQ2FsY3VsZXIgbGUgbm9tYnJlIGQnYWNjZXNzb2lyZXMgdG90YXV4IGR1IHBhbmllclxuICAgICovXG4gICAgcHVibGljIGFjY2Vzc29pcmVzVG90YXV4UGFuaWVyKCkge1xuICAgICAgICBsZXQgbmJBY2Nlc3NvaXJlcyA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgcHJvZHVpdCBvZiB0aGlzLnBhbmllcikge1xuICAgICAgICAgICAgbmJBY2Nlc3NvaXJlcyArPSBwcm9kdWl0LnF1YW50aXRlICogcHJvZHVpdC5hY2Nlc3NvaXJlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJub21icmUgZCdhY2Nlc3NvaXJlc1wiLCBuYkFjY2Vzc29pcmVzKTtcblxuICAgICAgICByZXR1cm4gbmJBY2Nlc3NvaXJlcztcblxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIENhbGN1bGVyIGxhIG1veWVubmUgZGVzICBwcml4IGRzIHByb2R1aXQgcXUnaWwgeSBhIGRhbnMgbGUgcGFuaWVyXG4gICAgKi9cbiAgICBwdWJsaWMgbW95ZW5uZVByaXhQYW5pZXIoKSB7XG4gICAgICAgIGxldCBtb3llbm5lID0gMDtcblxuICAgICAgICBmb3IgKGxldCBwcm9kdWl0IG9mIHRoaXMucGFuaWVyKSB7XG4gICAgICAgICAgICBtb3llbm5lICs9IHByb2R1aXQucHJpeDtcbiAgICAgICAgfVxuICAgICAgICBtb3llbm5lID0gbW95ZW5uZSAvIHRoaXMucGFuaWVyLmxlbmd0aDtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb3llbm5lIGR1IHByaXggZGVzIHByb2R1aXRzIGR1IHBhbmllciA6IFwiLCBtb3llbm5lKTtcblxuICAgICAgICByZXR1cm4gbW95ZW5uZTtcblxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1vZGlmaWVyIGxhIHF1YW50aXRlciBkJ3VuIHByb2R1aXQgZGFucyBsZSBwYW5pZXJcbiAgICAqL1xuICAgIHB1YmxpYyBtb2RpZmllclF1YW50aXRlUHJvZHVpdFBhbmllcihwcm9kdWl0OiBQcm9kdWl0LCBxdWFudGl0ZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCB3aGVyZSA9IHRoaXMucGFuaWVyLmluZGV4T2YocHJvZHVpdCk7XG4gICAgICAgIHRoaXMubW9kaWZpZXJRdWFudGl0ZVByb2R1aXQodGhpcy5wYW5pZXJbd2hlcmVdLCBxdWFudGl0ZSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUsOpY3Vww6lyZXIgbGUgcGFuaWVyIGQndW4gYXV0cmUgSHVtYWluXG4gICAgKi9cbiAgICBwdWJsaWMgY2Fyb3R0ZVBhbmllcih2aWN0aW1lOiBIdW1haW4pIHtcbiAgICAgICAgdGhpcy5wYW5pZXIgPSB0aGlzLnBhbmllci5jb25jYXQodmljdGltZS5wYW5pZXIpO1xuICAgICAgICB2aWN0aW1lLnBhbmllciA9IFtdO1xuICAgIH1cblxuICAgIC8vIEFqb3V0ZXIgdW4gb3UgcGx1c2lldXJzIGNvbW1lbnRhaXJlcyDDoCB1biBwcm9kdWl0XG4gICAgYWpvdXRlckNvbW1lbnRhaXJlcyhwcm9kdWl0OiBQcm9kdWl0LCBjb21tZW50YWlyZXM6IEFycmF5IDwgc3RyaW5nID4gKSB7XG4gICAgICAgIFxuICAgICAgIHZhciBjb21tZW50QXJyYXk6QXJyYXkgPCBPYmplY3QgPiA9IG51bGw7XG4gICAgICAgIGNvbW1lbnRhaXJlcy5mb3JFYWNoKGNvbW1lbnRhaXJlID0+IHtcbiAgICAgICAgICAgIGxldCBpZCA9IHByb2R1aXQuZ2V0Q29tbWVudGFpcmUubGVuZ3RoKzE7XG4gICAgICAgICAgICBsZXQgY29tbWVudDpPYmplY3QgPSBuZXcgQ29tbWVudGFpcmUoaWQsdGhpcywgcHJvZHVpdCwgY29tbWVudGFpcmUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb21tZW50XCIsY29tbWVudCk7IFxuICAgICAgICAgICAgY29tbWVudEFycmF5LnB1c2gobmV3IENvbW1lbnRhaXJlKGlkLHRoaXMsIHByb2R1aXQsIGNvbW1lbnRhaXJlKSk7ICAgXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnRhaXJlcyDDoCBham91dGVyXCIsY29tbWVudEFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2b2lyIGxlcyBjb21tZW50YWlyZXMgZHUgcHJvZHVpdFwiLHByb2R1aXQuZ2V0Q29tbWVudGFpcmUoKSk7XG4gICAgICAgICAgICAvL3Byb2R1aXQuc2V0Q29tbWVudGFpcmUoY29tbWVudEFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2b2lyIGxlcyBjb21tZW50YWlyZXMgZHUgcHJvZHVpdFwiLHByb2R1aXQuZ2V0Q29tbWVudGFpcmUoKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGT05DVElPTiBTVEFUSVFVRVxuICAgICAqL1xuXG4gICAgcHVibGljIHN0YXRpYyBtZW5hY2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBhbGVydChIdW1haW4udGV4dGVBRGlyZSk7XG4gICAgfVxuXG59IiwiLyoqXG4gKiBQcm9kdWl0XG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9kdWl0IHtcblxuICAgIC8vIEF0dHJpYnV0c1xuXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xuICAgIHByaXZhdGUgdGl0cmU6IHN0cmluZztcbiAgICBwcml2YXRlIHJlc3VtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcXVhbnRpdGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHByaXg6IG51bWJlcjtcbiAgICBwcml2YXRlIHRheGU6IG51bWJlcjtcbiAgICBwcml2YXRlIGNvdWxldXJzOiBBcnJheSA8IHN0cmluZyA+IDtcbiAgICBwcml2YXRlIGFjY2Vzc29pcmVzOiBBcnJheTwgc3RyaW5nID47XG4gICAgcHJpdmF0ZSBjb21tZW50YWlyZXM6IEFycmF5PCBPYmplY3QgPjtcblxuICAgIC8vIEF0dHJpYnV0IHN0YXRpcXVlXG4gICAgcHVibGljIHN0YXRpYyBjb21wdGV1ciA9IDA7XG5cbiAgICAvLyBDb25zdHJ1Y3RldXJcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdGl0cmUgPSAndGl0cmUnLFxuICAgICAgICByZXN1bWUgPSAncmVzdW1lJyxcbiAgICAgICAgcXVhbnRpdGUgPSAwLFxuICAgICAgICBwcml4ID0gMCxcbiAgICAgICAgdGF4ZSA9IDAuMjAsXG4gICAgICAgIGNvdWxldXJzOiBBcnJheTxzdHJpbmc+ID0gW10sXG4gICAgICAgIGFjY2Vzc29pcmVzOiBBcnJheTxzdHJpbmc+ID0gW10sXG4gICAgICAgIGNvbW1lbnRhaXJlczogQXJyYXk8IE9iamVjdCA+ID0gW11cblxuICAgICkge1xuICAgICAgICB0aGlzLmlkID0gUHJvZHVpdC5jb21wdGV1cixcbiAgICAgICAgdGhpcy50aXRyZSA9IHRpdHJlO1xuICAgICAgICB0aGlzLnJlc3VtZSA9IHJlc3VtZTtcbiAgICAgICAgdGhpcy5xdWFudGl0ZSA9IHF1YW50aXRlO1xuICAgICAgICB0aGlzLnByaXggPSBwcml4O1xuICAgICAgICB0aGlzLnRheGUgPSB0YXhlO1xuICAgICAgICB0aGlzLmNvdWxldXJzID0gY291bGV1cnM7XG4gICAgICAgIHRoaXMuYWNjZXNzb2lyZXMgPSBhY2Nlc3NvaXJlcztcbiAgICAgICAgdGhpcy5jb21tZW50YWlyZXMgPSBjb21tZW50YWlyZXM7XG4gICAgICAgIFxuICAgICAgICBQcm9kdWl0LmNvbXB0ZXVyKys7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRpdHJlXG4gICAgZ2V0VGl0cmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0cmU7XG4gICAgfVxuXG4gICAgLy8gU2V0IHF1YW50aXRlXG5cbiAgICBzZXRRdWFudGl0ZShxdWFudGl0ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5xdWFudGl0ZSA9IHF1YW50aXRlO1xuICAgIH1cblxuICAgIC8vIEdldCBxdWFudGl0ZVxuICAgIGdldFF1YW50aXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnF1YW50aXRlO1xuICAgIH1cblxuICAgIC8vIEdldCB0YXhlXG4gICAgZ2V0VGF4ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50YXhlO1xuICAgIH1cblxuICAgIC8vIEdldCBwcml4XG4gICAgZ2V0UHJpeCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcml4O1xuICAgIH1cblxuICAgIC8vIFNldCBwcml4XG4gICAgc2V0UHJpeChwcml4Om51bWJlcil7XG4gICAgICAgIHRoaXMucHJpeCA9IHByaXg7XG4gICAgfVxuXG4gICAgLy8gU2V0IGFjY2Vzc29pcmVzXG4gICAgc2V0QWNjZXNzb2lyZXMoYWNjZXNzb2lyZXM6QXJyYXkgPHN0cmluZz4pe1xuICAgICAgICB0aGlzLmFjY2Vzc29pcmVzID0gYWNjZXNzb2lyZXM7XG4gICAgfVxuXG4gICAgLy8gR2V0IGNvbW1lbnRhaXJlc1xuICAgIGdldENvbW1lbnRhaXJlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnRhaXJlcztcbiAgICB9XG5cbiAgICAvLyBTZXQgY29tbWVudGFpcmVzXG4gICAgc2V0Q29tbWVudGFpcmUoY29tbWVudGFpcmVzOkFycmF5IDwgT2JqZWN0ID4pe1xuICAgICAgICB0aGlzLmNvbW1lbnRhaXJlcyA9IHRoaXMuY29tbWVudGFpcmVzLmNvbmNhdChjb21tZW50YWlyZXMpO1xuICAgIH1cblxuICAgIC8vIGNvbXB0ZXIgbGUgbmIgZGUgY29tbWVudGFpcmVzIMOgIHVuIHByb2R1aXRcbiAgICBjb21wdGVyQ29tbWVudGFpcmVzKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29tbWVudGFpcmVzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZhc3RTaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgb3V0cHV0ID1cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz0nanVtYm90cm9uJz5cbiAgICAgICAgICAgICAgICA8aDE+JHt0aGlzLnRpdHJlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+JHt0aGlzLnJlc3VtZX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5JyB0eXBlPSdidXR0b24nPiR7dGhpcy5wcml4fSBmcmFuY3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nYmFkZ2UnPiR7dGhpcy5xdWFudGl0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgcHVibGljIGFkZFN0b2NrID0gZnVuY3Rpb24oaG93TXVjaFRvQWRkOm51bWJlcikge1xuICAgICAgICB0aGlzLnF1YW50aXRlICs9IGhvd011Y2hUb0FkZDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5xdWFudGl0ZSk7ICAgICAgICBcbiAgICB9XG59IiwiLy8gaW1wb3J0IHsgc2F5SGVsbG8gfSBmcm9tIFwiLi9BcHAvZ3JlZXRcIjtcbmltcG9ydCB7IEh1bWFpbiB9IGZyb20gXCIuL0FwcC9IdW1haW5cIjtcbmltcG9ydCB7IFByb2R1aXQgfSBmcm9tIFwiLi9BcHAvUHJvZHVpdFwiO1xuaW1wb3J0IHsgQ29tbWVudGFpcmUgfSBmcm9tIFwiLi9BcHAvQ29tbWVudGFpcmVcIjtcblxuXG5mdW5jdGlvbiBzaG93SW5IVE1MKGRpdk5hbWU6IHN0cmluZywgb3V0cHV0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTtcbiAgICBlbHQuaW5uZXJIVE1MID0gb3V0cHV0O1xufVxuXG5cbnZhciBmcmFuY29pcyA9IG5ldyBIdW1haW4oJ0ZyYW7Dp29pcycsJ1NpcycsJ01hcnJvbicsJ0JydW4nLCcxLjg5bScsJzcya2cnKTtcbnZhciBmbG9yZW50ID0gbmV3IEh1bWFpbignRmxvcmVudCcsJ0RpbmV0JywnQmxldScsJ0NoYXRhaW5nJywnMS44Nm0nLCc2NmtnJyk7XG5cbmZsb3JlbnQuc2V0UHJlbm9tKCdHZW9yZ2VzJyk7XG5cblxudmFyIGZsb3JlbnRJbkp1bWJvID1cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz0nanVtYm90cm9uJz5cbiAgICAgICAgICAgICAgICA8aDE+JHtmbG9yZW50LmdldFByZW5vbSgpfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+JHtmbG9yZW50LmdldE5vbSgpfTwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke2Zsb3JlbnQuZ2V0Q291bGV1cllldXgoKX08L3A+XG4gICAgICAgICAgICAgICAgPHA+JHtmbG9yZW50LmdldENvdWxldXJDaGV2ZXV4KCl9PC9wPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdiYWRnZSc+JHtmbG9yZW50LmdldG5pdmVhdUxhbmd1ZSgpfTwvc3Bhbj5gXG47ICAgICAgIFxuXG4vKnNob3dJbkhUTUwoXCJvdXRwdXRcIiwgZmxvcmVudEluSnVtYm8pOyovXG5cblxuLy8vLyBQUk9EVUlUXG5cblxudmFyIGdhbWVCb3kgPSBuZXcgUHJvZHVpdChcIkdhbWVCb3lcIixcIkNvbW1vZG8gbWFnbmEgbm9zdHJ1ZCBjb25zZXF1YXQgYWQgZW5pbS5cIiwxLDI1MCk7XG52YXIgbmludGVuZG8gPSBuZXcgUHJvZHVpdChcIk5pbnRlbmRvXCIsXCJVbGxhbWNvIG1hZ25hIGVzc2UgZnVnaWF0IGlwc3VtLlwiLDEsNDUwKTtcblxuZ2FtZUJveS5zZXRBY2Nlc3NvaXJlcyhbJ8OpY291dGV1cnMnLCdjaGFyZ2V1ciddKTtcbm5pbnRlbmRvLnNldEFjY2Vzc29pcmVzKFsnbWFuZXR0ZXMnLCdjYWJsZXMnXSk7XG5cbmdhbWVCb3kuYWRkU3RvY2soNCk7XG5cblxuZmxvcmVudC5tb2RpZmllclF1YW50aXRlUHJvZHVpdChnYW1lQm95LDE1KTtcbmZsb3JlbnQubW9kaWZpZXJQcml4UHJvZHVpdChnYW1lQm95LDMwMCk7XG5mbG9yZW50LmFqb3V0ZXJBdVBhbmllcihuaW50ZW5kbyxmcmFuY29pcyk7XG5mbG9yZW50LmFqb3V0ZXJBdVBhbmllcihnYW1lQm95LGZyYW5jb2lzKTtcbi8vZmxvcmVudC5zdXBwcmltZXJEdVBhbmllcihnYW1lQm95KTtcbmZsb3JlbnQuZ2V0UGFuaWVyKCk7XG5mbG9yZW50LmFqb3V0ZXJBdVBhbmllcihuaW50ZW5kbyxmcmFuY29pcyk7XG5mbG9yZW50LnByaXhUb3RhbFBhbmllcigpO1xuLypnYW1lQm95LnNldFF1YW50aXRlKDUwKTsqL1xuXG5zaG93SW5IVE1MKFwib3V0cHV0XCIsIGdhbWVCb3kuZmFzdFNob3coKSk7XG5jb25zb2xlLmxvZyhmbG9yZW50LmxpcmVTTVMoKSk7XG5cbmNvbnNvbGUubG9nKFwicHJpeCBnYW1lYm95XCIsZ2FtZUJveS5wcml4KTtcblxuZmxvcmVudC5tb2RpZmllclF1YW50aXRlUHJvZHVpdFBhbmllcihnYW1lQm95LDM0KTtcbmZsb3JlbnQuYWNjZXNzb2lyZXNUb3RhdXhQYW5pZXIoKTtcblxuZnJhbmNvaXMuY2Fyb3R0ZVBhbmllcihmbG9yZW50KTtcbnNob3dJbkhUTUwoXCJwYW5pZXJcIiwgZnJhbmNvaXMuYWZmaWNoZXJQYW5pZXIoKSk7XG5cblxuZnJhbmNvaXMubW95ZW5uZVByaXhQYW5pZXIoKTtcblxuZnJhbmNvaXMuYWpvdXRlckNvbW1lbnRhaXJlcyhnYW1lQm95LFsnRGUgbGEgYmFsbGUgLCBsYSBnYW1lQm95J10pO1xuXG5cbiJdfQ==
