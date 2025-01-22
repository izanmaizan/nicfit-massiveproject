import {useEffect, useState} from "react";
import {FaChevronLeft, FaChevronRight, FaSearch} from "react-icons/fa";
import {konsultasi} from "../assets/images";
import {konsultan, konsultanKu} from "../assets/dummy/category-konsultan";
import {Bank, Button} from "../components";
import {Link} from "react-router-dom";

import axios from "../utils/axios.js";

// import Payment from "./Payment";

function Konsultasi() {
  const [selected, setSelected] = useState("Konsultasi");
  const [isModalUpgrade, setisModalUpgrade] = useState(false);
  const [isModalPayment, setisModalpayment] = useState(false);
  const [modalClass, setModalClass] = useState("modal-close");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (refreshToken) {
      setIsAuthenticated(true);
      fetchUsername();
    }
  }, []);

  const fetchUsername = async () => {
    try {
      const response = await axios.get("/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
        },
      });
      const data = response.data;
      setUsername(data.username);
      localStorage.setItem("username", data.username);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  const handleUpgradeClick = () => {
    setisModalUpgrade(true);
  };

  const handlePaymentClick = () => {
    setisModalpayment(true);
  };

  const handleCloseModal = () => {
    setModalClass("modal-close");
    setTimeout(() => {
      setisModalUpgrade(false);
      setisModalpayment(false);
    }, 300);
  };

  useEffect(() => {
    if (isModalUpgrade) {
      setModalClass("modal-open");
    }
  }, [isModalUpgrade]);

  useEffect(() => {
    if (isModalPayment) {
      setModalClass("modal-open");
    }
  }, [isModalPayment]);

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      handleCloseModal();
    }
  };

  return (
    <main
      id="komunitas"
      className="max-w-screen-xl mx-auto px-4 md:px-6 font-Poppins">
      {isAuthenticated ? (
        <>
          <section className="mt-32 flex">
            <div className="flex flex-col">
              <h1 className="text-[60px] font-semibold">
                Pilihan <span className="text-[#508CAE]">Konsultasi</span> Hari
                ini <br />
                Untuk Anda
              </h1>
              <div className="flex items-center my-14">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#676767]" />
                  <input
                    placeholder="Cari Konsultan"
                    className="bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#AEAEAE] placeholder:text-[12px] placeholder:text-[#8F9BB3] text-[12px] text-[#8F9BB3] pl-10 pr-4 py-2 w-[643px] h-[48px]"
                  />
                </div>
              </div>
            </div>
            <img src={konsultasi} alt="Konsultasi" className="pl-32" />
          </section>

          <div className="rounded-[10px] w-[403px] h-[56px] border-2 border-[#508CAE] grid grid-cols-2">
            <button
              onClick={() => setSelected("Konsultasi")}
              className={`${
                selected === "Konsultasi"
                  ? "text-white bg-[#508CAE]"
                  : "text-black"
              } rounded-l-[5px]`}>
              Konsultasi
            </button>
            <button
              onClick={() => setSelected("KonsultasiKu")}
              className={`${
                selected === "KonsultasiKu"
                  ? "text-white bg-[#508CAE]"
                  : "text-black"
              } rounded-r-[5px]`}>
              Konsultasi-ku
            </button>
          </div>

          {selected === "Konsultasi" ? (
            <>
              {konsultan.map((item) => (
                <div
                  key={item.id}
                  className="w-full rounded-[20px] shadow-lg flex justify-between bg-[#F8F9FC] items-center my-10 px-10 py-4">
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center gap-6">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-full border-2 border-primary-text object-cover"
                      />
                      <div className="inline-flex bg-[#00A500] gap-1 rounded-md w-16 h-6 py-1 px-2 items-center">
                        <img src="/images/like.svg" alt="" />
                        <span className="text-white font-Lato font-bold">
                          99%
                        </span>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-primary-text font-bold text-[24px]">
                        {item.title}
                      </h1>
                      <p className="text-[#4F4F4F] text-sm">{item.role}</p>
                      <p className="text-[#787887] text-sm">
                        {item.experience}
                      </p>
                      <p className="text-[#414146] font-bold">
                        {item.location}
                      </p>
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
                  <div className="mt-28">
                    <div className="flex flex-col gap-3">
                      <div>
                        <p
                          className={`${
                            item.available === "Tersedia Hari Ini"
                              ? "text-[#01A400]"
                              : "text-[#FF0000]"
                          } font-medium text-[14px] text-center font-Poppins`}>
                          {item.available}
                        </p>
                      </div>
                      <button
                        onClick={handleUpgradeClick}
                        className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px] hover:bg-primary-text-hover">
                        Jadwalkan Konsultasi
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {konsultanKu.map((item) => (
                <div
                  key={item.id}
                  className="w-full rounded-[20px] shadow-lg flex justify-between bg-[#F8F9FC] items-center my-10 px-10 py-4">
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center gap-6">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-full border-2 border-primary-text object-cover"
                      />
                      <div className="inline-flex bg-[#00A500] gap-1 rounded-md w-16 h-6 py-1 px-2 items-center">
                        <img src="/images/like.svg" alt="" />
                        <span className="text-white font-Lato font-bold">
                          99%
                        </span>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-primary-text font-bold text-[24px]">
                        {item.title}
                      </h1>
                      <p className="text-[#4F4F4F] text-sm">{item.role}</p>
                      <p className="text-[#787887] text-sm">
                        {item.experience}
                      </p>
                      <p className="text-[#414146] font-bold">
                        {item.location}
                      </p>
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
                  <div className="mt-28">
                    <div className="flex flex-col gap-3">
                      <Link to="/konsultasi/chat">
                        <button className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px] hover:bg-primary-text-hover">
                          Chat Konsultan
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

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

          {isModalUpgrade && (
            <div
              id="modal-overlay"
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              onClick={handleOverlayClick}>
              <div
                className={`bg-white p-6 rounded-3xl flex flex-col items-center transition-all duration-300 transform ${modalClass}`}
                onClick={(e) => e.stopPropagation()}>
                <img
                  src="/images/bingo.svg"
                  alt="Pro"
                  className="w-72 h-48 mb-7"
                />
                <h2 className="text-xl font-Poppins font-semibold text-primary-text text-center">
                  Versi Pro
                </h2>
                <h1 className="text-center text-36px font-bold font-[#2C2626]">
                  Rp 50.000
                </h1>
                <div className="pl-14">
                  <p>
                    <span className="font-bold text-primary-text pr-2">✓</span>
                    Konsultasi Setiap Hari
                  </p>
                  <p>
                    <span className="font-bold text-primary-text pr-2">✓</span>
                    Join Teman Sehat Tanpa Batas
                  </p>
                  <p>
                    <span className="font-bold text-primary-text pr-2">✓</span>
                    Prioritas Customer Service
                  </p>
                </div>
                <button
                  onClick={handlePaymentClick}
                  className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px] hover:bg-primary-text-hover mt-8">
                  Tingkatkan Versi Pro
                </button>
              </div>
            </div>
          )}

          {isModalPayment && (
            <div
              id="modal-overlay"
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              onClick={handleOverlayClick}>
              <div
                className={`bg-white p-6 rounded-3xl flex flex-col items-center transition-all duration-300 transform ${modalClass}`}
                onClick={(e) => e.stopPropagation()}>
                <h1 className="text-base font-semibold">
                  Pilih Metode Pembayaran
                </h1>
                <p className="text-[10px] text-[#AEAEAE] mt-2">Pilih Bank</p>
                <div className="flex flex-row gap-[15px] mt-6">
                  <Bank
                    imgLogo={"/images/bca.svg"}
                    title="BCA"
                    linkTo={"/konsultasi/payment"}
                  />
                  <Bank
                    imgLogo={"/images/bni.svg"}
                    title="BNI"
                    linkTo={"/konsultasi/payment"}
                  />
                  <Bank
                    imgLogo={"/images/bri.svg"}
                    title="BRI"
                    linkTo={"/konsultasi/payment"}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="relative">
          <section className="my-20 z-20 relative flex flex-row justify-between">
            <div className="">
              <h1 className="text-[60px] font-semibold pt-20 mb-8">
                Masuk untuk melihat <br />
                <span className="text-[#508CAE]">Statistikmu</span>
              </h1>
              <Link to="/login">
                <Button label={"Masuk"} />
              </Link>
              <p className="text-xl mt-9">
                Belum punya akun?{" "}
                <Link to="/register">
                  <span className="text-primary-text text-xl font-bold cursor-pointer">
                    Daftar disini
                  </span>
                </Link>
              </p>
            </div>
            <div className="pt-20">
              <img src="/images/belum_login2.svg" alt="belum login" />
            </div>
          </section>

          <div className="absolute inset-0 backdrop-blur-sm w-full h-full z-10"></div>

          <div className="relative z-0"></div>
          <div className="rounded-[10px] w-[403px] h-[56px] border-2 border-[#508CAE] grid grid-cols-2">
            <button
              onClick={() => setSelected("Konsultasi")}
              className={`${
                selected === "Konsultasi"
                  ? "text-white bg-[#508CAE]"
                  : "text-black"
              } rounded-l-[5px]`}>
              Konsultasi
            </button>
            <button
              onClick={() => setSelected("KonsultasiKu")}
              className={`${
                selected === "KonsultasiKu"
                  ? "text-white bg-[#508CAE]"
                  : "text-black"
              } rounded-r-[5px]`}>
              Konsultasi-ku
            </button>
          </div>

          {selected === "Konsultasi" ? (
            <>
              {konsultan.map((item) => (
                <div
                  key={item.id}
                  className="w-full rounded-[20px] shadow-lg flex justify-between bg-[#F8F9FC] items-center my-10 px-10 py-4">
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center gap-6">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-full border-2 border-primary-text object-cover"
                      />
                      <div className="inline-flex bg-[#00A500] gap-1 rounded-md w-16 h-6 py-1 px-2 items-center">
                        <img src="/images/like.svg" alt="" />
                        <span className="text-white font-Lato font-bold">
                          99%
                        </span>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-primary-text font-bold text-[24px]">
                        {item.title}
                      </h1>
                      <p className="text-[#4F4F4F] text-sm">{item.role}</p>
                      <p className="text-[#787887] text-sm">
                        {item.experience}
                      </p>
                      <p className="text-[#414146] font-bold">
                        {item.location}
                      </p>
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
                  <div className="mt-28">
                    <div className="flex flex-col gap-3">
                      <div>
                        <p
                          className={`${
                            item.available === "Tersedia Hari Ini"
                              ? "text-[#01A400]"
                              : "text-[#FF0000]"
                          } font-medium text-[14px] text-center font-Poppins`}>
                          {item.available}
                        </p>
                      </div>
                      <button
                        onClick={handleUpgradeClick}
                        className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px] hover:bg-primary-text-hover">
                        Jadwalkan Konsultasi
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {konsultanKu.map((item) => (
                <div
                  key={item.id}
                  className="w-full rounded-[20px] shadow-lg flex justify-between bg-[#F8F9FC] items-center my-10 px-10 py-4">
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center gap-6">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-full border-2 border-primary-text object-cover"
                      />
                      <div className="inline-flex bg-[#00A500] gap-1 rounded-md w-16 h-6 py-1 px-2 items-center">
                        <img src="/images/like.svg" alt="" />
                        <span className="text-white font-Lato font-bold">
                          99%
                        </span>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-primary-text font-bold text-[24px]">
                        {item.title}
                      </h1>
                      <p className="text-[#4F4F4F] text-sm">{item.role}</p>
                      <p className="text-[#787887] text-sm">
                        {item.experience}
                      </p>
                      <p className="text-[#414146] font-bold">
                        {item.location}
                      </p>
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
                  <div className="mt-28">
                    <div className="flex flex-col gap-3">
                      <Link to="/konsultasi/chat">
                        <button className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px] hover:bg-primary-text-hover">
                          Chat Konsultan
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

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

          {isModalUpgrade && (
            <div
              id="modal-overlay"
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              onClick={handleOverlayClick}>
              <div
                className={`bg-white p-6 rounded-3xl flex flex-col items-center transition-all duration-300 transform ${modalClass}`}
                onClick={(e) => e.stopPropagation()}>
                <img
                  src="/images/bingo.svg"
                  alt="Pro"
                  className="w-72 h-48 mb-7"
                />
                <h2 className="text-xl font-Poppins font-semibold text-primary-text text-center">
                  Versi Pro
                </h2>
                <h1 className="text-center text-36px font-bold font-[#2C2626]">
                  Rp 50.000
                </h1>
                <div className="pl-14">
                  <p>
                    <span className="font-bold text-primary-text pr-2">✓</span>
                    Konsultasi Setiap Hari
                  </p>
                  <p>
                    <span className="font-bold text-primary-text pr-2">✓</span>
                    Join Teman Sehat Tanpa Batas
                  </p>
                  <p>
                    <span className="font-bold text-primary-text pr-2">✓</span>
                    Prioritas Customer Service
                  </p>
                </div>
                <button
                  onClick={handlePaymentClick}
                  className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px] hover:bg-primary-text-hover mt-8">
                  Tingkatkan Versi Pro
                </button>
              </div>
            </div>
          )}

          {isModalPayment && (
            <div
              id="modal-overlay"
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              onClick={handleOverlayClick}>
              <div
                className={`bg-white p-6 rounded-3xl flex flex-col items-center transition-all duration-300 transform ${modalClass}`}
                onClick={(e) => e.stopPropagation()}>
                <h1 className="text-base font-semibold">
                  Pilih Metode Pembayaran
                </h1>
                <p className="text-[10px] text-[#AEAEAE] mt-2">Pilih Bank</p>
                <div className="flex flex-row gap-[15px] mt-6">
                  <Bank imgLogo={bca} title="BCA" />
                  <Bank imgLogo={bni} title="BNI" />
                  <Bank imgLogo={bri} title="BRI" />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default Konsultasi;
