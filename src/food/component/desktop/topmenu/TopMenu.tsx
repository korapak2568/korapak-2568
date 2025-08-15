import '@/food/style/desktop/top-menu.scss'
import {FoodImageUrl} from "@/food/image/FoodImageUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopMenu() {
    return (
        <div className="top-menu-container">
            {FoodImageUrl.topMenu.map((item, index: number) => {
                return (
                    <Link href="/" key={index}
                          className={`top-menu-item ${index === 0 ? 'first' : ''}`}>
                        <div className="image-box">
                            <Image
                                src={item.path}
                                alt={item.title}
                                width={270}
                                height={320}
                            />
                            <div className="text-box">
                                {item.title}
                                {/*<div className="shop-name">*/}
                                {/*    ครัวต้นหูกวาง*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}