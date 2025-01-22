import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "../utils/axios.js";

const InformasiAkunPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    alamat: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem("refresh_token");
        console.log("data akses token", accessToken);

        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const response = await axios.get(
          "/Me",
          config
        );
        const { name, email, phone, alamat } = response.data;

        setUserData({
          name: name || "",
          email: email || "",
          phone: phone || "",
          alamat: alamat || "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        // navigate('/login')
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, phone, alamat } = userData;

      console.log("data userdata", alamat);

      const accessToken = localStorage.getItem("refresh_token");

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const requestBody = {
        name,
        email,
        phone,
        alamat,
      };

      const response = await axios.put(
        "/user/update",
        requestBody,
        config
      );

      console.log("Update berhasil:", response.data);

      if (response.status === 200) {
        // window.location.reload()
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

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

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900">
          Nama Pengguna
        </label>
        <div className="relative mb-6">
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Klik untuk mengisi"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>

        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900">
          Email
        </label>
        <div className="flex mb-5">
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>

        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900">
          Nomor Telepon
        </label>
        <div className="relative mb-6">
          <input
            type="text"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Klik untuk mengisi"
            value={userData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <label
          htmlFor="alamat"
          className="block mb-2 text-sm font-medium text-gray-900">
          Alamat
        </label>
        <div className="relative mb-6">
          <input
            type="text"
            id="alamat"
            name="alamat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Klik untuk mengisi"
            value={userData.alamat}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-blue-800 mt-3">
          Simpan Perubahan
        </button>
      </form>
    </main>
  );
};

export default InformasiAkunPage;
