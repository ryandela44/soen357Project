import './App.css';
import Home from './Component/Home/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import {UserProvider} from "./Component/UserContext/UserContext";

function App() {
    return (
        <UserProvider>
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <Login/>
                    }/>
                <Route
                    path="signup"
                    element={
                        <SignUp/>}
                />
                <Route
                    path="*"
                    element={
                        <Home/>
                    }
                />
            </Routes>
        </Router>
        </UserProvider>
    );
}

export default App;
