import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import OurLab from "./pages/OurLab";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Base from "./pages/Base";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Base" element={<Base />} />
          <Route path="Community" element={<Community />} />
          <Route path="Notes" element={<Notes />} />
          <Route path="OurLab" element={<OurLab />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
