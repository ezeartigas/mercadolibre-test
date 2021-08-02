import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header() {
   const router = useRouter();

   const handleSubmit = (e) => {
      e.preventDefault();
      const value = e.target.search.value;

      if (value) {
         router.push({
            pathname: '/items',
            query: {
               search: value,
            },
         });
      }
   };

   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <div className={styles.content}>
               <Link href="/">
                  <a className={styles.logo}>MercadoLibre</a>
               </Link>

               <form className={styles.searchBar} onSubmit={handleSubmit}>
                  <input name="search" type="text" placeholder="Nunca dejes de buscar" />
                  <button title="Buscar" />
               </form>
            </div>
         </div>
      </header>
   );
}
