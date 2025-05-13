import { Button } from "antd";
import Search from "antd/es/transfer/search";
import { PlusOutlined } from "@ant-design/icons";
import React, { SetStateAction, useEffect, useState } from "react";
import { filterTag } from "../FilterTags/FilterTags";

interface props {
  filter: string;
  addFilter: React.Dispatch<SetStateAction<filterTag[]>>;
  actualKey: number;
  setActualKey: React.Dispatch<SetStateAction<number>>;
}

const predefFilter: filterTag = {
  key: 0,
  type: "Filtro",
  content: "Empty",
};

export const SearchByFilter = (props: props) => {
  const [actualContent, setActualContent] = useState<string>("");
  const [newFilter, setNewFilter] = useState<filterTag>(predefFilter);
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActualContent(e.target.value);
  };

  useEffect(() => {
    console.log(newFilter);
    if (newFilter.key != 0) props.addFilter((prev) => [...prev, newFilter]);
  }, [newFilter]);

  const onClickHandle = () => {
    props.setActualKey(props.actualKey + 1);
    setNewFilter({
      key: props.actualKey,
      type: props.filter,
      content: actualContent,
    });
  };
  return (
    <>
      <div className="searchFolio">
        <Search
          placeholder={`Buscar por ${props.filter}`}
          onChange={onSearchChange}
        />
        <Button
          onClick={onClickHandle}
          className="button"
          icon={<PlusOutlined />}
          type="dashed"
        >
          Añadir Filtro
        </Button>
      </div>
    </>
  );
};
