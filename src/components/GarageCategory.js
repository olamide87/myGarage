import React from 'react';
import PropTypes from 'prop-types';

import garageCategoryShape from '../helpers/propz/garageCategoryShape';

class GarageCategory extends React.Component {
  static propTypes = {
    garageCategory: garageCategoryShape.garageCategoryShape,
    setSingleGarageCategory: PropTypes.func.isRequired,
  }

  singleGarageCategoryEvent = (e) => {
    e.preventDefault();
    const { garageCategory, setSingleGarageCategory } = this.props;
    setSingleGarageCategory(garageCategory.id);
  }

  render() {
    const { garageCategory } = this.props;

    return (
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{garageCategory.categoryName}</h5>
          <p className="card-text">{garageCategory.imageUrl}</p>
          <div className='btn-group' role='group'>
            <button className="btn btn-success" onClick={this.singleBoardEvent}>View Board details</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GarageCategory;
