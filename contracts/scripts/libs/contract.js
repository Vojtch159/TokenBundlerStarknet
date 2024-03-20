import "dotenv/config";
import * as fs from "fs";
import { json } from "starknet";
import { getNetwork, getAccount } from "./network.js";

const declare = async (filepath, contract_name) => {
  console.log(`\nDeclaring ${contract_name}...`);
  const compiledSierraCasm = filepath.replace(
    ".contract_class.json",
    ".compiled_contract_class.json"
  );
  const compiledFile = json.parse(fs.readFileSync(filepath).toString("ascii"));
  const compiledSierraCasmFile = json.parse(
    fs.readFileSync(compiledSierraCasm).toString("ascii")
  );
  const account = getAccount();
  const contract = await account.declareIfNot({
    contract: compiledFile,
    casm: compiledSierraCasmFile,
  });

  const network = getNetwork(process.env.STARKNET_NETWORK);
  console.log(`- Class Hash: ${contract.class_hash}`);
  if (contract.transaction_hash) {
    console.log(
      `- Tx Hash: ${contract.transaction_hash})`
    );
    await account.waitForTransaction(contract.transaction_hash);
  } else {
    console.log("- Tx Hash: ", "Already declared");
  }

  return contract;
};

export const deployBundler = async (path) => {
  const account = getAccount();
  const bundler = await declare(process.env.PATH_TO_CASM_COMPILE, "TokenBundler");

  console.log(`\nDeploying Bundler...`);
  console.log("Owner: ", process.env.STARKNET_ACCOUNT_ADDRESS);
  console.log("Bundler class hash: ", bundler.class_hash);

  const contract = await account.deployContract({
    classHash: bundler.class_hash,
    constructorCalldata: [
      process.env.STARKNET_ACCOUNT_ADDRESS,
    ],
  });

  const network = getNetwork(process.env.STARKNET_NETWORK);
  console.log(`Tx hash: ${contract.transaction_hash}`);
  await account.waitForTransaction(contract.transaction_hash);
  console.log(`Bundler deployed at ${contract.address}`);
};
