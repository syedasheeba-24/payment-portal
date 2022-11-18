import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Transfer() {
  const [display, setDisplay] = useState("none");
  const [mpin, setMpin] = useState();
  const [amount, setAmount] = useState();
  const [name, setName] = useState("");
  const [beneficiaryList, setList] = useState([]);
  const [owner, setOwner] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/pay/getAll").then((res) => setList(res.data));
    axios.get("/pay/getOwner").then((res) => setOwner(res.data));
  }, []);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    beneficiaryList.filter((b) => b.beneficiaryName === name);
  };

  const handleTransfer = (event) => {
    const result = /^\d+$/.test(amount);
    if (!result || amount <= 0 || amount > 200000) {
      event.target.setAttribute("data-toggle", "");
      alert("Please enter right value, maximum limit is 2 lakh");
    } else {
      event.target.setAttribute("data-toggle", "modal");
    }
  };

  const handlePinChange = (event) => {
    setMpin(event.target.value);
  };

  const handlePinSubmit = (event) => {
    let pin = owner.pin + "";
    if (mpin === "" || mpin.length < 6) {
      event.target.setAttribute("data-dismiss", "");
      setDisplay("");
    } else if (mpin === pin) {
      let bal = beneficiaryList[0].balance + amount;
      let ownerbal = beneficiaryList[0].balance - amount;
      let ownerBody = {
        ownerid: owner.ownerid,
        balance: ownerbal,
        pin: owner.pin,
      };
      let beneficiaryBody = {
        beneficiaryid: beneficiaryList[0].beneficiaryid,
        accountNumber: beneficiaryList[0].accountNumber,
        beneficiaryName: beneficiaryList[0].beneficiaryName,
        balance: bal,
      };
      event.target.setAttribute("data-dismiss", "modal");
      setDisplay("none");
      event.target.click();
      event.target.setAttribute("data-dismiss", "");
      ownerBody.balance = owner.balance - amount;
      axios.put("/pay/update", beneficiaryBody);
      axios.put("/pay/updateOwner", ownerBody);
      navigate("/success");
    } else alert("MPIN is incorrect!");
  };

  return (
    <div>
      <div className="row" style={{ marginTop: "5%" }}>
        <div className="col" style={{ textAlign: "right" }}>
          <label style={{ fontWeight: "bold" }}>
            Amount <span style={{ color: "red" }}>*</span>
          </label>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter amount"
            aria-label="Enter amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="col" style={{ textAlign: "left" }}>
          <p>INR</p>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col" style={{ textAlign: "right" }}>
          <label style={{ fontWeight: "bold" }}>Beneficiary</label>
        </div>
        <div className="col">
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={handleNameChange}
          >
            {beneficiaryList.map((c) => (
              <option>{c.beneficiaryName}</option>
            ))}
          </select>
        </div>
        <div className="col"></div>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        style={{ marginLeft: "40%", marginTop: 40 }}
        onClick={handleTransfer}
      >
        Transfer
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div
                class="alert alert-danger"
                role="alert"
                style={{ display: display }}
              >
                Please enter 6-digit MPIN
              </div>
              <div class="form-group row">
                <label
                  for="inputPassword"
                  class="col-sm-2 col-form-label"
                  style={{ fontWeight: "bold" }}
                >
                  MPIN
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="validationCustom03"
                    onChange={handlePinChange}
                    placeholder="Enter a 6-digit MPIN"
                    maxLength={6}
                    value={mpin}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handlePinSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Transfer;
