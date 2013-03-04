	var request;
	var	stop_info = [	{"Line": "Red", 		"PlatformKey": "RALEN", 		"PlatformName": "ALEWIFE NB", 		"StationName": "ALEWIFE", 		"PlatformOrder": "17", 		"StartOfLine": "FALSE", 		"EndOfLine": "TRUE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-alfcl", 		"stop_code": "", 		"stop_name": "Alewife Station", 		"stop_desc": "", 		"stop_lat": "42.395428", 		"stop_lon": "-71.142483" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RDAVN", 		"PlatformName": "DAVIS NB", 		"StationName": "DAVIS", 		"PlatformOrder": "16", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-davis", 		"stop_code": "", 		"stop_name": "Davis Station", 		"stop_desc": "", 		"stop_lat": "42.39674", 		"stop_lon": "-71.121815" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RDAVS", 		"PlatformName": "DAVIS SB", 		"StationName": "DAVIS", 		"PlatformOrder": "1", 		"StartOfLine": "TRUE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-davis", 		"stop_code": "", 		"stop_name": "Davis Station", 		"stop_desc": "", 		"stop_lat": "42.39674", 		"stop_lon": "-71.121815" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RPORN", 		"PlatformName": "PORTER NB", 		"StationName": "PORTER", 		"PlatformOrder": "15", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-portr", 		"stop_code": "", 		"stop_name": "Porter Square Station", 		"stop_desc": "", 		"stop_lat": "42.3884", 		"stop_lon": "-71.119149" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RPORS", 		"PlatformName": "PORTER SB", 		"StationName": "PORTER", 		"PlatformOrder": "2", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-portr", 		"stop_code": "", 		"stop_name": "Porter Square Station", 		"stop_desc": "", 		"stop_lat": "42.3884", 		"stop_lon": "-71.119149" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RHARN", 		"PlatformName": "HARVARD NB", 		"StationName": "HARVARD", 		"PlatformOrder": "14", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-harsq", 		"stop_code": "", 		"stop_name": "Harvard Square Station", 		"stop_desc": "", 		"stop_lat": "42.373362", 		"stop_lon": "-71.118956" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RHARS", 		"PlatformName": "HARVARD SB", 		"StationName": "HARVARD", 		"PlatformOrder": "3", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-harsq", 		"stop_code": "", 		"stop_name": "Harvard Square Station", 		"stop_desc": "", 		"stop_lat": "42.373362", 		"stop_lon": "-71.118956" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RCENN", 		"PlatformName": "CENTRAL NB", 		"StationName": "CENTRAL", 		"PlatformOrder": "13", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-cntsq", 		"stop_code": "", 		"stop_name": "Central Square Station", 		"stop_desc": "", 		"stop_lat": "42.365486", 		"stop_lon": "-71.103802" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RCENS", 		"PlatformName": "CENTRAL SB", 		"StationName": "CENTRAL", 		"PlatformOrder": "4", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-cntsq", 		"stop_code": "", 		"stop_name": "Central Square Station", 		"stop_desc": "", 		"stop_lat": "42.365486", 		"stop_lon": "-71.103802" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RKENN", 		"PlatformName": "KENDALL NB", 		"StationName": "KENDALL", 		"PlatformOrder": "12", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-knncl", 		"stop_code": "", 		"stop_name": "Kendall/MIT Station", 		"stop_desc": "", 		"stop_lat": "42.36249079", 		"stop_lon": "-71.08617653" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RKENS", 		"PlatformName": "KENDALL SB", 		"StationName": "KENDALL", 		"PlatformOrder": "5", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-knncl", 		"stop_code": "", 		"stop_name": "Kendall/MIT Station", 		"stop_desc": "", 		"stop_lat": "42.36249079", 		"stop_lon": "-71.08617653" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RMGHN", 		"PlatformName": "CHARLES MGH NB", 		"StationName": "CHARLES MGH", 		"PlatformOrder": "11", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-chmnl", 		"stop_code": "", 		"stop_name": "Charles/MGH Station", 		"stop_desc": "", 		"stop_lat": "42.361166", 		"stop_lon": "-71.070628" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RMGHS", 		"PlatformName": "CHARLES MGH SB", 		"StationName": "CHARLES MGH", 		"PlatformOrder": "6", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-chmnl", 		"stop_code": "", 		"stop_name": "Charles/MGH Station", 		"stop_desc": "", 		"stop_lat": "42.361166", 		"stop_lon": "-71.070628" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RPRKN", 		"PlatformName": "PARK NB", 		"StationName": "PARK", 		"PlatformOrder": "10", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-pktrm", 		"stop_code": "", 		"stop_name": "Park St. Station", 		"stop_desc": "", 		"stop_lat": "42.35639457", 		"stop_lon": "-71.0624242" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RPRKS", 		"PlatformName": "PARK SB", 		"StationName": "PARK", 		"PlatformOrder": "7", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-pktrm", 		"stop_code": "", 		"stop_name": "Park St. Station", 		"stop_desc": "", 		"stop_lat": "42.35639457", 		"stop_lon": "-71.0624242" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RDTCN", 		"PlatformName": "DOWNTOWN CROSSING NB", 		"StationName": "DOWNTOWN CROSSING", 		"PlatformOrder": "9", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-dwnxg", 		"stop_code": "", 		"stop_name": "Downtown Crossing Station", 		"stop_desc": "", 		"stop_lat": "42.355518", 		"stop_lon": "-71.060225" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RDTCS", 		"PlatformName": "DOWNTOWN CROSSING SB", 		"StationName": "DOWNTOWN CROSSING", 		"PlatformOrder": "8", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-dwnxg", 		"stop_code": "", 		"stop_name": "Downtown Crossing Station", 		"stop_desc": "", 		"stop_lat": "42.355518", 		"stop_lon": "-71.060225" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RSOUN", 		"PlatformName": "SOUTH STATION NB", 		"StationName": "SOUTH STATION", 		"PlatformOrder": "8", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-sstat", 		"stop_code": "", 		"stop_name": "South Station", 		"stop_desc": "", 		"stop_lat": "42.352271", 		"stop_lon": "-71.055242" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RSOUS", 		"PlatformName": "SOUTH STATION SB", 		"StationName": "SOUTH STATION", 		"PlatformOrder": "9", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-sstat", 		"stop_code": "", 		"stop_name": "South Station", 		"stop_desc": "", 		"stop_lat": "42.352271", 		"stop_lon": "-71.055242" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RBRON", 		"PlatformName": "BROADWAY NB", 		"StationName": "BROADWAY", 		"PlatformOrder": "7", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-brdwy", 		"stop_code": "", 		"stop_name": "Broadway Station", 		"stop_desc": "", 		"stop_lat": "42.342622", 		"stop_lon": "-71.056967" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RBROS", 		"PlatformName": "BROADWAY SB", 		"StationName": "BROADWAY", 		"PlatformOrder": "10", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-brdwy", 		"stop_code": "", 		"stop_name": "Broadway Station", 		"stop_desc": "", 		"stop_lat": "42.342622", 		"stop_lon": "-71.056967" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RANDN", 		"PlatformName": "ANDREW NB", 		"StationName": "ANDREW", 		"PlatformOrder": "6", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-andrw", 		"stop_code": "", 		"stop_name": "Andrew Station", 		"stop_desc": "", 		"stop_lat": "42.330154", 		"stop_lon": "-71.057655" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RANDS", 		"PlatformName": "ANDREW SB", 		"StationName": "ANDREW", 		"PlatformOrder": "11", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-andrw", 		"stop_code": "", 		"stop_name": "Andrew Station", 		"stop_desc": "", 		"stop_lat": "42.330154", 		"stop_lon": "-71.057655" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RJFKN", 		"PlatformName": "JFK NB", 		"StationName": "JFK", 		"PlatformOrder": "5", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-jfkred", 		"stop_code": "", 		"stop_name": "JFK/UMass Station", 		"stop_desc": "", 		"stop_lat": "42.320685", 		"stop_lon": "-71.052391" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RJFKS", 		"PlatformName": "JFK SB", 		"StationName": "JFK", 		"PlatformOrder": "12", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-jfkred", 		"stop_code": "", 		"stop_name": "JFK/UMass Station", 		"stop_desc": "", 		"stop_lat": "42.320685", 		"stop_lon": "-71.052391" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RSAVN", 		"PlatformName": "SAVIN HILL NB", 		"StationName": "SAVIN HILL", 		"PlatformOrder": "4", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Ashmont", 		"Direction": "NB", 		"stop_id": "place-shmnl", 		"stop_code": "", 		"stop_name": "Savin Hill Station", 		"stop_desc": "", 		"stop_lat": "42.31129", 		"stop_lon": "-71.053331" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RSAVS", 		"PlatformName": "SAVIN HILL SB", 		"StationName": "SAVIN HILL", 		"PlatformOrder": "13", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Ashmont", 		"Direction": "SB", 		"stop_id": "place-shmnl", 		"stop_code": "", 		"stop_name": "Savin Hill Station", 		"stop_desc": "", 		"stop_lat": "42.31129", 		"stop_lon": "-71.053331" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RFIEN", 		"PlatformName": "FIELDS CORNER NB", 		"StationName": "FIELDS CORNER", 		"PlatformOrder": "3", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Ashmont", 		"Direction": "NB", 		"stop_id": "place-fldcr", 		"stop_code": "", 		"stop_name": "Fields Corner Station", 		"stop_desc": "", 		"stop_lat": "42.300093", 		"stop_lon": "-71.061667" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RFIES", 		"PlatformName": "FIELDS CORNER SB", 		"StationName": "FIELDS CORNER", 		"PlatformOrder": "14", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Ashmont", 		"Direction": "SB", 		"stop_id": "place-fldcr", 		"stop_code": "", 		"stop_name": "Fields Corner Station", 		"stop_desc": "", 		"stop_lat": "42.300093", 		"stop_lon": "-71.061667" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RSHAN", 		"PlatformName": "SHAWMUT NB", 		"StationName": "SHAWMUT", 		"PlatformOrder": "2", 		"StartOfLine": "TRUE", 		"EndOfLine": "FALSE", 		"Branch": "Ashmont", 		"Direction": "NB", 		"stop_id": "place-smmnl", 		"stop_code": "", 		"stop_name": "Shawmut Station", 		"stop_desc": "", 		"stop_lat": "42.29312583", 		"stop_lon": "-71.06573796" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RSHAS", 		"PlatformName": "SHAWMUT SB", 		"StationName": "SHAWMUT", 		"PlatformOrder": "15", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Ashmont", 		"Direction": "SB", 		"stop_id": "place-smmnl", 		"stop_code": "", 		"stop_name": "Shawmut Station", 		"stop_desc": "", 		"stop_lat": "42.29312583", 		"stop_lon": "-71.06573796" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RASHS", 		"PlatformName": "ASHMONT SB", 		"StationName": "ASHMONT", 		"PlatformOrder": "16", 		"StartOfLine": "FALSE", 		"EndOfLine": "TRUE", 		"Branch": "Ashmont", 		"Direction": "SB", 		"stop_id": "place-asmnl", 		"stop_code": "", 		"stop_name": "Ashmont Station", 		"stop_desc": "", 		"stop_lat": "42.284652", 		"stop_lon": "-71.064489" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RNQUN", 		"PlatformName": "NORTH QUINCY NB", 		"StationName": "NORTH QUINCY", 		"PlatformOrder": "4", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Braintree", 		"Direction": "NB", 		"stop_id": "place-nqncy", 		"stop_code": "", 		"stop_name": "North Quincy Station", 		"stop_desc": "", 		"stop_lat": "42.275275", 		"stop_lon": "-71.029583" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RNQUS", 		"PlatformName": "NORTH QUINCY SB", 		"StationName": "NORTH QUINCY", 		"PlatformOrder": "13", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Braintree", 		"Direction": "SB", 		"stop_id": "place-nqncy", 		"stop_code": "", 		"stop_name": "North Quincy Station", 		"stop_desc": "", 		"stop_lat": "42.275275", 		"stop_lon": "-71.029583" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RWOLN", 		"PlatformName": "WOLLASTON NB", 		"StationName": "WOLLASTON", 		"PlatformOrder": "3", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Braintree", 		"Direction": "NB", 		"stop_id": "place-wlsta", 		"stop_code": "", 		"stop_name": "Wollaston Station", 		"stop_desc": "", 		"stop_lat": "42.2665139", 		"stop_lon": "-71.0203369" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RWOLS", 		"PlatformName": "WOLLASTON SB", 		"StationName": "WOLLASTON", 		"PlatformOrder": "14", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Braintree", 		"Direction": "SB", 		"stop_id": "place-wlsta", 		"stop_code": "", 		"stop_name": "Wollaston Station", 		"stop_desc": "", 		"stop_lat": "42.2665139", 		"stop_lon": "-71.0203369" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RQUCN", 		"PlatformName": "QUINCY CENTER NB", 		"StationName": "QUINCY CENTER", 		"PlatformOrder": "2", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Braintree", 		"Direction": "NB", 		"stop_id": "place-qnctr", 		"stop_code": "", 		"stop_name": "Quincy Center Station", 		"stop_desc": "", 		"stop_lat": "42.251809", 		"stop_lon": "-71.005409" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RQUCS", 		"PlatformName": "QUINCY CENTER SB", 		"StationName": "QUINCY CENTER", 		"PlatformOrder": "15", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Braintree", 		"Direction": "SB", 		"stop_id": "place-qnctr", 		"stop_code": "", 		"stop_name": "Quincy Center Station", 		"stop_desc": "", 		"stop_lat": "42.251809", 		"stop_lon": "-71.005409" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RQUAN", 		"PlatformName": "QUINCY ADAMS NB", 		"StationName": "QUINCY ADAMS", 		"PlatformOrder": "1", 		"StartOfLine": "TRUE", 		"EndOfLine": "FALSE", 		"Branch": "Braintree", 		"Direction": "NB", 		"stop_id": "place-qamnl", 		"stop_code": "", 		"stop_name": "Quincy Adams Station", 		"stop_desc": "", 		"stop_lat": "42.233391", 		"stop_lon": "-71.007153" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RQUAS", 		"PlatformName": "QUINCY ADAMS SB", 		"StationName": "QUINCY ADAMS", 		"PlatformOrder": "16", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Braintree", 		"Direction": "SB", 		"stop_id": "place-qamnl", 		"stop_code": "", 		"stop_name": "Quincy Adams Station", 		"stop_desc": "", 		"stop_lat": "42.233391", 		"stop_lon": "-71.007153" 	}, 	{ 		"Line": "Red", 		"PlatformKey": "RBRAS", 		"PlatformName": "BRAINTREE SB", 		"StationName": "BRAINTREE", 		"PlatformOrder": "17", 		"StartOfLine": "FALSE", 		"EndOfLine": "TRUE", 		"Branch": "Braintree", 		"Direction": "SB", 		"stop_id": "place-brntn", 		"stop_code": "", 		"stop_name": "Braintree Station", 		"stop_desc": "", 		"stop_lat": "42.2078543", 		"stop_lon": "-71.0011385" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OOAKN", 		"PlatformName": "OAK GROVE NB", 		"StationName": "OAK GROVE", 		"PlatformOrder": "18", 		"StartOfLine": "FALSE", 		"EndOfLine": "TRUE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-ogmnl", 		"stop_code": "", 		"stop_name": "Oak Grove Station", 		"stop_desc": "", 		"stop_lat": "42.43668", 		"stop_lon": "-71.071097" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OMALN", 		"PlatformName": "MALDEN NB", 		"StationName": "MALDEN", 		"PlatformOrder": "17", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-mlmnl", 		"stop_code": "", 		"stop_name": "Malden Center Station", 		"stop_desc": "", 		"stop_lat": "42.426632", 		"stop_lon": "-71.07411" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OMALS", 		"PlatformName": "MALDEN SB", 		"StationName": "MALDEN", 		"PlatformOrder": "1", 		"StartOfLine": "TRUE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-mlmnl", 		"stop_code": "", 		"stop_name": "Malden Center Station", 		"stop_desc": "", 		"stop_lat": "42.426632", 		"stop_lon": "-71.07411" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OWELN", 		"PlatformName": "WELLINGTON NB", 		"StationName": "WELLINGTON", 		"PlatformOrder": "16", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-welln", 		"stop_code": "", 		"stop_name": "Wellington Station", 		"stop_desc": "", 		"stop_lat": "42.40237", 		"stop_lon": "-71.077082" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OWELS", 		"PlatformName": "WELLINGTON SB", 		"StationName": "WELLINGTON", 		"PlatformOrder": "2", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-welln", 		"stop_code": "", 		"stop_name": "Wellington Station", 		"stop_desc": "", 		"stop_lat": "42.40237", 		"stop_lon": "-71.077082" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OSULN", 		"PlatformName": "SULLIVAN NB", 		"StationName": "SULLIVAN", 		"PlatformOrder": "15", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-sull", 		"stop_code": "", 		"stop_name": "Sullivan Station", 		"stop_desc": "", 		"stop_lat": "42.383975", 		"stop_lon": "-71.076994" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OSULS", 		"PlatformName": "SULLIVAN SB", 		"StationName": "SULLIVAN", 		"PlatformOrder": "3", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-sull", 		"stop_code": "", 		"stop_name": "Sullivan Station", 		"stop_desc": "", 		"stop_lat": "42.383975", 		"stop_lon": "-71.076994" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OCOMN", 		"PlatformName": "COMMUNITY NB", 		"StationName": "COMMUNITY", 		"PlatformOrder": "14", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-ccmnl", 		"stop_code": "", 		"stop_name": "Community College Station", 		"stop_desc": "", 		"stop_lat": "42.373622", 		"stop_lon": "-71.069533" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OCOMS", 		"PlatformName": "COMMUNITY SB", 		"StationName": "COMMUNITY", 		"PlatformOrder": "4", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-ccmnl", 		"stop_code": "", 		"stop_name": "Community College Station", 		"stop_desc": "", 		"stop_lat": "42.373622", 		"stop_lon": "-71.069533" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "ONSTN", 		"PlatformName": "NORTH STATION NB", 		"StationName": "NORTH STATION", 		"PlatformOrder": "13", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-north", 		"stop_code": "", 		"stop_name": "North Station", 		"stop_desc": "", 		"stop_lat": "42.365577", 		"stop_lon": "-71.06129" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "ONSTS", 		"PlatformName": "NORTH STATION SB", 		"StationName": "NORTH STATION", 		"PlatformOrder": "5", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-north", 		"stop_code": "", 		"stop_name": "North Station", 		"stop_desc": "", 		"stop_lat": "42.365577", 		"stop_lon": "-71.06129" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OHAYN", 		"PlatformName": "HAYMARKET NB", 		"StationName": "HAYMARKET", 		"PlatformOrder": "12", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-haecl", 		"stop_code": "", 		"stop_name": "Haymarket Station", 		"stop_desc": "", 		"stop_lat": "42.363021", 		"stop_lon": "-71.05829" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OHAYS", 		"PlatformName": "HAYMARKET SB", 		"StationName": "HAYMARKET", 		"PlatformOrder": "6", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-haecl", 		"stop_code": "", 		"stop_name": "Haymarket Station", 		"stop_desc": "", 		"stop_lat": "42.363021", 		"stop_lon": "-71.05829" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OSTNN", 		"PlatformName": "STATE NB", 		"StationName": "STATE", 		"PlatformOrder": "11", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-state", 		"stop_code": "", 		"stop_name": "State St. Station", 		"stop_desc": "", 		"stop_lat": "42.358978", 		"stop_lon": "-71.057598" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OSTSS", 		"PlatformName": "STATE SB", 		"StationName": "STATE", 		"PlatformOrder": "7", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-state", 		"stop_code": "", 		"stop_name": "State St. Station", 		"stop_desc": "", 		"stop_lat": "42.358978", 		"stop_lon": "-71.057598" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "ODTNN", 		"PlatformName": "DOWNTOWN CROSSING NB", 		"StationName": "DOWNTOWN CROSSING", 		"PlatformOrder": "10", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-dwnxg", 		"stop_code": "", 		"stop_name": "Downtown Crossing Station", 		"stop_desc": "", 		"stop_lat": "42.355518", 		"stop_lon": "-71.060225" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "ODTSS", 		"PlatformName": "DOWNTOWN CROSSING SB", 		"StationName": "DOWNTOWN CROSSING", 		"PlatformOrder": "8", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-dwnxg", 		"stop_code": "", 		"stop_name": "Downtown Crossing Station", 		"stop_desc": "", 		"stop_lat": "42.355518", 		"stop_lon": "-71.060225" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OCHNN", 		"PlatformName": "CHINATOWN NB", 		"StationName": "CHINATOWN", 		"PlatformOrder": "9", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-chncl", 		"stop_code": "", 		"stop_name": "Chinatown Station", 		"stop_desc": "", 		"stop_lat": "42.352547", 		"stop_lon": "-71.062752" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OCHSS", 		"PlatformName": "CHINATOWN SB", 		"StationName": "CHINATOWN", 		"PlatformOrder": "9", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-chncl", 		"stop_code": "", 		"stop_name": "Chinatown Station", 		"stop_desc": "", 		"stop_lat": "42.352547", 		"stop_lon": "-71.062752" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "ONEMN", 		"PlatformName": "TUFTS MEDICAL CENTER NB", 		"StationName": "TUFTS MEDICAL CENTER", 		"PlatformOrder": "8", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-nemnl", 		"stop_code": "", 		"stop_name": "Tufts Medical Center Station", 		"stop_desc": "", 		"stop_lat": "42.349662", 		"stop_lon": "-71.063917" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "ONEMS", 		"PlatformName": "TUFTS MEDICAL CENTER SB", 		"StationName": "TUFTS MEDICAL CENTER", 		"PlatformOrder": "10", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-nemnl", 		"stop_code": "", 		"stop_name": "Tufts Medical Center Station", 		"stop_desc": "", 		"stop_lat": "42.349662", 		"stop_lon": "-71.063917" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OBACN", 		"PlatformName": "BACK BAY NB", 		"StationName": "BACK BAY", 		"PlatformOrder": "7", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-bbsta", 		"stop_code": "", 		"stop_name": "Back Bay Station", 		"stop_desc": "", 		"stop_lat": "42.34735", 		"stop_lon": "-71.075727" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OBACS", 		"PlatformName": "BACK BAY SB", 		"StationName": "BACK BAY", 		"PlatformOrder": "11", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-bbsta", 		"stop_code": "", 		"stop_name": "Back Bay Station", 		"stop_desc": "", 		"stop_lat": "42.34735", 		"stop_lon": "-71.075727" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OMASN", 		"PlatformName": "MASS AVE NB", 		"StationName": "MASS AVE", 		"PlatformOrder": "6", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-masta", 		"stop_code": "", 		"stop_name": "Massachusetts Ave. Station", 		"stop_desc": "", 		"stop_lat": "42.341512", 		"stop_lon": "-71.083423" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OMASS", 		"PlatformName": "MASS AVE SB", 		"StationName": "MASS AVE", 		"PlatformOrder": "12", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-masta", 		"stop_code": "", 		"stop_name": "Massachusetts Ave. Station", 		"stop_desc": "", 		"stop_lat": "42.341512", 		"stop_lon": "-71.083423" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "ORUGN", 		"PlatformName": "RUGGLES NB", 		"StationName": "RUGGLES", 		"PlatformOrder": "5", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-rugg", 		"stop_code": "", 		"stop_name": "Ruggles Station", 		"stop_desc": "", 		"stop_lat": "42.336377", 		"stop_lon": "-71.088961" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "ORUGS", 		"PlatformName": "RUGGLES SB", 		"StationName": "RUGGLES", 		"PlatformOrder": "13", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-rugg", 		"stop_code": "", 		"stop_name": "Ruggles Station", 		"stop_desc": "", 		"stop_lat": "42.336377", 		"stop_lon": "-71.088961" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OROXN", 		"PlatformName": "ROXBURY NB", 		"StationName": "ROXBURY", 		"PlatformOrder": "4", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-rcmnl", 		"stop_code": "", 		"stop_name": "Roxbury Crossing Station", 		"stop_desc": "", 		"stop_lat": "42.331397", 		"stop_lon": "-71.095451" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OROXS", 		"PlatformName": "ROXBURY SB", 		"StationName": "ROXBURY", 		"PlatformOrder": "14", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-rcmnl", 		"stop_code": "", 		"stop_name": "Roxbury Crossing Station", 		"stop_desc": "", 		"stop_lat": "42.331397", 		"stop_lon": "-71.095451" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OJACN", 		"PlatformName": "JACKSON NB", 		"StationName": "JACKSON", 		"PlatformOrder": "3", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-jaksn", 		"stop_code": "", 		"stop_name": "Jackson Square Station", 		"stop_desc": "", 		"stop_lat": "42.323132", 		"stop_lon": "-71.099592" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OJACS", 		"PlatformName": "JACKSON SB", 		"StationName": "JACKSON", 		"PlatformOrder": "15", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-jaksn", 		"stop_code": "", 		"stop_name": "Jackson Square Station", 		"stop_desc": "", 		"stop_lat": "42.323132", 		"stop_lon": "-71.099592" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OSTON", 		"PlatformName": "STONY BROOK NB", 		"StationName": "STONY BROOK", 		"PlatformOrder": "2", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-sbmnl", 		"stop_code": "", 		"stop_name": "Stony Brook Station", 		"stop_desc": "", 		"stop_lat": "42.317062", 		"stop_lon": "-71.104248" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OSTOS", 		"PlatformName": "STONY BROOK SB", 		"StationName": "STONY BROOK", 		"PlatformOrder": "16", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-sbmnl", 		"stop_code": "", 		"stop_name": "Stony Brook Station", 		"stop_desc": "", 		"stop_lat": "42.317062", 		"stop_lon": "-71.104248" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OGREN", 		"PlatformName": "GREEN STREET NB", 		"StationName": "GREEN STREET", 		"PlatformOrder": "1", 		"StartOfLine": "TRUE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "NB", 		"stop_id": "place-grnst", 		"stop_code": "", 		"stop_name": "Green St. Station", 		"stop_desc": "", 		"stop_lat": "42.310525", 		"stop_lon": "-71.107414" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OGRES", 		"PlatformName": "GREEN STREET SB", 		"StationName": "GREEN STREET", 		"PlatformOrder": "17", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-grnst", 		"stop_code": "", 		"stop_name": "Green St. Station", 		"stop_desc": "", 		"stop_lat": "42.310525", 		"stop_lon": "-71.107414" 	}, 	{ 		"Line": "Orange", 		"PlatformKey": "OFORS", 		"PlatformName": "FOREST HILLS SB", 		"StationName": "FOREST HILLS", 		"PlatformOrder": "18", 		"StartOfLine": "FALSE", 		"EndOfLine": "TRUE", 		"Branch": "Trunk", 		"Direction": "SB", 		"stop_id": "place-forhl", 		"stop_code": "", 		"stop_name": "Forest Hills Station", 		"stop_desc": "", 		"stop_lat": "42.300523", 		"stop_lon": "-71.113686" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BWONE", 		"PlatformName": "WONDERLAND EB", 		"StationName": "WONDERLAND", 		"PlatformOrder": "12", 		"StartOfLine": "FALSE", 		"EndOfLine": "TRUE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-wondl", 		"stop_code": "", 		"stop_name": "Wonderland Station", 		"stop_desc": "", 		"stop_lat": "42.41342", 		"stop_lon": "-70.991648" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BREVE", 		"PlatformName": "REVERE EB", 		"StationName": "REVERE", 		"PlatformOrder": "11", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-rbmnl", 		"stop_code": "", 		"stop_name": "Revere Beach Station", 		"stop_desc": "", 		"stop_lat": "42.40784254", 		"stop_lon": "-70.99253321" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BREVW", 		"PlatformName": "REVERE WB", 		"StationName": "REVERE", 		"PlatformOrder": "1", 		"StartOfLine": "TRUE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-rbmnl", 		"stop_code": "", 		"stop_name": "Revere Beach Station", 		"stop_desc": "", 		"stop_lat": "42.40784254", 		"stop_lon": "-70.99253321" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BBEAE", 		"PlatformName": "BEACHMONT EB", 		"StationName": "BEACHMONT", 		"PlatformOrder": "10", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-bmmnl", 		"stop_code": "", 		"stop_name": "Beachmont Station", 		"stop_desc": "", 		"stop_lat": "42.39754234", 		"stop_lon": "-70.99231944" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BBEAW", 		"PlatformName": "BEACHMONT WB", 		"StationName": "BEACHMONT", 		"PlatformOrder": "2", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-bmmnl", 		"stop_code": "", 		"stop_name": "Beachmont Station", 		"stop_desc": "", 		"stop_lat": "42.39754234", 		"stop_lon": "-70.99231944" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BSUFE", 		"PlatformName": "SUFFOLK DOWNS EB", 		"StationName": "SUFFOLK DOWNS", 		"PlatformOrder": "9", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-sdmnl", 		"stop_code": "", 		"stop_name": "Suffolk Downs Station", 		"stop_desc": "", 		"stop_lat": "42.39050067", 		"stop_lon": "-70.99712259" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BSUFW", 		"PlatformName": "SUFFOLK DOWNS WB", 		"StationName": "SUFFOLK DOWNS", 		"PlatformOrder": "3", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-sdmnl", 		"stop_code": "", 		"stop_name": "Suffolk Downs Station", 		"stop_desc": "", 		"stop_lat": "42.39050067", 		"stop_lon": "-70.99712259" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BORHE", 		"PlatformName": "ORIENT HEIGHTS EB", 		"StationName": "ORIENT HEIGHTS", 		"PlatformOrder": "8", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-orhte", 		"stop_code": "", 		"stop_name": "Orient Heights Station", 		"stop_desc": "", 		"stop_lat": "42.386867", 		"stop_lon": "-71.004736" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BORHW", 		"PlatformName": "ORIENT HEIGHTS WB", 		"StationName": "ORIENT HEIGHTS", 		"PlatformOrder": "4", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-orhte", 		"stop_code": "", 		"stop_name": "Orient Heights Station", 		"stop_desc": "", 		"stop_lat": "42.386867", 		"stop_lon": "-71.004736" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BWOOE", 		"PlatformName": "WOOD ISLAND EB", 		"StationName": "WOOD ISLAND", 		"PlatformOrder": "7", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-wimnl", 		"stop_code": "", 		"stop_name": "Wood Island Station", 		"stop_desc": "", 		"stop_lat": "42.3796403", 		"stop_lon": "-71.02286539" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BWOOW", 		"PlatformName": "WOOD ISLAND WB", 		"StationName": "WOOD ISLAND", 		"PlatformOrder": "5", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-wimnl", 		"stop_code": "", 		"stop_name": "Wood Island Station", 		"stop_desc": "", 		"stop_lat": "42.3796403", 		"stop_lon": "-71.02286539" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BAIRE", 		"PlatformName": "AIRPORT EB", 		"StationName": "AIRPORT", 		"PlatformOrder": "6", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-aport", 		"stop_code": "", 		"stop_name": "Airport Station", 		"stop_desc": "", 		"stop_lat": "42.374262", 		"stop_lon": "-71.030395" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BAIRW", 		"PlatformName": "AIRPORT WB", 		"StationName": "AIRPORT", 		"PlatformOrder": "6", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-aport", 		"stop_code": "", 		"stop_name": "Airport Station", 		"stop_desc": "", 		"stop_lat": "42.374262", 		"stop_lon": "-71.030395" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BMAVE", 		"PlatformName": "MAVERICK EB", 		"StationName": "MAVERICK", 		"PlatformOrder": "5", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-mvbcl", 		"stop_code": "", 		"stop_name": "Maverick Station", 		"stop_desc": "", 		"stop_lat": "42.36911856", 		"stop_lon": "-71.03952958" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BMAVW", 		"PlatformName": "MAVERICK WB", 		"StationName": "MAVERICK", 		"PlatformOrder": "7", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-mvbcl", 		"stop_code": "", 		"stop_name": "Maverick Station", 		"stop_desc": "", 		"stop_lat": "42.36911856", 		"stop_lon": "-71.03952958" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BAQUE", 		"PlatformName": "AQUARIUM EB", 		"StationName": "AQUARIUM", 		"PlatformOrder": "4", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-aqucl", 		"stop_code": "", 		"stop_name": "Aquarium Station", 		"stop_desc": "", 		"stop_lat": "42.359784", 		"stop_lon": "-71.051652" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BAQUW", 		"PlatformName": "AQUARIUM WB", 		"StationName": "AQUARIUM", 		"PlatformOrder": "8", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-aqucl", 		"stop_code": "", 		"stop_name": "Aquarium Station", 		"stop_desc": "", 		"stop_lat": "42.359784", 		"stop_lon": "-71.051652" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BSTAE", 		"PlatformName": "STATE EB", 		"StationName": "STATE", 		"PlatformOrder": "3", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-state", 		"stop_code": "", 		"stop_name": "State St. Station", 		"stop_desc": "", 		"stop_lat": "42.358978", 		"stop_lon": "-71.057598" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BSTAW", 		"PlatformName": "STATE WB", 		"StationName": "STATE", 		"PlatformOrder": "9", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-state", 		"stop_code": "", 		"stop_name": "State St. Station", 		"stop_desc": "", 		"stop_lat": "42.358978", 		"stop_lon": "-71.057598" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BGOVE", 		"PlatformName": "GOVERNMENT CENTER EB", 		"StationName": "GOVERNMENT CENTER", 		"PlatformOrder": "2", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-gover", 		"stop_code": "", 		"stop_name": "Government Center Station", 		"stop_desc": "", 		"stop_lat": "42.359705", 		"stop_lon": "-71.059215" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BGOVW", 		"PlatformName": "GOVERNMENT CENTER WB", 		"StationName": "GOVERNMENT CENTER", 		"PlatformOrder": "10", 		"StartOfLine": "FALSE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-gover", 		"stop_code": "", 		"stop_name": "Government Center Station", 		"stop_desc": "", 		"stop_lat": "42.359705", 		"stop_lon": "-71.059215" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BBOWE", 		"PlatformName": "BOWDOIN EB", 		"StationName": "BOWDOIN", 		"PlatformOrder": "1", 		"StartOfLine": "TRUE", 		"EndOfLine": "FALSE", 		"Branch": "Trunk", 		"Direction": "EB", 		"stop_id": "place-bomnl", 		"stop_code": "", 		"stop_name": "Bowdoin Station", 		"stop_desc": "", 		"stop_lat": "42.361365", 		"stop_lon": "-71.062037" 	}, 	{ 		"Line": "Blue", 		"PlatformKey": "BBOWW", 		"PlatformName": "BOWDOIN WB", 		"StationName": "BOWDOIN", 		"PlatformOrder": "11", 		"StartOfLine": "FALSE", 		"EndOfLine": "TRUE", 		"Branch": "Trunk", 		"Direction": "WB", 		"stop_id": "place-bomnl", 		"stop_code": "", 		"stop_name": "Bowdoin Station", 		"stop_desc": "", 		"stop_lat": "42.361365", 		"stop_lon": "-71.062037" 	} ];
	var stops = new Array();
	var num_stops;
	var map;
	var trains;
	

	function init(){
		var cent = my_location();
		var myOptions = {
			zoom: 14, // The larger the zoom number, the bigger the zoom
			center: cent,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		get_trains();		
	}

	
	function my_location(){
			mylat = "42.395428";
			mylon = "-71.142483";
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(){
				mylat = position.coords.latitude;
				mylon = position.coords.longitude;
			});
		}
		else{alert("Geolocation is not supported by this browser.");

			}
		return (new google.maps.LatLng(mylat,mylon));
  }
	
	
	function distance(lat2,lon2,lat1,lon1){
		Number.prototype.toRad = function() {
		return this * Math.PI / 180;
		}
	var R = 6371; // km
	var dLat = (lat2-lat1).toRad();
	var dLon = (lon2-lon1).toRad();
	var lat1 = lat1* Math.PI / 180;
	var lat2 = lat2* Math.PI / 180;

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;
	return d;
	}
	
	function shortest_distance(){
		var dist;
		var min_dist;
		var min_stat;
		var min_lon;
		var min_lat;
		dist = distance(stops[0].lan,stops[0].stop_lon,mylat,mylon);
		for(var i = 0; i < num_stops; i++){
			dist = distance(stops[i].lat,stops[i].lon,mylat,mylon);
			if(i == 0){ min_dist = dist; min_stat =  stops[i].Station; min_lon =stops[i].lon; min_lat = stops[i].lat }
			if(dist < min_dist){
				min_dist = dist;
				min_stat = stops[i].Station;
				min_lon =stops[i].lon;
				min_lat = stops[i].lat
			}
		}
		min_dist = min_dist * 0.621371;
		var message = "The closest T location is " + min_stat +
					" which is located approximately " + min_dist +
					" miles away";
		marker = new google.maps.Marker({	
			position: my_location(),
			title: "You",
		});
		marker.setMap(map);
		var infowindow = new google.maps.InfoWindow();
		infowindow.setContent(message);
		infowindow.open(map, marker); 
		connect_shortest(min_lat,min_lon);
	}

	function connect_shortest(lat,lon){
		var flightPlanCoordinates = [
			new google.maps.LatLng(lat,lon),
			new google.maps.LatLng(mylat,mylon)
			];
		var flightPath = new google.maps.Polyline({
			path: flightPlanCoordinates,
			strokeColor: "#000000",
			strokeOpacity: 1.0,
			strokeWeight: 2
			});
		flightPath.setMap(map);
		get_person();
	}
	
				
	function get_person(){
		sucessful= true;
		requestper = new XMLHttpRequest();
		requestper.open("GET", "http://messagehub.herokuapp.com/a3.json", true);			
		requestper.send(null);
		requestper.onreadystatechange = callbackperson;
		
	}
	
	function callbackperson() {
		if(requestper.status == 0){sucssful = false;}
        if (requestper.readyState == 4 && requestper.status == 200) {
			var str = requestper.responseText;
			person = JSON.parse(str);
			plot_person(person);
        }
    }
	
