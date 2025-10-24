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


let catalogue = document.getElementById("catalogue")

let livres = [];
let btnAjoute = document.getElementById("ajoute-livre")


function affichier() {
    catalogue.innerHTML = ""

     livres.forEach((livre, index) => {
    let div = document.createElement("div");
    div.className = "carte";

    div.innerHTML = `
      <h3>${livre.titre}</h3>
      <p>Code : ${livre.code}</p>
      <p>Auteur : ${livre.auteur}</p>
      <p>Année : ${livre.annee}</p>
      <p>Prix : ${livre.prix} DH</p>
      <p>Disponible : ${livre.disponible ? "Oui" : "Non"}</p>
      <button class="supprime">Supprimer</button>
    `;

    div.querySelector(".supprime").addEventListener("click", function () {
      livres.splice(index, 1);
      affichier(); 
    });

    catalogue.appendChild(div);
  });    
    
}
    
    btnAjoute.addEventListener("click", function (){

let code = Number(document.getElementById("code").value);
let titre = document.getElementById("titre").value;
let auteur = document.getElementById("auteur").value;
let annee = Number(document.getElementById("annee").value);
let prix = Number(document.getElementById("prix").value);
let disponible = document.getElementById("disponible").value === "true";


let nouveuinfo = {
    code : code,
    titre : titre,
    auteur : auteur,
    annee : annee,
    prix: prix,
    disponible : disponible,

}

livres.push(nouveuinfo)

affichier()

})
    