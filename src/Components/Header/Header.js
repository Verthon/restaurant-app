import React from 'react';

const Header  = (props) => {
  return (
    <header className="site-header">
      {props.children}
    </header>
  );
}

export default Header;