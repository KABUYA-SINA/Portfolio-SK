import React, { useState } from 'react';
import '../../sass/pages/_form.sass';

export default function FormInput(props) {
  const [focused, setFocused] = useState(false)

  const { label, onChange, errorMessage, ...inputProps } = props

  // ========================
  // INPUT FOCUS STATE
  // ========================
  function handleFocus(e) {
    setFocused(true)
  }

  return (
    <div className='form-group'>

      {/* ======================== */}
      {/* INPUT LABEL */}
      {/* ======================== */}
      <label htmlFor={props.id} className='label'>
        {label}
      </label>

      {/* ======================== */}
      {/* INPUT FIELD */}
      {/* ======================== */}
      <input
        {...inputProps}
        id={props.id}
        onChange={onChange}
        onBlur={handleFocus}
        data-focused={focused}
        aria-invalid={focused && errorMessage ? true : false}
        aria-describedby={`${props.id}-error`}
      />

      {/* ======================== */}
      {/* ERROR MESSAGE */}
      {/* ======================== */}
      <span
        id={`${props.id}-error`}
        className='alert'
      >
        {errorMessage}
      </span>
    </div>
  )
}