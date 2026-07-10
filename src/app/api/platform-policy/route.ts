import { NextRequest, NextResponse } from "next/server";
import {
  getPlatformPolicyContent,
  isPlatformPolicyType,
} from "@/lib/platform-content/policyContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const policyType = request.nextUrl.searchParams.get("policy");

  if (!isPlatformPolicyType(policyType)) {
    return NextResponse.json({ error: "A valid policy is required" }, { status: 400 });
  }

  const content = await getPlatformPolicyContent(policyType, locale);

  return NextResponse.json(content);
}
