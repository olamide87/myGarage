import React from 'react';
import PropTypes from 'prop-types';

import garageCategoryData from '../helpers/data/garageCategoryData';

import garageCategoryShape from '../helpers/propz/garageCategoryShape';

class GarageCategory extends React.Component {
  static propTypes = {
    garageCategory: garageCategoryShape.garageCategoryShape,
    setSingleGarageCategory: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
  }

  state = {
    showForm: false,
    garageCategory: {},
  }

  singleGarageCategoryEvent = (e) => {
    e.preventDefault();
    const { garageCategory, setSingleGarageCategory } = this.props;
    setSingleGarageCategory(garageCategory.id);
  }

  deleteCategoryEvent = (e) => {
    const { garageCategory, deleteCategory } = this.props;
    e.preventDefault();
    console.warn('deleting category');
    deleteCategory(garageCategory.id);
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
            <button className="btn btn-success" onClick={this.singleGarageCategoryEvent}><i className="far fa-eye"></i></button>
            <button className="btn btn-warning" onClick={this.editCategoryEvent}><i className="fas fa-edit"></i></button>
            <button className="btn btn-danger" onClick={this.deleteCategoryEvent} ><i className="fas fa-trash-alt"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GarageCategory;
