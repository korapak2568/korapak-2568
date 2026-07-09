"use client";

import { notFound } from "next/navigation";
import ServicesDetailsNextJS from "@/components/Services/frontend-development/nextjs/ServicesDetailsNextJS";
import ServicesDetailsReact from "@/components/Services/frontend-development/react/ServicesDetailsReact";
import ServicesDetailsTypeScript from "@/components/Services/frontend-development/typescript/ServicesDetailsTypeScript";
import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import type { FrontendStackKey } from "@/lib/platform-content/frontendRoutes";
import type { PlatformFrontendContent } from "@/lib/platform-content/frontendContent";
import { usePlatformFrontendContent } from "@/lib/platform-content/usePlatformFrontendContent";
import type { IFrontEnd, IFrontEndStack } from "@/lib/model/IFrontEnd";
import type { IFullStack } from "@/lib/model/IFullStack";
import type { ComponentType } from "react";

type DetailComponentProps = {
  lang: string;
  stack: IFrontEndStack;
  frontEnd: IFrontEnd;
  fullStack: IFullStack;
};

const detailComponents: Record<FrontendStackKey, ComponentType<DetailComponentProps>> = {
  nextjs: ServicesDetailsNextJS,
  react: ServicesDetailsReact,
  typescript: ServicesDetailsTypeScript,
};

export default function PlatformFrontEndDetailPage({
  lang,
  slug,
  content,
}: {
  lang: string;
  slug: string;
  content: PlatformFrontendContent;
}) {
  const { data: cachedContent } = usePlatformFrontendContent(lang, content);
  const frontendContent = cachedContent ?? content;
  const route = frontendContent.frontendRoutes.find((candidate) => candidate.slug === slug);

  if (!route) {
    notFound();
  }

  const DetailComponent = detailComponents[route.stackKey];
  const stack = frontendContent.frontEnd[route.stackKey] as IFrontEndStack;

  return (
    <div>
      <DetailComponent
        lang={lang}
        stack={stack}
        frontEnd={frontendContent.frontEnd}
        fullStack={frontendContent.fullStack}
      />
      <SchemaMarkupServicePage
        name={route.schema.name}
        description={route.schema.description}
        url={route.schema.url}
      />
    </div>
  );
}
