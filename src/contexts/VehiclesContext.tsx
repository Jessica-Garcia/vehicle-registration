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
  vehicleList: IVehicle[] | undefined; // home vehicle
  // totalVehicle: number;
  currentPage: number; // home
  totalPages: number; // home
  pages: number[]; // home
  // recordLimitPerPage: number;
  // query: string;
  // setVehicleList: React.Dispatch<React.SetStateAction<IVehicle[] | undefined>>;
  // setTotalVehicle: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>; // home
  // setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  // setPages: React.Dispatch<React.SetStateAction<number[]>>;
  setRecordLimitPerPage: React.Dispatch<React.SetStateAction<number>>; // home
  setQuery: React.Dispatch<React.SetStateAction<string>>; // home
  getVehicles: () => Promise<void>; // vehicle
  deleteVehicle: (id: string | undefined) => Promise<void>; // home
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

    if (!response.data.length && currentPage !== 1) {
      setCurrentPage((state) => state - 1);
      return;
    }

    setTotalVehicle(Number(response.headers["x-total-count"]));
    setTotalPages(Math.ceil(totalVehicle / recordLimitPerPage));

    const arrayPages = [];
    for (let page = 1; page <= totalPages; page++) {
      arrayPages.push(page);
    }
    setPages(arrayPages);

    response.data && setVehicleList(response.data);
  }, [currentPage, query, totalVehicle, totalPages, recordLimitPerPage]);

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
        // query,
        currentPage,
        // totalVehicle,
        totalPages,
        pages,
        // recordLimitPerPage,
        setQuery,
        // setVehicleList,
        // setTotalVehicle,
        setCurrentPage,
        // setTotalPages,
        // setPages,
        setRecordLimitPerPage,
        getVehicles,
        deleteVehicle,
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};
