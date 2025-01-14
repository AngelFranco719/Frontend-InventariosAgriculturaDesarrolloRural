import { ColDef } from "ag-grid-community";
import { Pageable } from "./PageDefinition";

export interface Responsable {
  res_rfc: string;
  res_nombre: string;
  res_fechaResguardo: string | null;
  res_motivoNoAsigno: string;
  id_Responsable: number;
}

export const ResponsableCols: ColDef[] = [
  { field: "Nombre" },
  { field: "RFC" },
];

export function getResponsableRows(data: Pageable<Responsable>) {
  const datos = data.content;
  console.log(typeof datos[0].res_fechaResguardo);
  return datos.map((item) => ({
    Nombre: item.res_nombre,
    RFC: item.res_rfc,
  }));
}
