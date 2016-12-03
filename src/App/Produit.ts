/**
 * Produit
 */
export class Produit {

    // Attributs

    private id: number;
    private titre: string;
    private resume: string;
    private quantite: number;
    private prix: number;
    private taxe: number;
    private couleurs: Array < string > ;
    private accessoires: Array< string >;
    private commentaires: Array< Object >;

    // Attribut statique
    public static compteur = 0;

    // Constructeur
    constructor(
        titre = 'titre',
        resume = 'resume',
        quantite = 0,
        prix = 0,
        taxe = 0.20,
        couleurs: Array<string> = [],
        accessoires: Array<string> = [],
        commentaires: Array< Object > = []

    ) {
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
    getTitre(){
        return this.titre;
    }

    // Set quantite

    setQuantite(quantite:number) {
        this.quantite = quantite;
    }

    // Get quantite
    getQuantite(){
        return this.quantite;
    }

    // Get taxe
    getTaxe(){
        return this.taxe;
    }

    // Get prix
    getPrix(){
        return this.prix;
    }

    // Set prix
    setPrix(prix:number){
        this.prix = prix;
    }

    // Set accessoires
    setAccessoires(accessoires:Array <string>){
        this.accessoires = accessoires;
    }


	public get $commentaires(): Array< Object > {
		return this.commentaires;
	}

	public set $commentaires(value: Array< Object >) {
		this.commentaires = value;
	}


    // compter le nb de commentaires à un produit
    compterCommentaires(){
        console.log(this.commentaires.length);
    }

    public fastShow = function () {
        let output =
                `<div class='jumbotron'>
                <h1>${this.titre}</h1>
                <p>${this.resume}</p>
                <button class='btn btn-primary' type='button'>${this.prix} francs</button>
                <span class='badge'>${this.quantite}</span>
                </div>`;
        return output;
    }
    public addStock = function(howMuchToAdd:number) {
        this.quantite += howMuchToAdd;
        console.log(this.quantite);        
    }
}