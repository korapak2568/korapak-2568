import fullstackSeed from "@/data/technical-expertise/fullstack/en.json";
import type { IFullStack, IFullStackStack } from "@/lib/model/IFullStack";

export type FullstackStackKey = Exclude<
  keyof IFullStack,
  "title" | "span" | "subTitle" | "sideImages" | "stacks" | "services"
>;

export type FullstackMetadataKey = "go" | "java" | "nodejs" | "php" | "python";

export type FullstackRouteConfig = {
  slug: string;
  stackKey: FullstackStackKey;
  metadataKey: FullstackMetadataKey;
  schema: {
    name: string;
    description: string;
    url: string;
  };
};

const fullstackRoutes = fullstackSeed.routes as unknown as FullstackRouteConfig[];

export function getFullstackRoutes(): FullstackRouteConfig[] {
  return fullstackRoutes;
}

export function getFullstackRouteBySlug(
  slug: string,
): FullstackRouteConfig | undefined {
  return fullstackRoutes.find((route) => route.slug === slug);
}

export function getFullstackStack(
  fullStack: IFullStack,
  route: FullstackRouteConfig,
): IFullStackStack {
  return fullStack[route.stackKey] as IFullStackStack;
}
