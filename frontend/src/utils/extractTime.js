export function extractTime(dateString) {
     const date = new Date(dateString);
     const hours = padZero(date.getHours());
     const minutes = padZero(date.getMinutes());
     return `${hours}:${minutes}`;
}

function padZero(num) {
     return String(num).padStart(2, "0");
}
