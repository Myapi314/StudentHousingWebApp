import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import LeaseCard from "./components/LeaseCard";
import { AppService } from "./services/app.service";

function App() {
  const appService = new AppService();

  let items = ["Name1", "Name2", "Name3", "Name4"];
  let resident = {
    first_name: "Zach",
    last_name: "Burns",
  };

  const [residents, setResidents] = useState<any>([]);
  useEffect(() => {
    appService
      .fetchAll()
      .then((data) => {
        console.log(data);
        setResidents(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Navbar />
      <div className="mx-auto px-5">
        <LeaseCard resident={resident} />
      </div>
      <div className="mx-auto px-5">
        <ListGroup residents={residents} heading="Resident Cards" />
      </div>
    </div>
  );
}

export default App;
