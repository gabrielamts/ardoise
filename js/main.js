'use strict';  

// *************************************************************************
// **************************** Variables globales *************************
// *************************************************************************
var canva = document.getElementById("canvas");
//var ctx = canva.getContext("2d");
var ctx =canva.getContext("2d");

function dessine(event){
     var x = event.pageX - canva.offsetLeft-40;//Enleve -40 pour les bordures
     var y = event.pageY - canva.offsetTop-40;
     ctx.strokeStyle=options.couleur;
     ctx.lineWidth=options.epaisseur;      
     ctx.lineTo(x,y);
     // ctx.fillStyle=options.couleur;   
     //ctx.arc(x,y,options.epaisseur,0);   
     ctx.stroke();
}


canva.addEventListener('click',dessine);

ctx.beginPath();    // Début du chemin

//ctx.moveTo(50,50);

var options= {
    couleur:"black",
    epaisseur:5
};

/**********************************************************/
/*************** Changer Epaisseur trait ******************/
/**********************************************************/
var btnEpaisseurFineHTML=document.getElementById('fine');
var btnEpaisseurNormalHTML=document.getElementById('normal');
var btnEpaisseurEpaisHTML=document.getElementById('epais');


btnEpaisseurFineHTML.addEventListener('click', btnFine);
btnEpaisseurNormalHTML.addEventListener('click', btnNormal);
btnEpaisseurEpaisHTML.addEventListener('click', btnEpais);

function btnFine(event) {
    options.epaisseur=5;
}
function btnNormal(event) {
    options.epaisseur=10;
}
function btnEpais(event) {
    options.epaisseur=20;
}

/**********************************************************/
/*************** Changer Couleur trait ******************/
/**********************************************************/

var btnBlackHTML=document.getElementById('black');
var btnBrownHTML=document.getElementById('brown');
var btnRedHTML=document.getElementById('red');
var btnYellowHTML=document.getElementById('yellow');
var btnGreenHTML=document.getElementById('green');
var btnTurquoiseHTML=document.getElementById('turquoise');
var btnBlueHTML=document.getElementById('blue');

btnBlackHTML.addEventListener('click', btnBlack);
btnBrownHTML.addEventListener('click', btnBrown);
btnRedHTML.addEventListener('click', btnRed);
btnYellowHTML.addEventListener('click', btnYellow);
btnGreenHTML.addEventListener('click', btnGreen);
btnTurquoiseHTML.addEventListener('click', btnTurquoise);
btnBlueHTML.addEventListener('click', btnBlue);

function btnBlack(event) {
    options.couleur="black";
}
function btnBrown(event) {
    options.couleur="brown";
}
function btnRed(event) {
    options.couleur="red";
}
function btnYellow(event) {
    options.couleur="yellow";
}
function btnGreen(event) {
    options.couleur="green";
}
function btnTurquoise(event) {
    options.couleur="turquoise";
}
function btnBlue(event) {
    options.couleur="blue";
}

