
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
        console.log('Hola');
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



