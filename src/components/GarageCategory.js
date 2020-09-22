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

  editCategoryEvent = (e) => {
    e.preventDefault();
    const { editACategory, garageCategory } = this.props;
    editACategory(garageCategory);
  }

  render() {
    const { garageCategory } = this.props;

    return (
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{garageCategory.categoryName}</h5>
          <img className="card-img" src={garageCategory.imageUrl} alt={garageCategory.categoryName}/>
          <div className='btn-group' role='group'>
            <div className="btn-group" role="group">
            <button className="btn btn-success" onClick={this.singleGarageCategoryEvent}><i class="far fa-eye"></i></button>
            <button className="btn btn-warning" onClick={this.editCategoryEvent}><i class="fas fa-edit"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GarageCategory;
