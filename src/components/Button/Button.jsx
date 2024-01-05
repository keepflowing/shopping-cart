import PropTypes from 'prop-types';
import style from './Button.module.css';

export default function Button({ clickFunction, label, type }) {
  return (
    <button
      onClick={clickFunction}
      className={style[type]}
      type="button"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  clickFunction: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  clickFunction: null,
  type: 'primary',
  label: 'Button',
};
