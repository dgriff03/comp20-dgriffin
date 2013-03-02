	var request;
	var

	function init()
			{
				// Faneuil Hall
				var landmark = new google.maps.LatLng(42.3599611, -71.0567528);

				// Set up map
				var myOptions = {
					zoom: 13, // The larger the zoom number, the bigger the zoom
					center: landmark,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				// Create the map in the "map_canvas" <div>
				var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

				// Create a marker				
				var marker = new google.maps.Marker({
					position: landmark,
					title: "Faneuil Hall, Boston, MA"
				});
				marker.setMap(map);

				// This is a global info window...
				var infowindow = new google.maps.InfoWindow();

				// Open info window on click of marker
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(marker.title);
					infowindow.open(map, marker);
				});
			}
			
	function get_trains(){
		request = new XMLHttpRequest();
		request.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json", true);
		request.send(null);
		request.onreadystatechange = callback(true);
	}
		
	function callback(trains) {
        if (request.readyState == 4 && request.status == 200) {
			if(trains){
				parse_trains();
			}
			if(!trains){
				parse_stops();
			}
        }
    }
	
	function parse_trains(){
		var str = request.responseText;
		trains = JSON.parse(str);
		num_trains = trains.length;
		add_trains();
	}
	
	function add_trains(){
	
	}

	function get_stops(){
		request_stops = new XMLHttpRequest();
		request_stops.open("GET","/red_stops.json",false);
		request_stops.send(null);
		request_stops.onreadystatechange = callback(false);
	}
	
	function parse_stops(){
		var str = request_stops.responseText;
		stop_info = JSON.parse(str);
		num_stops = stop_info.length;
		add_stops();
	}
	
	function add_stops(){
		stops = new Array();
		var location
		for(int i = 0; i < num_stops;i++){
				location = new Object();
				location.Key = stop_info[i].PlatformKey;
				location.Station = stop_info[i].StationName;
				location.Order = stop_info[i].PlatformOrder;
				location.Start = stop_info[i].StartOfLine;
				location.end = stop_info[i].EndOfLine;
				location.Branch = stop_info[i].Branch;
				location.Direction = stop_info[i].Direction;
				location.name = stop_info[i].stop_name;
				location.lat = stop_info[i].stop_lat;
				location.lon = stop_info[i].stop_lon;
				stops[i] = location;
		}
		plot_stops();
	}
	
	function plot_stops(){
	
	
	
	}
	