let livres = []



let catalogue = document.getElementById("catalogue");
let btnAjoute = document.getElementById("ajoute-livre");
let btnSearch = document.getElementById("btnSearch")
let Search = document.getElementById("search")

function affichier(filter = ''){
  catalogue.innerHTML = "";


 let filters = livres.filter((book)=>
    book.titre.toLowerCase().includes(filter.toLowerCase())
 || book.auteur.toLowerCase().includes(filter.toLowerCase())
  
  )

  filters.forEach(function(book,index){
        let div = document.createElement("div")
        div.className = "carte"

        div.innerHTML = `
        <h3>${book.titre}</h3>
        <p>${book.code}</p>
        <p>${book.auteur}</p>
        <p>${book.annee}</p>
        <p>${book.prix}</p>
        <p>${book.disponible ?"Oui" : "Non" }</p>
        <button class="remove">Supprime</button>
        `

        div.querySelector(".remove").addEventListener("click", () => {
            livres.splice(index, 1);
            affichier(Search.value);
          })

        catalogue.appendChild(div)
  })
}

btnAjoute.addEventListener("click",function(){
  let code = document.getElementById("code").value
  let titre = document.getElementById("titre").value
  let auteur = document.getElementById("auteur").value
  let annee = document.getElementById("annee").value
  let prix = document.getElementById("prix").value
  let disponible = document.getElementById("disponible").value === "true";

  let newbook = {code,titre,auteur,annee,prix,disponible}

  livres.push(newbook);
  affichier()

})

Search.addEventListener("input",function(){
  affichier(Search.value)
})

