/* @preserve Navbar */
document.addEventListener("DOMContentLoaded", function (event) {

  /*
   * Display the menu items on smaller screens
   */
  const pull = document.getElementById('pull');
  const menu = document.querySelector('nav ul');

  ['click', 'touch'].forEach(function (e) {
    pull?.addEventListener(e, function () {
      menu.classList.toggle('hide')
    }, false);
  });

  /*
   * Make the header images move on scroll
   */
  window.addEventListener('scroll', function () {
    const offset = -(window.scrollY || window.pageYOffset || document.body.scrollTop) / 3;
    const main = document.getElementById('main');
    if (main) {
      main.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    }
  });
});
