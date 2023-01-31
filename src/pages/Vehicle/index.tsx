import { ArrowFatLeft } from "phosphor-react";
import { VehicleInfo } from "./styles";
import { IVehicle } from "../../interfaces/IVehicle";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Select } from "../../components/Select";
import { IBrand, IModel } from "../Home";

export const Vehicle = () => {
  const [vehicle, setVehicle] = useState<IVehicle>({} as IVehicle);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setVehicle((currentValue) => ({
      ...currentValue,
      [e.target.name]: e.target.value,
    }));
  };

  /*  const handleSelectChange = (target: string, value: string) => {
    setVehicle((currentValue) => ({
      ...currentValue,
      [target]: value,
    }));
  }; */

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
        const { data } = await axios.get<IVehicle>(
          `http://localhost:3000/vehicles/${id}`
        );

        data && setVehicle(data);
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
            type="text"
            name="licensePlate"
            id="licensePlate"
            value={vehicle?.licensePlate}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="brand">Marca</label>

          <Select<IBrand>
            selectChange={handleInputChange}
            value={vehicle?.brand}
            name={"brand"}
            url={"https://parallelum.com.br/fipe/api/v1/carros/marcas"}
          ></Select>
          <label htmlFor="model">Modelo</label>
          {/* <input
            type="text"
            name="model"
            id="model"
            value={vehicle?.model}
            onChange={handleInputChange}
            required
          /> */}
          <Select<IModel>
            selectChange={handleInputChange}
            value={vehicle?.model}
            name="model"
            url={`https://parallelum.com.br/fipe/api/v1/carros/marcas/${vehicle.brand}/modelos`}
          ></Select>
          <label htmlFor="year">Ano</label>
          <input
            type="text"
            name="year"
            id="year"
            value={vehicle?.year}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="version">Versão</label>
          <input
            type="text"
            name="version"
            id="version"
            value={vehicle?.version}
            onChange={handleInputChange}
            required
          />
          <NavLink to="/">
            <ArrowFatLeft /> voltar
          </NavLink>
          <button>Salvar</button>
        </form>
      )}
    </VehicleInfo>
  );
};
