import '@/food/style/desktop/section4.scss'
import { FoodImageUrl } from "@/food/image/FoodImageUrl";
import Image from "next/image";
import React from "react";

export default function Suggest4() {
    return (
        <div className="section4-container">
            <div className="section4-header">
                <h2>แนะนำเมนูพิเศษ</h2>
            </div>
            <div className="section4-body">
                <div className="section4-row">
                    {FoodImageUrl.section4.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className={`section4-item ${index === 0 ? 'first' : ''} ${index === 3 ? 'last' : ''}`}
                        >
                            <Image
                                src={item.path}
                                alt={item.title}
                                width={1040}
                                height={940}
                                // className="section4-image"
                            />
                            <div className="text-box">
                                {item.title}
                                {/*<div className="shop-name">*/}
                                {/*    ครัวต้นหูกวาง*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}