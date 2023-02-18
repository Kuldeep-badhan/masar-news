import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermAndCondi from "./pages/TermsAndCondi/TermAndCondi";
import CleanEnergy from "./pages/CleanEnergy/CleanEnegy";
import Contact from "./pages/ContactUs/Contact";
import InTheMedia from "./pages/Media/InTheMedia/InTheMedia";
import NewsLetter from "./pages/Media/NewsLetter/NewsLetter";
import PressRelease from "./pages/Media/PressRelease/PressRelease";
import Events from "./pages/Others/Events/Events";
import SocialMedia from "./pages/Others/SocialMedia/SocialMedia";
import TechTrends from "./pages/Others/TechTrends/TechTrends";
import SiteMap from "./pages/SiteMap/SiteMap";
import StrategicPlatform from "./pages/StrategicPlatforms/StrategicPlatform";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Topic from "./pages/Topic/Topic";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/Term-And-Conditions" element={<TermAndCondi />} />
          <Route path="/Clean-Energy" element={<CleanEnergy />} />
          <Route path="/Contact-Us" element={<Contact />} />
          <Route path="/In-The-Media" element={<InTheMedia />} />
          <Route path="/" element={<Home />} />
          <Route path="/News-Letter" element={<NewsLetter />} />
          <Route path="/Press-Release" element={<PressRelease />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Social-Media" element={<SocialMedia />} />
          <Route path="/Tech-Trends" element={<TechTrends />} />
          <Route path="/Site-Map" element={<SiteMap />} />
          <Route path="/Strategic-Platform" element={<StrategicPlatform />} />
          <Route path="/ADSW" element={<StrategicPlatform />} />
          <Route path="/WiSER" element={<StrategicPlatform />} />
          <Route path="/Youth" element={<StrategicPlatform />} />
          <Route path="/ZSP" element={<StrategicPlatform />} />
          <Route path="/Awards" element={<Topic />} />
          <Route path="/Catalyst" element={<Topic />} />
          <Route path="/Corporate" element={<Topic />} />
          <Route path="/Destination" element={<Topic />} />
          <Route path="/Green-Hydrogen" element={<Topic />} />
          <Route path="/Innovation" element={<Topic />} />
          <Route path="/Insights" element={<Topic />} />
          <Route path="/Investments" element={<Topic />} />
          <Route path="/Partnership" element={<Topic />} />
          <Route path="/Projects" element={<Topic />} />
          <Route path="/Reports" element={<Topic />} />
          <Route path="/Vip-Visits" element={<Topic />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
