import {lupa} from "../assets/images";

const VerifikasiEmail = () => {
  return (
    <section className="bg-white px-5 py-28 h-screen w-screen">
      <div className="flex items-center gap-10 grid-cols-2 justify-center">
        <div className="flex flex-col justify-center order-2 p-14 lg:order-1">
          <p className="text-5xl text-black font-bold">Periksa Email Anda</p>
          <p className="mt-5 mb-14">
            Kami mengirimkan link reset ke email anda. <br /> masukkan 5 digit
            kode yang disebutkan dalam email.
          </p>
          <form className="max-w-sm mx-auto item">
            <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
              <div>
                <label htmlFor="code-1" className="sr-only">
                  First code
                </label>
                <input
                  type="number"
                  min="0"
                  max="9"
                  id="code-1"
                  className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-lime-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="code-2" className="sr-only">
                  Second code
                </label>
                <input
                  type="number"
                  min="0"
                  max="9"
                  id="code-2"
                  className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-lime-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="code-3" className="sr-only">
                  Third code
                </label>
                <input
                  type="number"
                  min="0"
                  max="9"
                  id="code-3"
                  className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-lime-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="code-4" className="sr-only">
                  Fourth code
                </label>
                <input
                  type="number"
                  min="0"
                  max="9"
                  id="code-4"
                  className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-lime-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="code-5" className="sr-only">
                  Fifth code
                </label>
                <input
                  type="number"
                  min="0"
                  max="9"
                  id="code-5"
                  className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-lime-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
            </div>
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Please introduce the 6 digit code we sent via email.
            </p>
          </form>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
            Verifikasi Kode
          </button>
          <p className="mt-4">
            Belum dapat kode?{" "}
            <a href="#" className="text-blue-600">
              Kirim ulang kode
            </a>
          </p>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center items-start px-10 ">
          <img
            className="h-auto max-w-full"
            src={lupa}
            alt="image description"
          />
        </div>
      </div>
    </section>
  );
};

export default VerifikasiEmail;
