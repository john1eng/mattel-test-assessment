import React from "react";
import { Link } from "react-router-dom";

const styles = {
  title: {
    textAlign: "center",
  },
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    marginTop: "10%",
    justifyContent: "center",
    gap: "20px",
  },
  buttonContainer: {
    width: "300px",
    height: "200px",
  },
  button: {
    width: "100%",
    height: "100%",
    fontSize: "40px",
    color: "#FFF8E5",
    backgroundColor: "#E05D5D",
    border: "none",
    cursor: "pointer",
  },
};

function Home() {
  return (
    <div>
      <h1 style={styles.title}>Home</h1>
      <div style={styles.container}>
        <div style={styles.buttonContainer}>
          <Link to="/submit">
            <button style={styles.button}>User</button>
          </Link>
        </div>
        <div style={styles.buttonContainer}>
          <Link to="/admin">
            <button style={styles.button}>Admin</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
