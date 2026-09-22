console.log("Mein MLG funktioniert!");

let computerfragen = [{

    frage : "Wer hat Romeo und Julia geschrieben?",
    loesung: "Shakespeare"
    
    
},
{
    frage: "In welchen Jahr begann die Französische Revolution mit dem Sturm auf die Bastille?",
    loesung: "1789"  
    
},
{
    frage : "Ein Polluver kostet regulär 150 Euro und wird um 20% im Preis reduziert. Wie hoch ist der Rabtt in Euro?",
    loesung: "30 euro"
}
,{  
    frage: "Mit welcher Fragewort-Probe ermittelt man im Deutschen den Genetiv?",
    loesung: "Wessen"
},

{
   
     frage: "In welche drei Stände war die Gesellschaft vor der Revolution aufgeteilt?",
    loesung: "1.Klerus 2.Adel 3.Bürger und Bauer"
},
{
    frage: "Vereinfache den Term:3x + 5y-x +2y ?",
    loesung: "2x + 7y"
},
{
    frage: "Welchen Fall verlangt die Präposition ,,mit`` immer?",
    loesung: "dativ"
},
{
    frage: "Welche Wortart beschreibt eine Aktion oder einen Zustand?",
    loesung: "Verb"
},
{
    frage: "Löse nach x auf: 2x-4=10?",
    loesung: "x=7"
},
];

let aktuelleFrage = 0;
document.getElementById("frage").innerHTML =
"<b>" + computerfragen[aktuelleFrage].frage + "</b>";

document.getElementById("frageHeadline").textContent = "Frage " + (aktuelleFrage + 1);

let weiterButton = 
 document.getElementById("QuestionButton");
 weiterButton.addEventListener("click", function() {
  raten();
});


function raten() {

  let spielerEingabe =
 document.getElementById("spielerEingabe").value;
 
 let ausgabe =
 document.getElementById("ausgabe");


 if ( 
spielerEingabe.toLowerCase() ==
  computerfragen[aktuelleFrage].loesung.toLowerCase()
  ) {
    
 ausgabe.innerText = "Richtig";
  } else {

 ausgabe.innerText = "Falsch";

}

}

function raten() {

  let spielerEingabe =
  document.getElementById("spielerEingabe").value;
  
  let ausgabe =
document.getElementById("ausgabe");
  
if (
 spielerEingabe.toLowerCase() ==
   computerfragen[aktuelleFrage].loesung.toLowerCase()
  ) {
    
 ausgabe.innerText = "Richtig";
 
  aktuelleFrage++; 
  
   zeigeFrage(); 
 
} else {
    
    ausgabe.innerText = "Falsch"; 

}

}




function zeigeFrage() {
    
document.getElementById("frage").innerHTML =
 "<b>" + computerfragen[aktuelleFrage].frage + "</b>";

 
document.getElementById("frageHeadline").textContent = "Frage " + (aktuelleFrage + 1);
 
 document.getElementById("spielerEingabe").value = ""; 
 
 
document.getElementById("ausgabe").innerText = "";

}




if (aktuelleFrage > computerfragen.length) {

zeigeFrage();

document.getElementById("frage").innerText="Quiz beendet!";

document.getElementById("spielerEingabe").style.display="none"

document.getElementById("QuestionButton").style.display = "none";

}

// String in localStorage speichern
localStorage.setItem ("complex", json);                  

// Auslesen 
var com = JSON.parse (localStorage.getItem ("complex")); 
console.log (com);

// 1. Deine Fragen eintragen
const fragen = ["Frage 1?", "Frage 2?", "Frage 3?", "Frage 4?", "Frage 5?", "Frage 6?", "Frage 7?", "Frage 8?", "Frage 9?"];
let i = 0;

const zaehler = document.getElementById('frage-zaehler');
const text = document.getElementById('frage-text');
const btn = document.getElementById('weiter-btn');

// 2. Funktion zeigt Frage und Zähler (z.B. 1/9)
function zeige() {
    zaehler.innerText = `Frage: ${i + 1}/${fragen.length}`;
    text.innerText = fragen[i];
}

// 3. Klick springt eine Frage weiter
btn.addEventListener('click', () => {
    if (i < fragen.length - 1) {
        i++;
        zeige();
    } else {
        alert("Quiz fertig!");
    }
});

zeige(); // Start
