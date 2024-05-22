import { Button } from "../components";
import { check } from "../assets/icons";
import { female_doctor2 } from "../assets/images";
import Check from "../components/Check";

const CariKonsultasi = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center h-h-konsultan">
      <div className="relative w-3/6 flex flex-col pt-20 items-start">
        <p className="font-Poppins text-primary-text text-sm">Cari Konsultan</p>

        <h1 className="mt-3 font-Poppins text-2xl font-bold w-w-heading">
          Temukan Konsultan yang tepat sesuai dengan keluhan Anda.
        </h1>
        <p className="font-Poppins text-slate-gray text-sm mt-6 mb-6">
          CiggyLert adalah aplikasi kesehatan gratis yang membantu Anda temukan
          konsultan sesuai kebutuhan Anda dan mendapatkan dukungan komunitas.
        </p>
        <Check
          iconCheck={check}
          desc="Aplikasi yang dirancang untuk membantu Anda menemukan konsultan yang tepat untuk Anda."
        />
        <Check iconCheck={check} desc="Tersedia lebih dari 10 Konsultan." />
        <br />
        <Button label="Lihat Konsultan" />
      </div>

      <div className="relative overflow-hidden">
        <hr className="absolute w-w-ellipse bg-primary-text h-h-ellipse rounded-full top-36" />
        <div className="relative top-8 z-10">
          <img
            src={female_doctor2}
            alt="doctor"
            width={548}
            height={647}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CariKonsultasi;
