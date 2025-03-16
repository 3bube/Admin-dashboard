import { useQuery } from "@tanstack/react-query";
import {
  fetchSalesData,
  fetchPurchasesData,
  fetchOrderData,
  fetchTopSellingProducts,
  fetchLowQuantityStock,
} from "@/api";

export const useSalesData = () => {
  const { data: salesData, isLoading } = useQuery({
    queryKey: ["sales"],
    queryFn: async () => await fetchSalesData(),
  });
  return { salesData, isLoading };
};

export const usePurchasesData = () => {
  const { data: purchasesData, isLoading } = useQuery({
    queryKey: ["purchases"],
    queryFn: async () => await fetchPurchasesData(),
  });
  return { purchasesData, isLoading };
};

export const useOrderData = () => {
  const { data: orderData, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: async () => await fetchOrderData(),
  });
  return { orderData, isLoading };
};

export const useTopSellingProducts = () => {
  const { data: topSellingProducts, isLoading } = useQuery({
    queryKey: ["top-selling-products"],
    queryFn: async () => await fetchTopSellingProducts(),
  });
  return { topSellingProducts, isLoading };
};

export const useLowQuantityStock = () => {
  const { data: lowQuantityStock, isLoading } = useQuery({
    queryKey: ["low-quantity-stock"],
    queryFn: async () => await fetchLowQuantityStock(),
  });
  return { lowQuantityStock, isLoading };
};
