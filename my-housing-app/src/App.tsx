import { useEffect, useState } from "react";
import { AppService, IResidentData } from "./services/app.service";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "./components/Navbar";
import DropdownComponent from "./components/Dropdown";
import LeasePeriodComponent from "./components/LeasePeriods";
import TableUnitsComponent from "./components/TableUnits";
import SideDrawerComponent from "./components/SideDrawer";
import LeaseCard from "./components/LeaseCard";

let resident1 = {
  resident_id: 1,
  first_name: "Zacharie",
  last_name: "Bearns",
  email: "zbearns0@oracle.com",
  phone: "260-781-9116",
  birthdate: "1995-04-01",
  gender: "M",
};

function App() {
  const appService = new AppService();

  const [residents, setResidents] = useState<any>([]);
  const [resident, setResident] = useState<IResidentData>({});
  const [complexes, setComplexes] = useState<any>([]);
  const [units, setUnits] = useState<any>([]);
  const [selectedComplex, setComplex] = useState(0);
  const [selectedPeriod, setLeasePeriod] = useState<string[]>();
  const [show, setShow] = useState(false);

  const leasePeriods = new Map<string, string[]>();
  leasePeriods.set("Fall 2022", ["2022-09-10", "2022-12-15"]);
  leasePeriods.set("Winter 2023", ["2023-01-03", "2023-04-08"]);
  leasePeriods.set("Spring 2023", ["2023-04-15", "2023-07-20"]);

  useEffect(() => {
    appService
      .fetchAll()
      .then((data) => {
        setResidents(data);
      })
      .catch((e) => {
        console.log(e);
      });

    appService
      .getAllComplexes()
      .then((data) => {
        setComplexes(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const loadUnits = () => {
    if (!selectedPeriod) {
      appService
        .getUnitsByComplex(selectedComplex)
        .then((data) => {
          setUnits(data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      appService
        .getUnitsByComplex(
          selectedComplex,
          selectedPeriod[0],
          selectedPeriod[1]
        )
        .then((data) => {
          setUnits(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleSelectComplex = (complexId: number) => {
    setComplex(complexId);
  };

  const handleSelectPeriod = (leasePeriod: string) => {
    setLeasePeriod(leasePeriods.get(leasePeriod));
  };

  const handleSelectLease = (residentId: number) => {
    appService
      .getResidentById(residentId)
      .then((data) => {
        setResident(data);
        setShow(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    loadUnits();
  }, [selectedComplex, selectedPeriod]);

  return (
    <Container fluid="md">
      <Row>
        <Navbar />
      </Row>
      <Row className="justify-content-md-left">
        <Col md="auto">
          <DropdownComponent
            complexes={complexes}
            onSelectComplex={handleSelectComplex}
          />
        </Col>
        <Col md="auto">
          <LeasePeriodComponent
            leasePeriods={Array.from(leasePeriods.keys())}
            onSelectPeriod={handleSelectPeriod}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableUnitsComponent
            units={units}
            onSelectLease={handleSelectLease}
          />
        </Col>
        <Col xs lg="2">
          <SideDrawerComponent
            title={
              resident.resident_id ? "Resident Information" : "No Resident"
            }
            resident={resident}
            show={show}
            setShow={setShow}
          />
        </Col>
      </Row>
      {/* <ListGroup residents={residents} heading="Resident Cards" /> */}
      {/* <ListUnits units={units} heading="Units" /> */}
      {/* <LeaseCard resident={resident} /> */}
    </Container>
  );
}

export default App;
