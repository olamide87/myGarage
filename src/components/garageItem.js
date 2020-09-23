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
      <div className="card bg-dark text-white border-0">
        <img className="card-img" src={garageItem.imageUrl} alt={garageItem.garageItemName} />
        <div className="card-img-overlay">
          <h5 className="card-title">{garageItem.title}</h5>
        </div>
      </div>
    );
  }
}

export default Pin;
