import { Address } from "@starknet-react/chains";

const NETWORKS = {
  mainnet: {
    name: "mainnet",
    feeder_gateway_url: "https://alpha-mainnet.starknet.io/feeder_gateway",
    gateway_url: "https://alpha-mainnet.starknet.io/gateway",
  },
  goerli: {
    name: "goerli",
    explorer_url: "https://goerli.voyager.online",
    rpc_url: ``,
    feeder_gateway_url: "https://alpha4.starknet.io/feeder_gateway",
    gateway_url: "https://alpha4.starknet.io/gateway",
  },
  sepolia: {
    name: "sepolia",
    explorer_url: "https://sepolia.voyager.online",
    rpc_url: ``,
    feeder_gateway_url: "https://alpha-sepolia.starknet.io/feeder_gateway",
    gateway_url: "https://alpha-sepolia.starknet.io/gateway",
  },
  devnet: {
    name: "devnet",
    explorer_url: null,
    rpc_url: "http://localhost:5050/rpc",
    feeder_gateway_url: null,
    gateway_url: null,
  },
} as const;

export const network = NETWORKS["devnet"];

export const bundler_address = "" as Address;
export const mock_erc20_address = "" as Address;
export const mock_erc721_address = "" as Address;
export const mock_erc1155_address = "" as Address;
