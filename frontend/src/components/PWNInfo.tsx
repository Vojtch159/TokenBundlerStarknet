"use client";
import { useAccount } from "@starknet-react/core";

export default function PWNInfo() {
    const { address } = useAccount();
    if (!address) return <div />;
    return (
        <div>
            <p className="mx-auto p-4 max-w-screen-sm">
                This is a simple example of a StarkNet application. It allows you to interact with the StarkNet blockchain using the StarkNet React library.
            </p>
        </div>
    );
}
