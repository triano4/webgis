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
    const { overlays, broadcast } = windyAPI;

    const mapMetric = overlays.map;
    // .map is instance of Leaflet map

    // L.popup()
    //     .setLatLng([-7.50166466, 109.637832302])
    //     .setContent('Ini Pulau Jawa')
    //     .openOn(map);
    // L.control.scale().addTo(map);
 
});

// windyInit(options, windyAPI => {
//     // All the params are stored in windyAPI.store
//     const { overlays, broadcast } = windyAPI;

//     const windMetric = overlays.wind.metric;
//     console.log(windMetric);
//     // 'kt' .. actually selected metric for wind overlay
//     // Read only value! Do not modify.

//     overlays.wind.listMetrics();
//     // ['kt', 'bft', 'm/s', 'km/h', 'mph'] .. available metrics

//     overlays.wind.setMetric('m/s');
//     // Metric for wind was changed to bft

//     broadcast.on('metricChanged', (overlay, newMetric) => {
//         // Any changes of any metric can be observed here
//         console.log(overlay, newMetric);
//     });
// });
