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

    case 'RECEIVE_ROUTES':
      const randomNumbers = Array.from(
        { length: 5 },
        () => 50 + Math.floor(Math.random() * 50)
      );
      randomNumbers.sort();
      randomNumbers.reverse();
      const data = randomNumbers.map(d => ({
        value: d,
        name: action.routes.neighbors[Math.floor(Math.random() * 86)].kiosk.name,
      }));

      return { ...state,
        stationName: action.routes.kiosk.name,
        routes: formatRoutes(action.routes),
        topDestinations: data,
      };

    default:
      return state;
  }
};

export default routes;
