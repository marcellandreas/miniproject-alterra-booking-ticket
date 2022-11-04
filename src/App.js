import "./App.css";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import DetailNowPlaying from "./components/film/ViewMore/DetailNowPlaying";
import DetailComingSoon from "./components/film/ViewMore/DetailComingSoon";
import MyTicket from "./ticket/myTicket";
import LoginPage from "./components/Login/Login.js";
import RegisterPage from "./components/register/Register.js";
import DetailContainer from "./components/detail/DetailContainer";
import EditTicket from "./ticket/crud/EditTicket";
import TicketContainer from "./ticket/ticketContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-ticket" element={<MyTicket />} />
        <Route path="/now-playing/more" element={<DetailNowPlaying />} />
        <Route path="/coming-soon/more" element={<DetailComingSoon />} />
        <Route path="/buy-ticket/:id" element={<TicketContainer />} />
        <Route path="/my-ticket/edit/:id" element={<EditTicket />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/detail-movie/:id" element={<DetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
