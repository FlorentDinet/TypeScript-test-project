import {
	Humain
} from './Humain';
import {
	Produit
} from './Produit';
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

	public get $date(): Date {
		return this.date;
	}

	public get $id(): number {
		return this.id;
	}

	public set $id(value: number) {
		this.id = value;
	}

	public get $content(): string {
		return this.content;
	}

	public set $content(value: string) {
		this.content = value;
	}

	public get $writer(): string {
		return this.writer;
	}

	public set $writer(value: string) {
		this.writer = value;
	}

	public get $produit(): string {
		return this.produit;
	}

	public set $produit(value: string) {
		this.produit = value;
	}

	// Attribut statique
	public static compteur = 0;


	constructor() {
		Commentaire.compteur++;
	}


}