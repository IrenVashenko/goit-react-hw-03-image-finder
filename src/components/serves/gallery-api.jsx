// function fetchGalleryApi(name) {
//     return fetch(`https://pixabay.com/api/?q=${name}&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`)
//         .then(response => {
//             if (response.ok) {
//                 return response.json()
//             }
//             return Promise.reject(new Error('Ничего не найдено'))
//         })
// }

// const api = {
//     fetchGalleryApi,
// }

// export default api;
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY_API = '28583130-bb97a8ac680d0ba1640add492';


async function fetchGalleryApi(searchQuery, page) {
    const response = await axios.get(
        `?q=${searchQuery}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
}
export default fetchGalleryApi;