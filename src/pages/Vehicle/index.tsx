import { ArrowFatLeft } from "phosphor-react";
import { InfoContainer, VehicleInfo } from "./styles";
import { IVehicle } from "../../@types/IVehicle";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { api } from "../../lib/axios";
import { VehiclesContext } from "../../contexts/VehiclesContext";
import { VehicleNotFound } from "../../components/VehicleNotFound";
import { VehicleRegistrationForm } from "../../components/VehicleRegistrationForm";

export const Vehicle = () => {
  const { vehicleList } = useContext(VehiclesContext);
  const [vehicle, setVehicle] = useState<IVehicle>({} as IVehicle);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVehicle((currentValue) => ({
      ...currentValue,
      yearId: e.target.name === "brand" ? "" : currentValue.yearId,
      year: e.target.name === "brand" ? "" : currentValue.year,
      modelId:
        e.target.name === "brand" || e.target.name === "year"
          ? ""
          : currentValue.modelId,
      model:
        e.target.name === "brand" || e.target.name === "year"
          ? ""
          : currentValue.model,
      [`${e.target.name}Id`]: e.target.value,
      [e.target.name]: e.target.options[e.target.selectedIndex].label,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicle((currentValue) => ({
      ...currentValue,
      [e.target.name]: e.target.value,
    }));
  };

  const editVehicle = async () => {
    await api.put<IVehicle>(`vehicles/${id}`, vehicle);
  };

  const licensePlateIndex = (list: IVehicle[] | undefined, item: IVehicle) => {
    if (list && list.length) {
      let lowestIndex = 0;
      let highestIndex = list.length - 1;

      while (lowestIndex <= highestIndex) {
        const middleIndex = Math.floor((lowestIndex + highestIndex) / 2);
        const shot = list[middleIndex];

        if (shot.licensePlate === item.licensePlate) return middleIndex;

        if (shot.licensePlate < item.licensePlate) {
          lowestIndex = middleIndex + 1;
        } else {
          highestIndex = middleIndex - 1;
        }
      }

      return null;
    }
  };

  const addVehicle = async () => {
    const licensePlateIndexAlreadyExists = licensePlateIndex(
      vehicleList,
      vehicle
    );

    if (licensePlateIndexAlreadyExists === null) {
      await api.post<IVehicle>("vehicles", {
        id: uuidv4(),
        ...vehicle,
      });
    } else {
      alert("Veículo já cadastrado");
    }
  };

  const saveVehicle = () => {
    if (vehicle.id) {
      editVehicle();
      navigate("/");
    } else {
      addVehicle();
    }
  };

  const handleSaveVehicle = () => {
    try {
      saveVehicle();
    } catch (error) {
      console.log(error);
    }
  };

  const getVehicle = useCallback(async () => {
    setLoading(true);
    try {
      if (id) {
        const { data } = await api.get<IVehicle>(`vehicles/${id}`);
        data && setVehicle(data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getVehicle();
  }, [getVehicle]);

  const view = `/vehicle/view/${id}`;

  return (
    <>
      {window.location.pathname === view ? (
        <VehicleInfo>
          {id && !vehicle.id ? (
            <div>{loading ? "Carregando..." : <VehicleNotFound />}</div>
          ) : (
            <InfoContainer>
              <div>
                <label>Placa:</label>
                <span>{vehicle?.licensePlate || ""}</span>
              </div>
              <div>
                <label>Marca:</label>
                <span>{vehicle?.brand}</span>
              </div>
              <div>
                <label>Ano:</label>
                <span>{vehicle?.year}</span>
              </div>
              <div>
                <label htmlFor="model">Modelo:</label>
                <span>{vehicle?.model}</span>
              </div>

              <NavLink to="/">
                <ArrowFatLeft /> voltar
              </NavLink>
            </InfoContainer>
          )}
        </VehicleInfo>
      ) : (
        <VehicleInfo>
          {id && !vehicle.id ? (
            <div>{loading ? "Carregando..." : <VehicleNotFound />}</div>
          ) : (
            <VehicleRegistrationForm
              vehicle={vehicle}
              onInputChange={handleInputChange}
              onSelectChange={handleSelectChange}
              onSaveVehicle={handleSaveVehicle}
            />
          )}
        </VehicleInfo>
      )}
    </>
  );
};
