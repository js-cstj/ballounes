/**
 * @module Ballon
 */
export default class Ballon {
	/**
	 * Méthode principale du module. Sera appelée par le main de l'App.
	 */
	static main() {
		this.largeur = 600;
		this.hauteur = 600;
		this.nbBallons = 50;
		var app = document.getElementById("app");
		var ciel = app.appendChild(this.html_ciel());
		var decompte = app.appendChild(this.html_decompte());
		for (var i = 0; i < this.nbBallons; i += 1) {
			let obj = ciel.appendChild(this.html_ballon());
			obj.addEventListener("mouseover", e => {
				e.target.parentNode.removeChild(e.target);
				decompte.innerHTML = ciel.querySelectorAll("object").length;
			})
		}
	}
	/**
	 * Retourne le div représentant l'espace de travail (le ciel)
	 * @returns {HTMLElement} Le div#ciel
	 */
	static html_ciel() {
		var resultat = document.createElement("div");
		resultat.setAttribute("id", "ciel");
		resultat.style.width = this.largeur + "px";
		resultat.style.height = this.hauteur + "px";
		return resultat;
	}
	/**
	 * Retourne le div affichant le décompte
	 * @returns {HTMLElement} Le div#decompte
	 */
	static html_decompte() {
		var resultat = document.createElement("div");
		resultat.setAttribute("id", "decompte");
		resultat.innerHTML = this.nbBallons;
		return resultat;
	}
	/**
	 * Retourne un élément object représentant un ballon
	 * @returns {HTMLElement} Un object
	 */
	static html_ballon() {
		var resultat = document.createElement("object");
		resultat.classList.add("ballon");
		resultat.setAttribute("data", "images/ballon.svg");
		resultat.setAttribute("type", "image/svg+xml");
		resultat.style.fill = this.couleurAlea();
		resultat.style.transform = this.transformAlea();
		var left = Math.floor(Math.random() * this.largeur);
		var top = Math.floor(Math.random() * this.hauteur);
		resultat.style.left = left + "px";
		resultat.style.top = top + "px";
		return resultat;
	}
	/**
	 * Retourne la valeur d'une propriété transform représentant un format aléatoire (taille et rotation) d'un ballon
	 * @returns {string} Une valeur de transform CSS
	 */
	static transformAlea() {
		var scale = Math.random() * 0.7 + 0.3;
		var rotate = Math.random() * 40 - 20;
		return "translate(-50%, -50%) scale("+scale+") rotate("+rotate+"deg)";
	}
	/**
	 * Retourne une couleur aléatoire pour une ballon
	 * @returns {string} Une couleur au format hsl
	 */
	static couleurAlea() {
		var hue = Math.floor(Math.random()*24)*15;
		return "hsl("+hue+", 100%, 50%)";
	}

}
