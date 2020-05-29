/*
* This file is part of 'arcgis-js-tutorial'.
*
* To the extent possible under law, the author has dedicated all copyright and
* related and neighboring rights to this software to the public domain worldwide.
*
* This software is distributed without any warranty.
* You should have received a copy of the CC0 Public Domain Dedication along with
* this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
*/

console.log("Initialising Map and MapView..");

var map;
var domMap = document.getElementById("domMap");
var mapView;
var domStatusbar = document.getElementById("domStatusbar");

require(
	["esri/Map", "esri/views/MapView"], 
	function(Map, MapView, BasemapToggle) {
		domMap.innerHTML = "";
		map = new Map({
			basemap: "streets-vector",
			layers: null
		});
		mapView = new MapView({
			map: map,
			container: "domMap",
			center: [ 101.64641, 3.08713 ],
			zoom: 16
		});
		domStatusbar.innerHTML = 
			"Rendering (101.64641, 3.08713) in 'streets-vector'.";
	}
);

console.log("Reached end of main script.");