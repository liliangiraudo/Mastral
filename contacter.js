/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validEnvoi() {
 var pattern = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
  if (window.document.querySelector("#nom").value === "" && 
    window.document.querySelector("#prenom").value === "" )
    {
        alert("Le nom ou le prénom doivent être remplis"); // On affiche un message
    }
  else if (window.document.querySelector("#email").value === ""){
        alert("l'email doit être rempli"); // On affiche un message
    }
  else if (window.document.querySelector("#email").value !== pattern){
        alert("email invalide.");
  }
  else{
     window.document.querySelector("#form_contact").submit(); //OK envoyer 
  }
}


window.addEventListener("load", function() {
  window.document.querySelector("#btn_envoyer").addEventListener("click", validEnvoi);
  console.log("ok !");
});