import { RpcProvider } from "starknet";
import { network } from "./config";

export const getProvider = () => {
  return new RpcProvider({ nodeUrl: network.rpc_url });
};
