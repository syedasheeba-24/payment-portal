import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Transfer from "./Transfer";
import Beneficiary from "./Beneficiary.js";
import Delete from "./Delete.js";
import Success from "./Success.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav
          className="navbar navbar-expand navbar-dark"
          style={{ backgroundColor: "darkblue" }}
        >
          <a href="/" className="navbar-brand" style={{ marginLeft: "35%" }}>
            Payment Portal
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/beneficiary/1">
                  Add Beneficiary
                </a>
                <a className="dropdown-item" href="/beneficiary/2">
                  Edit Beneficiary
                </a>
                <a className="dropdown-item" href="/delete">
                  Delete Beneficiary
                </a>
              </div>
            </li>
          </div>
        </nav>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/transfer" element={<Transfer />}></Route>
            <Route
              exact
              path="/beneficiary/:id"
              element={<Beneficiary />}
            ></Route>
            <Route exact path="/delete" element={<Delete />}></Route>
            <Route exact path="/success" element={<Success />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
