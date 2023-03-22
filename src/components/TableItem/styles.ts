import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 0.5rem;
`;

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  inset: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled(AlertDialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["gray-800"]};

  position: fixed;

  /* Centralizar na tela */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
  &:focus {
    outline: none;
  }
`;
export const Title = styled(AlertDialog.Title)`
  margin: 10px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme["gray-100"]};
`;
export const Description = styled(AlertDialog.Description)`
  margin: 20px 10px;
  color: ${(props) => props.theme["gray-100"]};

  font-size: 18px;
  line-height: 1.5;
`;
export const CancelButton = styled(AlertDialog.Cancel)`
  border: 0;
  border-radius: 8px;
  margin: 20px 10px;
  line-height: 0;
  cursor: pointer;
  background: ${(props) => props.theme["gray-100"]};
  width: 150px;
  height: 50px;
  padding: 10px;
  color: ${(props) => props.theme["gray-800"]};
  font-weight: bold;
`;

export const ActionButton = styled(AlertDialog.Action)`
  border: 0;
  border-radius: 8px;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-100"]};
  background: ${(props) => props.theme["red-300"]};

  margin: 20px 10px;
  height: 50px;
  width: max-content;
  padding: 10px;
  font-weight: bold;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const GarbageButton = styled.button`
  border: 0;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;
