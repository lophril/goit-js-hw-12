import axios from 'axios';

const KEY = '47124764-867379346a6bcd25da110daf2';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;


export async function fetchImages(query, page = 1) {
  const searchParams = {
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  try {
    const response = await axios.get(BASE_URL, { params: searchParams });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}