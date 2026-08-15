import "./dashboard.css";

function Dashboard() {
  return (
    <main className="dashboard">

      {/* ========================= */}
      {/* Welcome Section */}
      {/* ========================= */}

      <section className="welcome-section">

        <div className="welcome-top">

          <div className="welcome-text">

            <h1>
              👋 Good Morning, Anjali Jha!
            </h1>

            <p>
              Let's make the most out of today!
            </p>

          </div>

          <button className="task-btn">
            <i className="fa-solid fa-plus"></i>
            Add Task
          </button>

        </div>

      </section>


      {/* ========================= */}
      {/* Statistics */}
      {/* ========================= */}

      <section className="stats-grid">

        <div className="stat-card">

          <i className="fa-solid fa-list-check"></i>

          <h2>24</h2>

          <p>Total Tasks</p>

        </div>


        <div className="stat-card">

          <i className="fa-solid fa-spinner"></i>

          <h2>6</h2>

          <p>In Progress</p>

        </div>


        <div className="stat-card">

          <i className="fa-solid fa-circle-check"></i>

          <h2>18</h2>

          <p>Completed</p>

        </div>


        <div className="stat-card">

          <i className="fa-solid fa-bullseye"></i>

          <h2>75%</h2>

          <p>Productivity</p>

        </div>

      </section>


      {/* ========================= */}
      {/* Bottom Section */}
      {/* ========================= */}

      <section className="dashboard-bottom">

        {/* Today's Tasks */}

        <div className="task-card">

          <div className="card-header">

            <h2>Today's Tasks</h2>

            <button className="view-all-btn">
              View All
            </button>

          </div>


          <div className="task-item">

            <div className="task-info">

              <i className="fa-solid fa-thumbtack"></i>

              <span>
                Design Landing Page
              </span>

            </div>

            <span className="priority high">
              High
            </span>

          </div>


          <div className="task-item">

            <div className="task-info">

              <i className="fa-solid fa-thumbtack"></i>

              <span>
                Learn JavaScript
              </span>

            </div>

            <span className="priority medium">
              Medium
            </span>

          </div>


          <div className="task-item">

            <div className="task-info">

              <i className="fa-solid fa-thumbtack"></i>

              <span>
                Push to GitHub
              </span>

            </div>

            <span className="priority done">
              Done
            </span>

          </div>

        </div>


        {/* Upcoming Deadlines */}

        <div className="deadline-card">

          <div className="card-header">

            <h2>Upcoming Deadlines</h2>

          </div>


          <div className="deadline">

            <div>
              <i className="fa-solid fa-calendar-days"></i>

              <span>
                Resume AI Project
              </span>
            </div>

            <span>
              Tomorrow
            </span>

          </div>


          <div className="deadline">

            <div>
              <i className="fa-solid fa-calendar-days"></i>

              <span>
                TaskFlow Dashboard
              </span>
            </div>

            <span>
              7 July
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Dashboard;