import { playStore } from "../assets/icons";
import { female_doctor } from "../assets/images";
// import { Button } from "../components";
import PlayStore from "../components/PlayStore";

const Jumbotron = () => {
  return (
    <section
      id="beranda"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-Poppins text-5xl font-bold w-10/12">
          Langkah Pertama ke{" "}
          <span className="text-primary-text font-Poppins">Bebas Rokok</span>
        </h2>
        <p className="mt-6 lg:max-w-lg text-black font-Poppins">
          NicFit, langkah pertama menuju bebas rokok dengan panduan, dukungan,
          dan komunitas yang kuat.
        </p>
        <div className="mt-10">
          <PlayStore
            iconURL={playStore}
            sublabel="GET IT ON"
            // label="Google Play"
          />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={female_doctor}
          alt="doctor"
          width={600}
          height={700}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Jumbotron;
