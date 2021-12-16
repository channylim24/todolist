import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Home />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddTodo />} />
          <Route exact path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// CHANNY'S! DO NOT COPY!
