import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import DetailNowPlaying from "./components/film/DetailNowPlaying";
import Ticket from "./ticket/ticket";
import DetailComingSoon from "./components/film/DetailComingSoon";
import MyTicket from "./ticket/myTicket";
import EditTicket from "./ticket/crud/EditTicket.js";
import LoginPage from "./components/Login/Login.js";
import RegisterPage from "./components/register/Register.js";
import DetailContainer from "./components/detail/DetailContainer";
const ReactRouter = () => {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-ticket" element={<MyTicket />} />
          <Route path="/now-playing/more" element={<DetailNowPlaying />} />
          <Route path="/coming-soon/more" element={<DetailComingSoon />} />
          <Route path="/buy-ticket/:id" element={<Ticket />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} /> */}

          <Route path="/my-ticket/edit/:id" element={<EditTicket />} />
          <Route path="/detail-movie/:id" element={<DetailContainer />} />
        </Routes>
      </>
    </>
  );
};

export default ReactRouter;
