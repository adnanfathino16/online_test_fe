import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-auto max-w-[1380px] min-h-[600px] flex ">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
