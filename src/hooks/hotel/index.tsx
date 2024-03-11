import HotelApi from '@/api/hotel';
import { useQuery } from '@tanstack/react-query';

const useGetProduct = (filter:string="") => {
  const queryKey = ['hotel/',filter];
  const { data, isLoading, isError } = useQuery(queryKey, HotelApi.readAll);
  return { data, isError, isLoading };
};

export default useGetProduct;