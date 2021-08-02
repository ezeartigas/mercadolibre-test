import { getItem } from '@api/items';
export { ItemDetail as default } from '@page-components';

export async function getStaticPaths() {
   return {
      paths: [],
      fallback: 'blocking',
   };
}

export async function getStaticProps(context) {
   // guardamos el id que le pasamos por parametro
   const { id } = context.params;
   console.log(`pre-render id`, id);

   // obtenemos el detalle del producto
   const result = await getItem(id);

   // si no hay resultado redireccionamos al home
   if (!result) {
      return {
         redirect: {
            destination: '/',
            permanent: false,
         },
      };
   }

   // retornamos como props todo el detalle del item
   return {
      props: {
         item: result.data,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10,
   };
}
