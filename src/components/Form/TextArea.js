import React from 'react';
import '../../sass/pages/_form.scss';

function TextArea(props) {
  return (
    <div className='form-group'>
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        maxLength={200}
        rows="5" cols="50"
        className="form-input"
        placeholder={props.placeholder}
        onChange={(e) => props.setTextAreaValues(e.target.value)}
        value={props.value}
      >
      </textarea>
    </div>
  )
}

export default TextArea