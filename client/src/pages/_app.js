import SWRConfigProvider from '@context/SWRConfigProvider';
import { DefaultSeo } from 'next-seo';
import SEO from './../../next-seo.config.js';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <DefaultSeo {...SEO} />

         <SWRConfigProvider>
            <Component {...pageProps} />
         </SWRConfigProvider>
      </>
   );
}

export default MyApp;
