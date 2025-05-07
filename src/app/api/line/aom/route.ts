// Required for Node.js APIs like LINE.middleware

export const runtime = 'nodejs';

import {middleware as lineMiddleware, Client, WebhookEvent} from '@line/bot-sdk';
import openAiAom from "@/adapters/outbound/openai/openai.aom";
import {NextRequest, NextResponse} from "next/server";
import {isContact} from "@/utils/line.utils";

const aomConfig = {
    channelAccessToken: process.env.AOM_CHANNEL_ACCESS_TOKEN!,
    channelSecret: process.env.AOM_CHANNEL_SECRET!,
};

const LineClient = new Client(aomConfig);

const defaultMessage = {
    cannotReadImage: 'ยังอ่านรูปภาพไม่ได้ อ่านได้แต่ข้อความคะ',
    default: 'Please try again using text chat.',
    contact: "ดูข้อมูลในเวปไซต์คะ https://chorn.in.th/about-CHORN"
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Run LINE middleware manually since App Router doesn't support Express-style middleware directly
        const middleware = lineMiddleware(aomConfig);

        // Simulate middleware processing
        const fakeRes = {
            statusCode: 200,
            end: () => {
            },
            setHeader: () => {
            },
            getHeader: () => {
            },
            removeHeader: () => {
            },
        };

        await new Promise<void>((resolve, reject) => {
            middleware(
                {...req, body} as any,
                fakeRes as any,
                (result: any) => {
                    if (result instanceof Error) return reject(result);
                    return resolve();
                }
            );
        });

        // Handle LINE webhook events
        const results = await Promise.all(body.events.map(handleEvents));
        return NextResponse.json(results);
    } catch (err: any) {
        console.error('Webhook error:', err);
        return NextResponse.json({error: 'Webhook processing failed'}, {status: 500});
    }
}

async function handleEvents(event: WebhookEvent) {
    if (event.type !== 'message') return null;

    const {message} = event;

    switch (message.type) {
        case 'image':
            return LineClient.replyMessage(event.replyToken, [
                {
                    type: 'text',
                    text: defaultMessage.cannotReadImage,
                    // quoteToken: message.quoteToken ?? undefined,
                },
            ]);

        case 'text':
            if (isContact(message.text)) {
                return LineClient.replyMessage(event.replyToken, [
                    {
                        type: 'text',
                        text: defaultMessage.contact,
                        // quoteToken: message.quoteToken ?? undefined,
                    },
                ]);
            }

            const replyText: any = await openAiAom(message.text)
            return LineClient.replyMessage(event.replyToken, [
                {
                    type: 'text',
                    text: replyText,
                    // quoteToken: message.quoteToken ?? undefined,
                },
            ]);

        case 'sticker':
            return LineClient.replyMessage(event.replyToken, [
                {
                    type: 'text',
                    text: 'Do you have any further questions?',
                    // quoteToken: message.quoteToken ?? undefined,
                },
            ]);

        default:
            return LineClient.replyMessage(event.replyToken, [
                {
                    type: 'text',
                    text: defaultMessage.default,
                },
            ]);
    }
}