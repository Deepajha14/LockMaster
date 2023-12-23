import "./App.css";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app-bg">
      <Navbar/>
      <Landing/>
      <Login/>
    </div>
  );
}

export default App;
