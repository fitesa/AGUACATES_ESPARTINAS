var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PARCELA_AGUACATE_ESPARTINAS_1 = new ol.format.GeoJSON();
var features_PARCELA_AGUACATE_ESPARTINAS_1 = format_PARCELA_AGUACATE_ESPARTINAS_1.readFeatures(json_PARCELA_AGUACATE_ESPARTINAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARCELA_AGUACATE_ESPARTINAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELA_AGUACATE_ESPARTINAS_1.addFeatures(features_PARCELA_AGUACATE_ESPARTINAS_1);
var lyr_PARCELA_AGUACATE_ESPARTINAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARCELA_AGUACATE_ESPARTINAS_1, 
                style: style_PARCELA_AGUACATE_ESPARTINAS_1,
                interactive: true,
                title: '<img src="styles/legend/PARCELA_AGUACATE_ESPARTINAS_1.png" /> PARCELA_AGUACATE_ESPARTINAS'
            });
var format_AGUACATES_2 = new ol.format.GeoJSON();
var features_AGUACATES_2 = format_AGUACATES_2.readFeatures(json_AGUACATES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGUACATES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGUACATES_2.addFeatures(features_AGUACATES_2);
var lyr_AGUACATES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGUACATES_2, 
                style: style_AGUACATES_2,
                interactive: true,
                title: '<img src="styles/legend/AGUACATES_2.png" /> AGUACATES'
            });
var format_CURVAS_DE_NIVEL_3 = new ol.format.GeoJSON();
var features_CURVAS_DE_NIVEL_3 = format_CURVAS_DE_NIVEL_3.readFeatures(json_CURVAS_DE_NIVEL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CURVAS_DE_NIVEL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CURVAS_DE_NIVEL_3.addFeatures(features_CURVAS_DE_NIVEL_3);
var lyr_CURVAS_DE_NIVEL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CURVAS_DE_NIVEL_3, 
                style: style_CURVAS_DE_NIVEL_3,
                interactive: true,
                title: '<img src="styles/legend/CURVAS_DE_NIVEL_3.png" /> CURVAS_DE_NIVEL'
            });
var format_GASODUCTO_4 = new ol.format.GeoJSON();
var features_GASODUCTO_4 = format_GASODUCTO_4.readFeatures(json_GASODUCTO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GASODUCTO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GASODUCTO_4.addFeatures(features_GASODUCTO_4);
var lyr_GASODUCTO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GASODUCTO_4, 
                style: style_GASODUCTO_4,
                interactive: true,
                title: '<img src="styles/legend/GASODUCTO_4.png" /> GASODUCTO'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_PARCELA_AGUACATE_ESPARTINAS_1.setVisible(true);lyr_AGUACATES_2.setVisible(true);lyr_CURVAS_DE_NIVEL_3.setVisible(true);lyr_GASODUCTO_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_PARCELA_AGUACATE_ESPARTINAS_1,lyr_AGUACATES_2,lyr_CURVAS_DE_NIVEL_3,lyr_GASODUCTO_4];
lyr_PARCELA_AGUACATE_ESPARTINAS_1.set('fieldAliases', {'fid': 'fid', 'dn_surface': 'dn_surface', 'provincia': 'provincia', 'municipio': 'municipio', 'agregado': 'agregado', 'zona': 'zona', 'poligono': 'poligono', 'parcela': 'parcela', 'recinto': 'recinto', 'uso_sigpac': 'uso_sigpac', });
lyr_AGUACATES_2.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', });
lyr_CURVAS_DE_NIVEL_3.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'CLOSED_CON': 'CLOSED_CON', });
lyr_GASODUCTO_4.set('fieldAliases', {'id': 'id', });
lyr_PARCELA_AGUACATE_ESPARTINAS_1.set('fieldImages', {'fid': 'TextEdit', 'dn_surface': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'agregado': 'TextEdit', 'zona': 'TextEdit', 'poligono': 'TextEdit', 'parcela': 'TextEdit', 'recinto': 'TextEdit', 'uso_sigpac': 'TextEdit', });
lyr_AGUACATES_2.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CURVAS_DE_NIVEL_3.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'CLOSED_CON': 'TextEdit', });
lyr_GASODUCTO_4.set('fieldImages', {'id': 'TextEdit', });
lyr_PARCELA_AGUACATE_ESPARTINAS_1.set('fieldLabels', {'fid': 'no label', 'dn_surface': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'agregado': 'no label', 'zona': 'no label', 'poligono': 'no label', 'parcela': 'no label', 'recinto': 'no label', 'uso_sigpac': 'no label', });
lyr_AGUACATES_2.set('fieldLabels', {'id': 'header label', 'X': 'header label', 'Y': 'header label', });
lyr_CURVAS_DE_NIVEL_3.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'ELEVATION': 'no label', 'CLOSED_CON': 'no label', });
lyr_GASODUCTO_4.set('fieldLabels', {'id': 'no label', });
lyr_GASODUCTO_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});