import React from 'react';
import PropTypes from 'prop-types';
import authData from '../helpers/data/authData';

class GarageCategoryForm extends React.Component {
  static propTypes = {
    createCategory: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired,
  }

  state = {
    categoryName: '',
    imgUrl: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ categoryName: e.target.value });
  }

  changeCategoryNameEvent = (e) => {
    e.preventDefault();
    this.setState({ categoryName: e.target.value });
  }

  changeImgUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imgUrl: e.target.value });
  }

  saveCategoryEvent = (e) => {
    e.preventDefault();
    const { categoryName, imgUrl } = this.setState;
    const { createCategory } = this.props;

    const newCategory = {
      categoryName,
      imgUrl,
      uid: authData.getUid(),
    };

    console.warn('hey here is a new category!!!', newCategory);
    createCategory(newCategory);
  }

    closeFormEvent = (e) => {
      e.preventDefault();
      this.props.closeForm();
    };

    render() {
      const {
        categoryName,
        imgUrl,
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
              onChange={this.changeNameEvent}
            />
        </div>
        <div className="form-group">
          <label htmlFor="imgUrl">Img Url</label>
          <input
            type="text"
            className="form-control"
            id="imgUrl"
            placeholder="picture"
            value={imgUrl}
            onChange={this.changeImgUrlEvent}
          />
          </div>
          <button className= "btn btn-dark" onClick={this.saveCategoryEvent}>Save Category</button>
         </form>
      );
    }
}

export default GarageCategoryForm;
