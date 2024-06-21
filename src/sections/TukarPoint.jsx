const TukarPoint = () => {
  const doctor = [
    {
      img: "/assets/Doctor.svg",
      banner: `Konsultasi keluhan <br /> mu dengan dokter <br /> yang
      tepat!`,
      disc: "90",
      point: "160",
    },
    {
      img: "/assets/Doctor.svg",
      banner: `Konsultasi keluhan <br /> mu dengan dokter <br /> yang
      tepat!`,
      disc: "70",
      point: "130",
    },
    {
      img: "/assets/Doctor.svg",
      banner: `Konsultasi keluhan <br /> mu dengan dokter <br /> yang
      tepat!`,
      disc: "40",
      point: "100",
    },
  ];

  return (
    <div className="mx-20">
      <section className="my-20">
        <h1 className="text-[60px] font-semibold">
          Tukar <span className="text-[#508CAE]">Poin</span> Dengan <br />{" "}
          Tawaran Menarik
        </h1>
      </section>

      <section>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[36px]">Penawaran Hari Ini</h2>
          <div className="bg-black h-[2px] w-[56px] mt-4" />
        </div>
      </section>

      <section>
        <div className="grid grid-cols-3 overflow-x-auto gap-x-32">
          {doctor.map((item, index) => (
            <div
              key={TukarPoint}
              className="w-[465px] h-[240px] rounded-lg shadow-md my-2">
              <div className="h-[149px] bg-[#80A9DA] rounded-t-lg bg-opacity-40">
                <div className="flex justify-center gap-x-10 mx-5 items-center">
                  <img
                    src={item.img}
                    alt="Doctor"
                    className="w-[164px] h-[149px]"
                  />
                  <h1
                    className="text-[18px] font-bold"
                    dangerouslySetInnerHTML={{ __html: item.banner }}></h1>
                </div>
              </div>
              <div className="flex justify-between items-end my-2 mx-2">
                <p className="text-[14px] font-normal">
                  Diskon{" "}
                  <span className="text-[#508CAE] font-bold">{`${item.disc}%`}</span>{" "}
                  konsultasi dengan Dokter <br /> di NicFit
                </p>
                <button className="bg-[#508CAE] w-[86px] h-[23px] text-white text-[14px] font-normal rounded-md">
                  {item.point} Poin
                </button>
              </div>
              <div className="flex justify-end">
                <p className="text-[14px] font-normal mr-3">
                  Berlaku sampai 08 Mei 2024
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TukarPoint;
