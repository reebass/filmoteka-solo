import axios from "axios";



export class FilmApiService {
    constructor() {
        this.searchQuery = "";
        this.page = "1";
    }

    async fechApiPopular() {
        const API_KEY = '388b8c32f7164678f9c3582a41e277c5';
        const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
        try{
        const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}&page=${this.page}`)
        return console.log(response.data)
    }
    catch{
        console.error('error')
    }
    }
    
}

