import { createSelector } from 'reselect';

const selectSearch = (state) => state.get('search');

const getFrom = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('from')
);

const getTo = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('to')
);

const getResults = () => createSelector(
    selectSearch,
    (searchState) => searchState.get('results')
);

export {
  selectSearch,
  getFrom,
  getTo,
  getResults
};
