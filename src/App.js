import Movielist from  './components/Movielist'
import Button from  './components/Button'
import './App.css';
import './index.css';
import {useState,useCallback,useEffect} from 'react'

function App() {
  const[movies,setMovies]=useState([])
  const[isLoading,setIsLoading]=useState(false)
  const[error,setError]=useState(null)
  const[black,setBlack]=useState(true)

 
  const fetchMovieHandler= useCallback(async ()=>{
    setIsLoading(true)
    setError(null)
try{
    const response = await fetch('https://swapi.dev/api/films/')
    
    if(!response.ok){
      throw new Error('Something is not ok')
     }

    const data = await response.json()
       
       const transformMovies=data.results.map(movie=>{
    
      return {id: movie.episode_id,
      title: movie.title,
      date: movie.release_date,
      director: movie.director,
      text: movie.opening_crawl,
      personaj9: movie.characters[movie.episode_id+1]
      }})
      
      setMovies(transformMovies)
      
      
    } catch(error){
      setError(error.message)
    }
    setIsLoading(false)
    },[])

    useEffect(()=>{fetchMovieHandler()},[fetchMovieHandler])



  const movielist=movies.map(movie=>
  <Movielist key={movie.id} className={black?'films' : 'films2'} movie={movie} />)

  const handleToggleBlack =()=>{
      
    setBlack(true)
  }

  const handleToggleLight =()=>{
      
    setBlack(false)
  }
  

console.log(error)

  return(
    <div>
      <div>
        <div className='buttons'>
            <button onClick={handleToggleLight }className='light_btn'>Light mode</button>
            <Button fetchMovieHandler={fetchMovieHandler} />
            
            <button onClick={handleToggleBlack} className='dark_btn'>Dark mode</button>
        </div>
       {!isLoading && movies.length > 0 && movielist }
       {!isLoading &&  movies.length === 0 && !error &&<p className='sw1'>Found no movies...</p>}
       {!isLoading && error && <p>{error}</p>}
       {isLoading &&<p className='sw'>IS LOADING...</p>}
       
      </div>
      
    </div>)
}

export default App;
