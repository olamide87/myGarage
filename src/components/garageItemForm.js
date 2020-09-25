import React from 'react';
import PropTypes from 'prop-types';

import authData from '../helpers/data/authData';

class GarageItemForm extends React.Component {
  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    createItem: PropTypes.func.isRequired,
  }

  state = {
    garageItemName: '',
    imageUrl: '',
    checkedOutDate: '',
    isCheckedOut: '',
  }

  changeGarageItemNameEvent = (e) => {
    e.preventDefault();
    this.setState({ garageItemName: e.target.value });
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changeCheckOutDateEvent = (e) => {
    e.preventDefault();
    this.setState({ checkedOutDate: e.target.value });
  }

  changeIsCheckedOutEvent = (e) => {
    e.preventDefault();
    this.setState({ isCheckedOut: e.target.value });
  }

  saveItemEvent = (e) => {
    e.preventDefault();
    const {
      garageItemName, imageUrl, checkoutDate, isCheckedOut,
    } = this.state;
    const { createItem, categoryId } = this.props;

    const newItem = {
      garageItemName,
      imageUrl,
      categoryId,
      checkoutDate,
      isCheckedOut,
      uid: authData.getUid(),
    };

    createItem(newItem);
  }

  render() {
    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="garageItemName">Item Name</label>
          <input
            type="text"
            className="form-control"
            id="garageItemName"
            placeholder="Enter Garage item name"
            onChange={this.changeGarageItemNameEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="garageItemImageUrl">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="garageItemImageUrl"
            placeholder="image.com/item"
            onChange={this.changeImageUrlEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="CheckOutDate">Check Out Date</label>
          <input
            type="text"
            className="form-control"
            id="CheckOutDate"
            placeholder="Enter Garage item name"
            onChange={this.changeCheckOutDateEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="changeIsCheckedOutEvent">Is it Checked Out?</label>
          <input
            type="boolean"
            className="form-control"
            id="changeIsCheckedOutEvent"
            placeholder="Enter check out date"
            onChange={this.changeIsCheckedOutEvent}
          />
        </div>

        <button className="btn btn-dark" onClick={this.saveItemEvent}>Save Pin</button>
      </form>
    );
  }
}

export default GarageItemForm;
