import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Delete() {
  const [beneficiaryList, setList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/pay/getAll").then((res) => setList(res.data));
  });
  const deleteBeneficiary = (e, id) => {
    axios.delete("/pay/delete/" + id).then((res) => {
      setList(beneficiaryList.filter((val) => val.beneficiaryid !== id));
      alert("beneficiary deleted successfully");
    });
  };
  const editBeneficiary = (e, id) => {
    navigate("/edit/" + id);
  };
  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <h3 style={{ fontFamily: "serif" }}>Beneficiary List:</h3>
      <table
        className="table table-striped table-bordered"
        style={{ marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Beneficiary Name</th>
            <th>Account Number</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaryList.map((c) => (
            <tr key={c.beneficiaryid}>
              <td>{c.beneficiaryName}</td>
              <td>{c.accountNumber}</td>
              <td>
                <button
                  style={{ marginLeft: "10px" }}
                  className="btn btn-danger"
                  onClick={(event) => deleteBeneficiary(event, c.beneficiaryid)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  style={{ marginLeft: "10px" }}
                  className="btn btn-primary"
                  onClick={(event) => editBeneficiary(event, c.beneficiaryid)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Delete;
