import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function main() {
  const imagePath = "hgaadvokatgronvall.c1073c18445a94ae9356.png";
  if (!fs.existsSync(imagePath)) {
    console.error("Image file does not exist");
    return;
  }
  const base64Data = fs.readFileSync(imagePath).toString("base64");
  console.log("Analyzing image using Gemini...");
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: [
      {
        inlineData: {
          mimeType: "image/png",
          data: base64Data,
        }
      },
      "This image shows the original logo/branding of a law firm. Please analyze this image and answer:\n1) What exact text is in the logo?\n2) What is the layout, typography style, font weight, letter spacing, and alignment?\n3) What font does it appear to be (or very close to, e.g. Cinzel, Cormorant Garamond, Georgia, Garamond, Times New Roman, Playfair Display)?\n4) Is there any emblem, monogram, or graphic element? Describe its shape, line styles, details, and exact position relative to the text.\n5) What are the colors used (in hex if possible)?\n6) What is the approximate aspect ratio or size?\n7) Provide any guidance for recreting it precisely as an SVG."
    ]
  });
  console.log("\n--- GEMINI LOGO ANALYSIS ---");
  console.log(response.text);
  console.log("----------------------------");
}

main().catch(console.error);
