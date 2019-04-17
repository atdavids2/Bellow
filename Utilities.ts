export function formatDateToTimeString(date: Date): string {
  let hours: number = date.getHours();
  let minutes: number = date.getMinutes();
  let ampm: string = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  let minutesStr: string = minutes < 10  ? '0' + minutes : minutes.toString();
  return hours + ':' + minutesStr + ' ' + ampm;
}

export function formateDateToFullString(date: Date): string {
  return date.toLocaleDateString();
}