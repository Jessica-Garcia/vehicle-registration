import { PlusCircle, CaretLeft, CaretRight } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
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
    await api.delete<IVehicle>(`vehicles/${id}`);
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

  const getVehicles = useCallback(async (query?: string) => {
    const { data } = await api.get<IVehicle[]>("vehicles", {
      params: {
        q: query,
      },
    });

    data && setVehicleList(data);
  }, []);

  useEffect(() => {
    getVehicles();
  }, [getVehicles]);

  return (
    <HomeContainer>
      <SearchForm onGetVehicles={getVehicles} />
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
