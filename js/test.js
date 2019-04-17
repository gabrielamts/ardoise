'use strict';   // Mode strict du JavaScript
/////// Fonctions générales //////////////

//Saisie de nombre entier ou a virgule obligatoire //
function saisieNombre( message, valeurParDefaut) {
    var saisie;
    do {
        saisie = window.prompt (message, valeurParDefaut);
        
        if(saisie != null ) // Sinon nombre est transformé en NaN par parseFloat, et on reste coincé dans la boucle
            saisie = parseFloat(saisie);
    }
    while ( (isNaN(saisie)) && (saisie != null) );
    
    return saisie;
}

// Renvoie un nombre aléatoire
function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////ARDOISE MAGIQUE//////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


// canvas refresh
function clearCanvas(event){
    var context = canvasHTML.getContext('2d');
    context.clearRect(0, 0, canvasHTML.width, canvasHTML.height);
}

// Prendre un outil selon le clic qui va modifier mon objet options
function getBrush (event){
    options.outils = "pinceau";
}
function getEraser (event){
    options.outils = "gomme";
    var effacerDemand =window.confirm("100% sure de vouloir effacer votre oeuvre d'art ?");
    if (effacerDemand) {
        context.clearRect(0,0,800,600);
    }
}
function getPipette (event){
    options.outils = "pipette";
}

function getSave (event){
    options.outils ="save";
    var link = document.createElement('a');
    link.innerHTML = 'enregistrer';
    link.addEventListener('click', function(ev) {
    link.href = toile.toDataURL();
    link.download = "mypainting.png";
    }, false);
    document.body.appendChild(link);
}

// Choisir une couleur de base

function getColor (event){
    options.couleur = this.getAttribute("data-color");
}

// Choisir une épaisseur
function getWeight (event){
    options.epaisseur = this.getAttribute("data-weight");
}

// Allez une fonction pour picasso

function faireUnBeauDessin(x, y, isDown) {
    if (isDown) {
        context.beginPath();
        context.strokeStyle = options.couleur;
        context.lineWidth = options.epaisseur;
        context.lineJoin = "round";
        context.moveTo(lastX-20, lastY-20);
        context.lineTo(x, y);
        context.closePath();
        context.stroke();
    }
    lastX = x; lastY = y;
}





// Au clic dans le canvas on fait un beau dessin

var canvasHTML = document.getElementById('toile');
//canvasHTML.addEventListener("click", faireUnBeauDessin);


// Récupération du context ici 2D
var context = canvasHTML.getContext('2d');

//Options disponnibles dans un objet ici les valeurs par défaut
var options = {
    outil : "pinceau",
    couleur : "black",
    epaisseur : 5 
}

// VARIABLES DES OUTILS
//var brushButtonHTML = document.getElementById('brush-button');
//brushButtonHTML.addEventListener("click", getBrush);

var eraserButtonHTML = document.getElementById('eraser-button');
eraserButtonHTML.addEventListener("click", getEraser);

var pipetteButtonHTML = document.getElementById('pipette-button');
pipetteButtonHTML.addEventListener("click", getPipette);

//var resetButtonHTML = document.getElementById('reset-canvas');
//resetButtonHTML.addEventListener("click", clearCanvas);

var saveButtonHTML = document.getElementById('save-button');
saveButtonHTML.addEventListener("click", getSave);

// VARIABLES DES COULEURS DE BASE
var allColorBtnHTML = document.querySelectorAll('.color-btn');
allColorBtnHTML.forEach(function(element)
{
    element.addEventListener('click', getColor)
});

//VARIABLES DES EPAISSEURS
var allWeightBtnHTML = document.querySelectorAll('.epaisseur-btn');
allWeightBtnHTML.forEach(function(element)
{
    element.addEventListener('click', getWeight)
});

var mousePressed = false;
var lastX, lastY;


    $('#toile').mousedown(function (e) {
        mousePressed = true;
        faireUnBeauDessin(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#toile').mousemove(function (e) {
        if (mousePressed) {
            faireUnBeauDessin(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#toile').mouseup(function (e) {
        mousePressed = false;
    });
        $('#toile').mouseleave(function (e) {
        mousePressed = false;
    });





/*
<input type="range" min="2" max="50" value="5" id="largeur" />
Pour les navigateur le prenant en compte, cela va créer un input avec un curseur pouvant aller de 2 à 50 (attributs min et max). Comme le input[type=text], value correspond à la valeur définie, on peut aller récupérer la valeur de l’input comme ceci :


var valeur = $("#largeur").val();

var valeur = $("#largeur").val();
*/


/////////////
console.log();