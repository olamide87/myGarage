import React from 'react';
import PropTypes from 'prop-types';
import authData from '../helpers/data/authData';

class GarageCategoryForm extends React.Component {
  static propTypes = {
    createCategory: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired,
  }

  state = {
    categoryName: '',
    imageUrl: '',
  }

  changeCategoryNameEvent = (e) => {
    e.preventDefault();
    this.setState({ categoryName: e.target.value });
  }

  changeImgUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  saveCategoryEvent = (e) => {
    e.preventDefault();
    const { categoryName, imageUrl } = this.state;
    const { createCategory } = this.props;

    const newCategory = {
      categoryName,
      imageUrl,
      uid: authData.getUid(),
    };
    createCategory(newCategory);
    console.warn('hey here is a new category!!!', newCategory);
  }

    closeFormEvent = (e) => {
      e.preventDefault();
      this.props.closeForm();
    };

    render() {
      const {
        categoryName,
        imageUrl,
      } = this.state;

      return (
        <form className="col-6 offset-3">
          <button className="btn btn-danger" onClick={this.closeFormEvent}>CLOSE FORM</button>
          <div className="form-group">
            <label htmlFor="categoryName">Category Name</label>
            <input
              type="text"
              className="form-control"
              id="categoryName"
              placeholder="Enter Category Name"
              value={categoryName}
              onChange={this.changeCategoryNameEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Img Url</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            placeholder="picture"
            value={imageUrl}
            onChange={this.changeImgUrlEvent}
          />
          </div>
          <button className= "btn btn-dark" onClick={this.saveCategoryEvent}>Save Category</button>
         </form>
      );
    }
}

export default GarageCategoryForm;
