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
import View from "./pages/View/View";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/Term-And-Conditions" element={<TermAndCondi />} />
          <Route path="/Term-And-Conditions/:id" element={<View />} />
          <Route path="/Clean-Energy" element={<CleanEnergy />} />
          <Route path="/Clean-Energy/:id" element={<View />} />
          <Route path="/Contact-Us" element={<Contact />} />
          <Route path="/Contact-Us/:id" element={<View />} />
          <Route path="/In-The-Media" element={<InTheMedia />} />
          <Route path="/In-The-Media/:id" element={<View />} />
          <Route path="/" element={<Home />} />
          <Route path="/News-Letter" element={<NewsLetter />} />
          <Route path="/News-Letter/:id" element={<View />} />
          <Route path="/Press-Release" element={<PressRelease />} />
          <Route path="/Press-Release/:id" element={<View />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Events/:id" element={<View />} />
          <Route path="/Social-Media" element={<SocialMedia />} />
          <Route path="/Social-Media/:id" element={<View />} />
          <Route path="/Tech-Trends" element={<TechTrends />} />
          <Route path="/Tech-Trends/:id" element={<View />} />
          <Route path="/Site-Map" element={<SiteMap />} />
          <Route path="/Strategic-Platform" element={<StrategicPlatform />} />
          <Route path="/Strategic-Platform/:id" element={<View />} />
          <Route path="/ADSW" element={<StrategicPlatform />} />
          <Route path="/ADSW/:id" element={<View />} />
          <Route path="/WiSER" element={<StrategicPlatform />} />
          <Route path="/WiSER/:id" element={<View />} />
          <Route path="/Youth" element={<StrategicPlatform />} />
          <Route path="/Youth/:id" element={<View />} />
          <Route path="/ZSP" element={<StrategicPlatform />} />
          <Route path="/ZSP/:id" element={<View />} />
          <Route path="/Awards" element={<Topic />} />
          <Route path="/Awards/:id" element={<View />} />
          <Route path="/Catalyst" element={<Topic />} />
          <Route path="/Catalyst/:id" element={<View />} />
          <Route path="/Corporate" element={<Topic />} />
          <Route path="/Corporate/:id" element={<View />} />
          <Route path="/Destination" element={<Topic />} />
          <Route path="/Destination/:id" element={<View />} />
          <Route path="/Green-Hydrogen" element={<Topic />} />
          <Route path="/Green-Hydrogen/:id" element={<View />} />
          <Route path="/Innovation" element={<Topic />} />
          <Route path="/Innovation/:id" element={<View />} />
          <Route path="/Insights" element={<Topic />} />
          <Route path="/Insights/:id" element={<View />} />
          <Route path="/Investments" element={<Topic />} />
          <Route path="/Investments/:id" element={<View />} />
          <Route path="/Partnership" element={<Topic />} />
          <Route path="/Partnership/:id" element={<View />} />
          <Route path="/Projects" element={<Topic />} />
          <Route path="/Projects/:id" element={<View />} />
          <Route path="/Reports" element={<Topic />} />
          <Route path="/Reports/:id" element={<View />} />
          <Route path="/Vip-Visits" element={<Topic />} />
          <Route path="/Vip-Visits/:id" element={<View />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
