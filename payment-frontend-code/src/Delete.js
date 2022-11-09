function Delete() {
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
          <tr key="0">
            <td>xyz</td>
            <td>xyz</td>

            <td>
              <button style={{ marginLeft: "10px" }} className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Delete;
