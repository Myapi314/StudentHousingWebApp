// import { Fragment } from "react";
// Can use fragment, but can also just use empty tags for multiple elements

import { MouseEvent, ReactNode, useEffect, useState } from "react";
import { AppService, IResidentData } from "../services/app.service";
import LeaseCard from "./LeaseCard";

interface ListGroupProps {
  residents: IResidentData[];
  heading: string;
  // onSelectItem: (item: string) => void;
}

function ListGroup({ residents, heading }: ListGroupProps) {
  const appService = new AppService();
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // event handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group d-inline-flex ">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}

        {/* {items.length === 0 ? <p>No item found</p> : null} */}
        {/* More efficient without using null keyword */}
        {residents.length === 0 && <p>No item found</p>}
        {residents.map((resident) => (
          <li className="list-group-item" key={resident.resident_id}>
            <LeaseCard resident={resident} />
          </li>
          // Would typically use unique ID for key
        ))}
      </ul>
      {/* <ul className="list-group">
        {residents.length === 0 && <p>No residents found</p>}
        {residents.map((resident: any) => (
          <li className="list-group-item" key={resident.resident_id}>
            {resident.first_name}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default ListGroup;
