import axios from 'axios'

const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
});

export default {
    getGifBySearch: (query) => {
        // TODO: move api key into env vars
        const data = apiInstance.get('gifs/search', { params: { api_key: process.env.REACT_APP_API_KEY, q: query} } )
        return data 
    }
}