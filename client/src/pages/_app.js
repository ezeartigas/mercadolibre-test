import SWRConfigProvider from '@context/SWRConfigProvider';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
   return (
      <SWRConfigProvider>
         <Component {...pageProps} />
      </SWRConfigProvider>
   );
}

export default MyApp;
