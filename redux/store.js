import { createStore, combineReducers, applyMiddleware } from 'redux';
import matchReducer from './Match/matchreducer';
import playerReducer from './Player/playerReducer';
import {thunk} from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';


const middleware = [promise, thunk, logger];

const rootReducer = combineReducers({
  matches: matchReducer,
  players: playerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;