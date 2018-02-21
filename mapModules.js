require([
    "esri/basemaps",
    "esri/map", 
    'dojo/dom',    
    "dojo/domReady!"
], 
function(
    esriBasemaps, 
    Map,
    dom
) {

    //Customized Basemap
    esriBasemaps.delorme = {
        baseMapLayers: [{url: "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer"}
        ],
        thumbnailUrl: "https://www.example.com/images/thumbnail_2014-11-25_61051.png",
        title: "Delorme"
    };

    var map = new Map("map", {
      center: [-45.880920, -23.195103],
      zoom: 11,
      basemap: "delorme"
    });

  });