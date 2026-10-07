// Mudar o quarto com base nas horas do dia //
var horas = (new Date()).getHours();
console.log(horas);

if (horas == 5) {
  document.getElementById("bedroom-img").src="assets/img/bedroom/Amanhecendo.png";
  document.getElementById("site-button").src="assets/btns/eddie-btn-amanhecendo-escurecendo.png"
} else if (horas == 18) {
  document.getElementById("bedroom-img").src="assets/img/bedroom/Escurecendo.png";
  document.getElementById("site-button").src="assets/btns/eddie-btn-amanhecendo-escurecendo.png"
} else if (horas > 5 && horas < 18){
  document.getElementById("bedroom-img").src="assets/img/bedroom/Dia.png";
  document.getElementById("site-button").src="assets/btns/eddie-btn-dia.png";
} else {
  document.getElementById("bedroom-img").src="assets/img/bedroom/Noite.png"
  document.body.style.backgroundImage = "url('assets/bckg/background2.png')";
  document.body.classList.add("night-mode");
  document.getElementById("site-button").src="assets/btns/eddie-btn-noite.png";
}

function copiarBotao(){

  if (horas == 5 || horas == 18) {
    navigator.clipboard.writeText('<a href="https://eddiepricefield.neocities.org/" target="_blank"><img src="https://ne0nbandit.github.io/assets/img/btn/eddie-btn-amanhecendo-escurecendo.png"></a>');
  } else if (horas > 5 && horas < 18){
    navigator.clipboard.writeText('<a href="https://eddiepricefield.neocities.org/" target="_blank"><img src="https://ne0nbandit.github.io/assets/img/btn/eddie-btn-dia.png"></a>');
  }else{
    navigator.clipboard.writeText('<a href="https://eddiepricefield.neocities.org/" target="_blank"><img src="https://ne0nbandit.github.io/assets/img/btn/eddie-btn-noite.png"></a>');
  }
  
}