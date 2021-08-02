import { MasterLayout } from '@components/layout';
import { Button } from '@components/ui';
import { TEXT_PRODUCT_CONDITION } from '@utils/constants';
import formatPrice from '@utils/format-price';
import Image from 'next/image';
import styles from './ItemDetail.module.scss';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function ItemDetail(props) {
   const { item } = props;
   const router = useRouter();
   const { condition, description, picture, price, sold_quantity, title, categories } = item;
   const priceFormatted = formatPrice(price);

   const handleClick = () => {
      console.log('comprar');
   };

   return (
      <MasterLayout breadcrumData={categories}>
         <NextSeo
            title={title}
            description={`Compralo en Mercado Libre a $ ${priceFormatted}.`}
            openGraph={{
               url: router.asPath,
               title,
               description,
               images: [{ url: picture }],
               site_name: 'MercadoLibre',
            }}
            twitter={{
               handle: '@handle',
               site: '@site',
               cardType: 'summary_large_image',
            }}
         />

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
               <h2 className={styles.summary__price}>${priceFormatted}</h2>

               <Button label="Comprar" onClick={handleClick} />
            </div>

            <div className={styles.description}>
               <span className={styles.description__title}>Descripción del producto</span>
               <p className={styles.description__text}>{description}</p>
            </div>
         </div>
      </MasterLayout>
   );
}
