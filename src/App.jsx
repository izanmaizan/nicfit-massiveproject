import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Nav} from './components';
import {
    Artikel,
    Beranda,
    ChatKonsultan,
    Daftar,
    DashboardPage,
    Footer,
    KataSandiBaru,
    Konsultasi,
    Login,
    LupaSandi,
    Payment,
    Penjadwalan,
    Profile,
    Schedule,
    Transaksi,
    TukarPoint,
    VerifikasiEmail,
} from './sections';
import TemanSehat from './sections/TemanSehat';
import CommunityChatPage from './sections/Chat';
import ArticlePage from './sections/ArticlePage';
import CategoryArticle from './sections/CategoryArticle';

// Import Firebase configuration
// import './firebase';

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
                <Route path="/sandi-baru/:email" element={<KataSandiBaru />} />
                <Route path="/konsultasi" element={<Konsultasi />} />
                <Route path="/komunitas" element={<TemanSehat />} />
                <Route path="/komunitas/chat" element={<CommunityChatPage />} />
                <Route path="/konsultasi/payment" element={<Payment />} />
                <Route path="/konsultasi/chat" element={<ChatKonsultan />} />
                <Route path="/konsultasi/schedule" element={<Schedule />} />
                <Route path="/tukar-point" element={<TukarPoint />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/penjadwalan" element={<Penjadwalan/>} />
                <Route path="/transaksi" element={<Transaksi/>} />
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
