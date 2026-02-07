// COSAS SIDEBAR
document.querySelectorAll(".sidebar, .sidebar-menu").forEach(elem => {
    elem.addEventListener("click", () => {
        document.querySelector(".sidebar-menu").classList.toggle("open");
    });
});
    //COSAS AMMM HEADER VVVVV 
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const header = document.getElementById("headera");

  if (currentScroll > lastScroll) {
    
    header.classList.add("hide");
  } else {
     
    header.classList.remove("hide");
    
  }

  lastScroll = currentScroll;
});

// COSAS DEL FONDO DE INICIO
// COSAS DEL FONDO DE INICIO
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  document.querySelector(".parallax-bg").style.transform =
    `translateY(-${scrolled * 0.01}px)`;
});

// COSAS PARA EL FADE IN 
// COSAS PARA EL FADE IN 
const elementos = document.querySelectorAll(".fade, .fate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));

// COSAS DE LOS VIDEOS
// COSAS DE LOS VIDEOS

// const btn = document.querySelector(".btn-chess");
// const overlay = document.querySelector(".video-chess");
// const cerrar = document.querySelector(".closeone");

// btn.addEventListener("click", () => {
//   overlay.classList.add("show");
// });

// cerrar.addEventListener("click", () => {
//   overlay.classList.remove("show");
// });



// COSAS DE LOS VIDEOS 2 INTERRUMPIDAS POR LOS VIDEOS 

function resetAllVideos() {
  document.querySelectorAll("iframe").forEach(iframe => {
    iframe.src = iframe.src;
    console.log("RESETEAAA");
  });
}

const buttons = document.querySelectorAll(".btn-videos");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    target.classList.add("show");
  });
});

const closeButtons = document.querySelectorAll(".closeone");
closeButtons.forEach(cerrar => {
  cerrar.addEventListener("click", () => {
    resetAllVideos(); 
    console.log("Se clickeó el botón:");
    cerrar.closest("section").classList.remove("show");
  });
});

console.log(typeof YT); 
console.log(typeof YT.Player);

