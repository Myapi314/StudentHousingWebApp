import { useState } from "react";
import { IUnitData } from "../services/app.service";
import Table from "react-bootstrap/Table";

interface Props {
  units: IUnitData[];
  onSelectLease: (resident_id: number) => void;
}

function TableUnitsComponent({ units, onSelectLease }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Unit</th>
          <th>Room Type</th>
          <th>Rent Price</th>
          <th>Name of Resident</th>
          <th>Lease Start</th>
          <th>Lease End</th>
        </tr>
      </thead>
      <tbody>
        {units.length === 0 && (
          <tr>
            <td colSpan={6}>No units found</td>
          </tr>
        )}
        {units.map((unit) => (
          <tr
            key={unit.rowid}
            className={
              unit.rowid === selectedIndex
                ? "table-success table-active"
                : unit.first_name === null
                ? " table-secondary"
                : ""
            }
            onClick={() => {
              setSelectedIndex(unit.rowid);
              onSelectLease(unit.resident_id ? unit.resident_id : 0);
            }}
          >
            <td>
              {unit.unit_number}-{unit.room}-{unit.bed}
            </td>
            <td>{unit.room_type}</td>
            <td>${unit.rent_price}</td>
            <td>
              {unit.first_name === null && <i>Vacant</i>}
              {unit.first_name} {unit.last_name}
            </td>
            <td>{unit.lease_start}</td>
            <td>{unit.lease_end}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableUnitsComponent;
