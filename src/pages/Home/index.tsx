import { Pencil, Eye, Trash, Funnel, PlusCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { IVehicle } from "../../interfaces/IVehicle";
import {
  AddButton,
  ButtonsContainer,
  Content,
  HomeContainer,
  TbodyContainer,
  TheadContainer,
  Title,
} from "./styles";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const [vehicleList, setVehicleList] = useState<IVehicle[]>();

  const deleteVehicle = async (id: string | undefined) => {
    await axios.delete<IVehicle>(`http://localhost:3000/vehicles/${id}`);
    const newVehicleList = vehicleList?.filter((vehicle) => {
      return vehicle.id !== id;
    });
    setVehicleList(newVehicleList);
  };

  const handleDeleteVehicle = async (id: string | undefined) => {
    try {
      deleteVehicle(id);
    } catch (error) {
      console.error(error);
    }
  };

  const getVehicles = async () => {
    const { data } = await axios.get<IVehicle[] | undefined>(
      "http://localhost:3000/vehicles"
    );

    data && setVehicleList(data);
  };

  useEffect(() => {
    const showVehicles = () => {
      try {
        getVehicles();
      } catch (error) {
        console.error(error);
      }
    };
    showVehicles();
  }, []);

  return (
    <HomeContainer>
      <Title>
        <h2>Veículos cadastrados</h2>
        <button>
          <Funnel size={22} />
        </button>
      </Title>
      <Content>
        <table>
          <TheadContainer>
            <tr>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Versão</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </TheadContainer>
          <TbodyContainer>
            {vehicleList &&
              vehicleList.map((vehicle) => {
                return (
                  <tr key={vehicle.id}>
                    <td>{vehicle.licensePlate}</td>
                    <td>{vehicle.brand}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.version}</td>
                    <td>{vehicle.year}</td>
                    <td>
                      <ButtonsContainer>
                        <NavLink to={`/vehicle/${vehicle.id}`}>
                          <Eye weight="bold" />
                        </NavLink>
                        <NavLink to={`/vehicle/edit/${vehicle.id}`}>
                          <Pencil weight="bold" />
                        </NavLink>
                        <NavLink
                          to="/"
                          onClick={() => handleDeleteVehicle(vehicle.id)}
                        >
                          <Trash weight="bold" />
                        </NavLink>
                      </ButtonsContainer>
                    </td>
                  </tr>
                );
              })}
          </TbodyContainer>
        </table>
      </Content>
      <AddButton href="/vehicle/add">
        <PlusCircle weight="bold" size={20} /> Novo veículo
      </AddButton>
    </HomeContainer>
  );
};
