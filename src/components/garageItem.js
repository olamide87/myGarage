import React from 'react';
import PropTypes from 'prop-types';

import garageItemShape from '../helpers/propz/garageItemsShape';

class GarageItem extends React.Component {
  static propTypes = {
    garageItem: garageItemShape.garageItemsShape,
    deleteItem: PropTypes.func.isRequired,
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { garageItem, deleteItem } = this.props;
    deleteItem(garageItem.id);
  }

  render() {
    const { garageItem, isChecked } = this.props;
    return (
      <div className="card" >
      <div className="card-body itemCard">
        <h5 className="card-title">{garageItem.garageItemName}</h5>
        <img className="card-img" src={garageItem.imageUrl} alt={garageItem.garageItemName}/>
        <p className="card-checkoutDate">CHECKOUT DATE: {garageItem.checkoutDate}</p>
        <p className="card-isCheckedOut">{garageItem.isCheckedOut && <i className="noSymbol fas fa-ban"></i>}</p>
        <button className="btn btn-danger" onClick={this.deleteItemEvent}><i class="fas fa-trash-alt"></i></button>
        {
          garageItem.isCheckedOut
            && <input id={garageItem.id} onChange={isChecked} type="checkbox" aria-label="Checkbox for following text input" checked />
        }
        {
          !garageItem.isCheckedOut
            && <input id={garageItem.id} onChange={isChecked} type="checkbox" aria-label="Checkbox for following text input" />
        }
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
