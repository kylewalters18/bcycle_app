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
}, action) => {
  switch (action.type) {
    case 'FETCH_KIOSKS':
      return state;

    case 'RECEIVE_KIOSKS':
      return { ...state, kiosks: formatKiosks(action.kiosks) };

    default:
      return state;
  }
};

export default kiosks;
