import { ArrowFatLeft, Pencil } from "phosphor-react";
import { InfoContainer, OptionButtonsContainer, VehicleInfo } from "./styles";
import { IVehicle } from "../../@types/IVehicle";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { api } from "../../lib/axios";
import { VehiclesContext } from "../../contexts/VehiclesContext";
import { VehicleNotFound } from "../../components/VehicleNotFound";
import { VehicleRegistrationForm } from "../../components/VehicleRegistrationForm";
import { DeleteModal } from "../../components/DeleteModal";

export const Vehicle = () => {
  const { deleteVehicle, getVehicles } = useContext(VehiclesContext);
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

  const editVehicle = async () => {
    await api.put<IVehicle>(`vehicles/${id}`, vehicle);
  };

  const licensePlateAlreadyExists = async () => {
    const response = await api.get<IVehicle[]>("vehicles", {
      params: {
        licensePlate: vehicle.licensePlate,
        _limit: 1,
        _page: 1,
      },
    });
    console.log(response);
    return response.data.length;
  };

  const addVehicle = async () => {
    const id = uuidv4();
    if (!vehicle.licensePlate) {
      return alert("Insira a placa do veículo");
    }
    if (await licensePlateAlreadyExists()) {
      return alert("Veículo já existe!");
    } else {
      await api.post<IVehicle>("vehicles", {
        id,
        ...vehicle,
      });
      navigate(`/vehicle/view/${id}`);
    }
  };

  const saveVehicle = async () => {
    if (vehicle.id) {
      editVehicle();
      navigate(`/vehicle/view/${vehicle.id}`);
    } else {
      await addVehicle();
    }
  };

  const handleSaveVehicle = () => {
    try {
      saveVehicle();
      getVehicles();
    } catch (error) {
      console.log(error);
    }
  };

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
              <OptionButtonsContainer>
                <span>
                  <NavLink to="/">
                    <ArrowFatLeft weight="bold" />
                    Voltar
                  </NavLink>
                </span>
                <span>
                  <NavLink to={`/vehicle/edit/${vehicle.id}`}>
                    <Pencil weight="bold" size={20} />
                    Editar
                  </NavLink>
                </span>
                <span>
                  <DeleteModal
                    deleteVehicle={deleteVehicle}
                    vehicleId={vehicle.id}
                  />
                  Excluir
                </span>
              </OptionButtonsContainer>
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
