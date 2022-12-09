import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  orders?: Array<Order>;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
