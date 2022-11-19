import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Beneficiary() {
  const [name, setName] = useState("");
  const [account, setAccount] = useState();
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };
  const submitBeneficiary = () => {
    if (account.length < 10) {
      alert("Please enter 10 digit account number");
    } else if (name.length === 0 || account.length === 0) {
      alert("Please enter all mandatory fields");
    } else {
      let beneficiaryBody = {
        beneficiaryName: name,
        accountNumber: account,
        balance: 0,
      };
      axios
        .post(
          "http://paymentportal-env.eba-v287xkrg.ap-northeast-1.elasticbeanstalk.com/pay/create",
          beneficiaryBody
        )
        .then((res) => {
          alert("Beneficiary added succesfully!");
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
            onChange={handleNameChange}
            value={name}
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
            onChange={handleAccountChange}
            maxLength={10}
            value={account}
          />
        </div>
        <div className="col"></div>
      </div>
      <button
        className="btn btn-primary"
        style={{ marginLeft: "40%", marginTop: 40 }}
        onClick={submitBeneficiary}
      >
        Add Beneficiary
      </button>
    </div>
  );
}

export default Beneficiary;
