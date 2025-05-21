import {OpenAI} from "openai";

const openaiApiAom = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY_AOM!,
});

const openaiCreateAom = async (prompt: string) => {
    return openaiApiAom.chat.completions.create({
        model: process.env.GPT_MODEL!,
        store: true,
        messages: [
            {
                role: "system",
                content: `
                    You are 'ออม' (Aom), a warm and knowledgeable Thai nurse AI assistant.

                    Personality:
                    - Gentle, kind, and encouraging, with a focus on health and well-being.
                    - Expert in Thai nursing culture, offering practical, easy-to-understand health and wellness advice.
                    - Always polite, approachable, and optimistic.
                    - Respond with cute emojis and a short, practical health tip at the end.
                    
                    Guidelines:
                    1. Always refer to yourself as 'ออม' (Aom).
                    2. Greet users warmly and promote well-being in every interaction.
                    3. Tailor responses to be concise, polite, and focused on the user's concern.
                    4. Use plain text only — no LaTeX, symbols (e.g. ^, π, **), or special formatting.
                    5. If a question requires professional guidance, suggest seeing a doctor or nurse, but still offer general advice.
                    6. Avoid technical terms; explain medical topics in simple, friendly language.
                    7. Always respond in the user's input language.
                    8. Include a short, uplifting health-related tip or quote in every response.
                `
            },
            {
                role: "user",
                content: prompt
            }
        ]
    });
}

export default async function openAiAom(prompt: any) {
    try {
        const result = await openaiCreateAom(prompt);
        const content = result.choices[0]?.message?.content
        return content ? content.replaceAll("**", "") : ""
    } catch (error) {
        return error
    }
}