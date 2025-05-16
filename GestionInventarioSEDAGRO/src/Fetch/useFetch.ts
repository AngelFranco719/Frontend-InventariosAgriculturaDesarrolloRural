import { useEffect, useState } from "react";
import { Pageable } from "../Definitions/PageDefinition";
import { Bienes } from "../Definitions/BienesDefinition";

export type useFetchState = {
  state:
    | "En Espera"
    | "Cargando Información"
    | "Error al Obtener los Datos"
    | "Obtención de Datos Exitosa";
  data: any | Pageable<Bienes>;
  error: null | Error;
};

export default function useFetch(url: string) {
  const [fetchState, setFetchState] = useState<useFetchState>({
    state: "En Espera",
    data: null,
    error: null,
  });

  useEffect(() => {
    fetchData();
  }, [url]);

  async function fetchData() {
    try {
      setFetchState((oldValue) => ({
        ...oldValue,
        state: "Cargando Información",
      }));

      const response = await fetch(url, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (response.ok) {
        const json = await response.json();
        setFetchState({
          data: json,
          state: "Obtención de Datos Exitosa",
          error: null,
        });
      } else {
        setFetchState({
          state: "Error al Obtener los Datos",
          data: null,
          error: new Error(response.statusText),
        });
      }
    } catch (error) {
      setFetchState({
        state: "Error al Obtener los Datos",
        data: null,
        error: error as Error,
      });
    }
  }

  return fetchState;
}
