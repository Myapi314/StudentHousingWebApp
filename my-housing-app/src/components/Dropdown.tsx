import Dropdown from "react-bootstrap/Dropdown";
import { IComplexData } from "../services/app.service";
import { useState } from "react";

interface Props {
  complexes: IComplexData[];
  onSelectComplex: (complexId: number) => void;
}

const DropdownComponent = ({ complexes, onSelectComplex }: Props) => {
  const [label, setLabel] = useState("Select a Complex");

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {label}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {complexes.map((complex) => {
          return (
            <Dropdown.Item
              key={complex.rowid}
              value={complex.complex_name}
              onClick={() => {
                setLabel(complex.complex_name);
                onSelectComplex(complex.rowid);
              }}
            >
              {complex.complex_name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
