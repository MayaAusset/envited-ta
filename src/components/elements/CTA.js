import React from 'react';
import styles from './CTA.module.scss';

const CTA = (props) => {
  const { onClickAction, children } = props;
  return (
    <div className={styles.cta}>
      <button onClick={() => onClickAction()}>{children}</button>
    </div>
  );
};

export default CTA;
