// Mudar o quarto com base nas horas do dia //
var horas = (new Date()).getHours();
console.log(horas);

if (horas == 5 || horas == 18) {
  document.getElementById("bedroom-img").src="assets/img/bedroom/Amanhecendo-Escurecendo.png";
} else if (horas > 5 && horas < 18){
  document.getElementById("bedroom-img").src="assets/img/bedroom/Dia.png";
} else {
  document.getElementById("bedroom-img").src="assets/img/bedroom/Noite.png"
  document.body.style.backgroundImage = "url('assets/bckg/background2.png')";
  document.body.classList.add("night-mode");
}

function copiarBotao(){
  navigator.clipboard.writeText('<a href="https://eddiepricefield.neocities.org/" target="_blank"><img src="https://ne0nbandit.github.io/assets/img/btn/eddie-btn.png"></a>')
}