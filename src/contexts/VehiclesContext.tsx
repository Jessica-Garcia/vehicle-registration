import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IVehicle } from "../@types/IVehicle";
import { api } from "../lib/axios";

interface VehiclesProviderProps {
  children: ReactNode;
}

interface VehiclesContextType {
  vehicleList: IVehicle[] | undefined;
  currentPage: number;
  totalPages: number;
  pages: number[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setRecordLimitPerPage: React.Dispatch<React.SetStateAction<number>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  getVehicles: () => Promise<void>; // vehicle
  deleteVehicle: (id: string | undefined) => Promise<void>;
}

export const VehiclesContext = createContext({} as VehiclesContextType);

export const VehiclesProvider = ({ children }: VehiclesProviderProps) => {
  const [vehicleList, setVehicleList] = useState<IVehicle[]>();
  const [totalVehicle, setTotalVehicle] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const [recordLimitPerPage, setRecordLimitPerPage] = useState<number>(5);
  const [query, setQuery] = useState<string>("");

  const getVehicles = useCallback(async () => {
    const response = await api.get<IVehicle[]>("vehicles", {
      params: {
        _sort: "licensePlate",
        brand_like: query,
        _limit: recordLimitPerPage,
        _page: currentPage,
      },
    });

    if (currentPage !== 1 && !response.data.length) {
      setCurrentPage((state) => state - 1);
      return;
    }
    const allVehicles = Number(response.headers["x-total-count"]);
    const pagesQuantity = Math.ceil(allVehicles / recordLimitPerPage);
    setTotalVehicle(allVehicles);
    setTotalPages(pagesQuantity);

    const arrayPages = [];
    for (let page = 1; page <= pagesQuantity; page++) {
      arrayPages.push(page);
    }
    setPages(arrayPages);

    response.data && setVehicleList(response.data);
  }, [currentPage, query, recordLimitPerPage]);

  const deleteVehicle = async (id: string | undefined) => {
    await api.delete<IVehicle>(`vehicles/${id}`);
    const newVehicleList = vehicleList?.filter((vehicle) => {
      return vehicle.id !== id;
    });
    setVehicleList(newVehicleList);
    getVehicles();
  };

  useEffect(() => {
    getVehicles();
  }, [getVehicles]);

  return (
    <VehiclesContext.Provider
      value={{
        vehicleList,
        currentPage,
        totalPages,
        pages,
        setQuery,
        setCurrentPage,
        setRecordLimitPerPage,
        getVehicles,
        deleteVehicle,
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};
