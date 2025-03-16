import { secondaryRequest } from "./newRequest";

export const fetchLowQuantityStock = async () => {
  const response = await secondaryRequest.get("/low-quantity-stock");
  return response.data;
};
