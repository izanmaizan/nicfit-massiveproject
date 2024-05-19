import { Nav } from "./components";
import {
  Jumbotron,
  Footer,
  LayananKami,
  CariKonsultasi,
  GabungSekarang,
  LihatArtikel,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-s wide:padding-s pt-16">
        <Jumbotron />
      </section>
      <section className="py-16">
        <LayananKami />
      </section>
      <section className="xl:padding-l wide:padding-r">
        <CariKonsultasi />
      </section>
      <section className="padding">
        <GabungSekarang />
      </section>
      <section className="padding">
        <LihatArtikel />
      </section>
      <section className="xl:padding-s wide:padding-s pb-10">
        <Footer />
      </section>
    </main>
  );
};

export default App;
