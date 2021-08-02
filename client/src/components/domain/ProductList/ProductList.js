import { useSearchItems } from '@api/items';
import { useRouter } from 'next/router';
import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import styles from './ProductList.module.scss';

export default function ProductList() {
   const router = useRouter();
   const { data, loading, error } = useSearchItems();

   // si no hay query param lo redireccionamos al home
   if (router.isReady && !router.query.search) {
      router.push('/');
   }

   // mostramos los 4 primeros resultados
   const renderProducts = () => {
      return data?.items.slice(0, 4).map((item) => <ProductItem key={item.id} {...item} />);
   };

   return (
      <ul className={styles.container}>
         {loading && <span>buscando...</span>}
         {error && <span>ocurrio un error!</span>}
         {renderProducts()}
      </ul>
   );
}
