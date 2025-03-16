import { secondaryRequest } from "./newRequest";

export const fetchTopSellingProducts = async () => {
  const response = await secondaryRequest.get("/selling-products");
  return response.data;
};
