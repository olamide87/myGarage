import PropTypes from 'prop-types';

const garageCategoryShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { garageCategoryShape };
