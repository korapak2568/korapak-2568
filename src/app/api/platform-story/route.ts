import { NextResponse } from "next/server";
import { getPlatformStoryContent } from "@/lib/platform-content/storyContent";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "en";

  return NextResponse.json(await getPlatformStoryContent(locale));
}
