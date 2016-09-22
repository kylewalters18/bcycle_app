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

export function updateStartDay(day) {
	return {
		type: 'START_DAY',
		day
	}
}

export function updateEndDay(day) {
	return {
		type: 'END_DAY',
		day
	}
}

export function updateStartTime(time) {
	return {
		type: 'START_TIME',
		time
	}
}

export function updateEndTime(time) {
	return {
		type: 'END_TIME',
		time
	}
}

export function fetchTripsAsync(text) {
	return function(dispatch) {
		// dispatch the sync action to update ui
		dispatch(fetchTripsSync(text));

		// async call to get the new data
		//axios('https://bcycle.herokuapp.com/trip')
		axios('http://localhost:5000/trip')
		    .then((response) => { dispatch(receiveTrips(response.data)) });
	}
}