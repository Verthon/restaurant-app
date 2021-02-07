import React from 'react';

import './LoadingIndicator.module.scss'

export const LoadingIndicator = () => {
  return (
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  );
};