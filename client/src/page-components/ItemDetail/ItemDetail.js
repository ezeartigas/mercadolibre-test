import { MasterLayout } from '@components/layout';
import { Button } from '@components/ui';
import { product_detail_mock } from '@mock/product-detail';
import { TEXT_PRODUCT_CONDITION } from '@utils/constants';
import formatPrice from '@utils/format-price';
import Image from 'next/image';
import styles from './ItemDetail.module.scss';

const {
   item: { condition, description, free_shipping, picture, price, sold_quantity, title },
} = product_detail_mock;

export default function ItemDetail() {
   const handleClick = () => {
      console.log('comprar');
   };

   return (
      <MasterLayout showBreadcrum>
         <div className={styles.container}>
            <div className={styles.image}>
               <Image src={picture} alt={title} width="680" height="680" objectFit="contain" />
            </div>

            <div className={styles.summary}>
               <div className={styles.summary__condition}>
                  <span>{TEXT_PRODUCT_CONDITION[condition]} - </span>
                  <span>{sold_quantity} vendidos</span>
               </div>

               <h1 className={styles.summary__title}>{title}</h1>
               <h2 className={styles.summary__price}>${formatPrice(price.amount)}</h2>

               <Button label="Comprar" onClick={handleClick} />
            </div>

            <div className={styles.description}>
               <span className={styles.description__title}>Descripción del producto</span>
               <span className={styles.description__text}>{description}</span>
            </div>
         </div>
      </MasterLayout>
   );
}
