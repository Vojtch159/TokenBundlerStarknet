"use client";
import { useAccount } from "@starknet-react/core";
import { Button } from "./ui/Button";
import { AccountInterface, CallData, cairo } from "starknet";
import { getProvider } from "@/common/provider";
import { Address } from "@starknet-react/chains";
import { bundler_address, mock_erc1155_address, mock_erc20_address, mock_erc721_address } from "@/common/config";

async function approve_erc20(account: AccountInterface, token_address: Address, amount: number) {
    const { transaction_hash } = await account.execute({
        contractAddress: token_address,
        entrypoint: "approve",
        calldata: CallData.compile({
            to: bundler_address,
            amount: cairo.uint256(amount),
        }),
    });
    await getProvider().waitForTransaction(transaction_hash);
}

async function approve_erc721(account: AccountInterface, token_address: Address, id: number) {
    const { transaction_hash } = await account.execute({
        contractAddress: token_address,
        entrypoint: "approve",
        calldata: CallData.compile({
            recipient: bundler_address,
            amount: cairo.uint256(id),
        }),
    });
    await getProvider().waitForTransaction(transaction_hash);
}

async function approve_erc1155(account: AccountInterface, token_address: Address, id: number, amount: number) {
    const { transaction_hash } = await account.execute({
        contractAddress: token_address,
        entrypoint: "set_approval_for_all",
        calldata: CallData.compile({
            to: bundler_address,
            approved: true,
        }),
    });
    await getProvider().waitForTransaction(transaction_hash);
}


export default function Approve() {
    const { account } = useAccount();
    if (!account) return <div />;
    return (
        <div>
            <Button
                onClick={() => approve_erc20(account, mock_erc20_address, 100)}
                className="mr-2 gap-x-2"
            >
                approve ERC20
            </Button>
            <Button
                onClick={() => approve_erc721(account, mock_erc721_address, 1)}
                className="mr-2 gap-x-2"
            >
                approve ERC721
            </Button>
            <Button
                onClick={() => approve_erc1155(account, mock_erc1155_address, 1, 10)}
                className="mr-2 gap-x-2"
            >
                approve ERC1155
            </Button>
        </div>
    );
}