import React from "react";
import { last30DaysApi } from "../api/last30DaysApi";
import { Link } from "react-router-dom";

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
    marginBottom: "10px"
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
  status: {
    marginLeft: "10px",
    width: "200px",
  },
  field: {
    display: "inline-block",
    width: "170px",
  },
};

function HistoryPage() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function last30Days() {
      const history = await last30DaysApi();
      console.log(history);
      await setData(history);
    }
    last30Days();
  }, []);

  const displayData = data.map((i) => (
    <div style={styles.dataContainer} key={i.userId}>
      <div>
        <div>
          <span style={styles.field}>Name: </span>
          {i.first} {i.last}
        </div>
        <div>
          <span style={styles.field}>Contact: &emsp;</span>
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
      <div style={styles.statusContainer}>
        <div style={styles.status}>
          <span>Date: </span>
          {i.status.date}
        </div>
        <div style={styles.status}>
          <span>Status: </span>
          {i.status.status}
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Last 30 days Approved/Rejected list</h1>
        <Link to="/admin">
          <button style={styles.button}>Pending</button>
        </Link>
      </div>
      <main style={styles.container}>{displayData}</main>
    </div>
  );
}

export default HistoryPage;
