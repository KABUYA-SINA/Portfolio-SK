import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! This is not the web page you are looking for.</p>
      <Link to="/" className="btn-error">
        Please return to Home page
      </Link>
    </div>
  );
}