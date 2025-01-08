import { useEffect } from 'react'

import './App.css'

import SearchIcon from './search.svg'

const API_URL = 'https://www.omdbapi.com?apikey=374d9404'

const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='Search for Movies'
                    onChange={() => {}}
                    value="Superman"
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => {}}
                />
            </div>

            <div className='container'>
                <div className='movie'>
                    <p>{movie1.Year}</p>
                </div>

            </div>
        </div>
    );
}

export default App;