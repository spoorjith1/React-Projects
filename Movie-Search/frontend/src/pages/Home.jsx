import React from 'react';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import '../css/Home.css'

function Home() {
    const [SearchQuery, setSearchQuery] = useState(""); 

    const movies = [
        {id: 1, title:'john wick', release_date: '2024'},
        {id: 2, title:'terminator', release_date: '2000'},
        {id: 3, title:'the matrix', release_date: '1998'}
    ]
    const handleSearch = (e) => {
        e.preventDefault()
        alert(SearchQuery)
    }
  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input type='text' placeholder='search for Movies...' className='search-input' 
            value={SearchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
            <button type='submit' className='search-button'>Search</button>
        </form>
        <div className='movies-grid'>
            {movies.map((movie) => 
                ( <MovieCard movie={movie} key={movie.id} /> ))}
        </div>
    </div>
  )
}
export default Home
