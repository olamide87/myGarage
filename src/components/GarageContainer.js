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
    GarageCategories: [],
  }

  getGarageCategories = () => {
    garageCategoryData.getGarageCategoryByUid(authData.getUid())
      .then((GarageCategories) => this.setState({ GarageCategories }))
      .catch((err) => console.error('get GarageCategories broke', err));
  }

  componentDidMount() {
    this.getGarageCategories();
  }

  render() {
    const { GarageCategories } = this.state;
    const { setSingleGarageCategory } = this.props;

    const garageCategoryCard = GarageCategories.map((garageCategory) => <GarageCategory GarageCategory={GarageCategory} setSingleGarageCategory={setSingleGarageCategory} key={GarageCategory.id}/>);
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
