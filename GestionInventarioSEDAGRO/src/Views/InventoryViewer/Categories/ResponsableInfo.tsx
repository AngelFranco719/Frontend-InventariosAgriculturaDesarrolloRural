import { Card, DatePicker, Input, Space, Spin } from "antd";
import { CardTitle } from "../../../Components/CardTitle/CardTitle";
import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Responsable } from "../../../Definitions/ResponsableDefinition";
import dayjs from "dayjs";
import "./ProductInfo.css";
import { ZonaArea } from "../../../Definitions/ZonaAreaDefinitions";

import "../../../../public/Assets/warning.png";
import { UpdateButton } from "../../../Components/UpdateButton/UpdateButton";

interface props {
  Responsable: Responsable | undefined;
  Ubicacion: ZonaArea | undefined;
}

export const ResponsableInfo = (prop: props) => {
  const [isReadOnlyCard1, setIsReadOnlyCard1] = useState<boolean>(true);
  const [isReadOnlyCard2, setIsReadOnlyCard2] = useState<boolean>(true);

  useEffect(() => {
    if (prop.Ubicacion) {
      console.log(prop.Ubicacion);
    } else console.log("No recibido");
  }, [prop.Ubicacion]);

  return (
    <>
      <div>
        {prop.Responsable ? (
          <Space
            direction="horizontal"
            size={30}
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              width: "100%",
              paddingTop: "0.5%",
            }}
          >
            <Card
              title={
                <CardTitle
                  titulo="Información del Responsable: "
                  icono={<UserOutlined />}
                  setIsReadOnly={setIsReadOnlyCard1}
                />
              }
            >
              <p className="pItem">
                <span>Responsable:</span>
                <Input
                  style={{ width: "70%" }}
                  defaultValue={prop.Responsable.res_nombre}
                  readOnly={isReadOnlyCard1}
                ></Input>
              </p>
              <p className="pItem">
                <span>RFC:</span>
                <Input
                  style={{ width: "70%" }}
                  defaultValue={prop.Responsable.res_rfc}
                  readOnly={isReadOnlyCard1}
                ></Input>
              </p>
              <div className="pItem">
                <span>Fecha de Resguardo:</span>
                {prop.Responsable.res_fechaResguardo ? (
                  <DatePicker
                    className="datePicker"
                    defaultValue={dayjs(prop.Responsable.res_fechaResguardo)}
                    disabled={isReadOnlyCard1}
                  />
                ) : (
                  <></>
                )}
              </div>
              {isReadOnlyCard1 ? (
                <></>
              ) : (
                <>
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "end",
                        paddingTop: "5%",
                      }}
                    >
                      <UpdateButton></UpdateButton>
                    </div>
                  </>
                </>
              )}
            </Card>
            <Card
              title={
                <CardTitle
                  titulo="Información de Ubicación: "
                  icono={<EnvironmentOutlined />}
                  setIsReadOnly={setIsReadOnlyCard2}
                ></CardTitle>
              }
              style={{ width: "550px" }}
            >
              {prop.Ubicacion ? (
                <></>
              ) : (
                <p
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="../../../../public/Assets/warning.png"
                    style={{
                      height: "3%",
                      width: "3%",
                    }}
                  ></img>
                  Información No Actualizada.
                </p>
              )}
              <p className="pItem" style={{ width: "100%" }}>
                <span>Localización: </span>
                <Input
                  defaultValue={
                    prop.Ubicacion
                      ? prop.Ubicacion.zona.zon_loc.loc_domicilio
                      : ""
                  }
                  style={{ width: "100%" }}
                  readOnly={isReadOnlyCard2}
                />
              </p>
              <div className="twoDiv">
                <p className="pItem">
                  <span>U. Presupuestal: </span>
                  <Input
                    style={{ width: "40%" }}
                    defaultValue={
                      prop.Ubicacion
                        ? prop.Ubicacion.area.are_unidadPresupuestal
                        : ""
                    }
                    readOnly={isReadOnlyCard2}
                  />
                </p>
                <p className="pItem">
                  <span>U. Responsable: </span>
                  <Input
                    style={{ width: "40%" }}
                    defaultValue={
                      prop.Ubicacion
                        ? prop.Ubicacion.area.are_unidadResponsable
                        : ""
                    }
                    readOnly={isReadOnlyCard2}
                  />
                </p>
                <p className="pItem">
                  <span>Zona: </span>
                  <Input
                    style={{ width: "60%" }}
                    defaultValue={
                      prop.Ubicacion ? prop.Ubicacion.zona.zon_local : ""
                    }
                    readOnly={isReadOnlyCard2}
                  />
                </p>
                <p className="pItem">
                  <span>Nivel: </span>
                  <Input
                    style={{ width: "60%" }}
                    defaultValue={
                      prop.Ubicacion ? prop.Ubicacion.zona.zon_nivel : ""
                    }
                    readOnly={isReadOnlyCard2}
                  />
                </p>
                {isReadOnlyCard2 ? (
                  <></>
                ) : (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "end",
                        gridColumn: 2,
                        paddingTop: "5%",
                      }}
                    >
                      <UpdateButton></UpdateButton>
                    </div>
                  </>
                )}
              </div>
            </Card>
          </Space>
        ) : (
          <Spin spinning></Spin>
        )}
      </div>
    </>
  );
};
