import { Card, Input, Space } from "antd";
import { BulbOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "./ProductInfo.css";
import { Bienes } from "../../../Definitions/BienesDefinition";
import { CardTitle } from "../../../Components/CardTitle/CardTitle";
import { useState } from "react";
import { UpdateButton } from "../../../Components/UpdateButton/UpdateButton";

interface props {
  bien: Bienes | undefined;
}

export const ProductInfo = (prop: props) => {
  const [isReadOnlyCard1, setIsReadOnlyCard1] = useState<boolean>(true);
  const [isReadOnlyCard2, setIsReadOnlyCard2] = useState<boolean>(true);

  return (
    <div className="productInfo">
      <Space
        direction="horizontal"
        size={30}
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "start",
          paddingTop: "0.5%",
        }}
      >
        <Card
          title={
            <CardTitle
              icono={<InfoCircleOutlined />}
              titulo="Identificadores Únicos: "
              setIsReadOnly={setIsReadOnlyCard1}
            />
          }
          style={{ width: "400px" }}
        >
          <p className="pItem">
            <span>Num. de Inventario: </span>
            <Input
              defaultValue={prop.bien ? prop.bien.bien_inventario : 0}
              readOnly={isReadOnlyCard1}
            />
          </p>
          <p className="pItem">
            <span>Num. de Serie: </span>
            <Input
              defaultValue={prop.bien ? prop.bien.bien_serie : 0}
              readOnly={isReadOnlyCard1}
            />
          </p>
          {!isReadOnlyCard1 ? (
            <>
              <div className="pItem">
                <UpdateButton />
              </div>
            </>
          ) : (
            <></>
          )}
        </Card>
        <Card
          title={
            <CardTitle
              icono={<BulbOutlined />}
              titulo="Información del Producto:"
              setIsReadOnly={setIsReadOnlyCard2}
            />
          }
          style={{ width: "700px" }}
        >
          <div className="twoDiv">
            <p className="pItem">
              <span>Producto: </span>
              <Input
                defaultValue={
                  prop.bien ? prop.bien.bienProducto.prod_descripcion : 0
                }
                readOnly={isReadOnlyCard2}
              />
            </p>
            <p className="pItem">
              <span>Marca: </span>
              <Input
                defaultValue={prop.bien ? prop.bien.bienProducto.prod_marca : 0}
                readOnly={isReadOnlyCard2}
              />
            </p>
            <p className="pItem">
              <span>Modelo: </span>
              <Input
                defaultValue={
                  prop.bien ? prop.bien.bienProducto.prod_modelo : 0
                }
                readOnly={isReadOnlyCard2}
              />
            </p>
            <p className="pItem">
              <span>Núm. Partida: </span>
              <Input
                defaultValue={
                  prop.bien ? prop.bien.bienProducto.prod_partida : 0
                }
                readOnly={isReadOnlyCard2}
              />
            </p>
            <p className="pItem">
              <span>Color: </span>
              <Input
                defaultValue={prop.bien ? prop.bien.bien_color : 0}
                readOnly={isReadOnlyCard2}
              />
            </p>
            <p className="pItem">
              <span>Material: </span>
              <Input
                defaultValue={prop.bien ? prop.bien.bien_material : 0}
                readOnly={isReadOnlyCard2}
              />
            </p>
            <p className="pItem">
              <span>Estado: </span>
              <Input
                defaultValue={prop.bien ? prop.bien.bien_estado : 0}
                readOnly={isReadOnlyCard2}
              />
            </p>
            <p className="pItem">
              <span>Costo: </span>
              <Input
                defaultValue={prop.bien ? prop.bien.bienProducto.prod_monto : 0}
                readOnly={isReadOnlyCard2}
              />
            </p>
            {!isReadOnlyCard2 ? (
              <>
                <div className="pItem" style={{ gridColumn: 2 }}>
                  <UpdateButton />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </Card>
      </Space>
    </div>
  );
};
