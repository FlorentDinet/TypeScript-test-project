
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
    private sms: Array<string>;
    private panier: Array<Object> = [];

    // Attributs statiques
    private static compteur = 0;
    private static texteADire = 'Je vais tous vous tuer !';

    // Constante en typescript : "readonly"
    readonly ANNEE = 2016;

    // Constructeur
    constructor(
        prenom : string = 'John',
        nom : string = 'Doe',
        couleurYeux : string = 'vert',
        couleurCheveux : string = 'brun',
        taille : string = '1.60m',
        poids : string = '65kg',
        langue : string = 'Français',
        niveauLangue = 1,
        sms : Array<string> = []
    )
    {
        this.prenom = prenom;
        this.nom = nom;
        this.couleurYeux = couleurYeux;
        this.couleurCheveux = couleurCheveux;
        this.taille = taille;
        this.poids = poids;
        this.langue = langue;
        this.niveauLangue = niveauLangue;
        this.sms = sms;

        Humain.compteur ++;
    }
    
    /*
        Getter Prénom
    */
    getPrenom():string{
      return this.prenom;
    }
    /*
        Setter Prénom
    */
    setPrenom(prenom: string){
      this.prenom = prenom;
    }

    /*
        Getter Nom
    */
    getNom():string{
      return this.nom;
    }
    /*
        Setter Nom
    */
    setNom(nom : string){
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
    getniveauLangue(){
      return this.niveauLangue;
    }
    /*
        Set niveauLangue
    */
    setniveauLangue(){
      this.niveauLangue++;
    }
    
    /*
        Get panier
    */
    getPanier(){
      console.log(this.panier);
    }

    /*
        Ecrire sms
    */
    public ecrireSMS = function(sms: Array<string>){
        if(sms) {
           /* sms.forEach(element => {
                this.sms.push(element);
            });*/
            for(let sms of this.sms){
                this.sms.push(sms);
            }
        }
    }

    /*
        Lire sms
    */
    public lireSMS = function(){
        for (let i in this.sms) {
            return 'Sms N°'+ i + " : " + this.sms[i];
        }
    }

    /*
        Supprimer sms
    */
    public supprimerSMS = function(which:Array<string>=null){
         if (typeof which !== 'Array') // S'il ne s'agit pas d'un tableau.
            {
            alert('On attend un tableau d’id de SMS a supprimer');
            return;
            }
            for (let i in which) {
                this.sms.splice(i,1);
            }
    }

    /*
        Vole sms
    */
    public voleSMS = function (victime: Humain){

        this.sms = this.sms.concat(victime.sms);
      
        return this.sms.length();
    }   

    /**
    *
    */
    public parler(volumeVoix : boolean = false, interlocuteur: Humain):string {

      let phrase = '';
      phrase = this.prenom + ' ' + this.nom + " parle " + this.langue + " ";
      if (volumeVoix) {
        phrase = phrase + 'très fort ';
      }
      if (interlocuteur) {
        phrase = phrase + 'à ' + interlocuteur.getPrenom() + ' ' + interlocuteur.getNom();
      }
      phrase = phrase + ".";
      return phrase;
    }

    // Modifier la quantité d'un produit passé en paramètre
    public modifierQuantiteProduit = function(
        produit : Produit,
        quantite : number = null)
        {
        if(quantite && produit) {
            produit.setQuantite(quantite);
        }
    }

    // Modifier le prix d'un produit passé en paramètre
    public modifierPrixProduit = function(
        produit : Produit,
        prix : number = null)
        {
        if(prix && produit) {
            produit.setPrix(prix);
        }
    }
    
    /*
        Ajouter un objet au panier
    */
    public ajouterAuPanier(produit: Produit){
        console.log(produit);     
      this.panier.push(produit);
    }

    /*
        Supprimer un objet du panier
    */
    public supprimerDuPanier(produit: Produit){
            let where = this.panier.indexOf(produit);
            this.panier.splice(where,1);    
    }
    
    /*
        Calculer prix total du panier avec taxes
    */
    public prixTotalPanier(){
        let prixPanier = 0;

        for (let produit of this.panier){
                prixPanier += 
                produit.quantite*
                (produit.prix+produit.prix*produit.taxe);           
        }
            console.log(prixPanier);

    }

    /*
    * FONCTION STATIQUE
    */

    public static menacer = function()
    {   
        alert(Humain.texteADire);
    }

}