import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { TripsShow } from "./TripsShow";
import { TripsNew } from "./TripsNew";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trips/:id" element={<TripsShow />} />
        <Route path="/trips/new" element={<TripsNew />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
