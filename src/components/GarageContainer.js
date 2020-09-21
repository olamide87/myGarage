import React from 'react';
import PropTypes from 'prop-types';
import authData from '../helpers/data/authData';
import GarageCategory from './GarageCategory';
import garageCategoryData from '../helpers/data/garageCategoryData';
import GarageCategoryForm from './GarageCategoryForm';

class GarageContainer extends React.Component {
  static propTypes = {
    setSingleGarageCategory: PropTypes.func.isRequired,
    editACategory: PropTypes.func.isRequired,
  }

  state ={
    garageCategories: [],
    formOpen: false,
    editCategory: {},

  }

  getGarageCategories = () => {
    garageCategoryData.getGarageCategoryByUid(authData.getUid())
      .then((garageCategories) => this.setState({ garageCategories }))
      .catch((err) => console.error('get GarageCategories broke', err));
  }

  componentDidMount() {
    this.getGarageCategories();
  }

  createCategory = (newCategory) => {
    garageCategoryData.createCategory(newCategory)
      .then((res) => {
        this.getGarageCategories();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('Create Category Broke', err));
  }

  editACategory = (categoryToEdit) => {
    console.warn(categoryToEdit);
    this.setState({ formOpen: true, editCategory: categoryToEdit });
  }

  updateCategory = (categoryId, editedCategory) => {
    garageCategoryData.updateCategory(categoryId, editedCategory)
      .then(() => {
        this.getBoards();
        this.setState({ formOpen: false, editCategory: {} });
      })
      .catch((err) => console.error('Update Board Borked', err));
  }

  closeForm = () => {
    this.setState({ formOpen: false });
  }

  render() {
    const { garageCategories, formOpen } = this.state;
    const { setSingleGarageCategory } = this.props;

    const garageCategoryCard = garageCategories.map((garageCategory) => <GarageCategory garageCategory={garageCategory} setSingleGarageCategory={setSingleGarageCategory} key={GarageCategory.id} editACategory={this.editACategory} />);
    return (
      <div>
        <button className="btn btn-warning" onClick={() => { this.setState({ formOpen: !formOpen }); }}><i className="fas fa-plus"></i></button>
        { formOpen ? <GarageCategoryForm createCategory={this.createCategory} /> : '' }
          <div className="card-columns">
           {garageCategoryCard}
          </div>
      </div>
    );
  }
}

export default GarageContainer;
