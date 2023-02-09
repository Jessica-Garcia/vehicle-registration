import {
  Pencil,
  Eye,
  Trash,
  Funnel,
  PlusCircle,
  CaretLeft,
  CaretRight,
} from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { IVehicle } from "../../@types/IVehicle";
import { IVehicleAttributes } from "../../@types/IVehicleAttributes";
import {
  AddButton,
  ButtonAndPagination,
  ButtonsContainer,
  HomeContainer,
  Pagination,
  Title,
  VehicleTable,
} from "./styles";
import { NavLink } from "react-router-dom";
import { SearchForm } from "./components/SearchForm";

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

  const getBrands = async () => {
    const { data } = await axios.get<IVehicleAttributes[] | undefined>(
      "https://parallelum.com.br/fipe/api/v1/carros/marcas"
    );

    console.log(data);
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
    getBrands();
  }, []);

  return (
    <HomeContainer>
      <SearchForm />
      <Title>
        <h2>Veículos cadastrados</h2>
        <button>
          <Funnel size={22} />
        </button>
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
                <tr key={vehicle.id}>
                  <td>{vehicle.licensePlate}</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.year}</td>
                  <td>
                    <ButtonsContainer>
                      <NavLink to={`/vehicle/view/${vehicle.id}`}>
                        <Eye weight="bold" size={20} color="#49c4f2" />
                      </NavLink>
                      <NavLink to={`/vehicle/edit/${vehicle.id}`}>
                        <Pencil weight="bold" size={20} color="#E6ED17" />
                      </NavLink>
                      <NavLink
                        to="/"
                        onClick={() => handleDeleteVehicle(vehicle.id)}
                      >
                        <Trash weight="bold" size={20} color="#AB222E" />
                      </NavLink>
                    </ButtonsContainer>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </VehicleTable>
      <ButtonAndPagination>
        <Pagination>
          <CaretLeft weight="bold" />
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <CaretRight weight="bold" />
        </Pagination>
        <AddButton>
          <a href="/vehicle/add">
            <PlusCircle weight="bold" size={20} /> Novo veículo
          </a>
        </AddButton>
      </ButtonAndPagination>
    </HomeContainer>
  );
};
