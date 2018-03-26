var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point([9.07120,48.53460]),
    name: 'Fachschaftszimmer'
});

var iconStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    src: '/img/favicon-32x32.png'
  }))
});

iconFeature.setStyle(iconStyle);

var vectorSource = new ol.source.Vector({
    features: [iconFeature]
});

var vectorLayer = new ol.layer.Vector({
  source: vectorSource
});

var mapLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
})

var map = new ol.Map({
  target: 'map',
  layers: [
    vectorLayer,
    mapLayer
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([9.07120,48.53460]),
    zoom: 17
  })
});
