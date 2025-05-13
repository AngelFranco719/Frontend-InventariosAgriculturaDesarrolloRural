import { ColDef, ICellRendererParams } from "ag-grid-community";
import Button from "antd/es/button";

export const BienesCols: ColDef[] = [
  { field: "Inventario", checkboxSelection: true, width: 120 },
  { field: "Producto" },
  { field: "Marca" },
  { field: "Responsable" },
  { field: "Fecha de Resguardo" },
  {
    field: "Acción",
    cellRenderer: (params: ICellRendererParams) => {
      const ID = params.data.ID;

      const handleOnClick = () => {
        window.open(`http://localhost:3000/Bien/${ID}`, "_blank");
      };

      return (
        <>
          <Button onClick={handleOnClick} type="link">
            Ver Más
          </Button>
        </>
      );
    },
    width: 120,
  },
];
