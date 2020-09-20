import React from 'react';
import PropTypes from 'prop-types';
import authData from '../helpers/data/authData';
import GarageCategory from './GarageCategory';
import garageCategoryData from '../helpers/data/garageCategoryData';

class GarageContainer extends React.Component {
  static propTypes = {
    setSingleGarageCategory: PropTypes.func.isRequired,
  }

  state ={
    garageCategories: [],
  }

  getGarageCategories = () => {
    garageCategoryData.getGarageCategoryByUid(authData.getUid())
      .then((garageCategories) => this.setState({ garageCategories }))
      .catch((err) => console.error('get GarageCategories broke', err));
  }

  componentDidMount() {
    this.getGarageCategories();
  }

  render() {
    const { garageCategories } = this.state;
    const { setSingleGarageCategory } = this.props;

    const garageCategoryCard = garageCategories.map((garageCategory) => <GarageCategory garageCategory={garageCategory} setSingleGarageCategory={setSingleGarageCategory} key={GarageCategory.id}/>);
    return (
      <div>
          <div className="card-columns">
           {garageCategoryCard}
          </div>
      </div>
    );
  }
}

export default GarageContainer;
