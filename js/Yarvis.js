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