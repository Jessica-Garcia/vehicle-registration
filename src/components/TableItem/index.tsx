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

  const getInformation = useCallback(async (vehicle: IVehicle) => {
    const brands = await axios.get<IVehicleAttributes[]>(
      `https://parallelum.com.br/fipe/api/v2/cars/brands`
    ); // [{code: 1, name: bmw}]
    const years = await axios.get<IVehicleAttributes[]>(
      `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brand}/years`
    ); // [{code: 1, name: 2023}]
    const models = await axios.get<IVehicleAttributes[]>(
      `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brand}/years/${vehicle.year}/models`
    ); // [{code: 1, name: x5}]

    const brand = brands.data.find((b) => vehicle.brand === b.code)?.name;
    const year = years.data.find((y) => vehicle.year === y.code)?.name;
    const model = models.data.find((m) => vehicle.model === m.code)?.name;
    setVehicleItem((current) => ({ ...current, brand, year, model }));
  }, []);

  useEffect(() => {
    getInformation(vehicle);
  }, [getInformation, vehicle]);

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
