import React from 'react';
import '../../sass/pages/_form.sass';

export default function TextArea(props) {

  // ========================
  // TEXTAREA INPUT HANDLING
  // ========================

  return (
    <div className='form-group'>

      {/* ======================== */}
      {/* TEXTAREA LABEL */}
      {/* ======================== */}
      <label htmlFor="message" className='label'>
        Message
      </label>

      {/* ======================== */}
      {/* TEXTAREA FIELD */}
      {/* ======================== */}
      <textarea
        id="message"
        name="message"
        maxLength={200}
        rows="5" cols="50"
        className="form-input"
        placeholder={props.placeholder}
        onChange={(e) => props.setTextAreaValues(e.target.value)}
        value={props.value}
        required
        aria-label="Message"
      />

      {/* ======================== */}
      {/* CHARACTER COUNTER */}
      {/* ======================== */}
      <span className="textarea-count">
        {props.value.length} / 200
      </span>
    </div>
  )
}