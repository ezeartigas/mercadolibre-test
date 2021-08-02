import { axiosClient } from '@utils/axios-client';
import useSWR from 'swr';

export const useSearchItems = (query) => {
   const { data, error } = useSWR(query ? `/items?q=${query}` : null);

   const loading = !data && !error;

   return { data, error, loading };
};

export const getItem = async (id) => {
   return await axiosClient.get(`/items/${id}`).catch(() => {});
};
