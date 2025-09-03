//MODAL
// const netflixA = document.querySelector('#netflix-1-a');
// const netflixB = document.querySelector('#netflix-1-b');
// const bgModalA = document.querySelector('#modal-bg-1');
// const bgModalB = document.querySelector('#modal-bg-2');
// const modalNetflixa = document.querySelector('.modal.modal-netflix-1-a');
// const modalNetflixb = document.querySelector('.modal.modal-netflix-1-b');
// const cerrar = document.querySelector('#close');

// netflixA.addEventListener('click',()=>{
//     console.log('A');
//   bgModalA.classList.add("active");
// })
// netflixB.addEventListener('click',()=>{
//     console.log('B');
//   bgModalB.classList.add("active");
// })



// cerrar.addEventListener('click',()=>{
//   bgModalA.classList.remove("active");
// })
// cerrar.addEventListener('click',()=>{
//   bgModalB.classList.remove("active");
// })


///////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.modal-trigger');
  const modals = document.querySelectorAll('.modal');

  // Abrir modal según data-modal
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal');
      const modal = document.getElementById(`modal-${modalId}`);
      if (modal) {
        modal.classList.add('active');
      }
    });
  });

  // Cerrar modal
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal')) {
      const modal = e.target.closest('.modal');
      if (modal) modal.classList.remove('active');
    }
  });
});






















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