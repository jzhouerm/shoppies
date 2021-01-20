import './App.css';
import MovieContainer from './Containers/MovieContainer.js'

const movieData=[
  {
      Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      Type: "movie",
      Year: "2011",
      imdbID: "tt1201607"
  },

  {
      Title: "Spaceballs",
      Year: "1987",
      imdbID: "tt0094012",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjVjOGQ0OTctNDhkZC00ZGNiLWI2ZGEtYjZlMWZjOTlkNDlhXkEyXkFqcGdeQXVyNjg1MjEwOTM@._V1_SX300.jpg"
  },
]

function App() {

  const changeHandler =(searchValue) =>{
    // set the new state and send up to parent
    console.log("inside App.js", searchValue)
  }
  
  return (
    <div className="App">
      <MovieContainer movieData={movieData} changeHandler={changeHandler}/>
      
    </div>
  );
}

export default App;
