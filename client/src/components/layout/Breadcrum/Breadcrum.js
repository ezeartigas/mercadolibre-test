import { breadcrum_mock } from '@mock/breadcrum';
import cn from 'classnames';
import React from 'react';
import styles from './Breadcrum.module.scss';

export default function Breadcrum() {
   // mostramos los items del breadcrum
   const renderItems = () => {
      // iteramos
      return breadcrum_mock.map((x, i) => {
         // vemos si es el ultimo item del breadcrum
         const isLastItem = i >= breadcrum_mock.length - 1;

         // creamos una clase dinamica,
         // en el caso que sea el ultimo item lo marcamos mas oscuro
         const className = cn({
            [styles.item]: true,
            [styles.item__active]: isLastItem,
         });

         return (
            <div key={x.id} className={className}>
               <span className={styles.name}>{x.name}</span>

               {/* Separador entre cada item (simbolo ">") */}
               {!isLastItem && <span className={styles.separator}>&gt;</span>}
            </div>
         );
      });
   };

   return <div className={styles.container}>{renderItems()}</div>;
}
