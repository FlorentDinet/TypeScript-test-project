import {
    Commentaire
} from './Commentaire';
import {
    Produit
} from './Produit';
/**
 * name
 */
export class Humain {

    // Attributs
    private prenom: string;
    private nom: string;
    private couleurYeux: string;
    private couleurCheveux: string;
    private taille: string;
    private poids: string;
    private langue: string;
    private niveauLangue: number;
    private sms: Array < string > ;
    private panier: Array < Object > = [];
    private commentaires: Array < Object > ;

    // Attributs statiques
    private static compteur = 0;
    private static texteADire = 'Je vais tous vous tuer !';

    // Constante en typescript : "readonly"
    readonly ANNEE = 2016;

    // Constructeur
    constructor(
        prenom: string = 'John',
        nom: string = 'Doe',
        couleurYeux: string = 'vert',
        couleurCheveux: string = 'brun',
        taille: string = '1.60m',
        poids: string = '65kg',
        langue: string = 'Français',
        niveauLangue = 1,
        sms: Array < string > = [],
        commentaires: Array < Object > = []
    ) {
        this.prenom = prenom;
        this.nom = nom;
        this.couleurYeux = couleurYeux;
        this.couleurCheveux = couleurCheveux;
        this.taille = taille;
        this.poids = poids;
        this.langue = langue;
        this.niveauLangue = niveauLangue;
        this.sms = sms;
        this.commentaires = commentaires;

        Humain.compteur++;
    }

    /*
        Getter Prénom
    */
    getPrenom(): string {
            return this.prenom;
        }
        /*
            Setter Prénom
        */
    setPrenom(prenom: string) {
        this.prenom = prenom;
    }

    /*
        Getter Nom
    */
    getNom(): string {
            return this.nom;
        }
        /*
            Setter Nom
        */
    setNom(nom: string) {
        this.nom = nom;
    }

    /*
    *   Getter
        Retourne la couleur des yeux de mon objet courant
    */
    getCouleurYeux() {
            return this.couleurYeux;
        }
        /*
        *   Setter
            Modifier la couleur des yeux de mon objet courant
        */
    setCouleurYeux(couleur: string) {
            this.couleurYeux = couleur;
        }
        /*
        *   Getter langue
            Retourne la couleur des yeux de mon objet courant
        */
    getLangue() {
            return this.langue;
        }
        /*
        *   Setter langue
            Modifier la couleur des yeux de mon objet courant
        */
    setLangue(langue: string) {
            this.langue = langue;
        }
        /*
            Getter couleurCheveux
        */

    getCouleurCheveux() {
            return this.couleurCheveux;
        }
        /*
            Setter couleurCheveux
        */
    setCouleurCheveux(couleur: string) {
            this.couleurCheveux = couleur;
        }
        /*
            Getter niveauLangue
        */
    getniveauLangue() {
            return this.niveauLangue;
        }
        /*
            Set niveauLangue
        */
    setniveauLangue() {
        this.niveauLangue++;
    }

    /*
        Get panier
    */
    getPanier() {
        console.log(this.panier);
    }

    public get $commentaires(): Array < Object > {
        return this.commentaires;
    }

    public set $commentaires(value: Array < Object > ) {
        this.commentaires = value;
    }

    /*
        Ecrire sms
    */
    public ecrireSMS = function (sms: Array < string > ) {
        if (sms) {

            sms.forEach(element => {
                /*                console.log("le sms ecrit", element);*/

                this.sms.push(element);
            });
            /*
                        for(let sms of this.sms){
                        console.log("coucou");
                            console.log("le sms ecrit",sms);
                            console.log("le total de sms",this.sms);
                            
                            this.sms.push(sms);
                        }*/
        }
    }

    /*
        Lire sms
    */
    public lireSMS = function () {
        let listSms = '';
        for (let i in this.sms) {
            listSms += `Sms N°${i} : ${this.sms[i]}\n`;
        }
        return listSms;
    }

    /*
        Supprimer sms
    */
    public supprimerSMS = function (which: Array < string >= null) {
        if (typeof which !== 'Array') // S'il ne s'agit pas d'un tableau.
        {
            alert('On attend un tableau d’id de SMS a supprimer');
            return;
        }
        for (let i in which) {
            this.sms.splice(i, 1);
        }
    }

    /*
        Vole sms
    */
    public voleSMS = function (victime: Humain) {

        this.sms = this.sms.concat(victime.sms);

        return this.sms.length;
    }

    /**
     *
     */
    public parler(volumeVoix: boolean = false, interlocuteur ? : Humain) {

        let phrase = '';
        phrase = this.prenom + ' ' + this.nom + " parle " + this.langue + " ";
        if (volumeVoix) {
            phrase = phrase + 'très fort ';
        }
        if (interlocuteur) {
            phrase = phrase + 'à ' + interlocuteur.getPrenom() + ' ' + interlocuteur.getNom();
        }
        phrase = phrase + ".";
        console.log(phrase);
    }

