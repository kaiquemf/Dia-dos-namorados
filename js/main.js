const dayOne = document.querySelector(".day-one");
const dayTwo = document.querySelector(".day-two");
const dayThree = document.querySelector(".day-three");
const final = document.querySelector(".final");
const comecou = document.querySelector(".comecou");
const texto = document.querySelector(".texto");
const doutorEstranho = document.querySelector(".doutor-estranho");
alert(`Oi linda, tá tudo bem? fiz isso pra te relembrar tudo!`);

let openOne = confirm(`Lembra do primeiro dia que a gente realmente teve?`);
if (openOne == true){
  dayOne.classList.remove("hide");
}
setTimeout(function openDayTwo(){
  let openTwo = confirm(`Pior foi depois`);
  if (openTwo == true){
    dayTwo.classList.remove("hide");
    window.scrollTo(0, 714)
  }
  }, 10000)
setTimeout(function openDayThree(){
  let openThree = confirm(`Depois teve champions RECEBBBAAA!!`);
  if (openThree == true){
    dayThree.classList.remove("hide");
    window.scrollTo(0, 1899)
  }
  }, 20000)
setTimeout(function nearOfFinal(){
  let nearFinal = confirm(`No final das contas quero te dizer que eu:`);
  if (nearFinal == true){
    final.classList.remove("hide");
    window.scrollTo(0, 3510)
  }
  }, 40000)
setTimeout(function startOverAgain(){
  let startOver = confirm(`E muito doido porque foi do nada`);
  if (startOver == true){
    comecou.classList.remove("hide");
    window.scrollTo(0, 5969)
  }
  }, 60000)
setTimeout(function startTheText(){
  let startText = confirm(`Enfim`);
  if (startText == true){
    texto.classList.remove("hide");
    window.scrollTo(0, 6894)
  }
  }, 80000)
setTimeout(function startDoctorStrange(){
  let startDoctor = confirm(`Por final`);
  if (startDoctor == true){
    doutorEstranho.classList.remove("hide");
    window.scrollTo(0, 7201)
  }
  }, 100000)