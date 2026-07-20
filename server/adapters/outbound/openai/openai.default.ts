import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: process.env.DEEPSEEK_API_URL,
  apiKey: process.env.DEEPSEEK_API_KEY,
});

const openaiDefaultCreate = async (prompt: string) => {
  return openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "",
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

export default async function openaiDefault(prompt: any) {
  try {
    const result = await openaiDefaultCreate(prompt);
    const content = result.choices[0]?.message?.content;
    return content ? content.replaceAll("**", "") : null;
  } catch (error) {
    return error;
  }
}
