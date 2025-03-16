import { secondaryRequest } from "./newRequest";

export const fetchSalesData = async () => {
  const response = await secondaryRequest.get("/sales");

  return response.data;
};
