import "./styles.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Ewallet from "./pages/Ewallet";
import AddCard from "./pages/AddCard";
import { fetchRandomUser } from "./redux/cardSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomUser());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        
      <nav className="navbar">
        <Link to="/">
          <button className="navBtn"> E-wallet </button>
        </Link>
        <Link to="/addcard">
          <button className="navBtn"> Add Card</button>
        </Link>
    </nav>
        <Routes>
          <Route path="/" element={<Ewallet />} /> 
          <Route path="/addcard" element={<AddCard />} />
        </Routes>
      </div>
    </Router>
  );
}
