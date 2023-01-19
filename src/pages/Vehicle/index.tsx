import { ArrowFatLeft, Pencil, Trash } from "phosphor-react";
import { ButtonsContainer, VehicleInfo } from "./styles";
import { IVehicle } from "../../interfaces/IVehicle";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

export const Vehicle = () => {
  const [vehicle, setVehicle] = useState<IVehicle>();
  const { id } = useParams();

  useEffect(() => {
    const getVehicle = async () => {
      try {
        const { data } = await axios.get<IVehicle>(
          `http://localhost:3000/vehicles/${id}`
        );

        data && setVehicle(data);
      } catch (error) {
        console.error(error);
      }
    };
    getVehicle();
  }, [id]);

  return (
    <VehicleInfo>
      {vehicle ? (
        <table>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Versão</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{vehicle.licensePlate}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.version}</td>
              <td>{vehicle.year}</td>
              <td>
                <ButtonsContainer>
                  <NavLink to="/">
                    <ArrowFatLeft weight="bold" />
                  </NavLink>
                  <NavLink to="/">
                    <Pencil weight="bold" />
                  </NavLink>
                  <NavLink to="/">
                    <Trash weight="bold" />
                  </NavLink>
                </ButtonsContainer>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>
          <h2>Veículo não encontrado</h2>
        </div>
      )}
    </VehicleInfo>
  );
};
