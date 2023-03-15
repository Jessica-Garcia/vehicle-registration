import { PlusCircle, CaretLeft, CaretRight } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
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
import { SearchForm } from "./components/SearchForm";
import { TableItem } from "../../components/TableItem";

export const Home = () => {
  const [vehicleList, setVehicleList] = useState<IVehicle[]>();
  const [totalVehicle, setTotalVehicle] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const [recordLimitPerPage, setRecordLimitPerPage] = useState<number>(5);
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
    const response = await api.get<IVehicle[]>("vehicles", {
      params: {
        _sort: "licensePlate",
        brand_like: query,
        _limit: recordLimitPerPage,
        _page: currentPage,
        // q: query,
      },
    });

    setTotalVehicle(Number(response.headers["x-total-count"]));
    setTotalPages(Math.ceil(totalVehicle / recordLimitPerPage));

    const arrayPages = [];
    for (let page = 1; page <= totalPages; page++) {
      arrayPages.push(page);
    }
    setPages(arrayPages);

    response.data && setVehicleList(response.data);
  }, [currentPage, query, totalVehicle, totalPages, recordLimitPerPage]);

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
      <Options>
        <select
          onChange={(e) => {
            setRecordLimitPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value="5"> Exibir 5 veículos por página</option>
          <option value="10">Exibir 10 Veículos por página</option>
          <option value="15">Exibir 15 Veículos por página</option>
          <option value="20">Exibir 20 Veículos por página</option>
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
