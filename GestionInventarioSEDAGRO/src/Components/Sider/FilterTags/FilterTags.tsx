import { Button, Tag } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import React, { MouseEventHandler, SetStateAction, useEffect } from "react";
import { URL } from "../../../Fetch/URLUtils";

export interface filterTag {
  key: number;
  type: string;
  content: string;
}

export interface filterProps {
  tags: filterTag[];
  setFilter: React.Dispatch<SetStateAction<filterTag[]>>;
  setURL: React.Dispatch<SetStateAction<URL>>;
  status: string;
}

export const FilterTags = (props: filterProps) => {
  useEffect(() => {
    console.log(props.status);
  }, []);

  const handleClickSearch: MouseEventHandler = () => {
    console.log(props);
    var Url: URL = {
      base: "http://localhost:8080/api/Bienes/filter?",
      page: 0,
      size: 10,
    };
    console.log(props.tags);
    props.tags.map((x: filterTag) => {
      switch (x.type) {
        case "Folio":
          if (!Url.inventario) Url.inventario = [];
          Url.inventario.push(x.content);
          break;
        case "Producto":
          if (!Url.descripcion) Url.descripcion = [];
          Url.descripcion.push(x.content);
          break;
        case "Marca":
          if (!Url.marca) Url.marca = [];
          Url.marca.push(x.content);
          break;
        case "Responsable":
          if (!Url.nombre) Url.nombre = [];
          Url.nombre.push(x.content);
          break;
        case "Localización":
          Url.localizacion = x.content;
          break;
      }
    });
    props.setURL(Url);
    console.log(Url);
  };
  return (
    <>
      <div className="filterTags">
        {props.tags.map((tag) => {
          return (
            <Tag
              key={tag.key}
              color="danger"
              closeIcon={<CloseCircleOutlined />}
              style={{ borderColor: "#cc3939", height: "25px" }}
              onClose={() => {
                props.setFilter((prev: filterTag[]) =>
                  prev.filter((t) => t.key !== tag.key)
                );
                console.log(props.tags);
              }}
            >
              <span
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  color: "#830000",
                }}
              >{`${tag.type}: `}</span>
              <span style={{ color: "black" }}>{`${tag.content}`}</span>
            </Tag>
          );
        })}
        {props.tags.length > 0 ? (
          <>
            <Button
              loading={props.status === "Cargando Información" ? true : false}
              onClick={handleClickSearch}
            >
              Buscar
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
