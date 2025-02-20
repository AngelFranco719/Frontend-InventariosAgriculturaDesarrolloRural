import { Bienes } from "../Definitions/BienesDefinition";
import { Localizacion } from "../Definitions/LocalizacionDefinition";
import { Producto } from "../Definitions/ProductoDefinition";

export function isBienes(value: any): value is Bienes {
  return value && typeof value.bien_inventario === "string";
}

export function isProducto(value: any): value is Producto {
  return value && typeof value.prod_descripcion === "string";
}

export function isResponsable(value: any): value is Producto {
  return value && typeof value.res_nombre === "string";
}

export function isLocalizacion(value: any): value is Localizacion {
  return value && typeof value.loc_domicilio === "string";
}
