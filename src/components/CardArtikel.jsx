import {arrowRight} from "../assets/icons";

const CardArtikel = ({ img, label, desc, link }) => {
  return (
    <div className="w-80 rounded-3xl shadow-xl">
      {img && <img src={img} alt="image" className="w-80 h-60 rounded-t-3xl" />}
      <div className="p-5">
        {label && (
          <h1 className="font-Poppins font-bold text-xl pt-6">{label}</h1>
        )}
        {desc && (
          <p className="info-text text-sm font-Poppins w-64 pt-5">{desc}</p>
        )}
        {link && (
          <div className="flex flex-row text-primary-text gap-3 text-center pt-12">
            {link}{" "}
            <img
              src={arrowRight}
              alt="arrow"
              className="text-primary-text w-5"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardArtikel;
