import { Address } from "@starknet-react/chains";

export type Asset = {
  category: AssetCategory;
  address: Address;
  id: number;
  amount: number;
};

export enum AssetCategory {
  ERC20,
  ERC721,
  ERC1155,
}
