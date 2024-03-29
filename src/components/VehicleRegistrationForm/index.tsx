import { ArrowFatLeft } from "phosphor-react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IVehicle } from "../../@types/IVehicle";
import { VehicleAttributesSelect } from "../VehicleAttributesSelect";
import { Back, FormContainer, SaveButton } from "./styles";

interface IFormProps {
  vehicle: IVehicle;
  onSaveVehicle: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const VehicleRegistrationForm = ({
  vehicle,
  onSaveVehicle,
  onInputChange,
  onSelectChange,
}: IFormProps) => {
  return (
    <>
      <FormContainer>
        <label htmlFor="licensePlate">Placa</label>
        <input
          autoComplete="off"
          type="text"
          name="licensePlate"
          id="licensePlate"
          value={vehicle?.licensePlate || ""}
          onChange={onInputChange}
          placeholder="Informe a placa"
          required
        />

        <label htmlFor="brand">Marca</label>
        <VehicleAttributesSelect
          value={vehicle?.brandId || ""}
          name="brand"
          selectChange={onSelectChange}
          url={`https://parallelum.com.br/fipe/api/v2/cars/brands`}
          disabled={!vehicle.licensePlate}
        />

        <label htmlFor="year">Ano</label>
        <VehicleAttributesSelect
          value={vehicle?.yearId || ""}
          name="year"
          selectChange={onSelectChange}
          url={
            vehicle.brand
              ? `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brandId}/years`
              : ""
          }
          disabled={!vehicle.brand}
        />

        <label htmlFor="model">Modelo</label>

        <VehicleAttributesSelect
          value={vehicle?.modelId || ""}
          name="model"
          selectChange={onSelectChange}
          disabled={!vehicle.brand || !vehicle.year}
          url={
            vehicle.year
              ? `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brandId}/years/${vehicle.yearId}/models`
              : ""
          }
        />
      </FormContainer>
      <SaveButton onClick={onSaveVehicle}>Salvar</SaveButton>

      {window.location.pathname === `/vehicle/edit/${vehicle.id}` ? (
        <Back>
          <NavLink to={`/vehicle/view/${vehicle.id}`}>
            <ArrowFatLeft /> voltar
          </NavLink>
        </Back>
      ) : (
        <Back>
          <NavLink to="/">
            <ArrowFatLeft /> voltar
          </NavLink>
        </Back>
      )}
    </>
  );
};
