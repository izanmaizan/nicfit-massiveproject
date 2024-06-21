import { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

function KonsultasiChatPage() {
  const chat = [
    {
      id: 1,
      img: "/public/images/doctorKonsultan.svg",
      title: "Dr. Pawan Kusuma",
      chat: "Gacor menyala abangku",
      time: "20:02",
    },
    {
      id: 2,
      img: "/public/images/doctorKonsultan.svg",
      title: "Dr. Aditya",
      chat: "Kamu: Bismillah best product",
      time: "12:12",
    },
    {
      id: 3,
      img: "/public/images/doctorKonsultan.svg",
      title: "Dr. Boyke",
      chat: "Bisa ini mah",
      time: "10:45",
    },
  ];

  const [selectedChat, setSelectedChat] = useState(2);

  return (
    <main
      id="konsultasi-chat"
      className="max-w-screen-xl mx-auto px-4 md:px-6 font-Poppins">
      <section className="my-20">
        <h2 className="text-black font-bold text-[24px] mb-3">
          Pesan Komunitas
        </h2>
        <div className="grid grid-cols-3">
          <div className="mb-2">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#676767]" />
              <input
                className="rounded-[12px] w-[291px] h-[36px] bg-[#EEEEEE] placeholder:text-[12px] placeholder:text-[#8F9BB3] text-[12px] text-[#8F9BB3] pl-10 pr-4 py-2"
                placeholder="Cari"
              />
            </div>
            <div className="mt-4">
              {chat.map((item) => (
                <div
                  className={`px-5 py-4 flex justify-between ${selectedChat === item.id ? "bg-[#EEEEEE]" : ""}`}
                  key={item.id}
                  onClick={() => setSelectedChat(item.id)}>
                  <div className="flex gap-2 items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[30px] h-[30px]"
                    />
                    <div>
                      <h2 className="font-bold text-[11px] text-black">
                        {item.title}
                      </h2>
                      <p className="font-normal text-[11px] text-[#AEAEAE]">
                        {item.chat}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-normal text-[10px] opacity-65">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 shadow-sm">
            <div className="flex gap-5 items-center">
              <img
                src="/public/images/doctorKonsultan.svg"
                alt="Dr. Pawan Kusuma"
                className="w-[30px] h-[30px]"
              />
              <div>
                <h2 className="font-bold text-[14px] text-black">
                  Dr. Pawan Kusuma
                </h2>
                <p className="font-normal text-[14px] text-[#01A400]">Online</p>
              </div>
            </div>
            <div className="mt-4 bg-[url('/images/bg-chat.svg')] bg-cover w-full h-[577px] px-4 py-4 flex flex-col gap-3 border-[1px]">
              <div className="flex gap-4">
                <img
                  src="/public/images/doctorKonsultan.svg"
                  alt="Chat-Avatar"
                  className="w-[25px] h-[25px] items-baseline self-end"
                />
                <div className="bg-[#F6F5FF] px-2 py-2 rounded-[17px] w-[295px] h-[79px]">
                  <p className="font-normal text-[12px] text-black">
                    Rokok terus anda ya cari penyakit aja, mending berenti
                  </p>
                  <p className="font-normal text-[10px] text-[#686A8A] mt-2">
                    08:30
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/public/images/doctorKonsultan.svg"
                  alt="Chat-Avatar"
                  className="w-[25px] h-[25px] items-baseline self-end"
                />
                <div className="bg-[#F6F5FF] px-2 py-2 rounded-[17px] w-[295px] h-[79px]">
                  <p className="font-normal text-[12px] text-black">
                    Kalau mau ngerokok langsung aja 20 bungkus boy
                  </p>
                  <p className="font-normal text-[10px] text-[#686A8A] mt-2">
                    08:35
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/public/images/doctorKonsultan.svg"
                  alt="Chat-Avatar"
                  className="w-[25px] h-[25px] items-baseline self-end"
                />
                <div className="bg-[#F6F5FF] px-2 py-2 rounded-[17px] w-[295px] h-[79px]">
                  <p className="font-normal text-[12px] text-black">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto in excepturi corporis?
                  </p>
                  <p className="font-normal text-[10px] text-[#686A8A] mt-2">
                    08:35
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/public/images/doctorKonsultan.svg"
                  alt="Chat-Avatar"
                  className="w-[25px] h-[25px] items-baseline self-end"
                />
                <div className="bg-[#F6F5FF] px-2 py-2 rounded-[17px] w-[295px] h-[79px]">
                  <p className="font-normal text-[12px] text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    beatae accusamus eius.
                  </p>
                  <p className="font-normal text-[10px] text-[#686A8A] mt-2">
                    08:35
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-end">
                <div className="bg-[#F5E0CD] px-2 py-2 rounded-[17px] w-[295px] h-[69px]">
                  <p className="font-normal text-[12px] text-black">
                    Gas keren semua ini mah bang semoga kuat sampe akhir
                  </p>
                  <p className="font-normal text-[10px] text-[#686A8A] mt-2 text-end">
                    08:35
                  </p>
                </div>
                <img
                  src="/images/chat-2.svg"
                  alt="Chat-Avatar"
                  className="w-[25px] h-[25px] items-baseline self-end"
                />
              </div>
              <div className="flex gap-4 justify-end">
                <div className="bg-[#F5E0CD] px-2 py-2 rounded-[17px] w-[295px] h-[54px]">
                  <p className="font-normal text-[12px] text-black">
                    Bismillah best product
                  </p>
                  <p className="font-normal text-[10px] text-[#686A8A] mt-2 text-end">
                    08:35
                  </p>
                </div>
                <img
                  src="/public/images/chat-2.svg"
                  alt="Chat-Avatar"
                  className="w-[25px] h-[25px] items-baseline self-end"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center my-2">
              <CiFaceSmile size={24} className="text-[#8F9BB3]" />
              <input
                className="w-[700px] h-[36px] bg-[#FAFAFA] rounded-[12px] placeholder:text-[12px] placeholder:text-[#8F9BB3] text-[12px] text-[#8F9BB3] px-4 py-2"
                placeholder="Ketik pesanmu disini..."
              />
              <p className="font-normal text-[#01A400] text-[12px] hover:cursor-pointer">
                Kirim Pesan
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default KonsultasiChatPage;
