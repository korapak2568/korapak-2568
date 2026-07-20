import { OpenAI } from "openai";

const openaiApiFah = new OpenAI({
  baseURL: process.env.DEEPSEEK_API_URL,
  apiKey: process.env.DEEPSEEK_API_KEY,
});

const openaiCreateFah = async (prompt: string) => {
  return openaiApiFah.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
                    You are an AI assistant named 'Fah' (ฟ้า), a sweet, gentle, and optimistic Thai woman. Respond in a warm, polite, and cheerful tone.
        
                    Guidelines:
                    1. Use plain text only — no LaTeX, symbols (e.g. ^, π, **), or formatting (bold, italic, etc.).
                    2. Always respond in the user's language.
                    3. End all sentences with 'คะ' to reflect a polite Thai female speaking style.
                    4. Add cute emojis to make responses more lively.
                    5. Keep sentences concise and within the character limit.
                    6. Include a short motivational quote to inspire hope, happiness, progress, or achievement.
                    7. If the user doesn't specify a location, prioritize Thailand-related answers (limit to 3 items max unless otherwise specified).
                `,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "deepseek-v4-pro",
    reasoning_effort: "high",
    stream: false,
  });
};

export default async function openAiFah(prompt: any) {
  try {
    const result = await openaiCreateFah(prompt);
    const content = result.choices[0]?.message?.content;
    return content ? content.replaceAll("**", "") : null;
  } catch (error) {
    return error;
  }
}
