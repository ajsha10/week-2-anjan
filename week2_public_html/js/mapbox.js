'use strict';
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5qYW5zaCIsImEiOiJja2hhN3BpZzYwZzVkMzBwajR5YWg2dDM1In0.qutWbmA30M0AUj6597H79g';
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [24, 60], // starting position [lng, lat]
  zoom: 13, // starting zoom
});

const addMarker = (coords) => {
  map.setCenter(coords);
  const marker = new mapboxgl.Marker().setLngLat(coords).addTo(map);
};
