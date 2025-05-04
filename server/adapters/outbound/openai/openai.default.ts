import {OpenAI} from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

const openaiDefaultCreate = async (prompt: string) => {
    return openai.chat.completions.create({
        model: process.env.GPT_MODEL!,
        store: true,
        messages: [
            {
                role: "system",
                content: ""
            },
            {
                role: "user",
                content: prompt
            }
        ]
    });
}

export default async function openaiDefault(prompt: any) {
    try {
        const result = await openaiDefaultCreate(prompt);
        const content = result.choices[0]?.message?.content;
        return content ? content.replaceAll("**", "") : null
    } catch (error) {
        return error
    }
}