import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermAndCondi from "./pages/TermsAndCondi/TermAndCondi";
import CleanEnergy from "./pages/CleanEnergy/CleanEnegy";
import Contact from "./pages/ContactUs/Contact";
import Media from "./pages/Media/Media";
import InTheMedia from "./pages/Media/InTheMedia/InTheMedia";
import NewsLetter from "./pages/Media/NewsLetter/NewsLetter";
import PressRelease from "./pages/Media/PressRelease/PressRelease";
import Events from "./pages/Others/Events/Events";
import SocialMedia from "./pages/Others/SocialMedia/SocialMedia";
import TechTrends from "./pages/Others/TechTrends/TechTrends";
import SiteMap from "./pages/SiteMap/SiteMap";
import StrategicPlatform from "./pages/StrategicPlatforms/StrategicPlatform";
import ADSW from "./pages/StrategicPlatforms/ADSW/ADSW";
import WiSER from "./pages/StrategicPlatforms/WISER/WISER";
import YOUTH from "./pages/StrategicPlatforms/YOUTH/YOUTH";
import ZSP from "./pages/StrategicPlatforms/ZSP/ZSP";
import Awards from "./pages/Topic/Awards/Awards";
import Catalyst from "./pages/Topic/Catalyst/Catalyst";
import Corporate from "./pages/Topic/Corporate/Corporate";
import Destination from "./pages/Topic/Destination/Destination";
import GreenHydrogen from "./pages/Topic/GreenHydrogen/GreenHydrogen";
import Innovation from "./pages/Topic/Innovation/Innovation";
import Insights from "./pages/Topic/Insights/Insights";
import Investment from "./pages/Topic/Investment/Investment";
import Partnership from "./pages/Topic/Partnership/Partnership";
import Projects from "./pages/Topic/Projects/Projects";
import Reports from "./pages/Topic/Reports/Reports";
import VipVisits from "./pages/Topic/VipVisits/VipVisits";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
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
          <Route path="/Media" element={<Media />} />
          <Route path="/" element={<Home />} />
          <Route path="/News-Letter" element={<NewsLetter />} />
          <Route path="/Press-Release" element={<PressRelease />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Social-Media" element={<SocialMedia />} />
          <Route path="/Tech-Trends" element={<TechTrends />} />
          <Route path="/Site-Map" element={<SiteMap />} />
          <Route path="/Strategic-Platform" element={<StrategicPlatform />} />
          <Route path="/ADSW" element={<ADSW />} />
          <Route path="/WiSER" element={<WiSER />} />
          <Route path="/Youth" element={<YOUTH />} />
          <Route path="/ZSP" element={<ZSP />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/Catalyst" element={<Catalyst />} />
          <Route path="/Corporate" element={<Corporate />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Green-Hydrogen" element={<GreenHydrogen />} />
          <Route path="/Innovation" element={<Innovation />} />
          <Route path="/Insights" element={<Insights />} />
          <Route path="/Investments" element={<Investment />} />
          <Route path="/Partnership" element={<Partnership />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Vip-Visits" element={<VipVisits />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
