import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import PlatformFullStackPage from "@/components/Services/fullstack-development/PlatformFullStackPage";
import { getPlatformFullstackContent } from "@/lib/platform-content/fullstackContent";
import type { Metadata } from "next";
import { headers } from "next/headers";

type PageParams = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const content = await getPlatformFullstackContent(locale);

  return {
    title: content.fullstackPage.schema.name,
    description: content.fullstackPage.schema.description,
  };
}

export default async function Page() {
  const headers15 = await headers();
  const lang = headers15.get("x-locale") || "en";
  const content = await getPlatformFullstackContent(lang);

  return (
    <div>
      <PlatformFullStackPage lang={lang} content={content} />
      <SchemaMarkupServicePage
        name={content.fullstackPage.schema.name}
        description={content.fullstackPage.schema.description}
        url={content.fullstackPage.schema.url}
      />
    </div>
  );
}
