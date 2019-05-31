jQuery(document).foundation();
jQuery(document).ready(function(){

	// ----------------------------------------
	// Cookie Bar
	// ----------------------------------------
	$.cookieBar({
		message: "Cliccando sul bottone, l’utente accetta l’utilizzo dei cookie di terze parti. Per maggiori informazioni, anche in ordine alla disattivazione, è possibile consultare l'<a class='cookie-link-2' href='/cookie.html'>informativa cookie completa</a>.",
		acceptText: 'Accetto',
		fixed: true,
		bottom: true
	});

	// ----------------------------------------
	// Sticky Header
	// ----------------------------------------
	$("header").sticky({topSpacing:0});

	// ----------------------------------------
	// Navigation Menu
	// ----------------------------------------
	jQuery('.mobile--menu').on('click', function() {
		jQuery('.mobile--navigation').toggleClass('is--open');
		jQuery('.mobile--menu').toggleClass('shrink');
	});

	// ----------------------------------------
	// Scroll to div
	// ----------------------------------------
	jQuery(document).on('click', 'header a[href^="#"]', function(e) {
		// target element id
		var id = jQuery(this).attr('href');
		// target element
		var jQueryid = jQuery(id);
		if (jQueryid.length === 0) {
			return;
		}
		// prevent standard hash navigation (avoid blinking in IE)
		e.preventDefault();
		// top position relative to the document
		var pos = jQueryid.offset().top - 100;
		// animated top scrolling
		jQuery('body, html').animate({scrollTop: pos});
	});

	// ----------------------------------------
	// Google Maps
	// ----------------------------------------
	function initialize(){
		var locations = [
		['Bo.Bo Bistrot', 41.873912, 12.493359, 1]
		];

		var map = new google.maps.Map(document.getElementById('map-bbb'), {
			zoom: 14,
			center: new google.maps.LatLng(41.873912, 12.493359),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
          	scrollwheel: false,
          	styles: [
          	{
          		"featureType": "all",
          		"elementType": "all",
          		"stylers": [
          		{
          			"color": "#ff7000"
          		},
          		{
          			"lightness": "69"
          		},
          		{
          			"saturation": "100"
          		},
          		{
          			"weight": "1.17"
          		},
          		{
          			"gamma": "2.04"
          		}
          		]
          	},
          	{
          		"featureType": "all",
          		"elementType": "geometry",
          		"stylers": [
          		{
          			"color": "#cb8536"
          		}
          		]
          	},
          	{
          		"featureType": "all",
          		"elementType": "labels",
          		"stylers": [
          		{
          			"color": "#ffb471"
          		},
          		{
          			"lightness": "66"
          		},
          		{
          			"saturation": "100"
          		}
          		]
          	},
          	{
          		"featureType": "all",
          		"elementType": "labels.text.fill",
          		"stylers": [
          		{
          			"gamma": 0.01
          		},
          		{
          			"lightness": 20
          		}
          		]
          	},
          	{
          		"featureType": "all",
          		"elementType": "labels.text.stroke",
          		"stylers": [
          		{
          			"saturation": -31
          		},
          		{
          			"lightness": -33
          		},
          		{
          			"weight": 2
          		},
          		{
          			"gamma": 0.8
          		}
          		]
          	},
          	{
          		"featureType": "all",
          		"elementType": "labels.icon",
          		"stylers": [
          		{
          			"visibility": "off"
          		}
          		]
          	},
          	{
          		"featureType": "landscape",
          		"elementType": "all",
          		"stylers": [
          		{
          			"lightness": "-8"
          		},
          		{
          			"gamma": "0.98"
          		},
          		{
          			"weight": "2.45"
          		},
          		{
          			"saturation": "26"
          		}
          		]
          	},
          	{
          		"featureType": "landscape",
          		"elementType": "geometry",
          		"stylers": [
          		{
          			"lightness": 30
          		},
          		{
          			"saturation": 30
          		}
          		]
          	},
          	{
          		"featureType": "poi",
          		"elementType": "geometry",
          		"stylers": [
          		{
          			"saturation": 20
          		}
          		]
          	},
          	{
          		"featureType": "poi.park",
          		"elementType": "geometry",
          		"stylers": [
          		{
          			"lightness": 20
          		},
          		{
          			"saturation": -20
          		}
          		]
          	},
          	{
          		"featureType": "road",
          		"elementType": "geometry",
          		"stylers": [
          		{
          			"lightness": 10
          		},
          		{
          			"saturation": -30
          		}
          		]
          	},
          	{
          		"featureType": "road",
          		"elementType": "geometry.stroke",
          		"stylers": [
          		{
          			"saturation": 25
          		},
          		{
          			"lightness": 25
          		}
          		]
          	},
          	{
          		"featureType": "water",
          		"elementType": "all",
          		"stylers": [
          		{
          			"lightness": -20
          		},
          		{
          			"color": "#ecc080"
          		}
          		]
          	}
          	]
		});

		var infowindow = new google.maps.InfoWindow();

		var marker, i;


		var baseUrl = "https://www.google.com/maps/search/";

		for (i = 0; i < locations.length; i++) {


			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				map: map,
				url: baseUrl + locations[i][1] + ',' + locations[i][2]
			});


			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
					infowindow.setContent("<strong>" + locations[i][0] + "</strong><br>" + "<a href='" + marker.url + "' target='_blank'>Come raggiungerci</a>");
					infowindow.open(map, marker);
				}
			})(marker, i));
		}
	}

	if($('#cookie-bar').length) {
		$('.cb-enable').on('click', initialize);
	} else {
		initialize();
	}

});

$(window).on('load', function(){
	$.instagramFeed({
		// 'cors_proxy': "https://cors-anywhere.herokuapp.com/https://www.instagram.com/",
		'username': 'casadeljazz',
		'container': "#instagram--feed",
		'display_profile': false,
		'display_biography': false,
		'display_gallery': true,
		'get_raw_json': false,
		'callback': null,
		'styling': false,
		'items': 12,
		'items_per_row': 4,
		'margin': 1
	});
});