import { ArrowFatLeft } from "phosphor-react";
import { VehicleInfo } from "./styles";
import { IVehicle } from "../../@types/IVehicle";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { VehicleAttributesSelect } from "../../components/VehicleAttributesSelect";

export const Vehicle = () => {
  const [vehicle, setVehicle] = useState<IVehicle>({} as IVehicle);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setVehicle((currentValue) => ({
      ...currentValue,
      year: e.target.name === "brand" ? "" : currentValue.year,
      model:
        e.target.name === "brand" || e.target.name === "year"
          ? ""
          : currentValue.year,
      [e.target.name]: e.target.value,
    }));
  };

  const editVehicle = async () => {
    await axios.put<IVehicle>(`http://localhost:3000/vehicles/${id}`, vehicle);
  };

  const addVehicle = async () => {
    await axios.post<IVehicle>("http://localhost:3000/vehicles", {
      id: uuidv4(),
      ...vehicle,
    });
  };

  const saveVehicle = () => {
    if (vehicle.id) {
      editVehicle();
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

  useEffect(() => {
    const getVehicle = async () => {
      try {
        if (id) {
          const { data } = await axios.get<IVehicle>(
            `http://localhost:3000/vehicles/${id}`
          );

          data && setVehicle(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getVehicle();
  }, [id]);

  return (
    <VehicleInfo>
      {id && !vehicle.id ? (
        <div>
          <h2>Veículo não encontrado</h2>
        </div>
      ) : (
        <form
          onSubmit={() => {
            handleSaveVehicle();
            navigate("/");
          }}
        >
          <label htmlFor="licensePlate">Placa</label>
          <input
            autoComplete="off"
            type="text"
            name="licensePlate"
            id="licensePlate"
            value={vehicle?.licensePlate || ""}
            onChange={handleInputChange}
            placeholder="Informe a placa"
            required
          />

          <label htmlFor="brand">Marca</label>
          <VehicleAttributesSelect
            value={vehicle?.brand}
            name="brand"
            selectChange={handleInputChange}
            url={`https://parallelum.com.br/fipe/api/v2/cars/brands`}
            disabled={!vehicle.licensePlate}
          />

          <label htmlFor="year">Ano</label>
          <VehicleAttributesSelect
            value={vehicle?.year}
            name="year"
            selectChange={handleInputChange}
            url={
              vehicle.brand
                ? `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brand}/years`
                : ""
            }
            disabled={!vehicle.brand}
          />

          <label htmlFor="model">Modelo</label>

          <VehicleAttributesSelect
            value={vehicle?.model}
            name="model"
            selectChange={handleInputChange}
            disabled={!vehicle.brand || !vehicle.year}
            url={
              vehicle.year
                ? `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brand}/years/${vehicle.year}/models`
                : ""
            }
          />

          <button type="submit">Salvar</button>
          <NavLink to="/">
            <ArrowFatLeft /> voltar
          </NavLink>
        </form>
      )}
    </VehicleInfo>
  );
};
