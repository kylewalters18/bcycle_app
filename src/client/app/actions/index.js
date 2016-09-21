import axios from 'axios'

export function toggle(option) {
  	return {
  	  	type: 'TOGGLE_RADIO',
  	  	option
  	}
}

export function zoom(level) {
	return {
		type: 'ZOOM',
		level
	}
}

export function fetchTripsSync(text) {
  	return {
    	type: 'FETCH_TRIPS',
    	text
  	}
}

export function receiveTrips(trips) {
	return {
		type: 'RECEIVE_TRIPS',
		trips
	}
}

export function fetchTripsAsync(text) {
	return function(dispatch) {
		// dispatch the sync action to update ui
		dispatch(fetchTripsSync(text));

		// async call to get the new data
		axios('https://bcycle.herokuapp.com/trip')
		    .then((response) => {
		    	let trips = {
					checkoutKiosksTally: tallyKiosks(response.data, (d) => d.checkout_kiosk),
		      		returnKiosksTally: tallyKiosks(response.data, (d) => d.return_kiosk)
		    	}
		  		dispatch(receiveTrips(trips))
		    });
	}
}

function tallyKiosks(trips, extractKiosk) {
	let map = new Map();
	for (let trip of trips) {
	  let kiosk = extractKiosk(trip)
	  let kioskName = kiosk.name

	  if(!map.has(kioskName)) {
	    map.set(kioskName, {
	      'tally': 0,
	      'LatLng': new L.LatLng(kiosk.lat, kiosk.lon),
	      'name': kiosk.name
	    });
	  }

	  map.get(kioskName).tally++
	}
	return Array.from(map.values())
}