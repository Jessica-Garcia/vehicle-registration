import { ArrowFatLeft, Pencil, Trash } from "phosphor-react";
import { ButtonsContainer, VehicleInfo } from "./styles";
import { IVehicle } from "../../interfaces/IVehicle";
import React, { ChangeEvent, InvalidEvent, useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

/* interface IAddVehicleProps {
  name: string;
  labelText: string;
  value: string | number;
  type?: "text" | "number";
  min?: number;
  required?: boolean;
  autofocus?: boolean;
  placeholder?: string;
  invalid: (e: InvalidEvent<HTMLInputElement>) => void;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  setVehicleList: React.Dispatch<React.SetStateAction<IVehicle[] | undefined>>;
} */

export const AddVehicle = () => {
  const [vehicleList, setVehicleList] = useState<IVehicle[]>();
  const [vehicle, setVehicle] = useState<IVehicle>({} as IVehicle);

  const handleAddVehicle = async (vehicle: IVehicle) => {
    const request = {
      id: uuidv4(),
      ...vehicle,
    };

    const response = await axios.post<IVehicle>(
      `http://localhost:3000/vehicles`,
      request
    );
    setVehicleList((state) => [...(state as IVehicle[]), response.data]);
  };

  return (
    <>
      <VehicleInfo>
        <h1>Cadastrar Veículo</h1>

        <form
          onSubmit={() => handleAddVehicle}
          action="http://localhost:3000/vehicles"
          method="POST"
        >
          <label htmlFor="licensePlate">Placa</label>
          <input
            type="text"
            name="licensePlate"
            id="licensePlate"
            value={vehicle?.licensePlate}
          />
          <label htmlFor="brand">Marca</label>
          <input type="text" name="brand" id="brand" value={vehicle?.brand} />
          <label htmlFor="model">Modelo</label>
          <input type="text" name="model" id="model" value={vehicle?.model} />
          <label htmlFor="year">Ano</label>
          <input type="text" name="year" id="year" value={vehicle?.year} />
          <label htmlFor="version">Versão</label>
          <input
            type="text"
            name="version"
            id="version"
            value={vehicle?.version}
          />
          <NavLink to="/">
            <ArrowFatLeft /> voltar
          </NavLink>
          <button type="submit">Salvar</button>
        </form>
      </VehicleInfo>
    </>
  );
};
