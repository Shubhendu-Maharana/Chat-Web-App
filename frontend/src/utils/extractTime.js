export function extractTime(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    const period = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12 || 12;
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes} ${period}`;
}

function padZero(number) {
    return number.toString().padStart(2, "0");
}
