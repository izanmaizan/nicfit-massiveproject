const PlatformsList = ({ iconPlatforms, label }) => {
  return (
    <div className="flex flex-row gap-1 border border-gray-400 hover:bg-gray-200 rounded-full py-3 px-4">
      {iconPlatforms && (
        <img src={iconPlatforms} alt="icon Platforms" className="" />
      )}
      {label && <p className="font-Poppins text-sm">{label}</p>}
    </div>
  );
};

export default PlatformsList;
