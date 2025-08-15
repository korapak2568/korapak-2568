import '@/food/style/desktop/section3.scss'
import {FoodImageUrl} from "@/food/image/FoodImageUrl";
import Image from "next/image";
import React from "react";

export default function Suggest3() {
    return (
        <div className="section3-container">
            <div className="section3-header">
                <h2>แนะนำเมนูเส้น</h2>
            </div>
            <div className="section3-body">
                <div className="section3-left">
                    <Image
                        src={FoodImageUrl.section3[0].path}
                        alt={FoodImageUrl.section3[0].title}
                        width={420}
                        height={460}
                    />
                    <div className="text-box">
                        {FoodImageUrl.section3[0].title}
                        {/*<div className="shop-name">*/}
                        {/*    ครัวต้นหูกวาง*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="section3-right">
                    <div className="section3r-top">
                        <Image
                            src={FoodImageUrl.section3[1].path}
                            alt={FoodImageUrl.section3[1].title}
                            width={420}
                            height={230}
                        />
                        <div className="text-box">
                            {FoodImageUrl.section3[1].title}
                            {/*<div className="shop-name">*/}
                            {/*    ครัวต้นหูกวาง*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="section3r-bottom">
                        <Image
                            src={FoodImageUrl.section3[2].path}
                            alt={FoodImageUrl.section3[2].title}
                            width={420}
                            height={230}
                        />
                        <div className="text-box">
                            {FoodImageUrl.section3[2].title}
                            {/*<div className="shop-name">*/}
                            {/*    ครัวต้นหูกวาง*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}