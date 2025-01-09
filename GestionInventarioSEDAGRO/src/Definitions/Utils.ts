import { ColDef } from "ag-grid-community";
import {
  isBienes,
  isProducto,
  isResponsable,
} from "../TypeGuards/InterfacesTypeGuards";
import { Bienes, BienesCols, getBienesRows } from "./BienesDefinition";
import { Pageable } from "./PageDefinition";
import { getProductoRows, Producto, ProductoCols } from "./ProductoDefinition";
import {
  getResponsableRows,
  Responsable,
  ResponsableCols,
} from "./ResponsableDefinition";

export function getRows<T>(datos: Pageable<T>) {
  const contenido = datos.content;
  if (isBienes(contenido[0])) {
    return getBienesRows(datos as Pageable<Bienes>);
  }
  if (isProducto(contenido[0])) {
    return getProductoRows(datos as Pageable<Producto>);
  }
  if (isResponsable(contenido[0])) {
    return getResponsableRows(datos as Pageable<Responsable>);
  }
}

export function getColumns<T>(datos: Pageable<T>): ColDef[] | undefined {
  const contenido = datos.content;
  if (isBienes(contenido[0])) {
    return BienesCols;
  }
  if (isProducto(contenido[0])) {
    return ProductoCols;
  }
  if (isResponsable(contenido[0])) {
    return ResponsableCols;
  }
}
