export default function getPictures(name) {
  const BASE_URL = "https://pixabay.com/api/";
  const KEY = "45109614-503c0802e6fcda244df0afcb5";

  if (name.includes(" ")) {
    name.replace(/\s+/g, "+");
  }

  const searchParams = new URLSearchParams({
    key: KEY,
    q: name,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  })

  return fetch(`${BASE_URL}?${searchParams}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
}
