import React from "react";
import "./App.css";
import Herobanner from "./Components/HeroBanner";
import AdventureSection from "./Components/AdventureSection";
import MapSection from "./Components/MapSection";
import { Chat } from "./UI/Chat";

function App() {
  return (
    <div className="flex flex-col max-sm:gap-10 relative">
      <Chat />
      <Herobanner />
      <AdventureSection />
      <MapSection />
    </div>
  );
}

export default App;
