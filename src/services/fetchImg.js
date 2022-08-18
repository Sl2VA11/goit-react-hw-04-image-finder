
export default async function fetchImg(image, page) {
  console.log(image);
  const settings = {
    page: page,
    image: image,
    key: '28055837-436de9124f9241a9654f163e0',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
  };
  console.log(settings.page);
  const response = await fetch(
    `https://pixabay.com/api/?q=${settings.image}&page=${settings.page}&key=${settings.key}&image_type=${settings.image_type}&orientation=${settings.orientation}&safesearch=${settings.safesearch}&per_page=${settings.per_page} `
  );
  if (response.ok) {
    return response.json();
  }
}
