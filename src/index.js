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
import './views/modules/for-investors/for-investors.scss';

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

if (document.querySelector('.invest-cart__pagination')) {
  document
    .querySelectorAll('.invest-cart__pagination .bullet')
    .forEach((bullet) => {
      bullet.addEventListener('click', clickPaginationBulletHandler);
    });

  autoTogglerForIvestCarts();
}

/**
 * Pagination toggler
 * @param {e} e - is event click.
 * @return {void}
 */
function clickPaginationBulletHandler(e) {
  const bulletTarget = e.target.closest('.bullet');
  const allBullets = document.querySelectorAll(
    '.invest-cart__pagination .bullet'
  );
  const allInvestCart = document.querySelectorAll('.invest-cart');
  let clicedBulletIndex = 0;

  allBullets.forEach((bullet, index) => {
    if (bullet == bulletTarget) {
      clicedBulletIndex = index;
      bullet.classList.add('active');
    } else {
      bullet.classList.remove('active');
    }
  });

  allInvestCart.forEach((cart, index) => {
    if (index == clicedBulletIndex) {
      cart.classList.add('active');
    } else {
      cart.classList.remove('active');
    }
  });

  // stop recursion
  if (window.ivestToggler) {
    clearTimeout(window.ivestToggler);
  }
}

/**
 * This function just toggle next .invest-cart
 * @param {number} parentCount - just counter for invinite rekursion
 * @return {void}
 */
function autoTogglerForIvestCarts(parentCount) {
  const allBullets = document.querySelectorAll(
    '.invest-cart__pagination .bullet'
  );
  const maxCount = allBullets.length - 1;
  let count = parentCount || 0;

  window.ivestToggler = setTimeout(() => {
    if (count > maxCount) {
      count = 0;
    }
    // console.log('I alive');
    // console.log(allBullets[count]);
    allBullets[count].click();
    count++;

    autoTogglerForIvestCarts(count);

    // autostop recursion
    if (window.ivestToggler > 1000) {
      clearTimeout(window.ivestToggler);
    }
  }, 5000);
}
