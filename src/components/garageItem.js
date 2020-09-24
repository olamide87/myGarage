import React from 'react';
import PropTypes from 'prop-types';

import garageItemShape from '../helpers/propz/garageItemsShape';

class GarageItem extends React.Component {
  static propTypes = {
    garageItem: garageItemShape.garageItemsShape,
  }

  render() {
    const { garageItem } = this.props;

    return (
      <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{garageItem.garageItemName}</h5>
        <img className="card-img" src={garageItem.imageUrl} alt={garageItem.garageItemName}/>
        <p className="card-checkoutDate">CHECKOUT DATE: {garageItem.checkoutDate}</p>
        <p className="card-isCheckedOut">{garageItem.isCheckedOut}</p>
        <div className='btn-group' role='group'>
          <div className="btn-group" role="group">
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default GarageItem;
