import React, { useState } from "react";
import { Link } from "react-router-dom";
import { approveOrRejectApi } from "../api/approveOrRejectApi";
import { pendingApi } from "../api/pendingApi";
import { userStatus, userData } from "../data/dummy-data";

const styles = {
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // justifySelf: "end",
    // alignSelf: "end"
  },
  button: {
    width: "80px",
    height: "30px",
    marginBottom: "10px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    border: "1px solid black",
    width: "75%",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  field: {
    display: "inline-block",
    width: "170px",
  },
};

function AdminPage() {
  const [data, setData] = useState([]);

  async function fetchPending() {
    const pending = await pendingApi();
    await setData(pending);
  }

  React.useEffect(() => {
    fetchPending();
  }, []);

  const updateStatusHandler = (statusId, status) => {
    console.log(statusId, status);
    approveOrRejectApi(statusId, status);
    fetchPending();
  };

  console.log(data);
  const displayData = data.map((i) => (
    <div style={styles.dataContainer} key={i.userId}>
      <div>
        <div>
          <span style={styles.field}>Name: </span>
          {i.first} {i.last}
        </div>
        <div>
          <span style={styles.field}>Contact: </span>
          {i.contact}
        </div>
        <div>
          <span style={styles.field}>Email: </span>
          {i.email}
        </div>
        <div>
          <span style={styles.field}>Address: </span>
          {i.address}
        </div>
        <div>
          <span style={styles.field}>Business justifcation: </span>
          {i.business}
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => updateStatusHandler(i.userId, "approved")}
        >
          Approved
        </button>
        <button
          style={styles.button}
          onClick={() => updateStatusHandler(i.userId, "rejected")}
        >
          Rejected
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Admin's Pending List</h1>
        <Link to="/admin/history">
          <button style={styles.button}>History</button>
        </Link>
      </div>
      <main style={styles.container}>{displayData}</main>
    </div>
  );
}

export default AdminPage;
