import { products_mock } from '@mock/products';
import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import styles from './ProductList.module.scss';

export default function ProductList() {
   const renderProducts = () => {
      return products_mock.map((item) => <ProductItem key={item.id} {...item} />);
   };

   return <ul className={styles.container}>{renderProducts()}</ul>;
}
