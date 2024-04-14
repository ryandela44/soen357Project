import './App.css';
import Home from './Component/Home/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Component/Login/Login";
function App() {
  return (
      <Router>
          <Routes>
              <Route
              path="/login"
              element={
                  <Login/>
              }/>
              <Route
                  path="*"
                  element={
                    <Home />
                  }
              />
          </Routes>
      </Router>
  );
}

export default App;
