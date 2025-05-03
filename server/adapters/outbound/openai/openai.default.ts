import {OpenAI} from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

export default async function openaiDefault(prompt: string) {
    const completion = await openai.chat.completions.create({
        model: process.env.GPT_MODEL!,
        messages: [{role: "user", content: prompt}],
    });

    return completion.choices[0].message.content
}