import React from 'react';
import './Header.scss';

const header  = (props) => {
  return (
    <header className="site-header">
      {props.children}
    </header>
  );
}

export default header;