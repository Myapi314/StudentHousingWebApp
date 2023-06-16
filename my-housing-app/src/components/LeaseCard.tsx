import Button from "react-bootstrap/Button";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import "../App.scss";
import { IResidentData } from "../services/app.service";

interface LeaseCardProps {
  resident: IResidentData;
}

function LeaseCard({ resident }: LeaseCardProps) {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Sorry! We're not quite ready for you!</Alert.Heading>
        <p>
          The feature you tried to use is not quite ready yet. Thanks for
          trying, come again soon for an update.
        </p>
      </Alert>
    );
  }
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <h5 className="card-title">
            {resident.first_name} {resident.last_name}
          </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Details</h6>
          <p className="card-text">
            Email: {resident.email} <br />
            Phone Number: {resident.phone} <br />
            Date of Birth: {resident.birthdate}
          </p>
          <Button
            variant={resident.resident_id ? "success" : "info"}
            onClick={() => setShow(true)}
          >
            {resident.resident_id ? (
              <div>Edit</div>
            ) : (
              <div>Add Resident to Vacancy</div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
//  style="width: 18rem;"

export default LeaseCard;
