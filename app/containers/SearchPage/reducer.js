/*
 *
 * SearchPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_DEPARTURE,
  CHANGE_ARRIVAL,
  PERFORM_SEARCH
} from './constants';

const initialState = fromJS({
    results: []
});
const dataSource = require('./dataSource.json');

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DEPARTURE:
      return state.set('from', action.location);
    case CHANGE_ARRIVAL:
      return state.set('to', action.location);
    case PERFORM_SEARCH:
      return state.set('results', dataSource);
    default:
      return state;
  }
}

export default searchPageReducer;
