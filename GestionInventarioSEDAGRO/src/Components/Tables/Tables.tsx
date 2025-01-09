import { AgGridReact } from "ag-grid-react";
import { useEffect } from "react";
import { ColDef } from "ag-grid-community";
import { Pageable } from "../../Definitions/PageDefinition";
import {
  ClientSideRowModelModule,
  ValidationModule,
  TextEditorModule,
  TextFilterModule,
} from "ag-grid-community";
import "./Tables.css";
import { BienesRows } from "../../Definitions/BienesDefinition";
import { ProductoRows } from "../../Definitions/ProductoDefinition";

interface props<T> {
  datos: Pageable<T>;
  rows: BienesRows[] | ProductoRows[];
  columns: ColDef[];
}

export const Table = <T,>({ datos, rows, columns }: props<T>) => {
  useEffect(() => {
    console.log(datos);
    console.log(rows);
    console.log(columns);
  }, []);

  return (
    <div className="Table" style={{ height: 500, width: 1000 }}>
      <AgGridReact
        rowData={rows}
        columnDefs={columns}
        modules={[
          ClientSideRowModelModule,
          ValidationModule,
          TextEditorModule,
          TextFilterModule,
        ]}
      />
    </div>
  );
};
