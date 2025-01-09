import { ColDef } from "ag-grid-community";
import { Pageable } from "./PageDefinition";

export interface Producto {
  prod_partida: string;
  prod_descripcion: string;
  prod_marca: string;
  prod_modelo: string;
  prod_monto: number;
  id_Producto: number;
}

export interface ProductoRows {
  "Numero de Partida": String;
  Descripcion: String;
  Marca: String;
  Modelo: String;
  Monto: number;
}

export const ProductoCols: ColDef[] = [
  { headerName: "Número de Partida", field: "Numero de Partida" },
  { headerName: "Descripción", field: "Descripcion" },
  { headerName: "Marca", field: "Marca" },
  { headerName: "Modelo", field: "Modelo" },
  { headerName: "Monto", field: "Monto" },
];

export function getProductoRows(page: Pageable<Producto>) {
  const datos = page.content;
  return datos.map((producto) => ({
    "Numero de Partida": producto.prod_partida,
    Descripcion: producto.prod_descripcion,
    Marca: producto.prod_marca,
    Modelo: producto.prod_modelo,
    Monto: producto.prod_monto,
  }));
}
