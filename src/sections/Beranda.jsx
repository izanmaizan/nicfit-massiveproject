// import { Nav } from "../components";
import {CariKonsultasi, GabungSekarang, Jumbotron, LayananKami, LihatArtikel,} from "./";

const Beranda = () => {
  return (
    <main className="relative">
      {/* <Nav /> */}
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
    </main>
  );
};

export default Beranda;
