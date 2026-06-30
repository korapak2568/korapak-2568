import frontendSeed from "@/data/technical-expertise/frontend/en.json";
import type { IFrontEnd, IFrontEndStack } from "@/lib/model/IFrontEnd";

export type FrontendStackKey = Exclude<
  keyof IFrontEnd,
  "title" | "span" | "subTitle" | "sideImages" | "stacks" | "services"
>;

export type FrontendMetadataKey = "nextjs" | "react" | "typescript";

export type FrontendRouteConfig = {
  slug: string;
  stackKey: FrontendStackKey;
  metadataKey: FrontendMetadataKey;
  schema: {
    name: string;
    description: string;
    url: string;
  };
};

const frontendRoutes = frontendSeed.routes as unknown as FrontendRouteConfig[];

export function getFrontendRoutes(): FrontendRouteConfig[] {
  return frontendRoutes;
}

export function getFrontendRouteBySlug(
  slug: string,
): FrontendRouteConfig | undefined {
  return frontendRoutes.find((route) => route.slug === slug);
}

export function getFrontendStack(
  frontEnd: IFrontEnd,
  route: FrontendRouteConfig,
): IFrontEndStack {
  return frontEnd[route.stackKey] as IFrontEndStack;
}
