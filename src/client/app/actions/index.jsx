import axios from 'axios';

export function zoom(level) {
  return {
    type: 'ZOOM',
    level,
  };
}

function startFetchKiosks(text) {
  return {
    type: 'FETCH_KIOSKS',
    text,
  };
}

function receiveKiosks(kiosks) {
  return {
    type: 'RECEIVE_KIOSKS',
    kiosks,
  };
}

function receiveRoutes(routes) {
  return {
    type: 'RECEIVE_ROUTES',
    routes,
  };
}

function startFetchRoutes(text) {
  return {
    type: 'FETCH_ROUTES',
    text,
  };
}

export function selectKiosk(id) {
  return (dispatch) => {
    dispatch(startFetchRoutes(id));

    // async call to get the new data
    axios
      .get(`${process.env.API_URL}/v1/kiosk/${id}/neighbors`, {
        params: { limit: 100 },
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      })
      .then(response => dispatch(receiveRoutes(response.data)));
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
