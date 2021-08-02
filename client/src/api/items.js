import useSWR from 'swr';

export const useSearchItems = (query) => {
   const { data, error } = useSWR(query ? `/items?q=${query}` : null);

   const loading = !data && !error;

   return { data, error, loading };
};
