import { Button, message, Popconfirm } from "antd";

export const UpdateButton = () => {
  const confirm = () => {
    message.success("Se guardaron los cambios con exito.");
  };
  return (
    <Popconfirm
      title="¿Guardar en la Base de Datos?"
      cancelText="Cancelar"
      okText="Aceptar"
      onConfirm={confirm}
    >
      <Button type="primary" className="sendButton">
        Guardar Actualización
      </Button>
    </Popconfirm>
  );
};
