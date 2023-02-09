import React from "react";

export interface ISelectProps<T> {
  selectChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  value: string;
  url: string;
  name: string;
  disabled?: boolean;
}
