import React from 'react';
import './FeaturedMovie.css';

//título filme e fundo
// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) => {

    let firstDate= new Date(item.first_air_date);
    let genres =[];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return (
        <section className="featured" style = {{
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className= "featured--name">{item.original_name}</div>
                    <div className="featured--year">{firstDate.getFullYear()}</div>
                    <div className= "feature--points">Nota do público:{' '}{item.vote_average} Pontos</div>
                    <div className="featured--descrption">{item.overview}</div>
                    <div className="featured--genres">{genres.join(', ')}</div>
                    <div className="featured--duration"></div>
                </div>
            </div>
        <div> 
        </div>
        </section>
    )   
}