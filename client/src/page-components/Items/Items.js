import { ProductList } from '@components/domain';
import { MasterLayout } from '@components/layout';

export default function Items() {
   return (
      <MasterLayout showBreadcrum>
         <ProductList />
      </MasterLayout>
   );
}
