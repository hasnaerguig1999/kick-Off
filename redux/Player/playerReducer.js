const initialState = {
  players: [],
  loading: false,
  error: null,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS':
      return {
        ...state,
        loading: false,
        players: action.payload.data
      };
    case 'FETCH_PLAYERS':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default playerReducer;