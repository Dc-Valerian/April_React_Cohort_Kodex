import Header from "./Header/Header";
import HeroPage from "./LandingPage/HeroPage";
import CardProps from "./CardProps/CardProps";
import HomeScreen from "./LandingPage/HomeScreen";
import Feature from "./FeaturePage/Feature";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import ReactHooks from "./ReactHooks/ReactHooks";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/react-hooks" element={<ReactHooks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// React Hook
