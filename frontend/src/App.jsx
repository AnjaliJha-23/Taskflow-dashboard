import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  return (
    <>
      <Navbar />

      <div className="layout">

        <Sidebar />

        <Dashboard />

      </div>
    </>
  );
}

export default App;