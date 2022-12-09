import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  addressId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
