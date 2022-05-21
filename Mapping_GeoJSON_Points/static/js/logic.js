// Add console.log to check to see if our code is working.
console.log("working geojson");
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);


// An array containing each city's location, state, and population.

// We create the tile layer that will be the background of our map.
//  Add a marker to the map for Los Angeles, California.
//var marker = L.marker([34.0522, -118.2437]).addTo(map);

// Loop through the cities array and create one marker for each city.
// Add GeoJSON data.


// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);
// Grabbing our GeoJSON data.
/* L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.marker(latlng)
      .bindPopup("<h2>" + feature.properties.city + "</h2><hr> <h3>"+ feature.properties.faa+"</h3> ")

    }

  }).addTo(map); */

L.geoJSON(sanFranAirport,{

    onEachFeature: function(feature,layer){
        console.log(layer);
        layer.bindPopup("<h2>" + feature.properties.city + "</h2>");

    }
}).addTo(map);


 /*   L.circlemarker(city.location,{
    radius:city.population/100000
}) */

//L.marker(city.location)
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData ="https://raw.githubusercontent.com/Angie1210/Mapping_Earthquakes/main/majorAirports.json";

