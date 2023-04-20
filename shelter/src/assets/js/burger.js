window.addEventListener('load', function() {
  const body = document.body;
  const burgerIcon = document.querySelector('.burger-icon');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.nav__link[href]');
  const overlay = document.querySelector('.overlay')

  if (burgerIcon) {
    burgerIcon.addEventListener('click', (e) => {
      body.classList.toggle('_none-scroll');
      burgerIcon.classList.toggle('_open');
      nav.classList.toggle('_active');
      overlay.classList.toggle('_active');
    });
  };

  if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
      navLink.addEventListener('click', onNavLinkClick);
    });

    function onNavLinkClick(e) {
      const navLink = e.target;
      setTimeout(function() {
        window.location.href = navLink.getAttribute('href');
      }, 1 * 1000);
      e.preventDefault();

      if (burgerIcon.classList.contains('_open')) {
        body.classList.remove('_none-scroll');
        burgerIcon.classList.remove('_open');
        nav.classList.remove('_active');
        overlay.classList.remove('_active');
      }
    }
  }

  document.addEventListener('click', (e) => {
    let target = e.target;
    let itsIcon = target == burgerIcon || burgerIcon.contains(target);
    let itsNav = target == nav || nav.contains(target);

    if (!itsIcon && !itsNav && burgerIcon.classList.contains('_open')) {
      body.classList.remove('_none-scroll');
      burgerIcon.classList.remove('_open');
      nav.classList.remove('_active');
      overlay.classList.remove('_active');
    }
  });
});