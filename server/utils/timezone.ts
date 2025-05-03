export const getNowTimeBangkokAsia = () => {
    // Add 7 hours to current UTC for Bangkok time
    return new Date(new Date().getTime() + (7 * 60 * 60 * 1000));
}