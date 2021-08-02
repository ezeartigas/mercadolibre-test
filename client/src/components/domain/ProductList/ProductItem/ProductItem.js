import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import styles from './ProductItem.module.scss';
import formatPrice from '@utils/format-price';

export default function ProductItem(props) {
   const { id, title, picture, free_shipping, address, price } = props;

   return (
      <li>
         <Link href={`/items/${id}`}>
            <a className={styles.container}>
               {/* Image */}
               <div className={styles.image}>
                  <Image src={picture} alt={title} width="180" height="180" objectFit="contain" />
               </div>

               {/* Side content */}
               <div className={styles.content}>
                  {/* Price & free shipping icon */}
                  <div className={styles.priceWrapper}>
                     <span className={styles.price}>$ {formatPrice(price)}</span>

                     {free_shipping && (
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
