import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//data

const notes = [
    {
        id: 1,
        content:'working with list',
        important: true
    },
    {
        id: 2,
        content:'usage of keys',
        important: false
    },
    {
        id: 3,
        content:'conditional rendering',
        important: true
    },
    {
        id: 4,
        content:'Handling events',
        important: true
    },
    {
        id: 5,
        content:'props vs states',
        important: false
    },
]git


ReactDOM.createRoot(document.getElementById('root')).render(<App notes={ notes } />);


