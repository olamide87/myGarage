import React from 'react';
import PropTypes from 'prop-types';

import GarageItemForm from './garageItemForm';

import garageItemData from '../helpers/data/garageItemData';

import garageCategoryData from '../helpers/data/garageCategoryData';
import GarageItem from './garageItem';

class SingleCategory extends React.Component {
  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    setSingleCategory: PropTypes.func.isRequired,
  }

  state = {
    garageCategory: {},
    garageItems: [],
    showForm: false,
  }

  getYoGarageItems = () => {
    const { categoryId } = this.props;

    garageItemData.getGarageItemsByCategoryId(categoryId)
      .then((garageItems) => this.setState({ garageItems }))
      .catch((err) => console.error('get garageItem failed', err));
  }

  componentDidMount() {
    const { categoryId } = this.props;

    garageCategoryData.getSingleCategory(categoryId)
      .then((response) => this.setState({ garageCategory: response.data }))
      .catch((err) => console.error('get single category failed', err));

    this.getYoGarageItems();
    console.error(this.state.garageItems);
  }

  createItem = (newItem) => {
    garageItemData.createItem(newItem)
      .then(() => {
        this.getYoGarageItems();
        this.setState({ showForm: false });
      })
      .catch((err) => console.error(err));
  }

  goHome = (e) => {
    const categoryId = '';
    this.props.setSingleGarageCategory(categoryId);
  }

  isChecked = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      const updatedItem = { isCheckedOut: true };
      garageItemData.updateItem(e.target.id, updatedItem)
        .then(() => {
          this.getYoGarageItems();
        })
        .catch((err) => console.error(err));
    } else {
      const updatedItem = { isCheckedOut: false };
      garageItemData.updateItem(e.target.id, updatedItem)
        .then(() => {
          this.getYoGarageItems();
        })
        .catch((err) => console.error(err));
    }
  }

  deleteItem = (itemId) => {
    garageItemData.deleteItem(itemId)
      .then(() => {
        this.getYoGarageItems();
      })
      .catch((err) => console.error('delete item failed', err));
  }

  render() {
    const { garageCategory, garageItems, showForm } = this.state;
    const { setSingleGarageCategory, categoryId } = this.props;

    const garageItemCards = garageItems.map((garageItem) => <GarageItem key={garageItem.id} garageItem={garageItem} isChecked={this.isChecked} deleteItem={this.deleteItem} />);

    return (
      <div >
        <h4>{garageCategory.categoryName}</h4>
        <div className="mb-3">
          <button className="btn btn-warning" onClick={() => { this.setState({ showForm: !showForm }); }}><i className={showForm ? 'far fa-times-circle' : 'far fa-plus-square'}></i></button>
          {showForm ? <GarageItemForm categoryId={categoryId} createItem={this.createItem} /> : ''}
        </div>
        <div className="card-columns">
          {garageItemCards}
        </div>
        <button className="btn btn-danger" onClick={this.goHome}>Go Back</button>
        <div className='card-container'>
        </div>
      </div>
    );
  }
}

export default SingleCategory;
