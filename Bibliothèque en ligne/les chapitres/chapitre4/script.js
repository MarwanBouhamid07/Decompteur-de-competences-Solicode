let bouton = document.getElementById("btn-start");
let message = document.getElementById("message");

bouton.addEventListener("click", function () {
  let nom = prompt("Quel est votre prénom ?");
  let age = prompt("how old are you?")
  if (nom) {
    message.innerText = "Bonjour, " + nom ;
    if (age) {
      message.innerText = "Bonjour, " + nom + " ton age est :" +age ;
    }
  }else {
    alert("Aucun nom saisi !");
  }
});
