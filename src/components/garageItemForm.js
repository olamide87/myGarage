

import authData from '../../helpers/data/authData';

class GarageItemForm extends React.Component {
  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    createItem: PropTypes.func.isRequired,
  }

  state = {
    garageItemName: '',
    imageUrl: '',
    checkedOutDate: '',
    isCheckout: '',
  }

  changeGarageItemNameEvent = (e) => {
    e.preventDefault();
    this.setState({ garageItemName: e.target.value });
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  saveItemEvent = (e) => {
    e.preventDefault();
    const { garageItemName, imageUrl, checkoutDate, isCheckedOut  } = this.state;
    const { createItem, categoryId } = this.props;

    const newPin = {
      garageItemName,
      imageUrl,
      categoryId,
      checkoutDate,
      uid: authData.getUid(),
    };

    createPin(newPin);
  }
