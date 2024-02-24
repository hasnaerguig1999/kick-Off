import { ADD_TO_FAVORITES } from './matchActions';

const initialState = {
  matches:[],
  loading: true,
  error: null,
  leagues: [],
  favorites: [],
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LEAGUES':
      return {
        ...state,
        leagues: action.payload
      };
    case 'FETCH_MATCHES':
      return {
        ...state,
        loading: false,
        matches: action.payload
      };
    case 'FETCH_MATCHES_FAILURE':
      return { ...state, error: action.payload };
      case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  };
  
};

export default matchReducer;