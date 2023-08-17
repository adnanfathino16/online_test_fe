import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="border container flex">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
