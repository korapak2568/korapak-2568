import { NextResponse } from "next/server";
import { getSmartMobilityLandingContent } from "@/lib/platform-content/smartMobilityContent";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  return NextResponse.json(await getSmartMobilityLandingContent(locale));
}
