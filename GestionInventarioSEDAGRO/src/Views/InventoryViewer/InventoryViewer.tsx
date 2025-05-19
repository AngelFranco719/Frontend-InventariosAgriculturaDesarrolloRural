import { useEffect, useState } from "react";
import "./InventoryViewer.css";
import { Button, Spin, Tabs, TabsProps, Tooltip } from "antd";
import {
  BankOutlined,
  PaperClipOutlined,
  RestOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ProductInfo } from "./Categories/ProductInfo";
import { useParams } from "react-router-dom";
import { generateURL, URL } from "../../Fetch/URLUtils";
import useFetch from "../../Fetch/useFetch";
import { Pageable } from "../../Definitions/PageDefinition";
import { Bienes } from "../../Definitions/BienesDefinition";
import { ResponsableInfo } from "./Categories/ResponsableInfo";

export const InventoryViewer = () => {
  const params = useParams();
  const [data, setData] = useState<Pageable<Bienes>>();
  const [bien, setBien] = useState<Bienes>();

  const url: URL = {
    base: `https://2299-2806-2f0-a221-f4a5-d576-1609-b6d9-ea58.ngrok-free.app/api/Bienes/filter?inventario=${params.inventario}&`,
    page: 0,
    size: 1,
  };

  const status = useFetch(generateURL(url));

  useEffect(() => {
    console.log(params.inventario);
  }, []);

  useEffect(() => {
    if (status) console.log(status.state);
    if (status.state === "Obtención de Datos Exitosa") {
      setData(status.data);
      console.log(status.data);
    }
  }, [status]);

  useEffect(() => {
    if (data) {
      setBien(data.content[0]);
      if (bien) console.log(bien);
    }
  }, [data]);

  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: "Información de Producto",
      icon: <PaperClipOutlined />,
      children: <ProductInfo bien={bien} />,
    },
    {
      key: "2",
      label: "Información de Responsable y Ubicación",
      icon: <UserOutlined />,
      children: (
        <ResponsableInfo
          Responsable={bien?.bienResponsable}
          Ubicacion={bien?.bien_zonaArea}
        />
      ),
    },
    {
      key: "3",
      label: "Información Fiscal",
      icon: <BankOutlined />,
      children: <></>,
    },
  ];

  return (
    <>
      <div className="InventoryViewer">
        {bien ? (
          <>
            <div
              style={{
                display: "flex",
              }}
            >
              <Tabs defaultActiveKey="1" items={tabs} />
              <Tooltip title="Dar de Baja">
                <Button
                  style={{
                    position: "absolute",
                    right: "15%",
                    top: "16%",
                    zIndex: 9999,
                  }}
                  type="primary"
                  shape="circle"
                  icon={<RestOutlined />}
                  danger
                  size="middle"
                />
              </Tooltip>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spin
              style={{
                justifySelf: "center",
                alignSelf: "center",
              }}
              spinning
            ></Spin>
          </div>
        )}
      </div>
    </>
  );
};
