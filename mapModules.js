require([
    "esri/basemaps",
    "esri/map", 
    'dojo/dom',
    'dojo/dom-construct',    
    "dojo/domReady!"
], 
function(
    esriBasemaps, 
    Map,
    dom, 
    domConstruct
) {

    //Customized Basemap
    esriBasemaps.delorme = {
        baseMapLayers: [{url: "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer"}
        ],
        thumbnailUrl: "https://www.example.com/images/thumbnail_2014-11-25_61051.png",
        title: "Delorme"
    };

    var map = new Map("map", {
      center: [-118, 34.5],
      zoom: 8,
      basemap: "delorme"
    }); 

    domConstruct.create("div", { innerHTML:"<p>This is a paragraph inside a div</p>" }, dojo.body());

  });