import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY_API = '28583130-bb97a8ac680d0ba1640add492';


async function fetchGalleryApi(searchQuery, page) {
    try {
        const response = await axios.get(
            `?q=${searchQuery}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
        );
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
export default fetchGalleryApi;