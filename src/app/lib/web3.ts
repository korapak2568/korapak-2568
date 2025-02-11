// src/utils/web3/index.ts

import Web3 from 'web3';
import * as fs from 'fs';
import path from 'path';
import {config} from 'dotenv';

// Load environment variables
config();

// Load contract ABI
const contractPath = path.join(process.cwd(), 'public/contracts/Message.json');
const contractJson = JSON.parse(fs.readFileSync(contractPath, 'utf8'));

const RPC_URL = process.env.RPC_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS as string;

// Web3 setup
const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);

// Contract instance
const contract = new web3.eth.Contract(contractJson.abi, CONTRACT_ADDRESS, {
    from: account.address,
});

export {web3, contract, account};
