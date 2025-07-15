
// USO DE THEME DARK
  const contenedor = document.querySelector('#all-container');
  const switchs = document.querySelector('#switch');
  const switchsMb = document.querySelector('#switch-mb');
  const switchElement = document.getElementById('switch');
  const switchElementMb = document.getElementById('switch-mb');
  const darkClass = 'dark';

  // Aplicar tema si estaba activado
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add(darkClass);
    if (switchElement) switchElement.checked = true;
    if (switchElementMb) switchElementMb.checked = true;
  }

  // Evento para cambiar el tema
  if (switchElement) {
    switchElement.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add(darkClass);
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove(darkClass);
        localStorage.setItem('theme', 'light');
      }
    });
  }
// EVENTO CAMBIA THEME MOBILE
  if (switchElementMb) {
    switchElementMb.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add(darkClass);
       // console.log('Hola');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove(darkClass);
        localStorage.setItem('theme', 'light');
      }
    });
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


// USO DE TAMAÑO DE MENU AL BAJAR SCROLL
const header = document.querySelector("#navbar");
header.addEventListener('scrollY', () =>{
  if (header.scrollY > 50) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
});

// USO DE SORTING VIEW
const sorting = document.querySelector("#sorting-option-view");
const linkGrid = document.querySelector(".sorting-btn.grid");
const linkList = document.querySelector(".sorting-btn.list");

linkGrid.addEventListener('click',()=>{
  sorting.classList.add("grid");
})
linkList.addEventListener('click',()=>{
  sorting.classList.remove("grid");
})

//MODAL PROYECTOS
const portfolio = document.querySelector('#portfolio');
const bgModal = document.querySelector('#bg-modal');
const closeBtn = document.querySelector('#close-btn');

portfolio.addEventListener('click',()=>{
  bgModal.classList.add("active");
})
closeBtn.addEventListener('click',()=>{
  bgModal.classList.remove("active");
  //closeBtn.classList.remove("active");
})
