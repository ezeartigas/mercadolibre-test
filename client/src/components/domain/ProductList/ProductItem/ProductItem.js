import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import styles from './ProductItem.module.scss';

export default function ProductItem(props) {
   const { title, thumbnail, shipping, address } = props;
   const priceFormatted = props.price.toLocaleString('es-AR');

   return (
      <li>
         <Link href="/">
            <a href="#" className={styles.container}>
               {/* Image */}
               <div className={styles.image}>
                  <Image src={thumbnail} alt={title} width="180" height="180" objectFit="contain" />
               </div>

               {/* Side content */}
               <div className={styles.content}>
                  {/* Price & free shipping icon */}
                  <div className={styles.priceWrapper}>
                     <span className={styles.price}>$ {priceFormatted}</span>

                     {shipping.free_shipping && (
                        <Image
                           src="/assets/icon-free-shipping.png"
                           alt="Envio gratis"
                           width="18"
                           height="18"
                           objectFit="contain"
                        />
                     )}
                  </div>

                  {/* Title */}
                  <h2 className={styles.title}>{title}</h2>
               </div>

               {/* Address */}
               <span className={styles.address}>{address.state_name}</span>
            </a>
         </Link>
      </li>
   );
}
