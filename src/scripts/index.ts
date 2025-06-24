import { GoogleGenAI } from '@google/genai';

async function main() {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,  // or your env var
  });

  const modelName = 'gemini-2.5-pro';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const result = await ai.models.generateContent({
    model: modelName,
    contents,
  });

  const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  console.log(responseText);
}

main();