    // Modifier la quantité d'un produit passé en paramètre
    public modifierQuantiteProduit = function (
        produit: Produit,
        quantite: number = null) {
        if (quantite && produit) {
            produit.setQuantite(quantite);
        }
    }

    // Modifier le prix d'un produit passé en paramètre
    public modifierPrixProduit = function (
        produit: Produit,
        prix: number = null) {
        if (prix && produit) {
            produit.setPrix(prix);
        }
    }

    /*
        Ajouter un objet au panier
    */
    public ajouterAuPanier(produit: Produit, interlocuteur: Humain) {
        /*        console.log("quantité de", produit.getTitre(), produit.getQuantite());*/

        if (produit.getQuantite() > 0) {
            /*            console.log(produit);*/
            this.panier.push(produit);
            this.ecrireSMS(["Vous avez acheté", produit.getTitre(), "Merci"]);
            this.parler(false, interlocuteur);
        } else {
            this.ecrireSMS(["Désolé, l'article demandé n'est plus disponible"]);
        }
    }

    /*
        Supprimer un objet du panier
    */
    public supprimerDuPanier(produit: Produit) {
        let where = this.panier.indexOf(produit);
        this.panier.splice(where, 1);
    }

    /*
        Calculer prix total du panier avec taxes
    */
    public prixTotalPanier() {
        let prixPanier = 0;
        let test = 0;

        for (let produit of this.panier) {
            test++;
            prixPanier +=
                produit.getQuantite() *
                (produit.getPrix() + produit.getPrix() * produit.getTaxe());
        }
        console.log("prix total panier : ", test);

    }

    /*
        Afficher le panier
    */
    public afficherPanier() {
        console.log("panier : ", this.panier);
        let output = '<h2>MON PANIER</h2>';

        for (let produit of this.panier) {
            output +=
                `<div class='jumbotron'>
                <h1>${produit.titre}</h1>
                <p>${produit.resume}</p>
                <button class='btn btn-primary' type='button'>${produit.prix} francs</button>
                <span class='badge'>${produit.quantite}</span>
                <hr />
                <p>Nombre d'accessoires : ${produit.accessoires.length}</p>
                </div>`;
        }


        return output;

    }

    /*
        Calculer le nombre d'accessoires totaux du panier
    */
    public accessoiresTotauxPanier() {
        let nbAccessoires = 0;

        for (let produit of this.panier) {
            nbAccessoires += produit.quantite * produit.accessoires.length;
        }
        console.log("nombre d'accessoires", nbAccessoires);

        return nbAccessoires;

    }

    /*
        Calculer la moyenne des  prix ds produit qu'il y a dans le panier
    */

    public moyennePrixPanier() {
        let moyenne = 0;

        for (let produit of this.panier) {
            moyenne += produit.prix;
        }
        moyenne = moyenne / this.panier.length;
        console.log("Moyenne du prix des produits du panier : ", moyenne);

        return moyenne;
    }

    /*
        Modifier la quantiter d'un produit dans le panier
    */
    public modifierQuantiteProduitPanier(produit: Produit, quantite: number) {
        let where = this.panier.indexOf(produit);
        this.modifierQuantiteProduit(this.panier[where], quantite);
    }

    /*
        Récupérer le panier d'un autre Humain
    */
    public carottePanier(victime: Humain) {
        this.panier = this.panier.concat(victime.panier);
        victime.panier = [];
    }

    // Ajouter un ou plusieurs commentaires à un produit
    // Constructeur

    public ecrireCommentaire(param: {
        commentaire: Commentaire,
        produit: Produit,
        texte: string
    }) {
        param.commentaire.$writer = this.prenom + "" + this.nom;
        param.commentaire.$id = Commentaire.compteur;
        param.commentaire.$produit = param.produit.getTitre();
        param.commentaire.$content = param.texte;

        this.commentaires.push(param.commentaire);
        param.produit.$commentaires.push(param.commentaire);
        return this;
    }

    public ecrireCommentaires(commentaires: Array < any > ) {
        commentaires.forEach(commentaire => {
            this.ecrireCommentaire(commentaire);
        });
        return this;
    }

    public supprimerCommentaire(which: Array < string >= null) {
        if (typeof which !== 'Array') // S'il ne s'agit pas d'un tableau.
        {
            alert('On attend un tableau d’id de SMS a supprimer');
            return;
        }
        for (let i=0; i < this.commentaires.length ; i ++) {
            this.commentaires.splice(i, 1);
        }
    }

    // voir le titre du produit concerné par rapport à un commentaire

    public voirTitreProduit(id:number) {
        return this.$commentaires[id].produit;
    }

    /*
     * FONCTION STATIQUE
     */

    public static menacer = function () {
        alert(Humain.texteADire);
    }

}