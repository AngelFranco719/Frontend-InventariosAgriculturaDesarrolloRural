import { ColDef } from "ag-grid-community";
import { Adquisicion } from "./AdquisicionDefinition";
import { Pageable } from "./PageDefinition";
import { Producto } from "./ProductoDefinition";
import { Responsable } from "./ResponsableDefinition";

export interface Bienes {
  bien_inventario: string;
  bien_estado: string;
  bien_color: string;
  bien_material: string;
  bien_patrimoniable: string;
  id_Bien: number;
  bienAdq: Adquisicion;
  bienResponsable: Responsable;
  bienProducto: Producto;
}

export interface BienesRows {
  Inventario: string;
  Producto: string;
  Marca: string;
  Responsable: string;
}

export const BienesCols: ColDef[] = [
  { field: "Inventario", checkboxSelection: true },
  { field: "Producto",},
  { field: "Marca",},
  { field: "Responsable", },
  { field: "Fecha de Resguardo", },
];

export function getBienesRows(page: Pageable<Bienes>) {
  const datos = page.content;
  return datos.map((item) => {
    let fecha: Date = new Date();
    if (item.bienResponsable.res_fechaResguardo) {
      fecha = new Date(item.bienResponsable.res_fechaResguardo);
    }
    return {
      Inventario: item.bien_inventario,
      Producto: item.bienProducto.prod_descripcion,
      Marca: item.bienProducto.prod_marca,
      Responsable: item.bienResponsable.res_nombre,
      "Fecha de Resguardo": fecha.toLocaleDateString(),
    };
  });
}

/*
({
    
  })
*/
