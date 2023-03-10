import { PlusCircle, CaretLeft, CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { IVehicle } from "../../@types/IVehicle";
import {
  AddButton,
  HomeContainer,
  Pagination,
  Title,
  VehicleTable,
} from "./styles";
import { SearchForm } from "./components/SearchForm";
import { TableItem } from "../../components/TableItem";

export const Home = () => {
  const [vehicleList, setVehicleList] = useState<IVehicle[]>();

  const deleteVehicle = async (id: string | undefined) => {
    await axios.delete<IVehicle>(`http://localhost:3000/vehicles/${id}`);
    const newVehicleList = vehicleList?.filter((vehicle) => {
      return vehicle.id !== id;
    });
    setVehicleList(newVehicleList);
  };

  const handleDeleteVehicle = (id: string | undefined) => {
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
      <SearchForm />
      <Title>
        <h2>Veículos cadastrados</h2>
        <AddButton>
          <a href="/vehicle/add">
            <PlusCircle weight="bold" size={20} /> Novo
          </a>
        </AddButton>
      </Title>

      <VehicleTable>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vehicleList &&
            vehicleList.map((vehicle) => {
              return (
                <TableItem
                  key={vehicle.id}
                  vehicle={vehicle}
                  onDeleteVehicle={handleDeleteVehicle}
                />
              );
            })}
        </tbody>
      </VehicleTable>

      {vehicleList && vehicleList?.length > 5 && (
        <Pagination>
          <span>
            <CaretLeft weight="bold" />
          </span>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <span>
            <CaretRight weight="bold" />
          </span>
        </Pagination>
      )}
    </HomeContainer>
  );
};
