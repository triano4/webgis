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

    
});
