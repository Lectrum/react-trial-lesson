// Core
import React from 'react';

// Instruments
import './styles.css';

export const Search = () => {
    return (
        <section className = 'strange-search'>
            <span className = 'strange'>Странный</span>
            <input
                placeholder = 'Добро пожаловать!'
                style = {{
                    '--inputBorderStyle': 'solid',
                }}
                type = 'text'
            />
            <span className = 'search'>поиск</span>
            <b />
        </section>
    );
};
