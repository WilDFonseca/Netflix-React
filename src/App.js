import React, {useEffect, useState } from 'react';
import './App.css';
import API_TMDB from './API_TMDB';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header/Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState([]);
  
  const [featuredData, setFeaturedData] = useState(null);

  const [blackHeader, setBlackHeader] = useState(false);
  
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

  /*useEffect(()=>{},[]);*/
  useEffect(()=>{
    const scrollListner = () => {
      if (window.scrollY > 30) {
        setBlackHeader (true);
      } else {
        setBlackHeader (false);
      }
    }
    window.addEventListener('scroll', scrollListner);
    return () => {
      window.removeEventListener('scroll', scrollListner);
    }
  },[]);

  return (
    <div className="page">

        <Header black={blackHeader}/>

        {featuredData &&
          <FeaturedMovie item = {featuredData}/>
          }


      <section className="lists">
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>

        )
        )}

      </section>

      <footer>
        Feito com carinho <span role="img" aria-label="emoji">Emoji</span> Por Wildney D Fonseca <br/>
        Direitos de imagem para Netflix e Willflix <br/>
        Dados pego do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
      }
    </div>
  );
}