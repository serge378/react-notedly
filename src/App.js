import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RouterPages from "./components/RouterPages";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex top-20 relative">
        <div className="basis-2/12 p-5 bg-slate-200 z-10">
          <Navigation />
        </div>
        <div className="p-5 basis-10/12 overflow-y-auto h-[calc(100vh_-_5rem)]">
          <RouterPages />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
