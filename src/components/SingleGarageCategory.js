import React from 'react';
import PropTypes from 'prop-types';

import garageItemData from '../helpers/data/garageItemData';

import garageCategoryData from '../helpers/data/garageCategoryData';
import GarageItem from './GarageItem';

class SingleCategory extends React.Component {
  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    setSingleCategory: PropTypes.func.isRequired,
  }

  state = {
    garageCategory: {},
    garageItems: [],
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

  render() {
    const { garageCategory, garageItems } = this.state;
    const { setSingleCategory } = this.props;

    const garageItemCards = garageItems.map((garageItem) => <GarageItem key={garageItem.id} garageItem={garageItem}/>);

    return (
      <div >
        <h4>{garageCategory.categoryName}</h4>
        <div className="card-columns">
          {garageItemCards}
        </div>
        <button className="btn btn-danger" onClick={this.backButton}>Go Back</button>
        <div className='card-container'>
        </div>
      </div>
    );
  }
}

export default SingleCategory;
