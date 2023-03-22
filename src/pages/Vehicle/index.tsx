import { ArrowFatLeft } from "phosphor-react";
import { InfoContainer, VehicleInfo } from "./styles";
import { IVehicle } from "../../@types/IVehicle";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { VehicleAttributesSelect } from "../../components/VehicleAttributesSelect";
import { api } from "../../lib/axios";
import { VehiclesContext } from "../../contexts/VehiclesContext";

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
            <div>
              {loading ? "Carregando..." : <h2>Veículo não encontrado</h2>}
            </div>
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
            <div>
              {loading ? "Carregando..." : <h2>Veículo não encontrado</h2>}
            </div>
          ) : (
            <form
              onSubmit={() => {
                handleSaveVehicle();
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
                value={vehicle?.brandId}
                name="brand"
                selectChange={handleSelectChange}
                url={`https://parallelum.com.br/fipe/api/v2/cars/brands`}
                disabled={!vehicle.licensePlate}
              />

              <label htmlFor="year">Ano</label>
              <VehicleAttributesSelect
                value={vehicle?.yearId}
                name="year"
                selectChange={handleSelectChange}
                url={
                  vehicle.brand
                    ? `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brandId}/years`
                    : ""
                }
                disabled={!vehicle.brand}
              />

              <label htmlFor="model">Modelo</label>

              <VehicleAttributesSelect
                value={vehicle?.modelId}
                name="model"
                selectChange={handleSelectChange}
                disabled={!vehicle.brand || !vehicle.year}
                url={
                  vehicle.year
                    ? `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brandId}/years/${vehicle.yearId}/models`
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
      )}
    </>
  );
};
/* return (
  <VehicleInfo>
    {id && !vehicle.id ? (
      <div>{loading ? "Carregando..." : <h2>Veículo não encontrado</h2>}</div>
    ) : (
      <form
        onSubmit={() => {
          handleSaveVehicle();
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
          value={vehicle?.brandId}
          name="brand"
          selectChange={handleSelectChange}
          url={`https://parallelum.com.br/fipe/api/v2/cars/brands`}
          disabled={!vehicle.licensePlate}
        />

        <label htmlFor="year">Ano</label>
        <VehicleAttributesSelect
          value={vehicle?.yearId}
          name="year"
          selectChange={handleSelectChange}
          url={
            vehicle.brand
              ? `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brandId}/years`
              : ""
          }
          disabled={!vehicle.brand}
        />

        <label htmlFor="model">Modelo</label>

        <VehicleAttributesSelect
          value={vehicle?.modelId}
          name="model"
          selectChange={handleSelectChange}
          disabled={!vehicle.brand || !vehicle.year}
          url={
            vehicle.year
              ? `https://parallelum.com.br/fipe/api/v2/cars/brands/${vehicle.brandId}/years/${vehicle.yearId}/models`
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
); */
