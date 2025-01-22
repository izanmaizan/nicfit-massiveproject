import {googlePlay} from "../assets/icons";

const PlayStore = ({
  sublabel,
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex flex-col items-center px-2 py-2 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-white text-black border-black"
      } rounded-lg ${fullWidth && "w-full"}`}>
      <div className="flex items-center">
        {iconURL && (
          <div className="mr-2">
            <img src={iconURL} alt="icon" className="w-9 h-10" />
          </div>
        )}
        <div className="flex flex-col items-start">
          {sublabel && (
            <span className="text-xs text-black font-Poppins">{sublabel}</span>
          )}
          {label && <span className="text-base">{label}</span>}
          <img src={googlePlay} alt="icon" className="w-32 h-6" />
        </div>
      </div>
    </button>
  );
};

export default PlayStore;
