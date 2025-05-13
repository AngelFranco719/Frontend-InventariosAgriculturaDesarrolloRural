import { Modal } from "antd";

interface props{
    isOpen : boolean
}

export const ModalBajas = () => {
    
  return (
    <>
      <Modal
        title={"Formulario de Baja: "}
        closable={{ "aria-label": "Custom Close Button" }}

      ></Modal>
    </>
  );
};
