import React, {useEffect, useState } from 'react';
import './App.css';
import API_TMDB from './API_TMDB';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState([]);
  
  const [featuredData, setFeaturedData] = useState([]);
  
  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await API_TMDB.getHomeList();
      console.log(list);
      setMovieList(list);

      //Dados do Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen =Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await API_TMDB.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
      console.log(chosenInfo);
    }
    loadAll();
  }, [] );


  return (
    <div className="page">
        {featuredData &&
          <FeaturedMovie item = {featuredData}/>
          }


      <section className="lists">
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>

        )
        )}

      </section>
    </div>
  );
}