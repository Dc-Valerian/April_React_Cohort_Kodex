import React from "react";
import HeroPage from "./HeroPage";
import CardSection from "./CardSection";
import AboutMe from "./AboutMe";

const HomeScreen = () => {
  return (
    <div>
      <HeroPage />
      <CardSection />
      <AboutMe />
    </div>
  );
};

export default HomeScreen;
