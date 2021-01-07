import 'normalize.css';
import './assets/styles/style.scss';

// import printMe from './print.js';

// import './views/modules/block-img/styles/block-img.sass';
// import './views/modules/block-img/js/block-img.js';

// Модули нашего проекта
import './views/modules/header/header.scss';
import './views/modules/navigation/navigation.scss';
import './views/modules/footer/footer.scss';
import './views/modules/social-links/social-links.scss';
import './views/modules/team/team.scss';
import './views/modules/roadmap/roadmap.scss';
import './views/modules/ecosystem/ecosystem.scss';
import './views/modules/for-developers/for-developers.scss';
import './views/modules/about/about.scss';
import './views/modules/for-players/for-players.scss';

window.onresize = () => {
  setTimeout(() => {
    console.log(window.innerWidth);
  }, 1);
};

if (document.querySelector('.link-read-more')) {
  document.querySelectorAll('.link-read-more').forEach((link) => {
    link.addEventListener('click', clickLinkReadMoreHandler);
  });
}

/**
 * This function make visible hidden content in .link-read-more__target,
 * after click on .link-read-more trigger.
 * And hide trigger .link-read-more trigger
 * @param {e} e - is event click.
 * @return {void}
 */
function clickLinkReadMoreHandler(e) {
  e.preventDefault();
  e.target.closest('.link-read-more__wrapper').classList.add('open');
}
