import { NextResponse } from "next/server";
import {
  getAllSmartMobilityChiangMaiContent,
  getSmartMobilityChiangMaiContent,
} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const locale = searchParams.get("locale") || "en";
  const slug = searchParams.get("slug");

  try {
    if (slug) {
      const content = await getSmartMobilityChiangMaiContent(locale, slug);
      return NextResponse.json(content, { status: 200 });
    }

    const items = await getAllSmartMobilityChiangMaiContent();
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Smart Mobility Chiang Mai content failed to load";
    return NextResponse.json({ error: message }, { status: 404 });
  }
}
