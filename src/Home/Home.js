import HeroPage from "../components/hero/Hero";
import NavbarPage from "../components/navbar";
import ComingSoonContainer from "../components/film/ComingSoon/ComingSoonContainer";
import NowPlayingContainer from "../components/film/NowPlaying/NowPlayingContainer";
import AboutUsContainer from "../components/about/aboutUs";
import FooterPage from "../components/footer/Footer";
// =======
import { auth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login" || "/register");
      }
    });
  });
  return (
    <div classsName="home-container">
      <section>
        <NavbarPage />
      </section>
      <section style={{ backgroundColor: "#1d1d1d" }}>
        <HeroPage />
        <NowPlayingContainer />
        <ComingSoonContainer />
      </section>
      <section className="bg-dark">
        <AboutUsContainer />
      </section>
      {/* <ReactRouter /> */}
      <footer>
        <FooterPage />
      </footer>
    </div>
  );
};

export default Home;
