import "./navbar.css";
import logo from "../../assets/Taskflow-logo.png";

function Navbar() {
  return (
    <header>
      <nav className="navbar">

        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="TaskFlow Logo" className="logo" />
        </div>

        {/* Search */}
        <div className="search-bar">
          <span className="search-icon">⌕</span>

          <input
            type="search"
            placeholder="Search tasks, projects"
          />
        </div>

        {/* Right Section */}
        <div className="nav-right">

          {/* Notification */}
          <button className="bell-icon">
            🔔
          </button>

          {/* Profile */}
          <div className="profile-icon">

            <span className="profile-picture">
              👤
            </span>

            <span className="user-name">
              Anjali Jha
            </span>

            <span className="dropdown-icon">
              ▾
            </span>

          </div>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;