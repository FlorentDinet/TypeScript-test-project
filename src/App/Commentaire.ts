import { Humain } from './Humain';
import { Produit } from './Produit';
/**
 * Commentaire
 */
export class Commentaire {

    // Attributs

    private date: Date;
    private id: number;
    private content: string;
    private writer: string;
    private produit: string;

    // Constructeur
    constructor(
        id: number = 0,
        writer: Humain = null,
        produit: Produit = null,
        content: string = "",
    ) {
        this.writer = writer.getPrenom() + " " + writer.getNom();
        this.produit = produit.getTitre();
        this.id = id
        this.date = new Date();
    }
}