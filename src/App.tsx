import React from "react";
import "./App.css";
import { Chat } from "./UI/Chat";
import Herobanner from "./Components/HeroBanner";
import AdventureSection from "./Components/AdventureSection";
import MapSection from "./Components/MapSection";
import ExploreMoreSection from "./Components/ExploreMoreSection";

function App() {
  return (
    <div className="flex flex-col gap-20 max-sm:gap-10 relative overflow-x-hidden">
      <Chat />
      <Herobanner />
      <AdventureSection />
      <MapSection />
      <ExploreMoreSection />
    </div>
  );
}

export default App;
