import { Eye, Pencil, Trash } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
import { IVehicle } from "../../@types/IVehicle";
import {
  ActionButton,
  ActionButtonsContainer,
  ButtonsContainer,
  CancelButton,
  Content,
  Description,
  GarbageButton,
  Overlay,
  Title,
} from "./styles";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
interface ITableItem {
  vehicle: IVehicle;
  onDeleteVehicle: (id?: string) => void;
}

export const TableItem = ({ vehicle, onDeleteVehicle }: ITableItem) => {
  const navigate = useNavigate();

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

          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <GarbageButton>
                <Trash weight="bold" size={20} color="#AB222E" />
              </GarbageButton>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <Overlay />
              <Content>
                <Title>Você tem certeza que quer excluir esse veículo?</Title>
                <Description>
                  Essa ação não poderá ser desfeita. O veículo será excluído
                  permanentemente.
                </Description>
                <ActionButtonsContainer>
                  <CancelButton asChild>
                    <button>Cancelar</button>
                  </CancelButton>
                  <ActionButton asChild>
                    <button
                      onClick={() => {
                        onDeleteVehicle(vehicle.id);
                        navigate("/");
                      }}
                    >
                      Sim, excluir veículo
                    </button>
                  </ActionButton>
                </ActionButtonsContainer>
              </Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </ButtonsContainer>
      </td>
    </tr>
  );
};
