import { useEffect, useState } from "react";
import { Table } from "../../Components/Tables/Tables";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./Main.css";
import useFetch, { useFetchState } from "../../Fetch/useFetch";
import {
  getMaximumResults,
  getPageSize,
  Pageable,
} from "../../Definitions/PageDefinition";
import { ColDef } from "ag-grid-community";
import { getColumns, getRows } from "../../Definitions/Utils";
import { PageManager } from "../../Components/PageManager/PageManager";

///Componente
export const Main = <T,>() => {
  ///Variables
  const [recieved, setRecieved] = useState<boolean>(false);
  const [data, setData] = useState<Pageable<T>>();
  const [actualRows, setActualRows] = useState<any[]>();
  const [columns, setColumns] = useState<ColDef[]>();
  const [actualPage, setActualPage] = useState<number>(0);
  const [actualResults, setActualResults] = useState<number>(0);
  const [maximumResults, setMaximumResults] = useState<number>(0);
  const [url, setUrl] = useState<string>(
    "http://localhost:8080/api/Bienes?page=" + actualPage
  );
  const status = useFetch(url);

  useEffect(() => {
    if (status) {
      console.log(status.state);
    }
  }, [status]);

  useEffect(() => {
    if (status && status.state == "Obtención de Datos Exitosa") {
      setRecieved(true);
      setData(status.data);
      setActualRows(getRows(status.data));
      setColumns(getColumns(status.data));
      setActualResults(getPageSize(status.data));
      setMaximumResults(getMaximumResults(status.data));
    }
  }, [status.state]);

  useEffect(() => {
    console.log("Actual Page: " + actualPage);
  }, [actualPage]);

  const PaginationOnChange = (pageSelected: number, size: number) => {
    setActualPage(pageSelected);
    setRecieved(false);
    const searchPage = pageSelected - 1;
    setUrl("http://localhost:8080/api/Bienes?page=" + searchPage);
  };

  return (
    <>
      <div className="DivMain">
        {recieved && data && actualRows && columns ? (
          <>
            <div className="divTabla">
              <Table datos={data} rows={actualRows} columns={columns}></Table>
              <PageManager
                actualResults={actualResults}
                maximumResults={maximumResults}
                actualPage={actualPage}
                totalPages={1000}
                PaginationOnChange={PaginationOnChange}
              ></PageManager>
            </div>
          </>
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
