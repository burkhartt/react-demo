/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    const content = (
      <Wrapper>
        <div>
            <b>{item.depart_cityname} to {item.arrive_cityname}</b><br />
            Leaves at: {item.depart_datetime}<br />
            Arrives at: {item.arrive_datetime}<br />
            <b>${item.price}</b>
        </div>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`trip-${item.trip_id}`} item={content} />
    );
  }
}

RepoListItem.propTypes = {
  item: React.PropTypes.object
};

export default connect(createStructuredSelector({

}))(RepoListItem);
