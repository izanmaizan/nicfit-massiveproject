import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import {Button} from './../components';
import axios from "axios";

function TemanSehat() {
  const [selected, setSelected] = useState("Komunitas");
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
      const response = await axios.get("http://localhost:3000/me",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
            },
          });
      const data = response.data;
      setUsername(data.username);
      localStorage.setItem("username", data.username);
    } catch (error) {
      console.error("Error fetching username: ", error);
    }
  };

  const komunitas = [
    {
      id: 1,
      img: "/images/no-smoke-day.svg",
      title: "Pasukan Berhenti Merokok",
      description:
        "Grup Pasukan Berhenti Merokok adalah tempat di mana kita saling dukung, semangati, dan <br /> berbagi tips untuk melewati perjalanan berhenti merokok. Bersama, kita membangun kekuatan <br /> untuk mencapai kebebasan dari rokok dan menjalani hidup yang lebih sehat",
      available: "Tersedia",
      people: "100+ Orang tergabung",
    },
    {
      id: 2,
      img: "/images/no-smoke-area.svg",
      title: "Forum Anti Rokok",
      description:
        "Forum Anti Rokok adalah ruang diskusi untuk membangun kesadaran akan bahaya merokok<br/>dan mendukung gaya hidup tanpa rokok. Di sini, kita saling berbagi informasi, pengalaman, dan<br/>dukungan untuk mewujudkan hidup sehat tanpa rokok.",
      available: "Tersedia",
      people: "50 Orang tergabung",
    },
    {
      id: 3,
      img: "/images/no-smoke-day.svg",
      title: "Pasukan Berhenti Merokok",
      description:
        "Grup Pasukan Berhenti Merokok adalah tempat di mana kita saling dukung, semangati, dan <br /> berbagi tips untuk melewati perjalanan berhenti merokok. Bersama, kita membangun kekuatan <br /> untuk mencapai kebebasan dari rokok dan menjalani hidup yang lebih sehat",
      available: "Penuh",
      people: "100+ Orang tergabung",
    },
    {
      id: 4,
      img: "/images/no-smoke-area.svg",
      title: "Forum Anti Rokok",
      description:
        "Forum Anti Rokok adalah ruang diskusi untuk membangun kesadaran akan bahaya merokok<br/>dan mendukung gaya hidup tanpa rokok. Di sini, kita saling berbagi informasi, pengalaman, dan<br/>dukungan untuk mewujudkan hidup sehat tanpa rokok.",
      available: "Penuh",
      people: "50 Orang tergabung",
    },
  ];

  const komunitasKu = [
    {
      id: 1,
      img: "/images/no-smoke-day.svg",
      title: "Pasukan Berhenti Merokok",
      description:
        "Grup Pasukan Berhenti Merokok adalah tempat di mana kita saling dukung, semangati, dan <br /> berbagi tips untuk melewati perjalanan berhenti merokok. Bersama, kita membangun kekuatan <br /> untuk mencapai kebebasan dari rokok dan menjalani hidup yang lebih sehat",
      people: "100+ Orang tergabung",
    },
    {
      id: 2,
      img: "/images/no-smoke-area.svg",
      title: "Forum Anti Rokok",
      description:
        "Forum Anti Rokok adalah ruang diskusi untuk membangun kesadaran akan bahaya merokok<br/>dan mendukung gaya hidup tanpa rokok. Di sini, kita saling berbagi informasi, pengalaman, dan<br/>dukungan untuk mewujudkan hidup sehat tanpa rokok.",
      people: "50 Orang tergabung",
    },
  ];

  return (
    <main
      id="komunitas"
      className="max-w-screen-xl mx-auto px-4 md:px-6 font-Poppins">
      {isAuthenticated ? (
          <>
      <section className="mt-32">
        <h1 className="text-[60px] font-semibold">
          Pilihan <span className="text-[#508CAE]">Komunitas</span> Hari ini{" "}
          <br />
          Untuk Anda
        </h1>
      </section>

      <div className="flex items-center my-14">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#676767]" />
          <input
            placeholder="Cari Komunitas"
            className="bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#AEAEAE] placeholder:text-[12px] placeholder:text-[#8F9BB3] text-[12px] text-[#8F9BB3] pl-10 pr-4 py-2 w-[643px] h-[48px]"
          />
        </div>
      </div>

      <div className="rounded-[10px] w-[403px] h-[56px] border-2 border-[#508CAE] grid grid-cols-2">
        <button
          onClick={() => setSelected("Komunitas")}
          className={`${selected === "Komunitas" ? "text-white bg-[#508CAE]" : "text-black"} rounded-l-[5px]`}>
          Komunitas
        </button>
        <button
          onClick={() => setSelected("KomunitasKu")}
          className={`${selected === "KomunitasKu" ? "text-white bg-[#508CAE]" : "text-black"} rounded-r-[5px]`}>
          Komunitas-ku
        </button>
      </div>

      {selected === "Komunitas" ? (
        <>
          {komunitas.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-[20px] shadow-lg flex justify-between bg-[#F8F9FC] items-center my-10 px-10 py-4">
              <div className="flex gap-5">
                <img src={item.img} alt={item.title} />
                <div>
                  <h1 className="text-[#2C2626] font-bold text-[24px]">
                    {item.title}
                  </h1>
                  <p
                    className="text-[#898989] font-normal text-[14px]"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <div className=""></div>
                  <div className="flex items-center">
                    <img src="/images/user.svg" alt="user" />
                    <p className="text-black font-normal text-[12px]">
                      {item.people}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-20">
                <div>
                  <p
                    className={`${item.available === "Tersedia" ? "text-[#01A400]" : "text-[#FF0000]"} font-medium text-[14px] text-end`}>
                    {item.available}
                  </p>
                </div>
                <button className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px]">
                  Gabung Komunitas
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {komunitasKu.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-[20px] shadow-lg flex justify-between bg-[#F8F9FC] items-center my-10 px-10 py-4">
              <div className="flex gap-5">
                <img src={item.img} alt={item.title} />
                <div>
                  <h1 className="text-[#2C2626] font-bold text-[24px]">
                    {item.title}
                  </h1>
                  <p
                    className="text-[#898989] font-normal text-[14px]"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <div className=""></div>
                  <div className="flex items-center">
                    <img src="/images/user.svg" alt="user" />
                    <p className="text-black font-normal text-[12px]">
                      {item.people}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-20">
                <div />
                <Link to="/komunitas/chat">
                  <button className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px]">
                    Kirim Pesan
                  </button>
                </Link>
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
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
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
          </>
      ) : (
          <div className="relative">
            <section className="my-20 z-20 relative flex flex-row justify-between">
              <div className="">
                <h1 className="text-[60px] font-semibold pt-20 mb-8">
                  Masuk untuk melihat <br/>
                  <span className="text-[#508CAE]">Statistikmu</span>
                </h1>
                <Link to="/login">
                  <Button label={"Masuk"}/>
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
                <img src="/public/images/belum_login3.svg" alt="belum login"/>
              </div>
            </section>

            <div className="absolute inset-0 backdrop-blur-sm w-full h-full z-10"></div>


            <div className="relative z-0">
              <div className="flex items-center my-14">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#676767]"/>
                  <input
                      placeholder="Cari Komunitas"
                      className="bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#AEAEAE] placeholder:text-[12px] placeholder:text-[#8F9BB3] text-[12px] text-[#8F9BB3] pl-10 pr-4 py-2 w-[643px] h-[48px]"
                  />
                </div>
              </div>

              <div className="rounded-[10px] w-[403px] h-[56px] border-2 border-[#508CAE] grid grid-cols-2">
                <button
                    onClick={() => setSelected("Komunitas")}
                    className={`${selected === "Komunitas" ? "text-white bg-[#508CAE]" : "text-black"} rounded-l-[5px]`}>
                  Komunitas
                </button>
                <button
                    onClick={() => setSelected("KomunitasKu")}
                    className={`${selected === "KomunitasKu" ? "text-white bg-[#508CAE]" : "text-black"} rounded-r-[5px]`}>
                  Komunitas-ku
                </button>
              </div>

              {selected === "Komunitas" ? (
                  <>
                    {komunitas.map((item) => (
                        <div
                            key={item.id}
                            className="w-full rounded-[20px] shadow-lg flex justify-between bg-[#F8F9FC] items-center my-10 px-10 py-4">
                          <div className="flex gap-5">
                            <img src={item.img} alt={item.title}/>
                            <div>
                              <h1 className="text-[#2C2626] font-bold text-[24px]">
                                {item.title}
                              </h1>
                              <p
                                  className="text-[#898989] font-normal text-[14px]"
                                  dangerouslySetInnerHTML={{__html: item.description}}
                              />
                              <div className=""></div>
                              <div className="flex items-center">
                                <img src="/images/user.svg" alt="user"/>
                                <p className="text-black font-normal text-[12px]">
                                  {item.people}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-20">
                            <div>
                              <p
                                  className={`${item.available === "Tersedia" ? "text-[#01A400]" : "text-[#FF0000]"} font-medium text-[14px] text-end`}>
                                {item.available}
                              </p>
                            </div>
                            <button className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px]">
                              Gabung Komunitas
                            </button>
                          </div>
                        </div>
                    ))}
                  </>
              ) : (
                  <>
                    {komunitasKu.map((item) => (
                        <div
                            key={item.id}
                            className="w-full rounded-[20px] shadow-lg flex justify-between bg-[#F8F9FC] items-center my-10 px-10 py-4">
                          <div className="flex gap-5">
                            <img src={item.img} alt={item.title}/>
                            <div>
                              <h1 className="text-[#2C2626] font-bold text-[24px]">
                                {item.title}
                              </h1>
                              <p
                                  className="text-[#898989] font-normal text-[14px]"
                                  dangerouslySetInnerHTML={{__html: item.description}}
                              />
                              <div className=""></div>
                              <div className="flex items-center">
                                <img src="/images/user.svg" alt="user"/>
                                <p className="text-black font-normal text-[12px]">
                                  {item.people}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-20">
                            <div/>
                            <Link to="/komunitas/chat">
                              <button className="w-[212px] h-[44px] bg-[#508CAE] text-white rounded-[10px]">
                                Kirim Pesan
                              </button>
                            </Link>
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
                        <FaChevronLeft className="h-5 w-5" aria-hidden="true"/>
                      </a>
                      {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
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
                      <span
                          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
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
                        <FaChevronRight className="h-5 w-5" aria-hidden="true"/>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

      )}
    </main>
  );
}

export default TemanSehat;
