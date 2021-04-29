export function getDomianName(url = "") {
  if (url === "" || typeof url !== 'string') {
    throw "wrong argument type"
  }

  const name = url.match(/(?:https?:\/\/)?(?:www\.)?(.+?)\.(?:com|au)/);
  if (name === null) {
    throw "Incorrect url format";
  }

  return name[1];
}