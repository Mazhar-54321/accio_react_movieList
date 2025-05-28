import React from 'react';
import './movie.css'
import Genre from './Genre';

const Movie = ({movies,genres}) => {
  return (
    <div className='movie-container'>
     <h1>Top {movies.length} movies of all time</h1>
     <Genre genres={genres}/>
     {
        movies?.length > 0 &&
        <table>
            <thead>
             <th>Title</th>
             <th>Genre</th>
             <th>Year</th>
            </thead>
            <tbody>
                {
                    movies?.map((row,index)=>(<tr key={row?.title+index}>
                        <td>{row?.title}</td>
                        <td>{row?.genre}</td>
                        <td>{row?.year}</td>
                        </tr>))
                }
            </tbody>
        </table>
     }
    </div>
  )
}

export default Movie