import { Pencil, Eye, Trash, Funnel } from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ButtonsContainer,
  Content,
  HomeContainer,
  TbodyContainer,
  TheadContainer,
  Title,
} from "./styles";

interface IVehicle {
  id: number;
  brand: string;
  model: string;
  version: string;
  year: number;
  licensePlate: string;
}

export const Home = () => {
  const [vehicleList, setVehicleList] = useState<IVehicle[]>();

  async function getVehicles() {
    try {
      const { data } = await axios.get<IVehicle[]>(
        "http://localhost:3000/vehicles"
      );
      setVehicleList(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <HomeContainer>
      <Title>
        <h2>Veículos cadastrados</h2>
        <button>
          <Funnel size={22} />
        </button>
      </Title>
      <Content>
        <table>
          <TheadContainer>
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Versão</th>
                <th>Ano</th>
                <th>Placa</th>
                <th>Ações</th>
              </tr>
            </thead>
          </TheadContainer>
          <TbodyContainer>
            <tbody>
              {vehicleList &&
                vehicleList.map((vehicle) => {
                  return (
                    <tr key={vehicle.id}>
                      <td>{vehicle.brand}</td>
                      <td>{vehicle.model}</td>
                      <td>{vehicle.version}</td>
                      <td>{vehicle.year}</td>
                      <td>{vehicle.licensePlate}</td>
                      <td>
                        <ButtonsContainer>
                          <a>
                            <Eye weight="bold" />
                          </a>
                          <a>
                            <Pencil weight="bold" />
                          </a>
                          <a>
                            <Trash weight="bold" />
                          </a>
                        </ButtonsContainer>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </TbodyContainer>
        </table>
      </Content>
    </HomeContainer>
  );
};
