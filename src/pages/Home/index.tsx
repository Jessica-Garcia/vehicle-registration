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
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

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

  const getVehicles = useCallback(async () => {
    const limit = 3;
    const response = await api.get<IVehicle[]>("vehicles", {
      params: {
        _sort: "licensePlate",
        brand_like: query,
        _limit: limit,
        _page: currentPage,
        // q: query,
      },
    });
    setPages(Math.ceil(response.headers["x-total-count"] / limit));
    response.data && setVehicleList(response.data);
  }, [currentPage, query]);

  const resetPage = (query: string) => {
    setCurrentPage(1);
    setQuery(query);
  };

  useEffect(() => {
    getVehicles();
  }, [getVehicles]);

  return (
    <HomeContainer>
      <SearchForm onGetVehicles={resetPage} />
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

      {vehicleList && pages > 1 && (
        <Pagination>
          <span>
            <CaretLeft weight="bold" />
          </span>
          <button onClick={() => setCurrentPage(1)}>1</button>
          <button onClick={() => setCurrentPage(2)}>2</button>
          <button onClick={() => setCurrentPage(3)}>3</button>
          <span>
            <CaretRight weight="bold" />
          </span>
        </Pagination>
      )}
    </HomeContainer>
  );
};
