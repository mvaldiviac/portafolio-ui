//MODAL
const cajaBtn = document.querySelector('#netflix-1-a');
const bgModal = document.querySelector('.modal');
const modalNetflix = document.querySelector('.modal-netflix-1-a');
const cerrar = document.querySelector('#close');

cajaBtn.addEventListener('click',()=>{
  bgModal.classList.add("active");
  modalNetflix.classList.add("active");
})

bgModal.addEventListener('click',()=>{
  bgModal.classList.remove("active");
  //modalNetflix.classList.remove("active");
})

cerrar.addEventListener('click',()=>{
  bgModal.classList.remove("active");
  //modalNetflix.classList.remove("active");
})


//TOOLTIP
const contenido = document.getElementById('netflix-1-a');
const tooltip = document.getElementById('tooltip-netflix-1-a');

contenido.addEventListener('mouseenter', (e) => {
  tooltip.style.display = 'block';
  actualizarPosicion(e);
});

contenido.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});

contenido.addEventListener('mousemove', (e) => {
  actualizarPosicion(e);
});

function actualizarPosicion(e) {
  tooltip.style.left = e.clientX + -800 + 'px';
  tooltip.style.top = e.clientY + -210 + 'px';
}