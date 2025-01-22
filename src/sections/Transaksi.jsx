import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {konsultanKu} from "../assets/dummy/category-konsultan";
import {Collapse} from "../components";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Payment() {
  const [isModalSuccess, setisModalSuccess] = useState(false);
  const [isModalPro, setisModalPro] = useState(false);
  const [modalClass, setModalClass] = useState("modal-close");

  const handleSuccessClick = () => {
    setisModalSuccess(true);
  };

  const handleProClick = () => {
    setisModalSuccess(false);
    setisModalPro(true);
  };

  const handleCloseModal = () => {
    setModalClass("modal-close");
    setTimeout(() => {
      setisModalSuccess(false);
      setisModalPro(false);
    }, 300);
  };

  useEffect(() => {
    if (isModalSuccess) {
      setModalClass("modal-open");
    }
  }, [isModalSuccess]);

  useEffect(() => {
    if (isModalPro) {
      setModalClass("modal-open");
    }
  }, [isModalPro]);

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      handleCloseModal();
    }
  };

  return (
    <main
      id="komunitas"
      className="max-w-screen-xl mx-auto px-4 md:px-6 font-Poppins">
      <h1 className="mt-24 text-center text-[60px] font-semibold">
        Lakukan <span className="text-primary-text">Pembayaran</span> Untuk
        Melanjutkan
      </h1>
      <div className="flex flex-row gap-16">
        <div className="w-[400px]">
          <div className="w-[400px] h-[225px] border rounded-xl border-[#D6E6E9] shadow-xl py-2 px-4">
            <div className="flex justify-between">
              <span>Pilih Bank</span>
              <span>Ganti &gt;</span>
            </div>
            <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
              <img
                src="/images/bcalogo.svg"
                alt="bca logo"
                className="w-[150px] h-[50px]"
              />
              <h2 className="text-[#2F2F2F] text-base font-medium">
                Virtual Account Billing
              </h2>
              <div
                className="w-[230px] h-[50px] flex items-center justify-center gap-4 rounded-lg border border-[#D6E6E9] shadow-xl cursor-pointer"
                onClick={handleSuccessClick}>
                <span className="text-base text-primary-text font-medium">
                  1234 087 2100 2927
                </span>
                <span className="text-[#929292] text-xs flex flex-col items-center">
                  <img src="/images/copy.svg" alt="copy" />
                  COPY
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-[#2F2F31] text-base font-medium mt-4 mb-2">
            INFORMASI
          </h1>
          <div className="w-[400px] h-[140px] flex flex-row border border-slate-300 rounded-xl shadow-xl pl-4 pt-5 pr-2 pb-4">
            <div className="w-[280px] flex flex-col justify-between">
              <span className="text-[#2F2F31] text-xs font-medium">
                Nama Akun
              </span>
              <hr className="w-[290px] h-[1px] mx-auto bg-gray-400 border-1 rounded" />
              <span className="text-[#2F2F31] text-xs font-medium">
                Total Pembayaran
              </span>
              <hr className="w-[290px] h-[1px] mx-auto bg-gray-400 border-1 rounded" />
              <span className="text-[#2F2F31] text-xs font-medium">
                Bayar Dalam
              </span>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <span className="text-[#2F2F31] text-xs font-medium">
                Yoga Agatha
              </span>
              <span className="text-[#2F2F31] text-xs font-medium">
                Rp 50.000
              </span>
              <span className="text-[#FF7439] text-xs font-medium">
                23 jam 59 menit 59 detik
              </span>
            </div>
          </div>
          <h1 className="text-[#2F2F31] text-base font-medium mt-4 mb-2">
            INSTRUKSI
          </h1>
          <div className="w-[400px] flex flex-col border border-slate-300 rounded-xl shadow-xl pl-4 pt-5 pr-2 pb-4">
            <Collapse title="ATM">
              <p>
                Instruksi penggunaan ATM: Masukkan kartu, masukkan PIN, pilih
                transaksi, ambil kartu dan uang.
              </p>
            </Collapse>
            <Collapse title="Mobile Banking">
              <p>
                Instruksi penggunaan Mobile Banking: Unduh aplikasi, masukkan
                nomor telepon dan PIN, pilih transaksi, konfirmasi transaksi.
              </p>
            </Collapse>
            <Collapse title="Internet Banking">
              <p>
                Instruksi penggunaan Internet Banking: Buka situs, masukkan user
                ID dan password, pilih transaksi, konfirmasi dengan OTP.
              </p>
            </Collapse>
          </div>
        </div>

        <div className="h-5/6">
          <div className="relative backdrop-blur-sm w-[800px] h-[700px] z-10"></div>
          {konsultanKu.map((item) => (
            <div
              key={item.id}
              className="w-[778px] h-[270px] rounded-[20px] shadow-lg flex flex-col bg-[#F8F9FC] items-center my-10 px-10 py-4 z-0 relative bottom-[750px]">
              <div className="flex gap-5">
                <div className="flex flex-col items-center gap-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-full border-2 border-primary-text object-cover"
                  />
                  <div className="inline-flex bg-[#00A500] gap-1 rounded-md w-16 h-6 py-1 px-2 items-center">
                    <img src="/images/like.svg" alt="" />
                    <span className="text-white font-Lato font-bold">99%</span>
                  </div>
                </div>

                <div>
                  <h1 className="text-primary-text font-bold text-[24px]">
                    {item.title}
                  </h1>
                  <p className="text-[#4F4F4F] text-sm">{item.role}</p>
                  <p className="text-[#787887] text-sm">{item.experience}</p>
                  <p className="text-[#414146] font-bold">{item.location}</p>
                  <p
                    className="text-[#898989] font-normal text-[14px] w-[582px]"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <div className="flex items-center">
                    <img src="/images/starrate.svg" alt="star rate" />
                    <p className="text-black font-normal text-[12px] pl-1">
                      {item.insight}
                    </p>
                  </div>
                  <span className="text-[#414146] font-bold font-Lato">
                    {item.story}
                  </span>
                </div>
              </div>
              <div className="ml-[525px] mb-[50px]">
                <div className="flex flex-col">
                  <button className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px] hover:bg-primary-text-hover">
                    Chat Konsultan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm text-center"
              aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-[#508CAE] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <FaChevronRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
      {isModalSuccess && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          onClick={handleOverlayClick}>
          <div
            className={`w-[320px] bg-white p-6 rounded-3xl flex flex-col items-center transition-all duration-300 transform ${modalClass}`}
            onClick={(e) => e.stopPropagation()}>
            <img src="/images/bcalogo.svg" alt="logo bca" />
            <h3 className="text-base font-semibold mt-5 mb-2">
              Transaksi Telah Sukses
            </h3>
            <p className="text-[#AEAEAE] text-xs font-medium">
              20 Mei 2024 20:00 gmt+7
            </p>
            <h1 className="text-2xl font-semibold mt-5 mb-8">Rp50.000</h1>
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-col text-left text-xs font-medium">
                <span>Pengirim</span>
                <span>Bank Tujuan</span>
                <span>Nomor Akun</span>
                <span>ID Transaksi</span>
                <span>Catatan</span>
              </div>
              <div className="flex flex-col text-right text-xs font-medium">
                <span>Yoga Agatha</span>
                <span>BCA</span>
                <span>8930462013</span>
                <span>2435GASFD7523</span>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between mt-20">
              <div className="flex gap-2">
                <img src="/assets/download.svg" alt="download" />
                <span className="text-primary-text text-sm font-medium">
                  Download
                </span>
              </div>
              <div className="flex gap-2">
                <img src="/assets/share.svg" alt="download" />
                <span className="text-primary-text text-sm font-medium">
                  Share
                </span>
              </div>
            </div>
            <button
              onClick={handleProClick}
              className="w-full h-[44px] bg-[#508CAE] text-white rounded-[10px] hover:bg-primary-text-hover mt-8">
              TUTUP
            </button>
          </div>
        </div>
      )}
      {isModalPro && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          onClick={handleOverlayClick}>
          <div
            className={`w-[355px] bg-white p-6 rounded-3xl flex flex-col items-center transition-all duration-300 transform ${modalClass}`}
            onClick={(e) => e.stopPropagation()}>
            <h1 className="text-base font-semibold">Selamat Datang!</h1>
            <p className="text-xs font-normal mt-3 mb-7">
              Selamat Akun Anda Sudah Dalam Versi Pro
            </p>
            <img src="/images/welcome.svg" alt="welcome" />
            <Link to={"/penjadwalan"}>
              <button
                onClick={handleProClick}
                className="w-[230px] h-[44px] bg-[#508CAE] text-white rounded-[10px] hover:bg-primary-text-hover mt-5">
                Selanjutnya
              </button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Payment;
