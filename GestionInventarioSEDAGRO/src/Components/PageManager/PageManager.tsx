import "./PageManager.css";
import { InputNumber, Pagination } from "antd";

interface props {
  actualResults: number;
  maximumResults: number;
  actualPage: number;
  totalPages: number;
  PaginationOnChange: (page: number, size: number) => void;
}

export const PageManager = ({
  actualResults,
  maximumResults,
  actualPage,
  PaginationOnChange,
}: props) => {
  return (
    <>
      <div id="PageManager">
        <p
          style={{
            justifySelf: "left",
            textAlign: "left",
            width: "fit-content",
            fontSize: "15px",
            color: "#424242",
          }}
        >
          Se muestran {actualResults} resultados de {maximumResults}.
        </p>
        <div className="Pagination">
          <Pagination
            defaultCurrent={actualPage}
            total={maximumResults}
            showSizeChanger={false}
            showQuickJumper={false}
            showLessItems={true}
            onChange={(page, size) => PaginationOnChange(page, size)}
          ></Pagination>
        </div>
        <div className="PickSizeTable">
          <p>Tamaño de Tabla: </p>
          <InputNumber
            size="small"
            min={5}
            max={50}
            defaultValue={10}
          ></InputNumber>
        </div>
      </div>
    </>
  );
};
