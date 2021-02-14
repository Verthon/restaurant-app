import React from 'react';

import styles from './LoadingIndicator.module.scss'

export const LoadingIndicator = () => {
  return (
    <div className={styles.loader}><div></div><div></div><div></div><div></div></div>
  );
};