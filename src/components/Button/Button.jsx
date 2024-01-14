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

Button.defaultProps = {
  clickFunction: null,
  type: 'primary',
  label: 'Button',
};
