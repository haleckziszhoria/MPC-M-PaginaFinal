const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([-14.068362, -70.430895], 16)

L.tileLayer(tilesProvider, {
    maxZoom: 30,
}).addTo(myMap)

let marker = L.marker([-14.068362, -70.430895]).addTo(myMap)

var circle = L.circle([-14.068362, -70.430895], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 20
}).addTo(myMap);