// src/app/api/retrieve-message/route.ts

import {NextResponse} from 'next/server';
import {contract, account} from '../../lib/web3';

export async function GET() {
    try {
        const message = await contract.methods.retrieveMessage().call({from: account.address});
        return NextResponse.json({message});
    } catch (error) {
        const err = error as Error
        return NextResponse.json({error: err.message}, {status: 500});
    }
}
