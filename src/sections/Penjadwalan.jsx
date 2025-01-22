import {useEffect, useState} from "react";
import {FaStar} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Bank} from "../components";

function Penjadwalan() {
  // Ganti nama fungsi menjadi Penjadwalan
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("Pagi");
  const [isModalPayment, setisModalPayment] = useState(false);
  const [modalClass, setModalClass] = useState("modal-close");

  const handleCloseModal = () => {
    setModalClass("modal-close");
    setTimeout(() => {
      setisModalPayment(false);
    }, 300);
  };

  useEffect(() => {
    if (isModalPayment) {
      setModalClass("modal-open");
    }
  }, [isModalPayment]);

  const handlePaymentClick = () => {
    setisModalPayment(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      handleCloseModal();
    }
  };

  const services = [
    { id: 1, name: "Chat 1 Jam", price: "Rp 10.000", img: "/images/CHAT.png" },
    {
      id: 2,
      name: "Panggilan Suara 1 Jam",
      price: "Rp 50.000",
      img: "/images/CALL.png",
    },
    {
      id: 3,
      name: "Panggilan Video 1 Jam",
      price: "Rp 70.000",
      img: "/images/VCALL.png",
    },
  ];

  const vouchers = [
    {
      id: 1,
      description: "Diskon Rp5.000",
      expiry: "08 Mei 2024",
      img: "/images/Voucher.png",
    },
    {
      id: 2,
      description: "Diskon Rp3.000",
      expiry: "08 Mei 2024",
      img: "/images/Voucher.png",
    },
  ];

  const handleServiceSelect = (id) => setSelectedService(id);
  const handleTimeSelect = (time) => setSelectedTime(time);
  const handleVoucherSelect = (id) => setSelectedVoucher(id);
  const handlePeriodSelect = (period) => setSelectedPeriod(period);

  const times = {
    Pagi: ["08:00", "09:00", "10:00", "11:00"],
    Siang: ["13:00", "14:00", "15:00", "17:00"],
    Malam: ["19:00", "20:00", "21:00", "22:00"],
  };

  return (
    <main className="max-w-screen-xl mx-auto px-4 md:px-6 font-Poppins">
      {isModalPayment && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleOverlayClick}>
          <div
            className={`bg-white p-6 rounded-3xl flex flex-col items-center transition-all duration-300 transform ${modalClass}`}
            onClick={(e) => e.stopPropagation()}>
            <h1 className="text-base font-semibold">Pilih Metode Pembayaran</h1>
            <p className="text-[10px] text-[#AEAEAE] mt-2">Pilih Bank</p>
            <div className="flex flex-row gap-[15px] mt-6">
              <Bank imgLogo={"/images/bca.svg"} title="BCA" linkTo={"/transaksi"} />
              <Bank imgLogo={"/images/bni.svg"} title="BNI" linkTo={"/transaksi"} />
              <Bank imgLogo={"/images/bri.svg"} title="BRI" linkTo={"/transaksi"} />
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center py-20">
        <div className="w-1/3 flex flex-col items-left">
          <img
            src="/images/FOTO.png"
            alt="Doctor"
            className="h-full rounded-full"
          />
          <h2 className="text-2xl font-semibold mt-4">Dr. Pawan Kusuma</h2>
          <p className="text-sm text-gray-600">Spesialis Jantung & Paru</p>
          <div className="flex items-left space-x-2 mt-2">
            <img
              src="/images/medical.png"
              alt="Icon"
              className="w-6 h-6 items-left"
            />
            <span>7 Tahun</span>
          </div>
          <div className="flex items-left space-x-2 mt-1">
            <FaStar className="text-yellow-500" />
            <span>4.8 (1286 ulasan)</span>
          </div>
        </div>

        <div className="w-2/3 flex space-x-16 py-20">
          <div className="w-full">
            <h3 className="text-lg font-semibold">Pilih Tanggal</h3>
            <div className="mt-2 space-y-4">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2"
              />
            </div>

            <h3 className="text-lg font-semibold pt-20">Pilih Waktu</h3>
            <div className="mt-2 space-y-4">
              <div className="flex mb-4">
                {Object.keys(times).map((period) => (
                  <button
                    key={period}
                    className={`px-4 py-2 rounded-lg mr-2 ${selectedPeriod === period ? "bg-primary-text text-white" : "border border-gray-300"}`}
                    onClick={() => handlePeriodSelect(period)}>
                    {period}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap">
                {times[selectedPeriod].map((time) => (
                  <button
                    key={time}
                    className={`ml-2 mb-2 px-4 py-2 rounded-lg ${selectedTime === time ? "bg-primary-text text-white" : "border border-gray-300"}`}
                    onClick={() => handleTimeSelect(time)}>
                    {time}
                  </button>
                ))}
              </div>

              <button
                className="mt-4 px-8 py-2 bg-primary-text text-white rounded-lg w-full"
                onClick={handlePaymentClick}>
                Pesan
              </button>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-semibold">Pilih Layanan</h3>
            <div className="mt-2 space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-4 border rounded-lg cursor-pointer ${selectedService === service.id ? "border-primary-text" : "border-gray-300"}`}
                  onClick={() => handleServiceSelect(service.id)}>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center space-x-2">
                      <img
                        src={service.img}
                        alt={service.name}
                        className="w-6 h-6"
                      />
                      <span>{service.name}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <span>{service.price}</span>
                      <input
                        type="radio"
                        name="service"
                        checked={selectedService === service.id}
                        onChange={() => handleServiceSelect(service.id)}
                      />
                    </span>
                  </div>
                </div>
              ))}

              <h3 className="text-lg font-semibold pt-4">Pilih Voucher</h3>
              <div className="mt-2 space-y-4">
                {vouchers.map((voucher) => (
                  <div
                    key={voucher.id}
                    className={`p-5 w-full border rounded-lg cursor-pointer ${selectedVoucher === voucher.id ? "border-primary-text" : "border-gray-300"}`}
                    onClick={() => handleVoucherSelect(voucher.id)}>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center space-x-2">
                        <img
                          src={voucher.img}
                          alt={voucher.description}
                          className="w-6 h-6"
                        />
                        <span>{voucher.description}</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <span>Berlaku sampai {voucher.expiry}</span>
                        <input
                          type="radio"
                          name="voucher"
                          checked={selectedVoucher === voucher.id}
                          onChange={() => handleVoucherSelect(voucher.id)}
                        />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold pt-4">Apa Kata Mereka?</h3>
              <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex justify-left mt-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <div className="flex items-center mt-2">
                  <img
                    src="/images/user.png"
                    alt="User"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <p>
                    Dokter yang hebat dan ramah. Saya sangat merasa cocok
                    berkonsultasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Penjadwalan; // Sesuaikan ekspor dengan nama fungsi
