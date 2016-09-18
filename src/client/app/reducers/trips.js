const trips = (state = {
					checkoutKiosksTally: [],
		      		returnKiosksTally: []
		    	}, action) => {
  switch (action.type) {
    case 'FETCH_TRIPS':
        // TODO handle ui state update (ex. spinner to show loading)
       	return state
   	case 'RECEIVE_TRIPS':
   		return action.trips
    default:
      return state
  }
}

export default trips
