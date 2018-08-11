const initMap = require('./map');

ymaps.ready(() => {
  initMap(ymaps, 'map');
  console.log('inited');
});
