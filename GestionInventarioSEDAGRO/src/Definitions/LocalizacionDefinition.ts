import { ColDef } from "ag-grid-community";
import { Pageable } from "./PageDefinition";

export interface Localizacion {
  id_Localizacion: number;
  loc_domicilio: string;
}

export interface LocalizacionRows {
  ID: number;
  "Dirección de Dependencia": string;
}

export const LocalizacionCols: ColDef[] = [
  { field: "ID", checkboxSelection: true },
  { field: "Dirección de Dependencia", flex: 1 },
];

export function getLocalizacionRows(page: Pageable<Localizacion>) {
  const datos = page.content;
  return datos.map((field) => {
    return {
      ID: field.id_Localizacion,
      "Dirección de Dependencia": field.loc_domicilio,
    };
  });
}
