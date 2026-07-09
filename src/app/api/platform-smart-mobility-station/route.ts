import { NextResponse } from "next/server";
import { getSmartMobilityStationDetailContent } from "@/lib/platform-content/smartMobilityContent";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const locale = searchParams.get("locale") || "en";

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const content = await getSmartMobilityStationDetailContent(slug, locale);

  if (!content) {
    return NextResponse.json({ error: "Station not found" }, { status: 404 });
  }

  return NextResponse.json(content);
}