function plot_person(person){
			var wal = 'wal.png';
			var car = 'car.png';
			var message;
			for(i in person){
				if(person[i].name == "Waldo"){
				waldo = new google.maps.LatLng(person[i].loc.latitude, person[i].loc.longitude);
				marker = new google.maps.Marker({	
				position: waldo,
				title: "Waldo",
				icon:wal,
				dist:distance(person[i].loc.latitude, person[i].loc.longitude,mylat,mylon)
				});
				marker.setMap(map);
				google.maps.event.addListener(marker, 'click', function(){
				message = this.title + ": " +this.dist;
				var infowindow = new google.maps.InfoWindow();
				infowindow.setContent(message);
				infowindow.open(map, this);}); 
				}
				if(person[i].name == "Carmen Sandiego"){
				carmen = new google.maps.LatLng(person[i].loc.latitude, person[i].loc.longitude);
				marker = new google.maps.Marker({	
				position: carmen,
				title: "Carmen",
				icon:car,
				dist:distance(person[i].loc.latitude, person[i].loc.longitude,mylat,mylon)
				});
				marker.setMap(map);
				google.maps.event.addListener(marker, 'click', function(){
				message = this.title + ": " +this.dist;
				var infowindow = new google.maps.InfoWindow();
				infowindow.setContent(message);
				infowindow.open(map, this);}); 
				}	
			}
}				


	function get_trains(){
		request = new XMLHttpRequest();
		request.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json", true);
		request.send(null);
		request.onreadystatechange = callback;
	}
		
	function callback() {
        if (request.readyState == 4 && request.status == 200) {
				parse_trains();
        }
    }
	
	function parse_trains(){
		var str = request.responseText;
		trains = JSON.parse(str);
		num_trains = trains.length;
		add_stops();
		
	}
	
	function add_stops(){
		num_stops = stop_info.length;
		var location;
		var key1;
		var key2;
		var information = new Array();
		var z = 0;
		for(var i = 0; i < num_stops;i++){

				if(stop_info[i].Line == "Red"){
					for(var j = 0; j < num_trains; j++){
						key1 = trains[j].PlatformKey.slice(0,3);
						key2 =  stop_info[i].PlatformKey.slice(0,3);
						
						if(key1 == key2){
							information.push(trains[j]);
					}}
					stops[z]={Key:stop_info[i].PlatformKey,Station:stop_info[i].StationName,Order:stop_info[i].PlatformOrder,Start:stop_info[i].StartOfLine,End:stop_info[i].EndOfLine,Branch:stop_info[i].Branch,Direction:stop_info[i].Direction,Name:stop_info[i].stop_name,lat:stop_info[i].stop_lat,lon:stop_info[i].stop_lon,info:information};
					information = [];
					z++;
				}	
		}
		num_stops = stops.length;
		plot_stops();
	}
	
	function plot_stops(){
		var image = 'image.png';
		redline_path = new Array();
		for(var i = 0; i < num_stops; i++){
			var landmark = new google.maps.LatLng(stops[i].lat, stops[i].lon);
			marker = new google.maps.Marker({
				position: landmark,
				title: stops[i].Station,
				icon:image,
				mark_info: stops[i]
			});
			marker.setMap(map);
			google.maps.event.addListener(marker, 'click', function(){
				var infowindow = new google.maps.InfoWindow();
				var table_string = table_info(this.mark_info);
				infowindow.setContent(table_string);
				infowindow.open(map, this);}); 
			
		}

		
		connect();
		poly.setMap(map);
		poly2.setMap(map);
		shortest_distance();
}

