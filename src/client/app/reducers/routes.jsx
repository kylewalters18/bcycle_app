import L from 'leaflet';

function formatRoutes(routes) {
  const formattedRoutes = [];

  for (const route of routes) {
    const formattedRoute = [];

    for (const step of route.route) {
      formattedRoute.push({ LatLng: new L.LatLng(step.lat, step.lon) });
    }
    formattedRoutes.push(formattedRoute);
  }

  return formattedRoutes;
}

const routes = (state = {
  routes: [],
}, action) => {
  switch (action.type) {
    case 'FETCH_ROUTES':
      return state;

    case 'RECEIVE_ROUTES':
      return { ...state, routes: formatRoutes(action.routes) };

    default:
      return state;
  }
};

export default routes;
