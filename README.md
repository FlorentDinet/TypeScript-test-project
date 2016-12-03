# TypeScript-test-project
discovering ts with typescriptlang.org tutorial

+ doing this exercice :

Exercice : 

* Créer une classe Produit. Un produit contient:
- un id (nombre),
- un titre
- un résumé
- une quantité
- un prix
- une taxe
- un tableau de couleur

* Ecrire une méthode permettant de retourner le titre le résumé et le prix dans un joli paragraphe 
  et dans une div Jumbotron
* AJouter une méthode permettant d'ajouter des sous*produits(accessoires) à un produit

* Ajouter une méthode permettant à tout humain de modifier la quantité et le prix d'un produit

* Ajouter une méthode permettant à un humain d'ajouter et de supprimer un produit dans un panier

* Ajouter une méthode permettant de calculer le prix total d'un panier avec la taxe comprise

* Bonus : quand un produit est ajouter par un humain, il écris 3 SMS et parle à François

* Bonus: Modifer l'ajout d'un produit pour que quand j'ajoute un produit qui a une quantité nulle, on envoie un SMS à l'humain  


/** Exercice Bonus: (pour vous entraîner)

 + Créer une méthode permettant d'afficher tous les produit du panier dans un Jambontronc (titre, résumé et prix)
 + Créer une méthode permettant de compter les accessoires totaux des produits qu'il y a dans le panier
 + Créer une méthode permettant de modifier la quantité d'un produit dans le panier
 + Créer une méthode permettant de compter les couleurs des produits qu'il y a dans le panier
 + Créer une méthode permettant de calculer la moyenne des  prix ds produit qu'il y a dans le panier
 + Créer une méthode permetant de récupérer le panier d'un autre Humain

* Créer une classe Commentaire avec
* + id
* + content
  + date de création (utilisé la classe DateTime pour fixer à maintenant)
  + humain. Un commentaire est rédigé par un humain
  + produit: Un commentaire concerne 1 produit  

+ Créer une méthode permettant d compter le nb de commentaires à un produit
+ Créer une méthode permettant d'ajouter 1 ou plisuers commentaires à un produit
+ Créer une méthode permetant à un Humain de supprimer un commentaire d'un produit
+ Créer une méthode permetant à un Humain de voir le titre du produit concerné par rapport à un commentaire 


 
+ Créer une classe Book avec pour attributs:
 
   - id (auto incrémentéé quand on créer un book)
   - titre
   - resume
   - prix (nb à virgule)
   - edition
   - nbPag
   - date de rédaction
   - ecrivains (tableau d'Humain vide par défaut)
   - dispo à la vente (par defaut false)
  
   + Créer une méthode qui permet de formatter le titre les espaces remplacer par des tirets et juste la 1ere lettre en majuscule
   + Créer un compteur qui comptera le nombre de livre crée
	 + Créer un moyen de stocker le prix moyen des livre crée      
   + Créer une méthode permettant de calculer l'age du livre à parti de sa date de création
   + Créer une méthode qui dit si oui ou non ce livre a été écris entre 1970 et aujourd'hui
   + Créer une methode qui formatera le prix à un format français 000 000,00 €
   + Créer une méthode qui permet de tronquer le resumé par rapport au nb de mot voulu( Bonus: on tronquera au mot pret...)
   + Créer une méthode permettantd e retourner le nombre d mot que comporte le titre
   + Créer une méthode qui permet de dire si le livre est un gros livre (nb page > 400), moyen (200 à 400), petit : moin de 200 pages
   + Créer une méthode permettant d'ajouter un humain ou de supprimer un humain parmis la liste d'écrivain

   




use npm install and launch gulp to see what's going on.
