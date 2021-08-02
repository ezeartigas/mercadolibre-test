import React from 'react';
import PropTypes from 'prop-types';
import styles from './MasterLayout.module.scss';
import Header from '../Header/Header';
import Breadcrum from '../Breadcrum/Breadcrum';

export default function MasterLayout(props) {
   const { breadcrumData, children } = props;

   return (
      <div className={styles.container}>
         {/* Header & searchbar */}
         <Header />

         {/* Contenido general */}
         <div className={styles.content}>
            {/* Breadcrum */}
            {breadcrumData && <Breadcrum data={breadcrumData} />}

            {children}
         </div>
      </div>
   );
}

MasterLayout.propTypes = {
   title: PropTypes.string,
   breadcrumData: PropTypes.array,
};
