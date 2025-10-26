let livres = [];

let btnAjouter = document.getElementById("ajoute-livre");
let catalogue = document.getElementById("catalogue");
let searchInput = document.getElementById("search");

function afficherLivres(filtre = "") {




  catalogue.innerHTML = "";

  let totalLivres = document.getElementById("total-livres");

  totalLivres.innerHTML = livres.length

  let livresDisponible = document.getElementById("livres-disponibles");

   function totaldisponible() {
  totalLivres.textContent = livres.length;

  let disponibles = livres.filter(livre => livre.disponible).length;
  livresDisponible.textContent = disponibles;
}
  totaldisponible()
  
  
  
  let livresFiltres = livres.filter(livre =>
    livre.titre.toLowerCase().includes(filtre.toLowerCase())
  );
  
  livresFiltres.forEach((livre, index) => {
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
      ${livre.disponible ? "<button class='reserver' style= 'background-color:blue;' > Reserver </button>": ""}
    `;

    div.querySelector(".supprime").addEventListener("click", function () {
      livres.splice(index, 1); 
      afficherLivres(searchInput.value);
    });

    catalogue.appendChild(div);
  });
}

btnAjouter.addEventListener("click", function () {
  let code = Number(document.getElementById("code").value);
  let titre = document.getElementById("titre").value;
  let auteur = document.getElementById("auteur").value;
  let annee = Number(document.getElementById("annee").value);
  let prix = Number(document.getElementById("prix").value);
  let disponible = document.getElementById("disponible").value === "true";

  let nouveauLivre = { code, titre, auteur, annee, prix, disponible };

  livres.push(nouveauLivre);
  afficherLivres(); 
  document.getElementById("form-ajout").reset();
});


let btnSearch = document.getElementById("btnSearch")
btnSearch.addEventListener("click", function () {
  afficherLivres(searchInput.value);
});


let btnExpensive = document.getElementById("expensive");
let plusCherDiv = document.querySelector(".plusCherDiv")

btnExpensive.addEventListener("click" , function (){
  
  let plusCher = livres.reduce((max,livre) => livre.prix > max.prix ? livre : max)

    plusCherDiv.innerHTML = `
    <div class="carte special">
      <h3>📚 Livre le plus cher</h3>
      <h4>${plusCher.titre}</h4>
      <p>Auteur : ${plusCher.auteur}</p>
      <p>Année : ${plusCher.annee}</p>
      <p><strong>Prix : ${plusCher.prix} DH</strong></p>
      <p>${plusCher.disponible ? "✅ Disponible" : "❌ Réservé"}</p>
    </div>
  `;
  
})

  let btnTrier = document.getElementById("trier");
  let ordreAscendant = true;

  btnTrier.addEventListener("click", function () {


      if (ordreAscendant) {
        livres.sort((a, b) => a.titre.localeCompare(b.titre));
        btnTrier.textContent = "Z-A";
      } else {
        livres.sort((a, b) => b.titre.localeCompare(a.titre));
        btnTrier.textContent = "A-Z";
      }

    ordreAscendant = !ordreAscendant;
    afficherLivres();
  });
  afficherLivres();