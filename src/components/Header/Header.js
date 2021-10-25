/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css';

export default () => {
    return (
        /* usar styled compopnents */
        <header className="Header--top">
            <div className="Header--logo">
                <a href="/">
                    <img src = "https://forobeta.com/data/avatars/o/232/232295.jpg?1598895933" alt=""></img>
                </a>
            </div>
            <div className="Header--user">
                <a href="/">
                    <img src = "data:image/png;base64,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" alt=""></img>
                </a>
            </div>
        </header>
    );
}