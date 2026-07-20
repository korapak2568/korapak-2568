"use client";

import PolicyPage from "@/components/Policy/PolicyPage";
import type {
  PlatformPolicyContent,
  PlatformPolicyType,
} from "@/lib/platform-content/policyContent";

export default function PlatformPolicyPage({
  lang,
  content,
  policyType,
  eyebrow,
  accent,
}: {
  lang: string;
  content: PlatformPolicyContent;
  policyType: PlatformPolicyType;
  eyebrow: string;
  accent: string;
}) {
  const policyContent = content;

  return (
    <PolicyPage
      policy={policyContent}
      eyebrow={eyebrow}
      accent={accent}
    />
  );
}
