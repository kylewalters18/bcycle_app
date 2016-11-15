import L from 'leaflet';

function formatRoutes(routes) {
  const formattedRoutes = [];
  for (const route of routes.neighbors) {
    const formattedRoute = [];
    for (const step of route.route) {
      formattedRoute.push({ LatLng: new L.LatLng(step.lat, step.lon) });
    }
    formattedRoutes.push({
      route: formattedRoute,
      id: route.id,
      name: route.kiosk.name,
    });
  }

  return formattedRoutes;
}

const routes = (state = {
  routes: [],
  topDestinations: [],
  stationName: '',
}, action) => {
  switch (action.type) {
    case 'FETCH_ROUTES':
      return state;

    case 'RECEIVE_DESTINATIONS':
      const data = action.destinations.map(d => ({
        value: d.count,
        name: d.name,
      }));

      return { ...state,
        topDestinations: data,
      };
    case 'RECEIVE_ROUTES':
      return { ...state,
        stationName: action.routes.kiosk.name,
        routes: formatRoutes(action.routes),
      };

    default:
      return state;
  }
};

export default routes;