function table_info(stop){
	var table;
	var string;
	var bound;
	var arrival;
	table = '<table border="1">'+'<tr><th>' +stop.Station + '</th></tr>';
	for(i in stop.info){
		string = stop.info[i].PlatformKey;
		if(string.charAt(string.length-1) == 'N'){
			bound = "NB";
		}
		if(string.charAt(string.length-1) == 'S'){
			bound = "SB";
		}
		arrival = stop.info[i].TimeRemaining;
		table = table +	'<tr><td>'+bound+'</td><td>'+arrival+'</td></tr>'
	}
	table = table + '</table>';
	return table;
}	


function connect(){
	var redlinePath = new Array();
	var j = 0;
	for(i = 0; i < num_stops; i++){
		if((stops[i].Branch == "Ashmont") || stops[i].Station == "JFK"){ 
			var landmark = new google.maps.LatLng(stops[i].lat, stops[i].lon);
			redlinePath[j] = landmark;
			j++;
		}
	}
	var redlinePath2 = new Array();
	j = 0;
	for(i = 0; i < num_stops; i++){
		if(stops[i].Branch != "Ashmont"){ 
			var landmark = new google.maps.LatLng(stops[i].lat, stops[i].lon);
			redlinePath2[j] = landmark;
			j++;
		}
	}
	
	var polyOptions = {
		path: redlinePath,
		strokeColor: "#FF0000",	
		strokeOpacity: 1.0,
		strokeWeight: 2
  };
  
  	var polyOptions2 = {
		path: redlinePath2,
		strokeColor: "#FF0000",	
		strokeOpacity: 1.0,
		strokeWeight: 2
  };
	poly = new google.maps.Polyline(polyOptions);
	poly2 = new google.maps.Polyline(polyOptions2);
  }
	