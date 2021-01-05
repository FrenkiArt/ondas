import _ from 'lodash';
import './assets/styles/style.css';
import Icon from './assets/svg/webpack-logo.svg';
import './assets/fonts/blacklist/font.css';
import printMe from './print.js';
import './assets/styles/main.scss';
import './assets/styles/style.scss';
import 'normalize.css';

import './views/modules/block-img/styles/block-img.sass';
import './views/modules/block-img/js/block-img.js';

/**
 * sdfsdf
 * @return {*} sdf
 */
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const hello2 = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  hello2.classList.add('hello2');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = printMe;

  element.appendChild(btn);

  document.body.appendChild(hello2);

  return element;
}

document.body.appendChild(component());
