import PropTypes from 'prop-types';
import button from './Button.module.css';

export default function Button({ label, type }) {
  return (
    <button
      className={button[type]}
      type="button"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  label: 'Button',
};
