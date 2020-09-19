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
    GarageCategory: [],
  }

  getGarageCategoryData = () => {
    garageCategoryData.getGarageCategoryByUid(authData.getUid())
      .then((GarageCategory) => this.setState({ GarageCategory }))
      .catch((err) => console.error('get GarageCategory broke', err));
  }

  componentDidMount() {
    this.getGarageCategoryData();
  }

  render() {
    const { GarageCategory } = this.state;
    const { setSingleGarageCategory } = this.props;

    const garageCategoryCard = GarageCategory.map((GarageCategory) => <GarageCategory GarageCategory={GarageCategory} setSingleGarageCategory={setSingleGarageCategory} key={GarageCategory.id}
    
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
