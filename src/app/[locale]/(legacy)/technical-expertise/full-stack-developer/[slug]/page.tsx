import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import PlatformFullStackDetailPage from "@/components/Services/fullstack-development/PlatformFullStackDetailPage";
import { getPlatformFullstackContent } from "@/lib/platform-content/fullstackContent";
import { getFullstackRouteBySlug } from "@/lib/platform-content/fullstackRoutes";

type PageParams = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;
  const route = await getFullstackRouteBySlug(slug, locale);

  if (!route) {
    return {};
  }

  return {
    title: route.schema.name,
    description: route.schema.description,
    alternates: getLocalizedAlternates(
      `/technical-expertise/full-stack-developer/${slug}/`,
      locale,
    ),
  };
}

export default async function Page({ params }: PageParams) {
  const { locale, slug } = await params;
  const route = await getFullstackRouteBySlug(slug, locale);

  if (!route) {
    notFound();
  }

  const headersList = await headers();
  const lang = headersList.get("x-locale") || locale || "en";
  const content = await getPlatformFullstackContent(lang);

  return <PlatformFullStackDetailPage lang={lang} slug={slug} content={content} />;
}
