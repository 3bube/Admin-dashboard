import { primaryRequest } from "./newRequest";

export const fetchPurchasesData = async () => {
  const response = await primaryRequest.get("/purchases");
  return response.data;
};
