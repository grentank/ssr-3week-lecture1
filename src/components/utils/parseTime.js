export default function parseTime(str) {
  if (str) { return `${str.slice(0, 10)}  ${parseInt(str.slice(11, 13)) + 3}${str.slice(13, 19)}`; }
  return '';
}
