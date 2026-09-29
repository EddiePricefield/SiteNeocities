// Mudar o quarto com base nas horas do dia //
var horas = (new Date()).getHours();
console.log(horas);

if (horas >= 5 && horas <= 18){
  document.getElementById("bedroom-img").src="assets/img/bedroom/Dia.png";
} else {
  document.getElementById("bedroom-img").src="assets/img/bedroom/Noite.png";
}