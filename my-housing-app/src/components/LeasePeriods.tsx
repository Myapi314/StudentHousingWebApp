import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

interface Props {
  leasePeriods: string[];
  onSelectPeriod: (leasePeriod: string) => void;
}

const LeasePeriodComponent = ({ leasePeriods, onSelectPeriod }: Props) => {
  const [label, setLabel] = useState("Select a Lease Period");

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {label}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {leasePeriods.map((period, index) => {
          return (
            <Dropdown.Item
              key={index}
              value={period}
              onClick={() => {
                setLabel(period);
                onSelectPeriod(period);
              }}
            >
              {period}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LeasePeriodComponent;
