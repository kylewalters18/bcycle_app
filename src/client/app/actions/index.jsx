import axios from 'axios';
import { serverUrl } from 'Config';

export function toggle(option) {
  return {
    type: 'TOGGLE_RADIO',
    option,
  };
}

export function zoom(level) {
  return {
    type: 'ZOOM',
    level,
  };
}

export function fetchTripsSync(text) {
  return {
    type: 'FETCH_TRIPS',
    text,
  };
}

export function receiveTrips(trips) {
  return {
    type: 'RECEIVE_TRIPS',
    trips,
  };
}

export function updateStartDay(day) {
  return {
    type: 'START_DAY',
    day,
  };
}

export function updateEndDay(day) {
  return {
    type: 'END_DAY',
    day,
  };
}

export function updateStartTime(time) {
  return {
    type: 'START_TIME',
    time,
  };
}

export function updateEndTime(time) {
  return {
    type: 'END_TIME',
    time,
  };
}

export function receiveRoutes(routes) {
  return {
    type: 'RECEIVE_ROUTES',
    routes,
  };
}

export function startFetchRoutes(text) {
  return {
    type: 'FETCH_ROUTES',
    text,
  };
}

export function fetchRoutes(text) {
  return (dispatch) => {
    // dispatch the sync action to update ui
    dispatch(startFetchRoutes(text));

    axios
      .get(`${serverUrl}/route`, { params: { limit: 25 } })
      .then(response => dispatch(receiveRoutes(response.data.routes)));
  };
}

export function fetchTripsAsync(text) {
  return (dispatch) => {
    // dispatch the sync action to update ui
    dispatch(fetchTripsSync(text));

    // async call to get the new data
    axios.get(`${serverUrl}/trip`, {
      params: {
        limit: 1000,
      },
    })
    .then((response) => {
      dispatch(receiveTrips(response.data.trips));
    });
  };
}