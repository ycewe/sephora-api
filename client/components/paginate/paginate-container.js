import React from 'react';
import PropTypes from 'prop-types';
import PaginateOffset from './paginate-offset';
import PaginateSize from './paginate-size';

class PaginateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: '1',
      size: '25',
    };

    this.handlePageSize = ::this.handlePageSize;
    this.handlePageOffset = ::this.handlePageOffset;
  }

  handlePageSize(e) {
    this.setState({ size: e.target.value });
    this.props.setPaginations(this.state.offset, e.target.value);
  }

  handlePageOffset(e) {
    this.setState({ offset: e.target.value });
    this.props.setPaginations(e.target.value, this.state.size);
  }

  render() {
    return (
      <div id="paginate">
        <PaginateOffset handlePageOffset={this.handlePageOffset} pageRange={this.props.pageRange} />
        <PaginateSize text="Products Per Page" handlePageSize={this.handlePageSize} />
      </div>
    );
  }
}

PaginateContainer.propTypes = {
  setPaginations: PropTypes.func.isRequired,
  pageRange: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PaginateContainer;
