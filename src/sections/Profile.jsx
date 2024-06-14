// import React from "react";

const InformasiAkunPage = () => {
    return (
        <main
            id="Profile"
            className="max-w-screen-xl mx-auto px-4 md:px-6 font-Poppins">
            <section className="mt-32">
                <h1 className="text-[60px] font-semibold">
                    Lengkapi Informasi<span className="text-[#508CAE]"> Akun</span> <br />
                    Anda
                </h1>
            </section>

            <form className="max-w-sm mx-auto">
                <label
                    htmlFor="input-group-1"
                    className="block mb-2 text-sm font-medium text-gray-900">
                    Nama Pengguna
                </label>
                <div className="relative mb-6">
                    <input
                        type="text"
                        id="input-group-1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Klik untuk mengisi"
                        required
                    />
                </div>

                <div className="flex space-x-4 mb-4">
                    <input
                        placeholder="First Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                    />
                    <input
                        placeholder="Last Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                    />
                </div>

                <label
                    htmlFor="website-admin"
                    className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                </label>
                <div className="flex mb-5">
                    <input
                        type="email"
                        id="input-group-2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        required
                    />
                </div>

                <label
                    htmlFor="input-group-1"
                    className="block mb-2 text-sm font-medium text-gray-900">
                    Nomor Telepon
                </label>
                <div className="relative mb-6">
                    <input
                        type="text"
                        id="input-group-1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Klik untuk mengisi"
                        required
                    />
                </div>

                <label
                    htmlFor="input-group-3"
                    className="block mb-2 text-sm font-medium text-gray-900">
                    Kata Sandi
                </label>
                <div className="relative mb-6">
                    <input
                        type="password"
                        id="input-group-3"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password"
                        required
                    />
                </div>

                {/* <p className="text-blue-500">Lupa Kata sandi</p> */}
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-blue-800 mt-3">
                    Keluar Akun
                </button>
            </form>
        </main>
    );
};

export default InformasiAkunPage;
