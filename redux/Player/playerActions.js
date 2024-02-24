import axios from "../../Apis/api";

export const FETCH_PLAYERS = 'FETCH_PLAYERS';

export const fetchPlayers = () => {
  return async (dispatch) => {
   try {
     const response = await axios.get('/players');
     dispatch({ type: FETCH_PLAYERS, payload: response.data });
   } catch (error) {
     dispatch({ type: 'FETCH_PLAYERS', payload: error.message });
   }
 };
};