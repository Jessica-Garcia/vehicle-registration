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
  disabled?: boolean;
}

export const Select = <T extends selectOptionProps>({
  selectChange,
  value,
  url,
  name,
  disabled = false,
}: ISelectProps<T>) => {
  const [list, setList] = useState<T[]>([]);

  type Models = {
    modelos: T[];
    anos: selectOptionProps[];
  };

  useEffect(() => {
    const getList = async () => {
      if (!disabled) {
        const { data } = await axios.get<T[] | Models | undefined>(url);
        if (data) {
          if (Array.isArray(data)) {
            setList(data);
          } else {
            setList(data.modelos);
          }
        }
      }
    };
    getList();
  }, [disabled, url]);

  return (
    <select
      disabled={disabled}
      name={name}
      id=""
      value={value}
      onChange={selectChange}
      defaultValue=""
    >
      <option value="" disabled>
        Selecione um valor
      </option>
      {list &&
        list.length &&
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