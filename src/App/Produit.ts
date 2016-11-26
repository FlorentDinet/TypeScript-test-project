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

    // Attribut statique
    public static compteur = 0;

    // Constructeur
    constructor(
        titre = 'titre',
        resume = 'resume',
        quantite = 0,
        prix = 0,
        taxe = 0.20,
        couleurs: Array<string> = []
    ) {
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

    setQuantite(quantite:number) {
        this.quantite = quantite;
    }

    // Set prix
    setPrix(prix:number){
        this.prix = prix;
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