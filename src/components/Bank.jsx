import bca from "/images/bca.svg";
import bni from "/images/bni.svg";
import bri from "/images/bri.svg";

const Bank = ({ imgLogo, title }) => {
  return (
    <div className="w-[120px] h-[110px] rounded-xl shadow-xl flex flex-col items-center border border-[#3D4950]">
      {imgLogo && <img src={imgLogo} alt="Bank" />}
      {title && (
        <span className="font-semibold text-base text-[#2F2F31]">{title}</span>
      )}
    </div>
  );
};

export default Bank;
