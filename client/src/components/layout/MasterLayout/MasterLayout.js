import Head from 'next/head';
import React from 'react';
import renderTitle from './utils/render-title';
import PropTypes from 'prop-types';
import styles from './MasterLayout.module.scss';
import Header from '../Header/Header';
import Breadcrum from '../Breadcrum/Breadcrum';

export default function MasterLayout(props) {
   const { showBreadcrum, children } = props;

   return (
      <div className={styles.container}>
         {/* Header & searchbar */}
         <Header />

         {/* Contenido general */}
         <div className={styles.content}>
            {/* Breadcrum */}
            {showBreadcrum && <Breadcrum />}

            {children}
         </div>
      </div>
   );
}

MasterLayout.propTypes = {
   title: PropTypes.string,
   showBreadcrum: PropTypes.bool,
};
