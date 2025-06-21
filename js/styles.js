//Funcion controla cambio de estilo css
function swapStylesheet(sheet) {
    document.getElementById('styleSwitch').setAttribute('href', sheet);
}

function initate() {
       var style1 = document.getElementById("stylesheet1");
       var style2 = document.getElementById("stylesheet2");
       var style3 = document.getElementById("stylesheet3");
       var style4 = document.getElementById("stylesheet4");
  
       style1.onclick = swapStyleSheet("css/basic.css");
       style2.onclick = swapStyleSheet("css/old-school.css");
       style3.onclick = swapStyleSheet("css/classic.css");
       style4.onclick = swapStyleSheet("css/dark.css");
   }

function changeStyle() {
    var inputSwitch = document.getElementById("switch-style");

    
    if(inputSwitch.checked){
        console.log('Checqueado');
        
    }
    
}

//USO DE MENU
const menu = document.querySelector('.menu-mb');
const lat = document.querySelector('#lat');
const abrirHambur = document.querySelector('#clickHam');

menu.addEventListener('click',()=>{
  menu.classList.toggle("active");
  lat.classList.toggle("cheked");
  
})
lat.addEventListener('click',()=>{
  lat.classList.toggle("cheked");
  menu.classList.toggle("active");
})