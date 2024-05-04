import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import LanguageContext from "./utilis/context/LanguageContext";
import Projects from "./pages/projects/Projects";
import Recrutement from "./pages/recrutement/Recrutement";

function App() {
  const [language, setLanguage] = useState("fr");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="organigramme" element={<Team />} />
            <Route path="projects">
              <Route index element={<Projects />} />
            </Route>
            <Route path="recrutement" element={<Recrutement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
