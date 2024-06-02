import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { konsultanKu } from "../assets/dummy/category-konsultan";

function Payment() {
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
              <div className="w-[230px] h-[50px] flex items-center justify-center gap-4 rounded-lg border border-[#D6E6E9] shadow-xl">
                <span className="text-base text-primary-text font-medium">
                  1234 087 2100 2927
                </span>
                <span className="text-[#929292] text-xs">
                  <img src="/images/copy.svg" alt="copy" />
                  COPY
                </span>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>

        <div className="h-5/6">
          <div className="relative backdrop-blur-sm w-[800px] h-[700px] z-50"></div>
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
    </main>
  );
}

export default Payment;
