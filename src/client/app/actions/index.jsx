import axios from 'axios';

export function zoom(level) {
  return {
    type: 'ZOOM',
    level,
  };
}

export function startFetchKiosks(text) {
  return {
    type: 'FETCH_KIOSKS',
    text,
  };
}

export function receiveKiosks(kiosks) {
  return {
    type: 'RECEIVE_KIOSKS',
    kiosks,
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

    // async call to get the new data
    axios
      .get(`${process.env.API_URL}/v1/route`, {
        params: { limit: 87 },
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      })
      .then(response => dispatch(receiveRoutes(response.data.routes)));
  };
}

export function fetchKiosks(text) {
  return (dispatch) => {
    // dispatch the sync action to update ui
    dispatch(startFetchKiosks(text));

    // async call to get the new data
    axios.get(`${process.env.API_URL}/v1/kiosk`, {
      params: { limit: 100 },
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    .then(response => dispatch(receiveKiosks(response.data.kiosks)));
  };
}
