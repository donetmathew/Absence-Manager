import React, { ChangeEvent } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { absencesFilter } from "../../model/absences.model";


export const CustomSelect:React.FC<{
  options: absencesFilter[],
  onTypeFilterChange:(e: any) => void
}> = ({options, onTypeFilterChange}) => (
  options && <Select
    defaultValue={options[0]}
    options={options}
    onChange={onTypeFilterChange}
  />
);



