// var mymap = L.map('mapid').setView([-6.837,107.561,7], 7.3);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
// maxZoom: 18,
// attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//     'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// id: 'mapbox/streets-v11',
// tileSize: 512,
// zoomOffset: -1
// }).addTo(mymap);

// var marker = L.marker([-6.837,107.561,7]).addTo(mymap);

// var circle = L.circle([-6.837,107.561,7], {
// color: 'red',
// fillColor: '#f03',
// fillOpacity: 0.5,
// radius: 5000
// }).addTo(mymap);

// var polygon = L.polygon([
// [-6.556,107.730],
// [-6.620, 108.176],
// [-6.755945, 107.723]
// ]).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// 

// ====================================================

const options = {
    // Required: API key
    key: 'YnGyjyeV3mFEy2PSm3y5TvRS4Nl6eCdv', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat:-7.50166466 ,
    lon: 111.257832302,
    zoom: 7.4,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    
    // .map is instance of Leaflet map

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        //     'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
        }).addTo(map);
    // L.popup()
    //     .setLatLng([-7.50166466, 109.637832302])
    //     .setContent('Ini Pulau Jawa')
    //     .openOn(map);
    // L.control.scale().addTo(map);
    // console.log()
    // var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    // streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

    // var map = L.map('map', {
    //     center: [39.73, -104.99],
    //     zoom: 10,
    //     layers: [grayscale, cities]
    // });
    // var baseMaps = {
    //     "Grayscale": grayscale,
    //     "Streets": streets
    // };
    
    // var overlayMaps = {
    //     "Cities": cities
    // };
    // L.control.layers(baseMaps, overlayMaps).addTo(map);
    // var baseMaps = {
    //     "<span style='color: gray'>Grayscale</span>": grayscale,
    //     "Streets": streets
    // };
 
});
