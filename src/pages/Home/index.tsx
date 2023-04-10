import { PlusCircle, CaretLeft, CaretRight } from "phosphor-react";
import { useContext, useState } from "react";
import {
  AddButton,
  HomeContainer,
  NotFoundInSerach,
  Options,
  Pagination,
  PaginationButton,
  PassPagesButton,
  VehicleTable,
} from "./styles";
import { SearchForm } from "../../components/SearchForm";
import { TableItem } from "../../components/TableItem";
import { VehiclesContext } from "../../contexts/VehiclesContext";
import { VehicleNotFound } from "../../components/VehicleNotFound";

export const Home = () => {
  const {
    vehicleList,
    totalPages,
    currentPage,
    pages,
    setCurrentPage,
    setRecordLimitPerPage,
    setQuery,
    deleteVehicle,
  } = useContext(VehiclesContext);

  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleNextPageButton = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePreviousPageButton = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
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

      {vehicleList?.length === 0 ? (
        <NotFoundInSerach>
          <span>Não há veículo cadastrado.</span>
        </NotFoundInSerach>
      ) : (
        <>
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
        </>
      )}

      {vehicleList && totalPages > 1 && (
        <Pagination>
          {currentPage > 1 && (
            <PassPagesButton onClick={handlePreviousPageButton}>
              <CaretLeft weight="bold" />
            </PassPagesButton>
          )}
          {pages.map((page) => {
            if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
              return (
                <PaginationButton
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  isSelected={page === currentPage}
                >
                  {page}
                </PaginationButton>
              );
            } else {
              return null;
            }
          })}

          {currentPage < totalPages && (
            <PassPagesButton onClick={handleNextPageButton}>
              <CaretRight weight="bold" />
            </PassPagesButton>
          )}
        </Pagination>
      )}
    </HomeContainer>
  );
};
