import { useEffect, useState } from "react";
// import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
// import LeaseCard from "./components/LeaseCard";
import DropdownComponent from "./components/Dropdown";
import { AppService } from "./services/app.service";
import ListUnits from "./components/ListUnits";
import LeasePeriodComponent from "./components/LeasePeriods";

function App() {
  const appService = new AppService();

  const [residents, setResidents] = useState<any>([]);
  const [complexes, setComplexes] = useState<any>([]);
  const [units, setUnits] = useState<any>([]);
  const [selectedComplex, setComplex] = useState(0);
  const [selectedPeriod, setLeasePeriod] = useState<string[]>();
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

  useEffect(() => {
    loadUnits();
  }, [selectedComplex, selectedPeriod]);

  return (
    <div>
      <Navbar />
      <div className="mx-auto px-5">
        <div className="d-inline-flex p-2">
          <DropdownComponent
            complexes={complexes}
            onSelectComplex={handleSelectComplex}
          />
          <LeasePeriodComponent
            leasePeriods={Array.from(leasePeriods.keys())}
            onSelectPeriod={handleSelectPeriod}
          />
        </div>
        {/* <ListGroup residents={residents} heading="Resident Cards" /> */}
        <ListUnits units={units} heading="Units" />
      </div>
    </div>
  );
}

export default App;
