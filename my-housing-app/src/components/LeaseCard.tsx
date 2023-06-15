import "../App.scss";
import { IResidentData } from "../services/app.service";

interface LeaseCardProps {
  resident: IResidentData;
}

function LeaseCard({ resident }: LeaseCardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {resident.first_name} {resident.last_name}
        </h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Unit Info</h6>
        <p className="card-text">
          Email: {resident.email} <br />
          Phone Number: {resident.phone} <br />
          Date of Birth: {resident.birthdate}
        </p>
      </div>
    </div>
  );
}
//  style="width: 18rem;"

export default LeaseCard;
