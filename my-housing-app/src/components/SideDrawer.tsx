import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import LeaseCard from "./LeaseCard";
import { IResidentData } from "../services/app.service";

interface Props {
  title: string;
  resident: IResidentData;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
function SideDrawerComponent({ title, resident, show, setShow }: Props) {
  //   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <LeaseCard resident={resident} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideDrawerComponent;
