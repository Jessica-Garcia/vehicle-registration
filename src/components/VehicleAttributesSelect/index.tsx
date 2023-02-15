import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { IVehicleAttributes } from "../../@types/IVehicleAttributes";
import { IVehicleAttributesSelectProps } from "../../@types/IVehicleAttributesSelectProps";
import { SelectContainer } from "./style";

export const VehicleAttributesSelect = ({
  selectChange,
  value,
  url,
  name,
  disabled = false,
}: IVehicleAttributesSelectProps) => {
  const [attributesList, setAttributesList] = useState<IVehicleAttributes[]>(
    []
  );

  const getList = useCallback(async () => {
    const { data } = await axios.get<IVehicleAttributes[] | undefined>(url);
    console.log(data);
    data && setAttributesList(data);
  }, [url]);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <SelectContainer
      disabled={disabled}
      name={name}
      id=""
      value={value}
      onChange={selectChange}
      defaultValue=""
    >
      <option value="" disabled>
        Selecione
      </option>

      {attributesList &&
        attributesList.length &&
        attributesList.map((attribute) => {
          return (
            <option key={attribute.code} value={attribute.code}>
              {attribute.name}
            </option>
          );
        })}
    </SelectContainer>
  );
};
