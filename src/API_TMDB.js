const API_key = '454d1d246aacb1276e6ac46605330acb'
const API_base = 'https://api.themoviedb.org/3'

/*1-Originais da Netflix
2-recomentadados (trending)
3-em alta (top rated)
*/

const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_base}${endpoint}`);
    const json = await req.json();
    return json;
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados da semana',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_key}`)
            },           
            {
                slug: 'top rated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_key}`)
            },
        ];
    },
    getMovieInfo: async (movieId,type) => {
        let info ={};

            if(movieId) {
                // eslint-disable-next-line default-case
                switch(type){
                    case 'movie':
                        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_key}`);
                    break;
                    case 'tv':
                        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_key}`);
                    break;
                    default:
                        info = null;
                    break;
                }
            }
        return info;
    }
}
