import L from 'leaflet';

function formatRoutes(routes) {
  const formattedRoutes = [];
  for (const route of routes) {
    const formattedRoute = [];
    for (const step of route.route) {
      formattedRoute.push({ LatLng: new L.LatLng(step.lat, step.lon) });
    }
    formattedRoutes.push({
      route: formattedRoute,
      id: route.id,
    });
  }

  return formattedRoutes;
}

const routes = (state = {
  routes: [],
  topDestinations: [],
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
      const data = randomNumbers.map((d, i) => ({ value: d, name: `Station ${i}` }));

      return { ...state,
        routes: formatRoutes(action.routes),
        topDestinations: data,
      };

    default:
      return state;
  }
};

export default routes;
