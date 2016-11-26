(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
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
            if (sms) {
                /* sms.forEach(element => {
                     this.sms.push(element);
                 });*/
                for (var _i = 0, _a = this.sms; _i < _a.length; _i++) {
                    var sms_1 = _a[_i];
                    this.sms.push(sms_1);
                }
            }
        };
        /*
            Lire sms
        */
        this.lireSMS = function () {
            for (var i in this.sms) {
                return 'Sms N°' + i + " : " + this.sms[i];
            }
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
            return this.sms.length();
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
        return phrase;
    };
    /*
        Ajouter un objet au panier
    */
    Humain.prototype.ajouterAuPanier = function (produit) {
        console.log(produit);
        this.panier.push(produit);
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
        for (var _i = 0, _a = this.panier; _i < _a.length; _i++) {
            var produit = _a[_i];
            prixPanier +=
                produit.quantite *
                    (produit.prix + produit.prix * produit.taxe);
        }
        console.log(prixPanier);
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

},{}],2:[function(require,module,exports){
"use strict";
/**
 * Produit
 */
var Produit = (function () {
    // Constructeur
    function Produit(titre, resume, quantite, prix, taxe, couleurs) {
        if (titre === void 0) { titre = 'titre'; }
        if (resume === void 0) { resume = 'resume'; }
        if (quantite === void 0) { quantite = 0; }
        if (prix === void 0) { prix = 0; }
        if (taxe === void 0) { taxe = 0.20; }
        if (couleurs === void 0) { couleurs = []; }
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
        Produit.compteur++;
    }
    // Set quantite
    Produit.prototype.setQuantite = function (quantite) {
        this.quantite = quantite;
    };
    // Set prix
    Produit.prototype.setPrix = function (prix) {
        this.prix = prix;
    };
    // Attribut statique
    Produit.compteur = 0;
    return Produit;
}());
exports.Produit = Produit;

},{}],3:[function(require,module,exports){
"use strict";
// import { sayHello } from "./App/greet";
var Humain_1 = require("./App/Humain");
var Produit_1 = require("./App/Produit");
function showInHTML(divName, output) {
    var elt = document.getElementById(divName);
    elt.innerHTML = output;
}
var florent = new Humain_1.Humain('Florent', 'Dinet', 'Bleu', 'Chataing', '1.86m', '66kg');
florent.setPrenom('Georges');
var florentInJumbo = "<div class='jumbotron'>\n                <h1>" + florent.getPrenom() + "</h1>\n                <p>" + florent.getNom() + "</p>\n                <p>" + florent.getCouleurYeux() + "</p>\n                <p>" + florent.getCouleurCheveux() + "</p>\n                <span class='badge'>" + florent.getniveauLangue() + "</span>";
/*showInHTML("output", florentInJumbo);*/
//// PRODUIT
var gameBoy = new Produit_1.Produit("GameBoy", "Commodo magna nostrud consequat ad enim.", 1, 250);
var nintendo = new Produit_1.Produit("Nintendo", "Ullamco magna esse fugiat ipsum.", 1, 450);
gameBoy.addStock(4);
florent.modifierQuantiteProduit(gameBoy, 15);
florent.modifierPrixProduit(gameBoy, 300);
florent.ajouterAuPanier(nintendo);
florent.ajouterAuPanier(gameBoy);
florent.supprimerDuPanier(gameBoy);
florent.getPanier();
florent.ajouterAuPanier(nintendo);
florent.prixTotalPanier();
/*gameBoy.setQuantite(50);*/
showInHTML("output", gameBoy.fastShow());

},{"./App/Humain":1,"./App/Produit":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQXBwL0h1bWFpbi50cyIsInNyYy9BcHAvUHJvZHVpdC50cyIsInNyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNDQTs7R0FFRztBQUNIO0lBcUJJLGVBQWU7SUFDZixnQkFDSSxNQUF3QixFQUN4QixHQUFvQixFQUNwQixXQUE2QixFQUM3QixjQUFnQyxFQUNoQyxNQUF5QixFQUN6QixLQUF1QixFQUN2QixNQUE0QixFQUM1QixZQUFnQixFQUNoQixHQUF3QjtRQVJ4QixzQkFBd0IsR0FBeEIsZUFBd0I7UUFDeEIsbUJBQW9CLEdBQXBCLFdBQW9CO1FBQ3BCLDJCQUE2QixHQUE3QixvQkFBNkI7UUFDN0IsOEJBQWdDLEdBQWhDLHVCQUFnQztRQUNoQyxzQkFBeUIsR0FBekIsZ0JBQXlCO1FBQ3pCLHFCQUF1QixHQUF2QixjQUF1QjtRQUN2QixzQkFBNEIsR0FBNUIsbUJBQTRCO1FBQzVCLDRCQUFnQixHQUFoQixnQkFBZ0I7UUFDaEIsbUJBQXdCLEdBQXhCLFFBQXdCO1FBbkJwQixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQU1uQyx1Q0FBdUM7UUFDOUIsVUFBSyxHQUFHLElBQUksQ0FBQztRQW1IdEI7O1VBRUU7UUFDSyxjQUFTLEdBQUcsVUFBUyxHQUFrQjtZQUMxQyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOOztzQkFFTTtnQkFDTCxHQUFHLENBQUEsQ0FBWSxVQUFRLEVBQVIsS0FBQSxJQUFJLENBQUMsR0FBRyxFQUFSLGNBQVEsRUFBUixJQUFRLENBQUM7b0JBQXBCLElBQUksS0FBRyxTQUFBO29CQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUcsQ0FBQyxDQUFDO2lCQUN0QjtZQUNMLENBQUM7UUFDTCxDQUFDLENBQUE7UUFFRDs7VUFFRTtRQUNLLFlBQU8sR0FBRztZQUNiLEdBQUcsQ0FB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T0FBTyxDQUFDLGVBQWUsRUFBRSxZQUFTLENBQ3ZFO0FBRUQseUNBQXlDO0FBR3pDLFlBQVk7QUFHWixJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsU0FBUyxFQUFDLDBDQUEwQyxFQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUV0RixJQUFJLFFBQVEsR0FBRyxJQUFJLGlCQUFPLENBQUMsVUFBVSxFQUFDLGtDQUFrQyxFQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUVoRixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBR3BCLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNwQixPQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMxQiw0QkFBNEI7QUFFNUIsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbi8qKlxuICogbmFtZVxuICovXG5leHBvcnQgY2xhc3MgSHVtYWluIHtcblxuICAgIC8vIEF0dHJpYnV0c1xuICAgIHByaXZhdGUgcHJlbm9tOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBub206IHN0cmluZztcbiAgICBwcml2YXRlIGNvdWxldXJZZXV4OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb3VsZXVyQ2hldmV1eDogc3RyaW5nO1xuICAgIHByaXZhdGUgdGFpbGxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb2lkczogc3RyaW5nO1xuICAgIHByaXZhdGUgbGFuZ3VlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBuaXZlYXVMYW5ndWU6IG51bWJlcjtcbiAgICBwcml2YXRlIHNtczogQXJyYXk8c3RyaW5nPjtcbiAgICBwcml2YXRlIHBhbmllcjogQXJyYXk8T2JqZWN0PiA9IFtdO1xuXG4gICAgLy8gQXR0cmlidXRzIHN0YXRpcXVlc1xuICAgIHByaXZhdGUgc3RhdGljIGNvbXB0ZXVyID0gMDtcbiAgICBwcml2YXRlIHN0YXRpYyB0ZXh0ZUFEaXJlID0gJ0plIHZhaXMgdG91cyB2b3VzIHR1ZXIgISc7XG5cbiAgICAvLyBDb25zdGFudGUgZW4gdHlwZXNjcmlwdCA6IFwicmVhZG9ubHlcIlxuICAgIHJlYWRvbmx5IEFOTkVFID0gMjAxNjtcblxuICAgIC8vIENvbnN0cnVjdGV1clxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcmVub20gOiBzdHJpbmcgPSAnSm9obicsXG4gICAgICAgIG5vbSA6IHN0cmluZyA9ICdEb2UnLFxuICAgICAgICBjb3VsZXVyWWV1eCA6IHN0cmluZyA9ICd2ZXJ0JyxcbiAgICAgICAgY291bGV1ckNoZXZldXggOiBzdHJpbmcgPSAnYnJ1bicsXG4gICAgICAgIHRhaWxsZSA6IHN0cmluZyA9ICcxLjYwbScsXG4gICAgICAgIHBvaWRzIDogc3RyaW5nID0gJzY1a2cnLFxuICAgICAgICBsYW5ndWUgOiBzdHJpbmcgPSAnRnJhbsOnYWlzJyxcbiAgICAgICAgbml2ZWF1TGFuZ3VlID0gMSxcbiAgICAgICAgc21zIDogQXJyYXk8c3RyaW5nPiA9IFtdXG4gICAgKVxuICAgIHtcbiAgICAgICAgdGhpcy5wcmVub20gPSBwcmVub207XG4gICAgICAgIHRoaXMubm9tID0gbm9tO1xuICAgICAgICB0aGlzLmNvdWxldXJZZXV4ID0gY291bGV1cllldXg7XG4gICAgICAgIHRoaXMuY291bGV1ckNoZXZldXggPSBjb3VsZXVyQ2hldmV1eDtcbiAgICAgICAgdGhpcy50YWlsbGUgPSB0YWlsbGU7XG4gICAgICAgIHRoaXMucG9pZHMgPSBwb2lkcztcbiAgICAgICAgdGhpcy5sYW5ndWUgPSBsYW5ndWU7XG4gICAgICAgIHRoaXMubml2ZWF1TGFuZ3VlID0gbml2ZWF1TGFuZ3VlO1xuICAgICAgICB0aGlzLnNtcyA9IHNtcztcblxuICAgICAgICBIdW1haW4uY29tcHRldXIgKys7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldHRlciBQcsOpbm9tXG4gICAgKi9cbiAgICBnZXRQcmVub20oKTpzdHJpbmd7XG4gICAgICByZXR1cm4gdGhpcy5wcmVub207XG4gICAgfVxuICAgIC8qXG4gICAgICAgIFNldHRlciBQcsOpbm9tXG4gICAgKi9cbiAgICBzZXRQcmVub20ocHJlbm9tOiBzdHJpbmcpe1xuICAgICAgdGhpcy5wcmVub20gPSBwcmVub207XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgR2V0dGVyIE5vbVxuICAgICovXG4gICAgZ2V0Tm9tKCk6c3RyaW5ne1xuICAgICAgcmV0dXJuIHRoaXMubm9tO1xuICAgIH1cbiAgICAvKlxuICAgICAgICBTZXR0ZXIgTm9tXG4gICAgKi9cbiAgICBzZXROb20obm9tIDogc3RyaW5nKXtcbiAgICAgIHRoaXMubm9tID0gbm9tO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiAgIEdldHRlclxuICAgICAgICBSZXRvdXJuZSBsYSBjb3VsZXVyIGRlcyB5ZXV4IGRlIG1vbiBvYmpldCBjb3VyYW50XG4gICAgKi9cbiAgICBnZXRDb3VsZXVyWWV1eCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bGV1cllldXg7XG4gICAgfVxuICAgIC8qXG4gICAgKiAgIFNldHRlclxuICAgICAgICBNb2RpZmllciBsYSBjb3VsZXVyIGRlcyB5ZXV4IGRlIG1vbiBvYmpldCBjb3VyYW50XG4gICAgKi9cbiAgICBzZXRDb3VsZXVyWWV1eChjb3VsZXVyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb3VsZXVyWWV1eCA9IGNvdWxldXI7XG4gICAgfVxuICAgIC8qXG4gICAgKiAgIEdldHRlciBsYW5ndWVcbiAgICAgICAgUmV0b3VybmUgbGEgY291bGV1ciBkZXMgeWV1eCBkZSBtb24gb2JqZXQgY291cmFudFxuICAgICovXG4gICAgZ2V0TGFuZ3VlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWU7XG4gICAgfVxuICAgIC8qXG4gICAgKiAgIFNldHRlciBsYW5ndWVcbiAgICAgICAgTW9kaWZpZXIgbGEgY291bGV1ciBkZXMgeWV1eCBkZSBtb24gb2JqZXQgY291cmFudFxuICAgICovXG4gICAgc2V0TGFuZ3VlKGxhbmd1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubGFuZ3VlID0gbGFuZ3VlO1xuICAgIH1cbiAgICAvKlxuICAgICAgICBHZXR0ZXIgY291bGV1ckNoZXZldXhcbiAgICAqL1xuICAgIFxuICAgIGdldENvdWxldXJDaGV2ZXV4KCkge1xuICAgICAgIHJldHVybiB0aGlzLmNvdWxldXJDaGV2ZXV4O1xuICAgIH1cbiAgICAvKlxuICAgICAgICBTZXR0ZXIgY291bGV1ckNoZXZldXhcbiAgICAqL1xuICAgIHNldENvdWxldXJDaGV2ZXV4KGNvdWxldXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvdWxldXJDaGV2ZXV4ID0gY291bGV1cjtcbiAgICB9XG4gICAgLypcbiAgICAgICAgR2V0dGVyIG5pdmVhdUxhbmd1ZVxuICAgICovXG4gICAgZ2V0bml2ZWF1TGFuZ3VlKCl7XG4gICAgICByZXR1cm4gdGhpcy5uaXZlYXVMYW5ndWU7XG4gICAgfVxuICAgIC8qXG4gICAgICAgIFNldCBuaXZlYXVMYW5ndWVcbiAgICAqL1xuICAgIHNldG5pdmVhdUxhbmd1ZSgpe1xuICAgICAgdGhpcy5uaXZlYXVMYW5ndWUrKztcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHBhbmllclxuICAgICovXG4gICAgZ2V0UGFuaWVyKCl7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnBhbmllcik7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRWNyaXJlIHNtc1xuICAgICovXG4gICAgcHVibGljIGVjcmlyZVNNUyA9IGZ1bmN0aW9uKHNtczogQXJyYXk8c3RyaW5nPil7XG4gICAgICAgIGlmKHNtcykge1xuICAgICAgICAgICAvKiBzbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNtcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgICAgIGZvcihsZXQgc21zIG9mIHRoaXMuc21zKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNtcy5wdXNoKHNtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBMaXJlIHNtc1xuICAgICovXG4gICAgcHVibGljIGxpcmVTTVMgPSBmdW5jdGlvbigpe1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc21zKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1NtcyBOwrAnKyBpICsgXCIgOiBcIiArIHRoaXMuc21zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3VwcHJpbWVyIHNtc1xuICAgICovXG4gICAgcHVibGljIHN1cHByaW1lclNNUyA9IGZ1bmN0aW9uKHdoaWNoOkFycmF5PHN0cmluZz49bnVsbCl7XG4gICAgICAgICBpZiAodHlwZW9mIHdoaWNoICE9PSAnQXJyYXknKSAvLyBTJ2lsIG5lIHMnYWdpdCBwYXMgZCd1biB0YWJsZWF1LlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgYWxlcnQoJ09uIGF0dGVuZCB1biB0YWJsZWF1IGTigJlpZCBkZSBTTVMgYSBzdXBwcmltZXInKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gd2hpY2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNtcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBWb2xlIHNtc1xuICAgICovXG4gICAgcHVibGljIHZvbGVTTVMgPSBmdW5jdGlvbiAodmljdGltZTogSHVtYWluKXtcblxuICAgICAgICB0aGlzLnNtcyA9IHRoaXMuc21zLmNvbmNhdCh2aWN0aW1lLnNtcyk7XG4gICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuc21zLmxlbmd0aCgpO1xuICAgIH0gICBcblxuICAgIC8qKlxuICAgICpcbiAgICAqL1xuICAgIHB1YmxpYyBwYXJsZXIodm9sdW1lVm9peCA6IGJvb2xlYW4gPSBmYWxzZSwgaW50ZXJsb2N1dGV1cjogSHVtYWluKTpzdHJpbmcge1xuXG4gICAgICBsZXQgcGhyYXNlID0gJyc7XG4gICAgICBwaHJhc2UgPSB0aGlzLnByZW5vbSArICcgJyArIHRoaXMubm9tICsgXCIgcGFybGUgXCIgKyB0aGlzLmxhbmd1ZSArIFwiIFwiO1xuICAgICAgaWYgKHZvbHVtZVZvaXgpIHtcbiAgICAgICAgcGhyYXNlID0gcGhyYXNlICsgJ3Ryw6hzIGZvcnQgJztcbiAgICAgIH1cbiAgICAgIGlmIChpbnRlcmxvY3V0ZXVyKSB7XG4gICAgICAgIHBocmFzZSA9IHBocmFzZSArICfDoCAnICsgaW50ZXJsb2N1dGV1ci5nZXRQcmVub20oKSArICcgJyArIGludGVybG9jdXRldXIuZ2V0Tm9tKCk7XG4gICAgICB9XG4gICAgICBwaHJhc2UgPSBwaHJhc2UgKyBcIi5cIjtcbiAgICAgIHJldHVybiBwaHJhc2U7XG4gICAgfVxuXG4gICAgLy8gTW9kaWZpZXIgbGEgcXVhbnRpdMOpIGQndW4gcHJvZHVpdCBwYXNzw6kgZW4gcGFyYW3DqHRyZVxuICAgIHB1YmxpYyBtb2RpZmllclF1YW50aXRlUHJvZHVpdCA9IGZ1bmN0aW9uKFxuICAgICAgICBwcm9kdWl0IDogUHJvZHVpdCxcbiAgICAgICAgcXVhbnRpdGUgOiBudW1iZXIgPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgIGlmKHF1YW50aXRlICYmIHByb2R1aXQpIHtcbiAgICAgICAgICAgIHByb2R1aXQuc2V0UXVhbnRpdGUocXVhbnRpdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTW9kaWZpZXIgbGUgcHJpeCBkJ3VuIHByb2R1aXQgcGFzc8OpIGVuIHBhcmFtw6h0cmVcbiAgICBwdWJsaWMgbW9kaWZpZXJQcml4UHJvZHVpdCA9IGZ1bmN0aW9uKFxuICAgICAgICBwcm9kdWl0IDogUHJvZHVpdCxcbiAgICAgICAgcHJpeCA6IG51bWJlciA9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgaWYocHJpeCAmJiBwcm9kdWl0KSB7XG4gICAgICAgICAgICBwcm9kdWl0LnNldFByaXgocHJpeCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgQWpvdXRlciB1biBvYmpldCBhdSBwYW5pZXJcbiAgICAqL1xuICAgIHB1YmxpYyBham91dGVyQXVQYW5pZXIocHJvZHVpdDogUHJvZHVpdCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1aXQpOyAgICAgXG4gICAgICB0aGlzLnBhbmllci5wdXNoKHByb2R1aXQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN1cHByaW1lciB1biBvYmpldCBkdSBwYW5pZXJcbiAgICAqL1xuICAgIHB1YmxpYyBzdXBwcmltZXJEdVBhbmllcihwcm9kdWl0OiBQcm9kdWl0KXtcbiAgICAgICAgICAgIGxldCB3aGVyZSA9IHRoaXMucGFuaWVyLmluZGV4T2YocHJvZHVpdCk7XG4gICAgICAgICAgICB0aGlzLnBhbmllci5zcGxpY2Uod2hlcmUsMSk7ICAgIFxuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAgICBDYWxjdWxlciBwcml4IHRvdGFsIGR1IHBhbmllciBhdmVjIHRheGVzXG4gICAgKi9cbiAgICBwdWJsaWMgcHJpeFRvdGFsUGFuaWVyKCl7XG4gICAgICAgIGxldCBwcml4UGFuaWVyID0gMDtcblxuICAgICAgICBmb3IgKGxldCBwcm9kdWl0IG9mIHRoaXMucGFuaWVyKXtcbiAgICAgICAgICAgICAgICBwcml4UGFuaWVyICs9IFxuICAgICAgICAgICAgICAgIHByb2R1aXQucXVhbnRpdGUqXG4gICAgICAgICAgICAgICAgKHByb2R1aXQucHJpeCtwcm9kdWl0LnByaXgqcHJvZHVpdC50YXhlKTsgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcml4UGFuaWVyKTtcblxuICAgIH1cblxuICAgIC8qXG4gICAgKiBGT05DVElPTiBTVEFUSVFVRVxuICAgICovXG5cbiAgICBwdWJsaWMgc3RhdGljIG1lbmFjZXIgPSBmdW5jdGlvbigpXG4gICAgeyAgIFxuICAgICAgICBhbGVydChIdW1haW4udGV4dGVBRGlyZSk7XG4gICAgfVxuXG59IiwiLyoqXG4gKiBQcm9kdWl0XG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9kdWl0IHtcblxuICAgIC8vIEF0dHJpYnV0c1xuXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xuICAgIHByaXZhdGUgdGl0cmU6IHN0cmluZztcbiAgICBwcml2YXRlIHJlc3VtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcXVhbnRpdGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHByaXg6IG51bWJlcjtcbiAgICBwcml2YXRlIHRheGU6IG51bWJlcjtcbiAgICBwcml2YXRlIGNvdWxldXJzOiBBcnJheSA8IHN0cmluZyA+IDtcblxuICAgIC8vIEF0dHJpYnV0IHN0YXRpcXVlXG4gICAgcHVibGljIHN0YXRpYyBjb21wdGV1ciA9IDA7XG5cbiAgICAvLyBDb25zdHJ1Y3RldXJcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdGl0cmUgPSAndGl0cmUnLFxuICAgICAgICByZXN1bWUgPSAncmVzdW1lJyxcbiAgICAgICAgcXVhbnRpdGUgPSAwLFxuICAgICAgICBwcml4ID0gMCxcbiAgICAgICAgdGF4ZSA9IDAuMjAsXG4gICAgICAgIGNvdWxldXJzOiBBcnJheTxzdHJpbmc+ID0gW11cbiAgICApIHtcbiAgICAgICAgdGhpcy5pZCA9IFByb2R1aXQuY29tcHRldXIsXG4gICAgICAgIHRoaXMudGl0cmUgPSB0aXRyZTtcbiAgICAgICAgdGhpcy5yZXN1bWUgPSByZXN1bWU7XG4gICAgICAgIHRoaXMucXVhbnRpdGUgPSBxdWFudGl0ZTtcbiAgICAgICAgdGhpcy5wcml4ID0gcHJpeDtcbiAgICAgICAgdGhpcy50YXhlID0gdGF4ZTtcbiAgICAgICAgdGhpcy5jb3VsZXVycyA9IGNvdWxldXJzO1xuXG4gICAgICAgIFByb2R1aXQuY29tcHRldXIrKztcbiAgICB9XG5cbiAgICAvLyBTZXQgcXVhbnRpdGVcblxuICAgIHNldFF1YW50aXRlKHF1YW50aXRlOm51bWJlcikge1xuICAgICAgICB0aGlzLnF1YW50aXRlID0gcXVhbnRpdGU7XG4gICAgfVxuXG4gICAgLy8gU2V0IHByaXhcbiAgICBzZXRQcml4KHByaXg6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5wcml4ID0gcHJpeDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFzdFNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPVxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPSdqdW1ib3Ryb24nPlxuICAgICAgICAgICAgICAgIDxoMT4ke3RoaXMudGl0cmV9PC9oMT5cbiAgICAgICAgICAgICAgICA8cD4ke3RoaXMucmVzdW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidG4gYnRuLXByaW1hcnknIHR5cGU9J2J1dHRvbic+JHt0aGlzLnByaXh9IGZyYW5jczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdiYWRnZSc+JHt0aGlzLnF1YW50aXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBwdWJsaWMgYWRkU3RvY2sgPSBmdW5jdGlvbihob3dNdWNoVG9BZGQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucXVhbnRpdGUgKz0gaG93TXVjaFRvQWRkO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnF1YW50aXRlKTsgICAgICAgIFxuICAgIH1cbn0iLCIvLyBpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL0FwcC9ncmVldFwiO1xuaW1wb3J0IHsgSHVtYWluIH0gZnJvbSBcIi4vQXBwL0h1bWFpblwiO1xuaW1wb3J0IHsgUHJvZHVpdCB9IGZyb20gXCIuL0FwcC9Qcm9kdWl0XCI7XG5cblxuZnVuY3Rpb24gc2hvd0luSFRNTChkaXZOYW1lOiBzdHJpbmcsIG91dHB1dDogc3RyaW5nKSB7XG4gICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7XG4gICAgZWx0LmlubmVySFRNTCA9IG91dHB1dDtcbn1cblxuXG52YXIgZmxvcmVudCA9IG5ldyBIdW1haW4oJ0Zsb3JlbnQnLCdEaW5ldCcsJ0JsZXUnLCdDaGF0YWluZycsJzEuODZtJywnNjZrZycpO1xuXG5mbG9yZW50LnNldFByZW5vbSgnR2VvcmdlcycpO1xuXG5cbnZhciBmbG9yZW50SW5KdW1ibyA9XG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9J2p1bWJvdHJvbic+XG4gICAgICAgICAgICAgICAgPGgxPiR7ZmxvcmVudC5nZXRQcmVub20oKX08L2gxPlxuICAgICAgICAgICAgICAgIDxwPiR7ZmxvcmVudC5nZXROb20oKX08L3A+XG4gICAgICAgICAgICAgICAgPHA+JHtmbG9yZW50LmdldENvdWxldXJZZXV4KCl9PC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7ZmxvcmVudC5nZXRDb3VsZXVyQ2hldmV1eCgpfTwvcD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nYmFkZ2UnPiR7ZmxvcmVudC5nZXRuaXZlYXVMYW5ndWUoKX08L3NwYW4+YFxuOyAgICAgICBcblxuLypzaG93SW5IVE1MKFwib3V0cHV0XCIsIGZsb3JlbnRJbkp1bWJvKTsqL1xuXG5cbi8vLy8gUFJPRFVJVFxuXG5cbnZhciBnYW1lQm95ID0gbmV3IFByb2R1aXQoXCJHYW1lQm95XCIsXCJDb21tb2RvIG1hZ25hIG5vc3RydWQgY29uc2VxdWF0IGFkIGVuaW0uXCIsMSwyNTApO1xuXG52YXIgbmludGVuZG8gPSBuZXcgUHJvZHVpdChcIk5pbnRlbmRvXCIsXCJVbGxhbWNvIG1hZ25hIGVzc2UgZnVnaWF0IGlwc3VtLlwiLDEsNDUwKTtcblxuZ2FtZUJveS5hZGRTdG9jayg0KTtcblxuXG5mbG9yZW50Lm1vZGlmaWVyUXVhbnRpdGVQcm9kdWl0KGdhbWVCb3ksMTUpO1xuZmxvcmVudC5tb2RpZmllclByaXhQcm9kdWl0KGdhbWVCb3ksMzAwKTtcbmZsb3JlbnQuYWpvdXRlckF1UGFuaWVyKG5pbnRlbmRvKTtcbmZsb3JlbnQuYWpvdXRlckF1UGFuaWVyKGdhbWVCb3kpO1xuZmxvcmVudC5zdXBwcmltZXJEdVBhbmllcihnYW1lQm95KTtcbmZsb3JlbnQuZ2V0UGFuaWVyKCk7XG5mbG9yZW50LmFqb3V0ZXJBdVBhbmllcihuaW50ZW5kbyk7XG5mbG9yZW50LnByaXhUb3RhbFBhbmllcigpO1xuLypnYW1lQm95LnNldFF1YW50aXRlKDUwKTsqL1xuXG5zaG93SW5IVE1MKFwib3V0cHV0XCIsIGdhbWVCb3kuZmFzdFNob3coKSk7Il19
