import React from 'react';
import PropTypes from 'prop-types';

import garageCategoryData from '../helpers/data/garageCategoryData';

class SingleCategory extends React.Component {
  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    setSingleCategory: PropTypes.func.isRequired,
  }

  state = {
    garageCategory: {},
  }

  componentDidMount() {
    const { categoryId } = this.props;
    garageCategoryData.getSingleCategory(categoryId)
      .then((response) => this.setState({ garageCategory: response.data }))
      .catch((err) => console.error('get single category failed', err));
  }

  render() {
    const { garageCategory } = this.state;
    const { setSingleCategory } = this.props;

    return (
      <div >
        <h4>{garageCategory.name}</h4>
        <button className="btn btn-danger" onClick={() => { setSingleCategory(''); }}>X</button>
        <div className='card-container'>
        </div>
      </div>
    );
  }
}

export default SingleCategory;
