"use client";

import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import ServicesDetailsGoLang from "@/components/Services/fullstack-development/go-lang/ServicesDetailsGoLang";
import ServicesDetailsJava from "@/components/Services/fullstack-development/java/ServicesDetailsJava";
import ServicesDetailsNodejs from "@/components/Services/fullstack-development/nodejs/ServicesDetailsNodejs";
import ServicesDetailsPhp from "@/components/Services/fullstack-development/php/ServicesDetailsPhp";
import ServicesDetailsPython from "@/components/Services/fullstack-development/python/ServicesDetailsPython";
import type { IFrontEnd } from "@/lib/model/IFrontEnd";
import type { IFullStack, IFullStackStack } from "@/lib/model/IFullStack";
import type { PlatformFullstackContent } from "@/lib/platform-content/fullstackContent";
import type { FullstackStackKey } from "@/lib/platform-content/fullstackRoutes";
import type { ComponentType } from "react";

type DetailComponentProps = {
  lang: string;
  stack: IFullStackStack;
  frontEnd: IFrontEnd;
  fullStack: IFullStack;
};

const detailComponents: Record<FullstackStackKey, ComponentType<DetailComponentProps>> = {
  go: ServicesDetailsGoLang,
  java: ServicesDetailsJava,
  nodejs: ServicesDetailsNodejs,
  php: ServicesDetailsPhp,
  python: ServicesDetailsPython,
};

export default function PlatformFullStackDetailPage({
  lang,
  slug,
  content,
}: {
  lang: string;
  slug: string;
  content: PlatformFullstackContent;
}) {
  const fullstackContent = content;
  const route = fullstackContent.fullstackRoutes.find((candidate) => candidate.slug === slug);

  if (!route) {
    return null;
  }

  const DetailComponent = detailComponents[route.stackKey];
  const stack = fullstackContent.fullStack[route.stackKey] as IFullStackStack;

  return (
    <div>
      <DetailComponent
        lang={lang}
        stack={stack}
        frontEnd={fullstackContent.frontEnd}
        fullStack={fullstackContent.fullStack}
      />
      <SchemaMarkupServicePage
        name={route.schema.name}
        description={route.schema.description}
        url={route.schema.url}
      />
    </div>
  );
}
