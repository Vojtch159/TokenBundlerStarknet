"use client";
import { useAccount } from "@starknet-react/core";
import { Button } from "./ui/Button";
import { AccountInterface, CallData, Contract, cairo } from "starknet";
import { bundler_address, mock_erc20_address } from "@/common/config";
import { getProvider } from "@/common/provider";
import { Address } from "@starknet-react/chains";
import { ABI as Bundler_ABI } from "@/contract_abis/bundler_abi";
import { Asset, AssetCategory } from "@/common/types";

async function wrap(account: AccountInterface, assets: Asset[]) {
    const { transaction_hash } = await account.execute({
        contractAddress: bundler_address,
        entrypoint: "create",
        calldata: CallData.compile({
            assets: assets,
        }),
    });
    await getProvider().waitForTransaction(transaction_hash);
}

async function unwrap(account: AccountInterface, id: number) {
    const { transaction_hash } = await account.execute({
        contractAddress: bundler_address,
        entrypoint: "burn",
        calldata: CallData.compile({
            id: cairo.uint256(id),
        }),
    });
    await getProvider().waitForTransaction(transaction_hash);
}


async function get_bundle_info(owner: Address, id: number) {
    const provider = getProvider();
    const bundler = new Contract(Bundler_ABI, bundler_address, provider);
    const bundle_call = bundler.populate('bundle', [cairo.uint256(id)]);
    const tokens_call = bundler.populate('tokensInBundle', [cairo.uint256(id)]);
    const bundle = await bundler.bundle(bundle_call.calldata);
    const tokens = await bundler.tokensInBundle(tokens_call.calldata);
    console.log(bundle, tokens);
    return { bundle, tokens };
}

export default function Bundler() {
    const account = useAccount();
    if (!account.account) return <div />;
    return (
        <div>
            <Button
                onClick={() => wrap(account.account as AccountInterface, [])}
                className="mr-2 gap-x-2"
            >
                wrap
            </Button>
            <Button
                onClick={() => unwrap(account.account as AccountInterface, 0)}
                className="mr-2 gap-x-2"
            >
                unwrap
            </Button>
            <Button
                onClick={() => get_bundle_info(account.address as Address, 0)}
                className="mr-2 gap-x-2"
            >
                get bundle info
            </Button>
        </div>
    );
}
