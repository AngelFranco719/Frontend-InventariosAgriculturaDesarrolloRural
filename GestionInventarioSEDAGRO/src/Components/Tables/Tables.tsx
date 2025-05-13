import { AgGridReact } from "ag-grid-react";
import { useEffect } from "react";
import { ColDef } from "ag-grid-community";
import { Pageable } from "../../Definitions/PageDefinition";
import {
  ClientSideRowModelModule,
  ValidationModule,
  TextEditorModule,
  TextFilterModule,
  ModuleRegistry,
  RowSelectionModule,
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

  const rowSelectedEvent = () => {
    console.log("Seleccionaste una");
  };

  ModuleRegistry.registerModules([RowSelectionModule]);
  return (
    <div className="Table" style={{ height: "74vh", width: "100%" }}>
      <AgGridReact
        rowData={rows}
        columnDefs={columns}
        rowSelection={"single"}
        onRowSelected={rowSelectedEvent}
        masterDetail
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
