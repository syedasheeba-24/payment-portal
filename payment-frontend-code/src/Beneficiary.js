import { useParams } from "react-router-dom";

function Beneficiary() {
  const { id } = useParams();
  if (id === "1") {
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
            />
          </div>
          <div className="col"></div>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col" style={{ textAlign: "right" }}>
            <label style={{ fontWeight: "bold" }}>
              Confirm Account Number <span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Confirm Account Number"
              aria-label="Confirm Account Number"
            />
          </div>
          <div className="col"></div>
        </div>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "40%", marginTop: 40 }}
        >
          Add Beneficiary
        </button>
      </div>
    );
  } else
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
            />
          </div>
          <div className="col"></div>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col" style={{ textAlign: "right" }}>
            <label style={{ fontWeight: "bold" }}>
              Confirm Account Number <span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Confirm Account Number"
              aria-label="Confirm Account Number"
            />
          </div>
          <div className="col"></div>
        </div>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "40%", marginTop: 40 }}
        >
          Update Beneficiary
        </button>
      </div>
    );
}
export default Beneficiary;
