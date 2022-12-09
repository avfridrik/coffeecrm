import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";
import { OrderCreateNestedManyWithoutAddressesInput } from "./OrderCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  orders?: OrderCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
