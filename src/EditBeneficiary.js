import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function EditBeneficiary() {
  const { id } = useParams();
  const [beneficiary, setBeneficiary] = useState({
    beneficiaryid: 0,
    beneficiaryName: "",
    accountNumber: "",
    balance: 0,
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://paymentportal-env.eba-v287xkrg.ap-northeast-1.elasticbeanstalk.com/pay/get/" +
          id
      )
      .then((res) => setBeneficiary(res.data));
  }, []);
  const handleNameChange = (event) => {
    setBeneficiary((beneficiary) => ({
      ...beneficiary,
      beneficiaryName: event.target.value,
    }));
  };

  const handleAccountChange = (event) => {
    setBeneficiary((beneficiary) => ({
      ...beneficiary,
      accountNumber: event.target.value,
    }));
  };
  const editBeneficiary = () => {
    if (beneficiary.accountNumber.length < 10) {
      alert("Please enter 10 digit account number");
    } else if (
      beneficiary.beneficiaryName.length === 0 ||
      beneficiary.accountNumber.length === 0
    ) {
      alert("Please enter all mandatory fields");
    } else {
      axios
        .put(
          "https://paymentportal-env.eba-v287xkrg.ap-northeast-1.elasticbeanstalk.com/pay/update",
          beneficiary
        )
        .then((res) => {
          alert("Beneficiary updated succesfully!");
          navigate("/");
        });
    }
  };
  return (
    <div>
      <div className="row" style={{ marginTop: 20 }}>
        <div className="col" style={{ textAlign: "right" }}>
          <label style={{ fontWeight: "bold" }}>
            Name <span style={{ color: "red" }}>*</span>
          </label>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            aria-label="Enter name"
            value={beneficiary.beneficiaryName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col"></div>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col" style={{ textAlign: "right" }}>
          <label style={{ fontWeight: "bold" }}>
            Account Number <span style={{ color: "red" }}>*</span>
          </label>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Account Number"
            aria-label="Account Number"
            value={beneficiary.accountNumber}
            onChange={handleAccountChange}
          />
        </div>
        <div className="col"></div>
      </div>
      <button
        className="btn btn-primary"
        style={{ marginLeft: "40%", marginTop: 40 }}
        onClick={editBeneficiary}
      >
        Update Beneficiary
      </button>
    </div>
  );
}
export default EditBeneficiary;
