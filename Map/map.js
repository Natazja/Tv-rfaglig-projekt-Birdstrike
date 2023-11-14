console.log(birdStrikes);

const map = L.map("map").setView([56, 11.6], 6);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
L.circle([56.8033777, 9.5168986]).addTo(map);

const birdStrikesArray = birdStrikes.Sheet1;
console.log(birdStrikesArray)

const latLng = [];

birdStrikesArray.forEach(function (sighting) {
    const latLngIndividual = sighting['lat, lng'];
    const latLngIndividualArray = latLngIndividual.split(", ")
    const lat = parseFloat(latLngIndividualArray[0]);
    const lng = parseFloat(latLngIndividualArray[1]);
    console.log(lat)
    console.log(lng)
    L.circle([lat, lng]).addTo(map);
})