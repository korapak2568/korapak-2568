import {IFoodImageUrl} from "@/food/image/model/IFoodImageUrl";

const CDN_IMAGE_FOOD = process.env.CDN_IMAGE_FOOD || "https://cdn.chorn.in.th/food-drink";

export const FoodImageUrl: IFoodImageUrl = {
    topMenu: [
        {
            title: "ข้าวผัดกุ้ง",
            path: CDN_IMAGE_FOOD + "/top-menu/top-menu-ข้าวผัดกุ้ง.png",
        },
        {
            title: "ข้าวกะเพรากุ้งหมูสับ",
            path: CDN_IMAGE_FOOD + "/top-menu/top-menu-ข้าวกะเพรากุ้งหมูสับ.png",
        },
        {
            title: "บะหมี่คลุกไก่ย่าง",
            path: CDN_IMAGE_FOOD + "/top-menu/top-menu-บะหมี่คลุกไก่ย่าง.png",
        },
        {
            title: "ราดหน้ากุ้ง",
            path: CDN_IMAGE_FOOD + "/top-menu/top-menu-ราดหน้ากุ้ง.png",
        },
    ],
    section3: [
        {
            title: "มาม่าผัดขี้เมา",
            path: CDN_IMAGE_FOOD + "/section3/section31-มาม่าผัดขี้เมา.png",
        },
        {
            title: "ยำมาม่าหมูสับหมูยอ",
            path: CDN_IMAGE_FOOD + "/section3/section32-ยำมาม่าหมูสับหมูยอ.png",
        },
        {
            title: "ยำวุ้นเส้นหมูสับหมูยอ",
            path: CDN_IMAGE_FOOD + "/section3/section32-ยำวุ้นเส้นหมูสับหมูยอ.png",
        }
    ],
    section4: [
        {
            title: "แกงเผ็ดไก่ขนมจีน",
            path: CDN_IMAGE_FOOD + "/section4/แกงเผ็ดไก่ขนมจีนใส่จาน.png",
        },
        {
            title: "แกงเผ็ดไก่กับข้าว",
            path: CDN_IMAGE_FOOD + "/section4/แกงเผ็ดไก่กับข้าว.png",
        },
        {
            title: "แกงเผ็ดไก่ข้าว",
            path: CDN_IMAGE_FOOD + "/section4/แกงเผ็ดไก่ข้าว.png",
        },
        {
            title: "แกงเผ็ดไก่ขนมจีน",
            path: CDN_IMAGE_FOOD + "/section4/แกงเผ็ดไก่ขนมจีน.png",
        }
    ]
}