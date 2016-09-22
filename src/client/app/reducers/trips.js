const trips = (state = {
        					startDay: 1,
        					endDay: 12,
                  startTime: 1,
                  endTime: 24,
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
   		return Object.assign({}, state, {
   			allTrips: action.trips,
   			visibleTrips: action.trips,
			  checkoutKiosksTally: tallyKiosks(action.trips, (d) => d.checkout_kiosk),
      	returnKiosksTally: tallyKiosks(action.trips, (d) => d.return_kiosk)
    	})
    case 'START_DAY':
    	return Object.assign({}, state, {
        	startDay: action.day,
        	checkoutKiosksTally: tallyKiosks(
        		filterTripsByDay(state.allTrips, action.day, state.endDay),
        		(d) => d.checkout_kiosk
        	),
        	returnKiosksTally: tallyKiosks(
        		filterTripsByDay(state.allTrips, action.day, state.endDay),
        		(d) => d.return_kiosk
        	)
      	})
    case 'END_DAY':
    	return Object.assign({}, state, {
        	endDay: action.day,
        	checkoutKiosksTally: tallyKiosks(
        		filterTripsByDay(state.allTrips, state.startDay, action.day),
        		(d) => d.checkout_kiosk
        	),
        	returnKiosksTally: tallyKiosks(
        		filterTripsByDay(state.allTrips, state.startDay, action.day),
        		(d) => d.return_kiosk
        	)
      	})
    case 'START_TIME':
      return state
    case 'END_TIME':
      return Object.assign({}, state, {
          end: action.day,
          checkoutKiosksTally: tallyKiosks(
            filterTripsByTime(
              filterTripsByDay(state.allTrips, state.startDay, state.endDay),
              state.startTime, action.time),
            (d) => d.checkout_kiosk
          ),
          returnKiosksTally: tallyKiosks(
            filterTripsByTime(
              filterTripsByDay(state.allTrips, state.startDay, state.endDay),
              state.startTime, action.time),
            (d) => d.return_kiosk
          )
        })

    default:
      return state
  }
}

function filterTripsByDay(trips, start, end) {
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

function filterTripsByTime(trips, start, end) {
  let filteredTrips = []
  for (let trip of trips) {
    let checkoutDate = new Date(trip.checkout_datetime)

    let time = checkoutDate.getHours() + 1
    if (time >= start && time <= end) {
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
