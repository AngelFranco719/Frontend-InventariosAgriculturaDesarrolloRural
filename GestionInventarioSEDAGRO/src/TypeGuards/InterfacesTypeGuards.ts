import { Bienes } from "../Definitions/BienesDefinition";

export function isBienes(value: any): value is Bienes {
  return value && typeof value.bien_inventario === "string";
}
