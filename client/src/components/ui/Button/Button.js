import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

export default function Button(props) {
   const { label, onClick } = props;

   return (
      <button className={styles.container} onClick={onClick}>
         {label}
      </button>
   );
}

Button.propTypes = {
   label: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
};
