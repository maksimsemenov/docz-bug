import React from 'react'
import cn from 'classnames'
import styles from './Input.less'

const Input = ({ value, placeholder, name, label, info, error, onChange, ...rest }) => (
  <div className={styles.container}>
    <label className={styles.labelContainer} htmlFor={name}>
      <div className={cn(styles.label, !!error && styles.hasError)}>{label}</div>
      <input
        name={name}
        id={name}
        className={cn(styles.input, !!error && styles.hasError)}
        value={value}
        placeholder={placeholder}
        onChange={event => onChange(event, event.target.value)}
        {...rest}
      />
    </label>
    {!!error && <div className={styles.error}>{error}</div>}
    {!!info && !error && <div className={styles.info}>{info}</div>}
  </div>
)

export default Input
