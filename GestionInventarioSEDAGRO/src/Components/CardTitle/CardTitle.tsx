import { Switch, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import "./CardTitle.css";
import { ReactNode, SetStateAction } from "react";

interface props {
  titulo: string;
  icono: ReactNode;
  setIsReadOnly: React.Dispatch<SetStateAction<boolean>>;
}

export const CardTitle = (prop: props) => {
  const switchOnChange = (checked: boolean) => {
    prop.setIsReadOnly(!checked);
  };

  return (
    <>
      <span className="spanTitle">
        <span className="spanTitle">
          {prop.icono}
          {prop.titulo}
        </span>
        <span className="switch">
          <Tooltip title="Editar Información">
            <Switch
              unCheckedChildren={
                <span>
                  <EditOutlined />
                </span>
              }
              onChange={switchOnChange}
            />
          </Tooltip>
        </span>
      </span>
    </>
  );
};
