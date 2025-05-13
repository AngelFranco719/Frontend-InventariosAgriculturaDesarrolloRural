import React, { SetStateAction, useState } from "react";
import "./Sider.css";
import Sider from "antd/es/layout/Sider";
import { Collapse } from "antd";
import { SearchByFilter } from "./Filters/SearchFilter";
import { filterTag, FilterTags } from "./FilterTags/FilterTags";
import { URL } from "../../Fetch/URLUtils";

const { Panel } = Collapse;

const siderStyle: React.CSSProperties = {
  backgroundColor: "white",
  borderRight: "1px solid #d4d3d3",
};

interface props {
  setURL: React.Dispatch<SetStateAction<URL>>;
  status: string;
}

export const SiderPage = (props: props) => {
  const [filters, setFilters] = useState<filterTag[]>([]);
  const [actualKey, setActualKey] = useState<number>(1);

  return (
    <Sider width={"20%"} style={siderStyle}>
      <h1 className="title">Añadir Filtros:</h1>
      <FilterTags
        tags={filters}
        setURL={props.setURL}
        status={props.status}
        setFilter={setFilters}
      />
      <Collapse>
        <Panel key={1} header={"Inventario"} className="panel" style={{}}>
          <SearchByFilter
            actualKey={actualKey}
            setActualKey={setActualKey}
            filter="Folio"
            addFilter={setFilters}
          ></SearchByFilter>
        </Panel>
        <Panel key={2} header={"Producto"}>
          <SearchByFilter
            actualKey={actualKey}
            setActualKey={setActualKey}
            filter="Producto"
            addFilter={setFilters}
          ></SearchByFilter>
        </Panel>
        <Panel key={3} header={"Marca"}>
          <SearchByFilter
            actualKey={actualKey}
            setActualKey={setActualKey}
            filter="Marca"
            addFilter={setFilters}
          ></SearchByFilter>
        </Panel>
        <Panel key={4} header={"Responsable"} className="panel">
          <SearchByFilter
            actualKey={actualKey}
            setActualKey={setActualKey}
            filter="Responsable"
            addFilter={setFilters}
          ></SearchByFilter>
        </Panel>
        <Panel key={5} header={"Localización"}>
          <SearchByFilter
            actualKey={actualKey}
            setActualKey={setActualKey}
            filter="Localizacion"
            addFilter={setFilters}
          ></SearchByFilter>
        </Panel>
      </Collapse>
    </Sider>
  );
};
