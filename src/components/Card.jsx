const Card = ({ iconURL, label, desc }) => {
  return (
    <div className="flex flex-col justify-center w-w-icon-card h-h-icon-card p-6 bg-white border rounded-2xl shadow-xl">
      {iconURL && (
        <div className="mr-2">
          <img src={iconURL} alt="icon" className="w-20 h-20 mb-6" />
        </div>
      )}
      {label && (
        <span className="text-2xl font-bold text-black font-Poppins">
          {label}
        </span>
      )}
      {desc && <p className="text-sm info-text font-Poppins">{desc}</p>}
    </div>
  );
};

export default Card;
