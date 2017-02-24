import React, { PropTypes } from 'react';

import List from 'components/List';
import SearchResultItem from 'containers/SearchResultItem';

function SearchResultList({ results }) {
  if (results.length > 0) {
    return <List items={results} component={SearchResultItem} />;
  }

  return null;
}

SearchResultList.propTypes = {
  results: PropTypes.any
};

export default SearchResultList;
