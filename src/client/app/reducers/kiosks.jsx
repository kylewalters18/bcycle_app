import L from 'leaflet';

function formatKiosks(kiosks) {
  const formattedKiosks = [];
  for (const kiosk of kiosks) {
    formattedKiosks.push({
      LatLng: new L.LatLng(kiosk.lat, kiosk.lon),
      name: kiosk.name,
      id: kiosk.id,
    });
  }
  return formattedKiosks;
}

const kiosks = (state = {
  kiosks: [],
  highlightedKiosk: '',
}, action) => {
  switch (action.type) {
    case 'FETCH_KIOSKS':
      return state;

    case 'RECEIVE_KIOSKS':
      return { ...state, kiosks: formatKiosks(action.kiosks) };

    case 'KIOSK_MOUSEOVER':
      return { ...state, highlightedKiosk: action.kiosk };

    default:
      return state;
  }
};

export default kiosks;
