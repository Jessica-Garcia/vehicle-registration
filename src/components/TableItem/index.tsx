import { Eye, Pencil, Trash } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { IVehicle } from "../../@types/IVehicle";
import { ButtonsContainer } from "./styles";
import { DeleteModal } from "../DeleteModal";
interface ITableItem {
  vehicle: IVehicle;
  onDeleteVehicle: (id?: string) => void;
}

export const TableItem = ({ vehicle, onDeleteVehicle }: ITableItem) => {
  return (
    <tr key={vehicle.id}>
      <td>{vehicle.licensePlate}</td>
      <td>{vehicle.brand}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.year}</td>
      <td>
        <ButtonsContainer>
          <NavLink to={`/vehicle/view/${vehicle.id}`}>
            <Eye weight="bold" size={20} color="#49c4f2" />
          </NavLink>
          <NavLink to={`/vehicle/edit/${vehicle.id}`}>
            <Pencil weight="bold" size={20} color="#E6ED17" />
          </NavLink>
          <DeleteModal deleteVehicle={onDeleteVehicle} vehicleId={vehicle.id} />
        </ButtonsContainer>
      </td>
    </tr>
  );
};
