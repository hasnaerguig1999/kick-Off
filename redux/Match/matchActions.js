import axios from "axios";

export const FETCH_MATCHES = 'FETCH_MATCHES';
export const FETCH_LEAGUES = 'FETCH_LEAGUES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const fetchleagues = () => {
  return async (dispatch) => {
   try {
     const {data} = await axios.get('https://api.sofascore.com/api/v1/config/top-unique-tournaments/MA/football');
     dispatch({ type: FETCH_LEAGUES, payload: data.uniqueTournaments });
   } catch (error) {
     dispatch({ type: 'FETCH_LEAGUES_FAILURE', payload: error.message });
   }
 };
}
export const fetchMatches = () => {
  return async (dispatch) => {
   try {
     const {data} = await axios.get('https://api.sofascore.com/api/v1/sport/football/scheduled-events/2024-02-21');
     dispatch({ type: FETCH_MATCHES, payload: data });
   } catch (error) {
     dispatch({ type: 'FETCH_MATCHES_FAILURE', payload: error.message });
   }
 };
};

export const addMatchToFavorites = (match) => ({
  type: ADD_TO_FAVORITES,
  payload: match,
});