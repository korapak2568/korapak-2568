// src/app/api/store-message/route.ts

import {NextRequest, NextResponse} from 'next/server';
import {contract, account} from '../../lib/web3';

export async function POST(req: NextRequest) {
    try {
        const {message} = await req.json();

        if (!message) {
            return NextResponse.json({error: 'Message is required'}, {status: 400});
        }

        const tx = await contract.methods.storeMessage(message).send({
            from: account.address,
        });

        return NextResponse.json({success: true, transactionHash: tx.transactionHash});
    } catch (error) {
        const err = error as Error
        return NextResponse.json({error: err.message}, {status: 500});
    }
}
