import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "10px", background: "#1e293b" }}>
      <Link to="/" style={{ color: "white", marginRight: "10px" }}>
        Home
      </Link>

      <Link to="/reports" style={{ color: "white" }}>
        Reports
      </Link>
    </div>
  );
}

export default Navbar;