// const btn = document.getElementById("ajoute-livre");
// const catalogue = document.getElementById("catalogue");

// btn.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.className = "carte";
  
//   const titre = document.getElementById("titre").value;
//   const auteur = document.getElementById("auteur").value;
//   const annee = document.getElementById("annee").value;
//   const prix = document.getElementById("prix").value;
//   const dispo = document.getElementById("disponible").value;
  
//   div.innerHTML = `
//     <h2>${titre}</h2>
//     <p>Auteur: ${auteur}</p>
//     <p>Année: ${annee}</p>
//     <p>Prix: ${prix} DH</p>
//     <p>Disponible: ${dispo}</p>
//     <button>Supprimer</button>
//   `;
  
//   // Delete button
//   div.querySelector("button").addEventListener("click", () => {
//     div.remove(); // remove only this card
//   });
  
//   catalogue.appendChild(div);
  

// });


let catalogue = document.getElementById("catalague");
let code = document.getElementById("code");
let titre = document.getElementById("titre");
let auteur = document.getElementById("auteur");
let annee = document.getElementById("annne");
let prix = document.getElementById("pix");
let disponible = document.getElementById("disponible");


let livres = [];
let btnAjoute = document.getElementById("ajoute-livre")


function affichier() {
    catalogue.innerHTML = ''

    livres.forEach(livre , index  => {

        let div = document.createElement("div");
        div.className = "carte"


        div.innerHTML= `
    <h3>${livre.titre}</h3> 
    <p>Code : ${livre.code}</p>
    <p>Auteur : ${livre.auteur}</p>
    <p>Année : ${livre.annee}</p>
    <p>Prix : ${livre.prix} DH</p>
    <p>Disponible : ${livre.disponible ? "Oui" : "Non"}</p>
    <button class="supprime">Supprimer</button>
        
        `
    });
    
}