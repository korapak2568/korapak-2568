export function isContact(message: any) {

    if (message.includes("เบอร์ติดต่อไหม")) return true;
    if (message.includes("เบอร์โทรติดต่อไหม")) return true;
    if (message.includes("ทำงานที่ไหน")) return true;
    if (message.includes("เรียนที่ไหน")) return true;
    if (message.includes("มีแฟนรึยัง")) return true;
    if (message.includes("เกิดที่ไหน")) return true;
    if (message.includes("ใครสร้างน้องฟ้า")) return true;
    if (message.includes("ขอเบอร์โทร")) return true;
    if (message.includes("ทำงานกับใคร")) return true;

    return !!message.includes("ทำงานบริษัทอะไร");
}