import "./App.css";
import Menu from "./Menu";
import Graph from "./components/Graph";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Menu />} />{" "}
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </div>
  );
}

export default App;
