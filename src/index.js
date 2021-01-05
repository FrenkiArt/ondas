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

window.onresize = () => {
  console.log(window.innerWidth);
};
