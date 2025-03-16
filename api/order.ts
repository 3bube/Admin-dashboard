import { primaryRequest } from "./newRequest";

export const fetchOrderData = async () => {
  const response = await primaryRequest.get("/orders");
  return response.data;
};
