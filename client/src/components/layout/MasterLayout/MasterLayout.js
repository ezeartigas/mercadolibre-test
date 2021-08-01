import Head from 'next/head';
import React from 'react';
import renderTitle from './utils/render-title';
import PropTypes from 'prop-types';
import styles from './MasterLayout.module.scss';
import Header from '../Header/Header';

export default function MasterLayout(props) {
   const { title, children } = props;

   return (
      <>
         <Head>
            {/* Mostramos un titulo especifico o uno por default */}
            <title>{renderTitle(title)}</title>
         </Head>

         <div className={styles.container}>
            {/* Header & searchbar */}
            <Header />

            {/* Contenido general */}
            <div className={styles.content}>{children}</div>
         </div>
      </>
   );
}

MasterLayout.propTypes = {
   title: PropTypes.string,
};
