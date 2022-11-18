import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [balance, setBalance] = useState();
  useEffect(() => {
    axios.get("/pay/getOwner").then((res) => {
      setBalance(res.data.balance.toLocaleString());
    });
  });
  return (
    <div
      className="card"
      style={{
        width: "20rem",
        height: "10 rem",
        background: "darkblue",
        marginLeft: "35%",
        marginTop: "10%",
      }}
    >
      <div className="card-body" style={{ color: "white", textAlign: "left" }}>
        <h5 className="card-title">Your Balance</h5>
        <p className="card-text" style={{ fontSize: "35px" }}>
          {balance}
        </p>
        <a
          className="btn btn-primary"
          href="/transfer"
          role="button"
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "30px",
            color: "darkblue",
          }}
        >
          Transfer
        </a>
      </div>
    </div>
  );
}
export default Home;
