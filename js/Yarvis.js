 window.addEventListener('scroll', () => {
      const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
      const porcentajeScroll = (window.scrollY / alturaTotal) * 100;

      const fondo2 = document.querySelector('.fondo-2');
      const fondo3 = document.querySelector('.fondo-3');

      if (porcentajeScroll >= 33) {
        fondo2.classList.add('activo');
      } else {
        fondo2.classList.remove('activo');
      }
      if (porcentajeScroll >= 66) {
        fondo3.classList.add('activo');
      } else {
        fondo3.classList.remove('activo');
      }
    });
     function CalcularVida() {
vida = prompt("Ingrese la vida del jefe:");
dificultad = prompt("Ingrese la dificultad, 1 para experto, 2 para maestro:");
if (dificultad == 1) {
  vida = vida * 1.5;
  alert("La vida del jefe en dificultad experto es: " + vida);

  }
  if (dificultad == 2) {
  vida = vida * 1.9;
  alert("La vida del jefe en dificultad maestro es: " + vida);
  }
  }