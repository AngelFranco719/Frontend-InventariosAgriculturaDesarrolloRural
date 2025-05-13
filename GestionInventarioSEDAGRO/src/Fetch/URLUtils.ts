export interface URL {
  base: string;
  page: number;
  size: number;
  inventario?: string[];
  nombre?: string[];
  descripcion?: string[];
  localizacion?: string;
  area?: string;
  marca?: string[];
}

export const generateURL = (format: URL) => {
  var newURL = `${format.base}size=${format.size}&page=${format.page}`;
  if (format.inventario)
    format.inventario.map((actual) => {
      newURL += `&inventario=${actual}`;
    });
  if (format.nombre)
    format.nombre.map((actual) => {
      newURL += `&nombre=${actual}`;
    });
  if (format.descripcion) newURL += `&descripcion=${format.descripcion}`;
  if (format.localizacion) newURL += `&localizacion=${format.localizacion}`;
  if (format.area) newURL += `&area=${format.area}`;
  if (format.marca)
    format.marca.map((actual) => {
      newURL += `&marca=${actual}`;
    });
  return newURL;
};
