import React from "react";

export interface IVehicleAttributesSelectProps {
  selectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | undefined;
  url: string;
  name: string;
  disabled: boolean;
}
