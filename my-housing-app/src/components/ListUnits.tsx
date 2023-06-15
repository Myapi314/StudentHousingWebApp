import { useState } from "react";
import { IUnitData } from "../services/app.service";
import { ListGroup } from "react-bootstrap";

interface ListUnitsProps {
  units: IUnitData[];
  heading: string;
  // onSelectItem: (item: string) => void;
}

function ListUnits({ units, heading }: ListUnitsProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {units.length === 0 && <p>No units found</p>}
      {units.map((unit) => (
        <ListGroup
          as="ul"
          key={unit.rowid}
          horizontal="xxl"
          onClick={() => {
            setSelectedIndex(unit.rowid);
          }}
        >
          <ListGroup.Item
            as="li"
            className={unit.rowid === selectedIndex ? "active" : ""}
          >
            {unit.unit_number}-{unit.room}-{unit.bed}
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className={unit.rowid === selectedIndex ? "active" : ""}
          >
            {unit.room_type}
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className={unit.rowid === selectedIndex ? "active" : ""}
          >
            ${unit.rent_price}
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default ListUnits;
