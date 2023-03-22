import { ArrowFatLeft } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { NotFoundContainer } from "./styles";

export const VehicleNotFound = () => {
  return (
    <NotFoundContainer>
      <div>Veículo não encontrado!</div>
      <div>
        <NavLink to="/">
          <ArrowFatLeft /> voltar
        </NavLink>
      </div>
    </NotFoundContainer>
  );
};
