import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";
import { Pageable } from "../../Definitions/PageDefinition";
import {
  ClientSideRowModelModule,
  ValidationModule,
  TextEditorModule,
  TextFilterModule,
} from "ag-grid-community";
import "./Tables.css";
import {
  BienesCols,
  getBienesRows,
  BienesRows,
} from "../../Definitions/BienesDefinition";

interface props {
  datos: Pageable;
}

export const Table = (informacion: props) => {
  const [rowData, setRowData] = useState<BienesRows[]>();
  const [colDefs] = useState<ColDef[]>(BienesCols);

  useEffect(() => {
    console.log(informacion);
    const rows = getBienesRows(informacion.datos);
    setRowData(rows);
  }, []);

  return (
    <div className="Table" style={{ height: 500, width: 1000 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
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
