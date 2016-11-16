const times = (state = {
  histogram: [],
}, action) => {
  switch (action.type) {
    case 'RECEIVE_HISTOGRAM':
      const userTimezoneOffset = new Date().getTimezoneOffset() * 60000;

      const formattedDates = action.histogram.map(d => ({
        x: new Date(new Date(d.date).getTime() + userTimezoneOffset),
        y: d.trips,
      }));

      return { ...state, histogram: formattedDates };

    default:
      return state;
  }
};

export default times;
