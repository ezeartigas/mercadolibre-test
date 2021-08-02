import { useSearchItems } from '@api/items';
import { ProductList } from '@components/domain';
import { MasterLayout } from '@components/layout';

export default function Items() {
   const { data } = useSearchItems();

   return (
      <MasterLayout breadcrumData={data?.categories}>
         <ProductList />
      </MasterLayout>
   );
}
