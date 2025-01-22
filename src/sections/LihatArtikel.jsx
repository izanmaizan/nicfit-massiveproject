import {manypeople, no_smoking, stop_smoking} from "../assets/images";
import {Button2, CardArtikel} from "../components";

const LihatArtikel = () => {
  return (
    <section className='max-container flex flex-col items-center'>
      <h3 className='text-center text-36px font-bold font-Poppins'>
        Lihat Artikel
      </h3>
      <hr className='w-14 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-md md:my-10 dark:bg-gray-700' />
      <p className='m-auto mt-4 w-3/4 text-center text-gray-600 font-Mulish text-lg'>
        Pantau kesehatanmu, dapatkan konsultasi ahli, bergabung dengan teman
        sehat, dan baca artikel informatif untuk kehidupan lebih baik.
      </p>

      <div className='flex justify-center items-center gap-12 w-3/4 mt-20'>
        <CardArtikel
          img={stop_smoking}
          label='Solusi untuk Generasi
Penerus yang Sehat'
          desc='Lorem ipsum dolor sit amet consectetur. Eleifend proin turpis nisi dictumst. Lobortis volutpat.'
          link='Baca Selengkapnya'
        />
        <CardArtikel
          img={manypeople}
          label='Mengakhiri kebiasaan
          Merokok'
          desc='Lorem ipsum dolor sit amet consectetur. Eleifend proin turpis nisi dictumst. Lobortis volutpat.'
          link='Baca Selengkapnya'
        />
        <CardArtikel
          img={no_smoking}
          label='Panduan Holistik untuk 
          mengatasi ketergantungan'
          desc='Lorem ipsum dolor sit amet consectetur. Eleifend proin turpis nisi dictumst. Lobortis volutpat.'
          link='Baca Selengkapnya'
        />
      </div>

      <Button2 label='Lihat Semua' />
    </section>
  );
};

export default LihatArtikel;
