import { axiosClient } from '@utils/axios-client';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export const useSearchItems = () => {
   const router = useRouter();
   const query = router.query.search;
   const { data, error } = useSWR(query ? `/items?q=${query}` : null);

   const loading = !data && !error;

   return { data, error, loading };
};

export const getItem = async (id) => {
   return await axiosClient.get(`/items/${id}`).catch(() => {});
};
