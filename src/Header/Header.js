import React from 'react';

const header  = (props) => {
  return (
    <header className="site-header">
      {props.children}
    </header>
  );
}

export default header;