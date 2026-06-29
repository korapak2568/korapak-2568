import {NextRequest, NextResponse} from "next/server";
import {DEFAULT_LOCALE} from "@/lib/SiteUrlLocales";
import {getPlatformOutfitContent} from "@/lib/platform-content/styleContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || DEFAULT_LOCALE;

  return NextResponse.json(getPlatformOutfitContent(locale));
}
