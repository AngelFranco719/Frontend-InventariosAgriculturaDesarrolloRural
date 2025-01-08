import { Area } from "./AreaDefinition";
import { Bienes } from "./BienesDefinition";
import { Zona } from "./ZonaDefinition";

export interface ZonaArea {
  zona: Zona;
  area: Area;
  id_Bien: Bienes;
  id_ZonaArea: number;
}
