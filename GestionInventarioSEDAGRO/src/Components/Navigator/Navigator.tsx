import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import "./Navigator.css";
export const Navigator = () => {
  const location = useLocation();
  const routeMap: Record<string, string> = {
    "/": "Inicio",
    "/Bien": "Visualizar Bien",
  };

  const path = location.pathname.split("/").filter((i) => i);

  const items = [
    ...path.map((_, index) => {
      const url = "/" + path.slice(0, index + 1).join("/");
      return {
        title: routeMap[url] || url,
      };
    }),
  ];
  return (
    <>
      <div className="navigator">
        <Breadcrumb items={items}></Breadcrumb>
      </div>
    </>
  );
};
