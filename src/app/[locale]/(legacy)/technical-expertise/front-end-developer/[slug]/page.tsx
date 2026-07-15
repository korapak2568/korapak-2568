import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import PlatformFrontEndDetailPage from "@/components/Services/frontend-development/PlatformFrontEndDetailPage";
import { getPlatformFrontendContent } from "@/lib/platform-content/frontendContent";
import { getFrontendRouteBySlug } from "@/lib/platform-content/frontendRoutes";

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
  const route = await getFrontendRouteBySlug(slug, locale);

  if (!route) {
    return {};
  }

  return {
    title: route.schema.name,
    description: route.schema.description,
    alternates: getLocalizedAlternates(
      `/technical-expertise/front-end-developer/${slug}/`,
      locale,
    ),
  };
}

export default async function Page({ params }: PageParams) {
  const { locale, slug } = await params;
  const route = await getFrontendRouteBySlug(slug, locale);

  if (!route) {
    notFound();
  }

  const headersList = await headers();
  const lang = headersList.get("x-locale") || locale || "en";
  const content = await getPlatformFrontendContent(lang);

  return <PlatformFrontEndDetailPage lang={lang} slug={slug} content={content} />;
}
