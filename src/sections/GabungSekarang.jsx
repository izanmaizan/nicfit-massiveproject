import {Button} from "../components";
import {check} from "../assets/icons";
import {doctors} from "../assets/images";
import Check from "../components/Check";

const GabungSekarang = () => {
  return (
    <section
      id="beranda"
      className="w-full flex xl:flex-row flex-col justify-center items-center gap-24">
      <div className="top-8 z-10">
        <img
          src={doctors}
          alt="doctor"
          width={548}
          height={647}
          className="object-contain rounded-image-rounded"
        />
      </div>

      <div className="relative w-3/6 flex flex-col items-start">
        <p className="font-Poppins text-primary-text text-sm">
          Bergabung ke Teman Sehat
        </p>

        <h1 className="mt-3 font-Poppins text-2xl font-bold w-w-heading">
          Bergabung dengan Teman Sehat untuk mendapatkan dukungan
        </h1>
        <p className="font-Poppins text-slate-gray text-sm mt-6 mb-6">
          Temukan dukungan dan motivasi dari sesama pengguna yang juga berjuang
          berhenti merokok di komunitas kami.
        </p>
        <Check iconCheck={check} desc="Bergabung dengan mudah." />
        <Check iconCheck={check} desc="Lebih dari 10 Komunitas." />
        <br />
        <Button label="Gabung Sekarang" />
      </div>
    </section>
  );
};

export default GabungSekarang;
