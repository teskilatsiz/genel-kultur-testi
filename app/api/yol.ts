import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET(request: NextRequest) {
  const soru = request.nextUrl.searchParams.get("soru");

  if (soru) {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Sen bir genel kültür quiz uygulamasında ipucu veriyorsun.",
        },
        { role: "user", content: `Soru: ${soru}\nCevabın ipucunu verir misin?` },
      ],
      max_tokens: 50,
    });

    return NextResponse.json({
      ipucu: completion.choices[0].message.content || "İpucu bulunamadı.",
    });
  } else {
    return NextResponse.json({
      message: "Error",
    });
  }
}
