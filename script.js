// var mymap = L.map('mapid').setView([-6.837,107.561,7], 7.3);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
// maxZoom: 18,
// attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//     'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// id: 'mapbox/streets-v11',
// tileSize: 512,
// zoomOffset: -1
// }).addTo(mymap);

// // var marker = L.marker([-6.837,107.561,7]).addTo(mymap);

// // var circle = L.circle([-6.837,107.561,7], {
// // color: 'red',
// // fillColor: '#f03',
// // fillOpacity: 0.5,
// // radius: 5000
// // }).addTo(mymap);

// // var polygon = L.polygon([
// // [-6.556,107.730],
// // [-6.620, 108.176],
// // [-6.755945, 107.723]
// // ]).addTo(mymap);

// // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// // circle.bindPopup("I am a circle.");
// // polygon.bindPopup("I am a polygon.");


// function popUp(f,l){
//     var out = [];
//     if (f.properties){
//         for(key in f.properties){
//             out.push(key+": "+f.properties[key]);
//         }
//         l.bindPopup(out.join("<br />"));
//     }
// }
// var jsonTest = new L.GeoJSON.AJAX(["jabar.geojson"],{onEachFeature:popUp}).addTo(mymap);
// var jsonTest1 = new L.GeoJSON.AJAX(["jateng.geojson"],{onEachFeature:popUp}).addTo(mymap);
// var jsonTest2 = new L.GeoJSON.AJAX(["jatim.geojson"],{onEachFeature:popUp}).addTo(mymap);
// var jsonTest3 = new L.GeoJSON.AJAX(["yogya.geojson"],{onEachFeature:popUp}).addTo(mymap);
// var jsonTest4 = new L.GeoJSON.AJAX(["banten.geojson"],{onEachFeature:popUp}).addTo(mymap);

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
    function popUp(f,l){
        var out = [];
        if (f.properties){
            for(key in f.properties){
                out.push(key+": "+f.properties[key]);
            }
            l.bindPopup(out.join("<br />"));
        }
    }
    var jsonTest = new L.GeoJSON.AJAX([
        "0.geojson","1.geojson", "2.geojson", "3.geojson","4.geojson","5.geojson","6.geojson","7.geojson","8.geojson","9.geojson","10.geojson","11.geojson","12.geojson"
        ,"13.geojson","14.geojson","15.geojson","16.geojson","17.geojson","18.geojson","19.geojson","20.geojson","21.geojson","22.geojson","23.geojson","24.geojson","25.geojson"
        ,"26.geojson","27.geojson","28.geojson","29.geojson","30.geojson","30.geojson","31.geojson","32.geojson","33.geojson","34.geojson","35.geojson","36.geojson","37.geojson"
        ,"38.geojson","39.geojson","40.geojson","41.geojson","42.geojson","43.geojson","44.geojson","45.geojson","46.geojson","47.geojson","48.geojson","49.geojson","50.geojson"
        ,"51.geojson","52.geojson","53.geojson","54.geojson","55.geojson","56.geojson","57.geojson","58.geojson","59.geojson","60.geojson","61.geojson","62.geojson","63.geojson",
        "64.geojson","65.geojson","66.geojson","67.geojson","68.geojson","69.geojson","70.geojson","71.geojson","72.geojson","73.geojson","74.geojson","75.geojson","76.geojson",
        "77.geojson","78.geojson","79.geojson","80.geojson","81.geojson","82.geojson","83.geojson","87.geojson","92.geojson","93.geojson","94.geojson","95.geojson","96.geojson",
        "97.geojson","98.geojson","99.geojson","100.geojson","101.geojson","102.geojson","103.geojson","104.geojson","105.geojson"],{onEachFeature:popUp}).addTo(map);

    
    // .map is instance of Leaflet map

    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    //     maxZoom: 18,
    //     // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    //     //     'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1
    //     }).addTo(map);
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
