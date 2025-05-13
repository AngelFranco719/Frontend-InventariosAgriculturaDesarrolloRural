import "./Banner.css";
import logo from "./Assets/LogoSEDAGRO-Blanco.png";
import { Header } from "antd/es/layout/layout";

export const Banner = () => {
  return (
    <>
      <Header>
        <div id="Banner">
          <img src={logo}></img>
        </div>
      </Header>
    </>
  );
};
