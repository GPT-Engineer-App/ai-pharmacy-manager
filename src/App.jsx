import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Inventory from "./pages/Inventory.jsx";
import Prescription from "./pages/Prescription.jsx";
import Patients from "./pages/Patients.jsx";
import Sales from "./pages/Sales.jsx";
import Reports from "./pages/Reports.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/prescription" element={<Prescription />} />
        <Route exact path="/patients" element={<Patients />} />
        <Route exact path="/sales" element={<Sales />} />
        <Route exact path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;