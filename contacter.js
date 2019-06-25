/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validEnvoi() {
  if (window.document.querySelector("#nom").value === "" && 
    window.document.querySelector("#prenom").value === "" )
    {
        alert("Le nom ou le prénom doivent être remplis"); // On affiche un message
    }
  else if (window.document.querySelector("#email").value === ""){
        alert("l'email doit être rempli"); // On affiche un message
    }

  else{
    let question = "Souhaitez-vous réellement utiliser l'adresse suivante : " 
    + window.document.querySelector("#email").value;
    if (confirm(question)){
     window.document.querySelector("#form_contact").submit(); //OK envoyer 
  }
  }
}

window.addEventListener("load", function() {
  window.document.querySelector("#btn_envoyer").addEventListener("click", validEnvoi);
  console.log("ok !");
});