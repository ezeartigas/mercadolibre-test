import { SWRConfig } from 'swr';
import { axiosClient } from '@utils/axios-client';

const config = {
   fetcher: (...args) => axiosClient.get(...args).then((res) => res.data),
   onError: (error) => {
      console.error(error.response?.data || error.message);
   },
};

export default function SWRConfigProvider({ children }) {
   return <SWRConfig value={config}>{children}</SWRConfig>;
}
