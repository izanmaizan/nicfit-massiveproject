import {carbonDashboard, community, paper, phone} from "../assets/icons";
// import { ReviewCard } from "../components";
import Card from "../components/Card";
// import { reviews } from "../constants";

const LayananKami = () => {
  return (
    <section className="max-container flex flex-col items-center">
      <h3 className="text-center text-36px font-bold font-Poppins">
        Layanan Kami
      </h3>
      <hr className="w-14 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-md md:my-10 dark:bg-gray-700" />
      <p className="m-auto mt-4 w-3/4 text-center text-gray-600 font-Mulish text-lg">
        Pantau kesehatanmu, dapatkan konsultasi ahli, bergabung dengan teman
        sehat, dan baca artikel informatif untuk kehidupan lebih baik.
      </p>

      <div className="flex justify-center items-center gap-12 flex-wrap w-3/4 mt-20">
        <Card
          iconURL={carbonDashboard}
          label="Dashboard"
          desc="Gunakan dashboard untuk melihat progress, melacak uang yang dihemat dan rokok yang dihindari."
        />
        <Card
          iconURL={phone}
          label="Konsultasi"
          desc="Manfaatkan fitur konsultasi untuk bertanya kepada ahli berhenti merokok."
        />
        <Card
          iconURL={community}
          label="Teman Sehat"
          desc="Bergabunglah dengan komunitas untuk berbagi pengalaman dan mendapatkan dukungan."
        />
        <Card
          iconURL={paper}
          label="Artikel"
          desc="Temukan artikel informatif tentang rokok dan cara berhenti merokok."
        />
      </div>
    </section>
  );
};

export default LayananKami;
