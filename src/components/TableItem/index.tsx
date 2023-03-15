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
          <NavLink to="/" onClick={() => onDeleteVehicle(vehicle.id)}>
            <Trash weight="bold" size={20} color="#AB222E" />
          </NavLink>
        </ButtonsContainer>
      </td>
    </tr>
  );
};
