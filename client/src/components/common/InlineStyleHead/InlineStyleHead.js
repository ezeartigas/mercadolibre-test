/* eslint-disable react/no-danger */
import fs from 'fs';
import path from 'path';
import { Head } from 'next/document';

export default class InlineStylesHead extends Head {
   getCssLinks({ allFiles }) {
      return allFiles
         .filter((file) => file.endsWith('.css'))
         .map((file) => {
            return (
               <style
                  key={file}
                  nonce={this.props.nonce}
                  dangerouslySetInnerHTML={{
                     __html: fs.readFileSync(path.join('.next', file), 'utf-8'),
                  }}
               />
            );
         });
   }
}
