import {
  android,
  apple,
  check,
  chrome,
  linux,
  nicfit,
  windows,
} from "../assets/icons";
import { Button, PlatformsList } from "../components";

const Footer = () => {
  return (
    <footer className="max-container flex flex-col">
      <div className=" flex flex-row justify-around pb-7">
        <div className="flex flex-col">
          <img src={nicfit} alt="icon nicfit" className="w-20 h-20 pb-2" />
          <h3 className="font-Poppins text-2xl font-semibold">NicFit</h3>
          <p className="info-text font-Poppins text-sm w-w-paragraph">
            NicFit, langkah pertama menuju bebas rokok dengan panduan, dukungan,
            dan komunitas yang kuat.
          </p>
          <div className="flex flex-row">
            <div className="pr-4 gap-2  font-Poppins">
              <span className="font-bold text-sm">Email</span>
              <p className="text-base">hello@maxwell.com</p>
            </div>
            <div className="pl-4 gap-2">
              <span className="font-bold text-sm">Phone Number</span>
              <p className="text-base">+1 (201) 895-3801 </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-6">
          <div className="font-bold font-Poppins text-2xl">
            <h1>Langkah Pertama ke</h1>
            <h1 className="text-primary-text">Bebas Rokok</h1>
          </div>
          <Button label="Download Mobile Apps" />
        </div>
      </div>

      <div className="h-1 w-full bg-gray-400"></div>
      <div className="flex justify-around pt-10">
        <div className="flex justify-center items-center font-Poppins gap-2">
          <img
            src={check}
            alt="icon check"
            className="text-black bg-black w-5 h-5 rounded-full p-1"
          />
          <p>Available on all platforms</p>
        </div>
        <div className="flex flex-row gap-3">
          <PlatformsList iconPlatforms={windows} label="Windows" />
          <PlatformsList iconPlatforms={apple} label="macOS" />
          <PlatformsList iconPlatforms={linux} label="Linux" />
          <PlatformsList iconPlatforms={chrome} label="Chrome" />
          <PlatformsList iconPlatforms={apple} label="iOS" />
          <PlatformsList iconPlatforms={android} label="Android" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
