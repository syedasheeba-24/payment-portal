function Home() {
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
          5,00,000 INR
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
