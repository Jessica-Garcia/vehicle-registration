import { Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import {
  ActionButton,
  ActionButtonsContainer,
  CancelButton,
  Content,
  Description,
  GarbageButton,
  Overlay,
  Title,
} from "./styles";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

interface IDeleteModalProps {
  vehicleId: string | undefined;
  deleteVehicle: (id: string) => void;
}
export const DeleteModal = ({
  vehicleId,
  deleteVehicle,
}: IDeleteModalProps) => {
  const navigate = useNavigate();

  return (
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
                  deleteVehicle(vehicleId!);
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
  );
};
