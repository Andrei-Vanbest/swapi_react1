import '../index.css'
import '../App.css'





const Movielist=(props)=>{
    return(
  <div className={props.className}>
  
      <h1>{props.movie.title}</h1>
      <p>{props.movie.date}</p>
      <p>{props.movie.director}</p>
      <p>{props.movie.text}</p>
      <p>{props.movie.personaj9}</p>
</div>
    )

}

export default Movielist