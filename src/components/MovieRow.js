import React from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {
    
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div classname="movieRow--left">
                <NavigateBeforeIcon Style={{fontSize: 50}} />
            </div>
            <div classname="movieRow--right">
                <NavigateNextIcon Style={{fontSize: 50}} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movieRow--item">
                        
                        <a href={`/Watch`}><img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} alt={item.orginal_title}/></a>
                        <div className="movieRow--Name">{item.original_name}</div>
                    </div>
                    
                ))}
                </div>
            </div>
        </div>
    )
}