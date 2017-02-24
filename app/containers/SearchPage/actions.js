/*
 *
 * SearchPage actions
 *
 */

import {
  CHANGE_DEPARTURE,
  CHANGE_ARRIVAL,
  PERFORM_SEARCH
} from './constants';

export function changeDepartureLocation(location) {
  return {
    type: CHANGE_DEPARTURE,
    location: location
  };
}

export function changeArrivalLocation(location) {
  return {
    type: CHANGE_ARRIVAL,
    location: location
  };
}

export function performSearch() {
    return {
        type: PERFORM_SEARCH
    }
}