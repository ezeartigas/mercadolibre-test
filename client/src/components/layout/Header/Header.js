import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
   const handleSubmit = (e) => {
      e.preventDefault();
      const value = e.target.search.value;

      if (value) {
         console.log(`value`, value);
      }
   };

   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <div className={styles.content}>
               <div className={styles.logo}>
                  <Image
                     src="/assets/logo.png"
                     alt="MercadoLibre"
                     layout="fill"
                     objectFit="cover"
                  />
               </div>

               <form className={styles.searchBar} onSubmit={handleSubmit}>
                  <input name="search" type="text" placeholder="Nunca dejes de buscar" />
                  <button title="Buscar" />
               </form>
            </div>
         </div>
      </header>
   );
}
