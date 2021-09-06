import React from "react";
import { Link } from "react-router-dom";

const styles = {
  header: {
    backgroundColor: "#00A19D",
    height: "75px",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  button: {
      width: "100px",
      height: "50px",
      fontSize: "20px",
      backgroundColor: "#E05D5D",
      color: "#FFF8E5",
      border: "none",
      marginLeft: '10px',
      cursor: "pointer"
  },
};
function Header() {
  return (
    <div style={styles.header}>
      <Link to="/home">
        <button style={styles.button}>Home</button>
      </Link>
    </div>
  );
}

export default Header;
