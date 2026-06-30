import React from "react";
import { Metadata } from "next";
import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import { headers } from "next/headers";
import PlatformFrontEndPage from "@/components/Services/frontend-development/PlatformFrontEndPage";
import { getPlatformFrontendContent } from "@/lib/platform-content/frontendContent";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPlatformFrontendContent("en");

  return {
    title: content.frontendPage.schema.name,
    description: content.frontendPage.schema.description,
  };
}

export default async function Page() {
  const headers15 = await headers();
  const lang = headers15.get("x-locale") || "en";
  const content = await getPlatformFrontendContent(lang);

  return (
    <div>
      <PlatformFrontEndPage lang={lang} content={content} />
      <SchemaMarkupServicePage
        name={content.frontendPage.schema.name}
        description={content.frontendPage.schema.description}
        url={content.frontendPage.schema.url}
      />
    </div>
  );
}
