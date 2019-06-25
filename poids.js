
/**
 * Fonction principale qui s'occupe de récupérer les valeurs, et qui s'occupe ensuite de l'afficher
 * 
 * @returns {undefined}
 */
function calcPoids() {
    let masse = recupValeur("#i_masse");
    
    let poidsTerre = recupMasseTerre(masse);
    affichePoids(poidsTerre,"#poidsTerre");
    
    let poidsMercure = recupMasseMercure(masse);
    affichePoids(poidsMercure,"#poidsMercure");
  
    let poidsVenus= recupMasseVenus(masse);
    affichePoids(poidsMercure,"#poidsVenus");
    
    let poidsMars = recupMasseMars(masse);
    affichePoids(poidsMars,"#poidsMars");
    
    let poidsJupiter = recupMasseJupiter(masse);
    affichePoids(poidsMercure,"#poidsJupiter");
    
    
    let poidsSaturne= recupMasseSaturne(masse);
    affichePoids(poidsMercure,"#poidsSaturne");
    
    let poidsUranus = recupMasseUranus(masse);
    affichePoids(poidsMercure,"#poidsUranus");
    
    let poidsNeptune = recupMasseNeptune(masse);
    affichePoids(poidsMercure,"#poidsNeptune");
    
    let poidsPluton= recupMassePluton(masse);
    affichePoids(poidsMercure,"#poidsPluton");
}
window.addEventListener("load", function () {
    // Déclaration de l'index de parcours
    let i;

    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll("input");

    // Parcours de tabInputs en s'appuyant sur le nombre de <input>
    for (i = 0; i < tabInputs.length; i++) {

        // Ajout d'un Listener sur tous les <input> sur l'évènement onKeyUp
        tabInputs[i].addEventListener("keyup", calcPoids);
        //tabInputs[i].addEventListener("keyup", calcremise);
        
    }
});
/**
 * Fonction qui retourne un entier depuis une valeur prise dans le DOM
 * 
 * @param {String} id
 * @return {integer}
 */
function recupValeur(id) {
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}



/**
 * Fonction qui affiche la rémunération dans l'élément d'id "remuneration"
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function affichePoids(nombre, text) {
    window.document.querySelector(text).innerHTML =
            "     votre poids est : " + nombre + " N ";
    
}

/**
*Fonction qui calcul le poids sur la terre
*/ 

function recupMasseTerre(masse) {
   const gTerre = 9.807;
   return (gTerre*masse);
    }

/**
 * Fonction qui retourne la commission sur le S20
 * @param {float} masse
 * @returns {float}
 */
function recupMasseMars(masse) {
   const gMars = 3.711;
    return (masse*gMars);
}

/**
 * Fonction qui retourne la commission sur le X-Spirit
 * @@param {float} masse
 * @returns {float}
 */
function recupMasseSaturne(masse) {
    const gSaturne= 10.44;
    return(masse*gSaturne);
}

/**
 * Fonction qui retourne la masse sur Mercure
 * @param {float} masse
 * @returns {float}
 */
function recupMercure(masse) {
    const gMercure= 3.7;
    return(masse*gMercure);
}

/**
 * Fonction qui retourne la masse sur Jupiter
 * @param {float} masse
 * @returns {float}
 */

function recupJupiter(masse){
    const gJupiter= 24.79;
    return(masse*gJupiter);
}

/**
 * Fonction qui retourne la masse sur Neptune
 * @param {float} masse
 * @returns {float}
 */
function recupNeptune(masse){
    const gNeptune= 11.15;
    return(masse*gNeptune);
}

/**
 * Fonction qui retourne la masse sur venus et uranus 
 * @param {float} masse
 * @returns {float}
 */
function recupVenusUranus(masse){
    const gUranus= 8.87;
    return(masse*gUranus);
}

