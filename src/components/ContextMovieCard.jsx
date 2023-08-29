import { MovieCard } from "./MovieCard";
import { useFetch } from "../Fetch/useFetch";

import "../components/ContextMovieCard.css"
import loadingImg from "../img/loading.png"

export function ContextMovieCard() {
  const {data, loading, error} = useFetch([])

  return (
    <div>
      <ul className="container">
          {error && <li>Error: {error.message}</li>} {/*Manejo de error*/}
          {loading && <img src={loadingImg} alt="Cargando..."/>}  {/*Mientras carga*/}
          
          {data.map((item)=>(
              <MovieCard key={item.id} movie={item}/>
          ))}
      </ul>
    </div>
  );
}
