import axios from "axios";
import React, { useEffect, useState } from "react";

type selectOptionProps = {
  codigo: string;
  nome: string;
};

export interface ISelectProps<T> {
  selectChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  value: string;
  url: string;
  name: string;
}

export const Select = <T extends selectOptionProps>({
  selectChange,
  value,
  url,
  name,
}: ISelectProps<T>) => {
  const [list, setList] = useState<T[]>([]);

  useEffect(() => {
    const getList = async () => {
      const { data } = await axios.get<T[] | undefined>(url);

      data && setList(data);
    };
    getList();
  }, [url]);

  console.log(name, value);

  return (
    <select name={name} id="" value={value} onChange={selectChange}>
      {list.length &&
        list.map((item) => {
          return (
            <option key={item.codigo} value={item.codigo}>
              {item.nome}
            </option>
          );
        })}
    </select>
  );
};
