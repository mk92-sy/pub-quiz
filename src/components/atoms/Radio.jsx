import css from './Radio.module.scss';

const Radio = ({ name, value, onChange, children, defaultChecked }) => {
  return (
    <label className={css.label}>
      <input type="radio" name={name} value={value} onChange={onChange} className={css.radio} defaultChecked={defaultChecked} /> {children}
    </label>
  )
}

export default Radio;