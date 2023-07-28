
/* VARIABLES */
const inputUsager = document.getElementsByTagName("input")[0];
const btnToMeters = document.getElementById("btn-en-metres");
const btnToFoot = document.getElementById("btn-en-pieds");
let conversionResults = 0;
let outputResults = document.getElementsByTagName("p")[0];
const pattern = /^\+?\d+(\.\d+)?\s*$/; // Valider que l'utilisateur entre un numéro positif seulement (partie décimal optionnel)

/* ÉVÉNEMENTS */
window.addEventListener('load', function() {
    inputUsager.value = "";
    inputUsager.focus();  // Rendre le UX (user experience) plus facile après que la page est téléchargée
}, false);

btnToMeters.addEventListener('click', function() {
    outputResults.textContent = ""; // efface l`ancien résultat si présent
    showResults();
    toMeters(inputUsager.value); 
}, false);

btnToFoot.addEventListener('click', function() {
    outputResults.textContent = "";
    showResults();
    toPieds(inputUsager.value)
}, false);

/* FONCTIONS */
function showUsage() { // au cas ou l`utilisateur a mis une valeur invalide
    outputResults.style.color = "red";
    outputResults.style.width = "75%";
    outputResults.textContent += "Svp entrer un numéro positif (e.g. 47, 23.321, etc.)";
}

function showResults() {
    outputResults.style.color = "initial";
    outputResults.style.width = "50%";
}

function toMeters(foots) {
    if (pattern.test(foots)) 
    {
        // 1 m = 1 ft / 3.281
        conversionResults = foots / 3.281;
        // https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
        conversionResults = Math.round( (conversionResults + Number.EPSILON) * 100) / 100;

        outputResults.textContent += foots + " pieds est égal à " + conversionResults + " mètres";
    }
    else 
        showUsage();
}

function toPieds(meters) {
    if (pattern.test(meters)) 
    {
        // 1 ft = 1 m * 3.281
        conversionResults = meters * 3.281;
        // https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
        conversionResults = Math.round( (conversionResults + Number.EPSILON) * 100) / 100;

        outputResults.textContent += meters + " mètres est égal à " + conversionResults + " pieds";
    }
    else 
        showUsage();
}
