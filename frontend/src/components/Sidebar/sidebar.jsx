import "./sidebar.css";

function Sidebar() {

  const menuItems = [
    {
      name: "Dashboard",
      icon: "fa-house",
    },
    {
      name: "My Tasks",
      icon: "fa-list-check",
    },
    {
      name: "Calendar",
      icon: "fa-calendar",
    },
    {
      name: "Analytics",
      icon: "fa-chart-line",
    },
    {
      name: "Projects",
      icon: "fa-folder",
    },
    {
      name: "Goals",
      icon: "fa-bullseye",
    },
    {
      name: "Settings",
      icon: "fa-gear",
    },
    {
      name: "Help & Support",
      icon: "fa-circle-question",
    },
  ];

  return (
    <aside className="sidebar">

      {menuItems.map((item, index) => (

        <div
          className={`menu-item ${
            index === 0 ? "active" : ""
          }`}
          key={item.name}
        >

          <i
            className={`fa-solid ${item.icon}`}
          ></i>

          <span>
            {item.name}
          </span>

        </div>

      ))}

    </aside>
  );
}

export default Sidebar;