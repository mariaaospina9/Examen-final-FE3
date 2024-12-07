import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextGlobal } from "./Components/utils/global.context";
import { useContext } from "react";

import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Layouts/Layout";

function App() {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`App ${state.theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Definir solo una ruta para Home */}
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


