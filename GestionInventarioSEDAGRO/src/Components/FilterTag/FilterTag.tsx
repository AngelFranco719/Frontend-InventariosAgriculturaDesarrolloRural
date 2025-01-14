import "./FilterTag.css";
import { Tooltip } from "antd";

export const FilterTag = () => {
  const tooltipText = "Eliminar Filtro";
  return (
    <>
      <Tooltip title={tooltipText} mouseEnterDelay={0.5} >
        <div className="FilterTag">
          <p>Localización: CENTRO MINERO...</p>
        </div>
      </Tooltip>
    </>
  );
};
