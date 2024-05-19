const Button = ({ label }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-9 py-4 bg-primary-text rounded-xl font-Manrope text-base font-bold text-white">
      {label}
    </button>
  );
};

export default Button;
