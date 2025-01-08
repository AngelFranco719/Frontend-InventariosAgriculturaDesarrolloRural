import { useEffect, useState } from "react";
import { Banner } from "../../Components/Banner/Banner";
import { Table } from "../../Components/Tables/Tables";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import "./Main.css";
import useFetch, { useFetchState } from "../../Fetch/useFetch";
export const Main = () => {
  const [recieved, setRecieved] = useState<boolean>(false);
  const url = "http://localhost:8080/api/Bienes";

  const status = useFetch(url);

  useEffect(() => {
    console.log(status.state);
    if (status.state == "Obtención de Datos Exitosa") {
      console.log(status.data);
      setRecieved(true);
    }
  }, [status.state]);

  useEffect(() => {
    if (recieved) console.log("Recibido");
  }, [recieved]);

  return (
    <>
      <div>
        <Banner></Banner>
        {recieved ? (
          <Table datos={status.data}></Table>
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
