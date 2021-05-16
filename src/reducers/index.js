import { combineReducers } from 'redux';
import quotes from './quotes';
import votes from './votes'

const rootReducer = combineReducers({
  quotes,
  votes
});
   

export default rootReducer