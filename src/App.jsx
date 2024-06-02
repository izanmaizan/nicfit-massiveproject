import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components";
import {
  Artikel,
  Beranda,
  Daftar,
  DashboardPage,
  Footer,
  KataSandiBaru,
  Konsultasi,
  Login,
  LupaSandi,
  Payment,
  VerifikasiEmail,
} from "./sections";
// import NotFound from "./components/not-found/not-found";
import TemanSehat from "./sections/TemanSehat";
import CommunityChatPage from "./sections/Chat";
import ArticlePage from "./sections/ArticlePage";
import CategoryArticle from "./sections/CategoryArticle";

const App = () => {
  return (
    <main className="relative">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/artikel" element={<ArticlePage />} />
              <Route path="/artikel/:category" element={<CategoryArticle />} />
              <Route path="/artikel/:category/:slug" element={<Artikel />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Daftar />} />
              <Route path="/lupa-sandi" element={<LupaSandi />} />
              <Route path="/verifikasi" element={<VerifikasiEmail />} />
              <Route path="/sandi-baru" element={<KataSandiBaru />} />
              <Route path="/konsultasi" element={<Konsultasi />} />
              <Route path="/komunitas" element={<TemanSehat />} />
              <Route path="/komunitas/chat" element={<CommunityChatPage />} />
              <Route path="/konsultasi/payment" element={<Payment />} />
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
