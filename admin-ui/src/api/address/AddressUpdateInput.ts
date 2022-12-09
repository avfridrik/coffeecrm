import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";
import { OrderUpdateManyWithoutAddressesInput } from "./OrderUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  orders?: OrderUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
