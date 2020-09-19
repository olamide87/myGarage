import PropTypes from 'prop-types';

const garageItemsShape = PropTypes.shape({
  boardId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { garageItemsShape };
