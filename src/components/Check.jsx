const Check = ({ iconCheck, desc }) => {
  return (
    <div className="flex font-Poppins text-sm gap-3 items-center leading-6 pt-4">
      {iconCheck && (
        <img
          src={iconCheck}
          alt="check"
          className="bg-primary-text w-6 h-6 rounded-full p-1"
        />
      )}
      {desc && <span>{desc}</span>}
    </div>
  );
};

export default Check;
