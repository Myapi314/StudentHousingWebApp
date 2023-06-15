import { useEffect, useState } from "react";
// import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
// import LeaseCard from "./components/LeaseCard";
import DropdownComponent from "./components/Dropdown";
import { AppService } from "./services/app.service";
import ListUnits from "./components/ListUnits";

function App() {
  const appService = new AppService();

  const [residents, setResidents] = useState<any>([]);
  const [complexes, setComplexes] = useState<any>([]);
  const [units, setUnits] = useState<any>([]);

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

  const handleSelectComplex = (complexId: number) => {
    appService
      .getUnitsByComplex(complexId)
      .then((data) => {
        console.log(data);
        setUnits(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="mx-auto px-5">
        <DropdownComponent
          complexes={complexes}
          onSelectComplex={handleSelectComplex}
        />
        {/* <ListGroup residents={residents} heading="Resident Cards" /> */}
        <ListUnits units={units} heading="Units" />
      </div>
    </div>
  );
}

export default App;
