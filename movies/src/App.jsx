import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import './App.css'
import SearchIcon from './search.svg'

const API_KEY = import.meta.env.VITE_SOME_KEY
const API_URL = 'https://www.omdbapi.com?apikey=' + API_KEY

// initalizes the app componet
const App = () => {
    // creates a state for movies, which initalizes as an empty array
    const [movies, setMovies] = useState([]);
    // creates a state for the search bar, which initializes as an empty string
    const [searchTerm, setSearchTerm] = useState('')

    // search function; fetches data from API and updates the movies state
    const searchMovies = async (title) => {
        // send the GET request to the api; fetch pauses execution until fetch resolves
        const response = await fetch(`${API_URL}&s=${title}`);
        // converts response to JSON
        const data = await response.json();

        // extracts search property from JSON data, updates movies state
        setMovies(data.Search);
    }

    // loads default spiderman movies when DOM loads
    useEffect(() => {
        searchMovies('Home Alone');
    }, []);

    // JSX body returned by App
    return (
        <div className='app'>
            <h1>World of Movies</h1>

            <div className='search'>
                <input
                    placeholder='Search for Movies'
                    value={searchTerm}
                    // when input is changed 'e' is the event, 
                    // and the state is updated with the new term
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    // when magnifying glass clicked, the movies 
                    // state is updated and the display changes
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                // if movies length is greater than zero, displays all movies
                ? (
                <div className='container'>
                    {movies.map((movie) => (
                    // map essentially maps each element in the array to a
                    // MovieCard element; .map is the standard instead of a loop 
                        <MovieCard key={movie.imdbID} movie={movie}/>
                    ))}
                </div>
                ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default App;