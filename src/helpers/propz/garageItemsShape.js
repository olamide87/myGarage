import PropTypes from 'prop-types';

const garageItemsShape = PropTypes.shape({
  garageItemId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isCheckedOut: PropTypes.string.isRequired,
  garageOwnerId: PropTypes.string.isRequired,
  checkoutDate: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
});

export default { garageItemsShape };
