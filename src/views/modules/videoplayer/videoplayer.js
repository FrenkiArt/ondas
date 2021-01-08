// src/views/modules/videoplayer/videoplayer.js

import Plyr from 'plyr';

const player = new Plyr('#player', {
  /* options */
});

window.player = player;

if (document.querySelector('#watch-video')) {
  document
    .querySelector('#watch-video')
    .addEventListener('click', showVideoPlayerHandler);
}

if (document.querySelector('.videoplayer-overlay')) {
  document
    .querySelector('.videoplayer-overlay')
    .addEventListener('click', clickVideoOverlayHandler);
}

if (document.querySelector('.videoplayer__close')) {
  document
    .querySelector('.videoplayer__close')
    .addEventListener('click', clickVideoOverlayHandler);
}

/**
 * Function for cathcing click on video overlay
 * @param {event} e event click
 */
function clickVideoOverlayHandler(e) {
  window.player.pause();
  document.querySelector('.videoplayer-overlay').classList.remove('open');
  document.querySelector('.videoplayer').classList.remove('open');
}

/**
 * This function open video player popup
 * @param {event} e event click
 */
function showVideoPlayerHandler(e) {
  e.preventDefault();
  document.querySelector('.videoplayer-overlay').classList.add('open');
  document.querySelector('.videoplayer').classList.add('open');
  window.player.play();
}
