function initMap() {
	L.mapquest.key = 'XOTu1o24a9ocaW8xHwNj5ffbEqPvGXgG';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	L.marker([32.88, -117.236], {
		icon: L.mapquest.icons.marker(),
		draggable: false
	  }).bindPopup('UCSD').addTo(map);
}