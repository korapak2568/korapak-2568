"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IFrontEnd } from "@/lib/model/IFrontEnd";
import type { IFullStack, IFullStackStack } from "@/lib/model/IFullStack";

type SidebarItem = {
  stack: IFullStackStack;
  iconSize: number;
};

export default function TechnicalExpertiseSidebar({
  lang,
  frontEnd,
  fullStack,
}: {
  lang: string;
  frontEnd?: IFrontEnd;
  fullStack: IFullStack;
}) {
  const pathname = usePathname();
  const items: SidebarItem[] = [
    ...(frontEnd?.stacks.map((stack) => ({ stack, iconSize: 35 })) ?? []),
    ...fullStack.stacks.map((stack) => ({ stack, iconSize: 50 })),
  ];

  return (
    <div className="services-details-information ml-10 border-top">
      <ul className="framework-list">
        {items.map(({ stack, iconSize }) => {
          const isActive = pathname.includes(stack.link);

          return (
            <li key={stack.link}>
              <Link
                href={`/${lang}${stack.link}`}
                className={isActive ? "active" : undefined}
              >
                {stack.image ? (
                  <Image
                    src={stack.image}
                    alt={stack.alt}
                    width={iconSize}
                    height={iconSize}
                  />
                ) : null}
                <span className="px-3">{stack.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
