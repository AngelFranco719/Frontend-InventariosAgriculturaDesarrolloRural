import { useEffect, useState } from "react";
import { Table } from "../../Components/Tables/Tables";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./Main.css";
import useFetch from "../../Fetch/useFetch";
import { Pageable } from "../../Definitions/PageDefinition";
import { ColDef } from "ag-grid-community";
import { getColumns, getRows } from "../../Definitions/Utils";
export const Main = <T,>() => {
  const [recieved, setRecieved] = useState<boolean>(false);
  const [data, setData] = useState<Pageable<T>>();
  const [actualRows, setActualRows] = useState<any[]>();
  const [columns, setColumns] = useState<ColDef[]>();
  const url = "http://localhost:8080/api/Responsables";

  const status = useFetch(url);

  useEffect(() => {
    console.log(status.state);
    if (status.state == "Obtención de Datos Exitosa") {
      setRecieved(true);
      setData(status.data);
      setActualRows(getRows(status.data));
      setColumns(getColumns(status.data));
    }
  }, [status.state]);

  useEffect(() => {
    console.log(columns);
  }, [columns]);

  return (
    <>
      <div className="DivMain">
        {recieved && data && actualRows && columns ? (
          <Table datos={data} rows={actualRows} columns={columns}></Table>
        ) : (
          <div>
            <Spin
              indicator={<LoadingOutlined spin></LoadingOutlined>}
              size="large"
            >
              {" "}
            </Spin>
          </div>
        )}
      </div>
    </>
  );
};
