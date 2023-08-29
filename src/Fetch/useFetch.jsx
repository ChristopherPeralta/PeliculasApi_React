import { useEffect, useState } from "react";
import { get } from "../data/dataApi";

export function useFetch() {
  const [data, SetData] = useState([]);
  const [loading, SetLoading] = useState([true]); //Mientras carga
  const [error, SetError] = useState(null); //Manejo de error
  const [controller, setController] = useState(null) //Manejo de controller
  
  useEffect(() => {
    const abortController = new AbortController();//Manejo de controller
    setController(abortController) //Manejo de controller
    SetLoading(true);
    get("/discover/movie", { signal: abortController.signal }) //Signal nos permite rastrear la peticion y controlarlo
    .then((data) => {SetData(data.results)})
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Request cancelled");
      } else {
        SetError(error);
      }
    })
    .finally(() => SetLoading(false)); //Mientras carga

    return () => abortController.abort(); //Desmontamos el componente cuando no sea visible en pantalla (cerramos la peticion si el usuario da click a otra cosa)
  }, []);

  const handleCancelRequest = () => {
    if(controller) {
      bortController.abort();
      SetError("Request cancelled")
    }
    a
  }

  return {data, loading, error, controller}
}