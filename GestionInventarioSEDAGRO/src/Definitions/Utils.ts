import { ColDef } from "ag-grid-community";
import {
  isBienes,
  isLocalizacion,
  isProducto,
  isResponsable,
} from "../TypeGuards/InterfacesTypeGuards";
import { Bienes, getBienesRows } from "./BienesDefinition";
import { BienesCols } from "./BienesCols";
import { Pageable } from "./PageDefinition";
import { getProductoRows, Producto, ProductoCols } from "./ProductoDefinition";
import {
  getResponsableRows,
  Responsable,
  ResponsableCols,
} from "./ResponsableDefinition";
import {
  getLocalizacionRows,
  Localizacion,
  LocalizacionCols,
} from "./LocalizacionDefinition";

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
  if (isLocalizacion(contenido[0])) {
    return getLocalizacionRows(datos as Pageable<Localizacion>);
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
  if (isLocalizacion(contenido[0])) {
    return LocalizacionCols;
  }
}
