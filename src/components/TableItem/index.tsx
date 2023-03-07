import axios from "axios";
import { Eye, Pencil, Trash } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IVehicle } from "../../@types/IVehicle";
import { IVehicleAttributes } from "../../@types/IVehicleAttributes";
import { ButtonsContainer } from "../../pages/Home/styles";

interface ITableItem {
  vehicle: IVehicle;
  onDeleteVehicle: (id?: string) => void;
}

export const TableItem = ({ vehicle, onDeleteVehicle }: ITableItem) => {
  const [vehicleItem, setVehicleItem] = useState(vehicle);

  const getInformation = useCallback(async () => {
    const brands = await axios.get<IVehicleAttributes[]>(
      `https://parallelum.com.br/fipe/api/v2/cars/brands`
    );
    const years = await axios.get<IVehicleAttributes[]>(
      `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brand}/years`
    );
    const models = await axios.get<IVehicleAttributes[]>(
      `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brand}/years/${vehicle.year}/models`
    );

    const brand = brands.find((b) => vehicle.brand === b.code).name;
    const year = years.find((y) => vehicle.year === y.code).name;
    const model = models.find((m) => vehicle.model === m.code).name;
    setVehicleItem((current) => ({ ...current, brand, year, model }));
  }, [vehicle.brand, vehicle.year, vehicle.model]);

  useEffect(() => {
    getInformation();
  }, [getInformation]);

  return (
    <tr key={vehicleItem.id}>
      <td>{vehicleItem.licensePlate}</td>
      <td>{vehicleItem.brand}</td>
      <td>{vehicleItem.model}</td>
      <td>{vehicleItem.year}</td>
      <td>
        <ButtonsContainer>
          <NavLink to={`/vehicle/view/${vehicleItem.id}`}>
            <Eye weight="bold" size={20} color="#49c4f2" />
          </NavLink>
          <NavLink to={`/vehicle/edit/${vehicleItem.id}`}>
            <Pencil weight="bold" size={20} color="#E6ED17" />
          </NavLink>
          <NavLink to="/" onClick={() => onDeleteVehicle(vehicleItem.id)}>
            <Trash weight="bold" size={20} color="#AB222E" />
          </NavLink>
        </ButtonsContainer>
      </td>
    </tr>
  );
};
