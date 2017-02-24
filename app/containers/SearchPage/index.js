import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getFrom, getTo, getResults } from './selectors';
import { changeDepartureLocation, changeArrivalLocation, performSearch } from './actions';

import Form from './Form';
import H1 from 'components/H1';
import Input from 'components/Input';
import SearchButton from './SearchButton';
import SearchResultList from 'components/SearchResultList';
import messages from './messages';

export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { results } = this.props;
    const resultsProps = {
      results
    };
    console.log(results);
    return (
      <div>
        <Helmet
          title="Search Page"
          meta={[
            { name: 'description', content: 'Search page of React.js Boilerplate application' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Form onSubmit={this.props.onSubmitForm}>
            <Input
                id="from"
                type="text"
                placeholder="From"
                value={this.props.from}
                onChange={this.props.onChangeDepartureLocation}
            />
            to
            <Input
                id="to"
                type="text"
                placeholder="to"
                value={this.props.to}
                onChange={this.props.onChangeArrivalLocation}
            />
            <SearchButton onClick={this.props.onSubmitForm}>Search</SearchButton>
        </Form>
        <SearchResultList {...resultsProps} />
      </div>
    );
  }
}


SearchPage.propTypes = {
  onChangeDepartureLocation: React.PropTypes.func,
  onChangeArrivalLocation: React.PropTypes.func,
  onSubmitForm: React.PropTypes.func,
  from: React.PropTypes.string,
  to: React.PropTypes.string,
  results: React.PropTypes.any
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeDepartureLocation: (evt) => dispatch(changeDepartureLocation(evt.target.value)),
    onChangeArrivalLocation: (evt) => dispatch(changeArrivalLocation(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
          evt.preventDefault();
      }
      dispatch(performSearch());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  from: getFrom(),
  to: getTo(),
  results: getResults()
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
