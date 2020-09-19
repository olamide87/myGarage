import PropTypes from 'prop-types';

const garageCategoryShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
});

export default { garageCategoryShape };
