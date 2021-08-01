import Document, { Html, Main, NextScript } from 'next/document';
import { InlineStyleHead } from '@components/common';

class MyDocument extends Document {
   render() {
      return (
         <Html>
            <InlineStyleHead>
               {/* Favicon */}
               <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
               <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
               <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
               <link rel="manifest" href="/site.webmanifest" />
               <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fff159" />
               <meta name="msapplication-TileColor" content="#fff159" />
               <meta name="theme-color" content="#000000" />

               {/* Google fonts */}
               <link
                  href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600&display=swap"
                  rel="stylesheet"
               />
            </InlineStyleHead>

            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
