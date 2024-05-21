const Button2 = ({ label }) => {
  return (
    <button className="border w-52 h-14 border-primary hover:bg-primary-text rounded-55px flex flex-col justify-center items-center mt-24 font-Poppins text-primary-text font-bold hover:text-white">
      {label}
    </button>
  );
};

export default Button2;
