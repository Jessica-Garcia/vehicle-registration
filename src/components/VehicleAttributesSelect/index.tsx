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
  const [vehicleAttributes, setVehicleAttributes] = useState<
    IVehicleAttributes[]
  >([]);

  const [loading, setLoadind] = useState(false);

  const getList = useCallback(async () => {
    setVehicleAttributes([]);
    setLoadind(true);
    try {
      const { data } = await axios.get<IVehicleAttributes[] | undefined>(url);
      data && setVehicleAttributes(data);
    } catch (error) {
      console.error(error);
    }
    setLoadind(false);
  }, [url]);

  useEffect(() => {
    url && getList();
  }, [getList, url]);

  return (
    <SelectContainer
      disabled={disabled || loading}
      name={name}
      id=""
      value={value}
      onChange={selectChange}
      defaultValue=""
    >
      <option value="" disabled>
        {loading ? "Carregando" : "Selecione"}
      </option>

      {vehicleAttributes &&
        vehicleAttributes.length &&
        vehicleAttributes.map((attribute) => {
          return (
            <option
              label={attribute.name}
              key={attribute.code}
              value={attribute.code}
            >
              {attribute.name}
            </option>
          );
        })}
    </SelectContainer>
  );
};
