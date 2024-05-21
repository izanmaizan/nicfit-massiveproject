import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components";
import {
  Beranda,
  // Jumbotron,
  Footer,
  // LayananKami,
  // CariKonsultasi,
  // GabungSekarang,
  LihatArtikel,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/about" element={<LihatArtikel />} />
            </Routes>
          </div>
          <section className="xl:padding-s wide:padding-s pb-10">
            <Footer />
          </section>
        </div>
      </Router>
    </main>
  );
};

export default App;
