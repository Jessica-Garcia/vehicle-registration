import { PlusCircle, CaretLeft, CaretRight } from "phosphor-react";
import { useContext } from "react";
import { api } from "../../lib/axios";
import { IVehicle } from "../../@types/IVehicle";
import {
  AddButton,
  HomeContainer,
  Options,
  Pagination,
  PaginationButton,
  PassPagesButton,
  VehicleTable,
} from "./styles";
import { SearchForm } from "../../components/SearchForm";
import { TableItem } from "../../components/TableItem";
import { VehiclesContext } from "../../contexts/VehiclesContext";

export const Home = () => {
  const {
    vehicleList,
    totalPages,
    currentPage,
    pages,
    setCurrentPage,
    setVehicleList,
    setRecordLimitPerPage,
    setQuery,
    getVehicles,
  } = useContext(VehiclesContext);

  const deleteVehicle = async (id: string | undefined) => {
    await api.delete<IVehicle>(`vehicles/${id}`);
    const newVehicleList = vehicleList?.filter((vehicle) => {
      return vehicle.id !== id;
    });
    setVehicleList(newVehicleList);
    getVehicles();
  };

  const handleDeleteVehicle = (id: string | undefined) => {
    try {
      deleteVehicle(id);
    } catch (error) {
      console.error(error);
    }
  };

  const resetPage = (query?: string) => {
    setCurrentPage(1);
    setQuery(query!);
  };

  return (
    <HomeContainer>
      <SearchForm onGetVehicles={resetPage} onResetSearch={resetPage} />
      <Options>
        <select
          onChange={(e) => {
            setRecordLimitPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value="5"> Exibir 5 veículos</option>
          <option value="10">Exibir 10 Veículos</option>
          <option value="15">Exibir 15 Veículos</option>
          <option value="20">Exibir 20 Veículos</option>
        </select>
        <AddButton>
          <a href="/vehicle/add">
            <PlusCircle weight="bold" size={20} /> Novo
          </a>
        </AddButton>
      </Options>

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

      {vehicleList && totalPages > 1 && (
        <Pagination>
          {currentPage > 1 && (
            <PassPagesButton onClick={() => setCurrentPage(currentPage - 1)}>
              <CaretLeft weight="bold" />
            </PassPagesButton>
          )}
          {pages.map((page) => {
            return (
              <PaginationButton
                key={page}
                onClick={() => setCurrentPage(page)}
                isSelected={page === currentPage}
              >
                {page}
              </PaginationButton>
            );
          })}

          {currentPage < totalPages && (
            <PassPagesButton onClick={() => setCurrentPage(currentPage + 1)}>
              <CaretRight weight="bold" />
            </PassPagesButton>
          )}
        </Pagination>
      )}
    </HomeContainer>
  );
};
