import { useEffect, useState } from "react";
import { Table } from "../../Components/Tables/Tables";
import { Layout, Spin } from "antd";
import "./Main.css";
import { LoadingOutlined } from "@ant-design/icons";
import useFetch from "../../Fetch/useFetch";
import {
  getMaximumResults,
  getPageSize,
  Pageable,
} from "../../Definitions/PageDefinition";
import { ColDef } from "ag-grid-community";
import { getColumns, getRows } from "../../Definitions/Utils";
import { PageManager } from "../../Components/PageManager/PageManager";
import { Content } from "antd/es/layout/layout";
import { Banner } from "../../Components/Banner/Banner";
import { SiderPage } from "../../Components/Sider/Sider";
import { generateURL, URL } from "../../Fetch/URLUtils";

///Componente

const defaultURL: URL = {
  base: "https://52a3-2806-105e-8-852b-598f-39ea-c644-73a8.ngrok-free.app/api/Bienes/filter?",
  page: 0,
  size: 10,
};

export const Main = <T,>() => {
  ///Variables
  const [recieved, setRecieved] = useState<boolean>(false);
  const [data, setData] = useState<Pageable<T>>();
  const [actualRows, setActualRows] = useState<any[]>();
  const [columns, setColumns] = useState<ColDef[]>();
  const [actualPage, setActualPage] = useState<number>(0);
  const [actualResults, setActualResults] = useState<number>(0);
  const [maximumResults, setMaximumResults] = useState<number>(0);
  const [url, setUrl] = useState<URL>(defaultURL);
  const status = useFetch(generateURL(url));

  useEffect(() => {
    if (status) {
      console.log(status.state);
    }
  }, [status]);

  useEffect(() => {
    if (status) {
      console.log(url);
    }
  }, [url]);

  useEffect(() => {
    if (status && status.state == "Obtención de Datos Exitosa") {
      setRecieved(true);
      setData(status.data);
      setActualRows(getRows(status.data));
      setColumns(getColumns(status.data));
      setActualResults(getPageSize(status.data));
      setMaximumResults(getMaximumResults(status.data));
    } else console.log(status.error?.name);
  }, [status.state]);

  useEffect(() => {
    console.log("Actual Page: " + actualPage);
  }, [actualPage]);

  const PaginationOnChange = (pageSelected: number, _size: number) => {
    setActualPage(pageSelected);
    setRecieved(false);
    const searchPage = pageSelected - 1;
    console.log(searchPage);
    setUrl((prev) => ({
      ...prev,
      page: searchPage,
    }));
  };

  return (
    <>
      <Layout id="Layout">
        <div className="DivMain">
          <SiderPage setURL={setUrl} status={status.state} />
          <Banner />
          {recieved && columns && data && actualRows ? (
            <Content>
              <Table columns={columns} datos={data} rows={actualRows}></Table>
              <PageManager
                actualPage={actualPage}
                PaginationOnChange={PaginationOnChange}
                totalPages={maximumResults}
                actualResults={actualResults}
                maximumResults={maximumResults}
              ></PageManager>
            </Content>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Spin
                  tip={"Cargando Datos..."}
                  indicator={<LoadingOutlined spin />}
                  size="large"
                ></Spin>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};
