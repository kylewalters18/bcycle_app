const trips = (state = {
					start: 1,
					end: 12,
					allTrips: [],
					visibleTrips: [],
					checkoutKiosksTally: [],
		      		returnKiosksTally: []
		    	}, action) => {
  switch (action.type) {
    case 'FETCH_TRIPS':
        // TODO handle ui state update (ex. spinner to show loading)
       	return state
   	case 'RECEIVE_TRIPS':
   		return {
   			allTrips: action.trips,
   			visibleTrips: action.trips,
			checkoutKiosksTally: tallyKiosks(action.trips, (d) => d.checkout_kiosk),
      		returnKiosksTally: tallyKiosks(action.trips, (d) => d.return_kiosk)
    	}
    case 'START_TIME':
    	return Object.assign({}, state, {
        	start: action.time,
        	checkoutKiosksTally: tallyKiosks(
        		filterTrips(state.allTrips, state.start, action.time),
        		(d) => d.checkout_kiosk
        	),
        	returnKiosksTally: tallyKiosks(
        		filterTrips(state.allTrips, state.start, action.time),
        		(d) => d.return_kiosk
        	)
      	})
    case 'END_TIME':
    	return Object.assign({}, state, {
        	end: action.time,
        	checkoutKiosksTally: tallyKiosks(
        		filterTrips(state.allTrips, state.start, action.time),
        		(d) => d.checkout_kiosk
        	),
        	returnKiosksTally: tallyKiosks(
        		filterTrips(state.allTrips, state.start, action.time),
        		(d) => d.return_kiosk
        	)
      	})
    default:
      return state
  }
}

function filterTrips(trips, start, end) {
	let filteredTrips = []
	for (let trip of trips) {
		let checkoutDate = new Date(trip.checkout_datetime)

		let month = checkoutDate.getMonth() + 1
		if (month >= start && month <= end) {
			filteredTrips.push(trip)
		}
	}
	return filteredTrips
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

export default trips
