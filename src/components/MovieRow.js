import React from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {
    
    const handleLeftArrow = () => {

    }
    const handleRightArrow = () => {

    }

    return (
        <div className="movieRow">
            <h2 className="movieRow--h2">{title}</h2>
            <div className="movieRow--left" onCLick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 70}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 70}} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movieRow--item">
                        
                        <a href={`/Watch`}><img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} alt={item.orginal_title}/></a>
                        {/* <div className="movieRow--Name">{item.original_name}</div> */}
                    </div>
                    
                ))}
                </div>
            </div>
        </div>
    )
}