import React, { useState, useEffect, useRef } from "react";
import btnimg from "../assets/img/btnshow.png";
import shopimg from "../assets/img/shopimg.png";


const Showcases = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Локация для тура");
  const [selectedParticipants, setSelectedParticipants] = useState("Участники");

  const locationRef = useRef(null);
  const participantsRef = useRef(null);

  const locations = ["Париж", "Токио", "Лондон", "Дубай", "Нью-Йорк"];
  const participants = ["2 человека", "3 человека", "4 человека", "5 человек", "6 человек"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(e.target)
      ) {
        setIsLocationOpen(false);
      }
      if (
        participantsRef.current &&
        !participantsRef.current.contains(e.target)
      ) {
        setIsParticipantsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-[1120px] m-auto pt-60 pl-5 pr-5 max-[635px]:pt-51.5  max-[635px]:pb-6">
      <h1 className="text-6xl font-[600] text-white max-w-[930px] pb-7 max-[635px]:text-4xl  max-[450px]:text-3xl">
        Насладись прогулкой в горах командой единомышленников
      </h1>

      <div className="cards backdrop-blur-[2px] bg-[#ffffff4d] p-8 rounded-2xl text-white flex items-start justify-between flex-wrap gap-4  max-[500px]:hidden">
        <div className="card-item relative" ref={locationRef}>
          <button
            onClick={() => setIsLocationOpen(!isLocationOpen)}
            className="w-[240px] pt-2.5 pb-2.5 pl-4 pr-4 flex items-center justify-between gap-10 border-2 rounded-[7px] cursor-pointer bg-transparent"
          >
            {selectedLocation}
            <img
              src={btnimg}
              alt=""
              className={`transition-transform ${isLocationOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          <p className="pt-2 font-[400] text-[14px] pb-2 pl-2">выберите из списка</p>

          {isLocationOpen && (
            <div className="absolute left-0 mt-2 w-[240px] bg-white text-gray-800 rounded-xl shadow-lg z-10">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setSelectedLocation(loc);
                    setIsLocationOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="card-item">
          <button className="w-[240px] pt-2.5 pb-2.5 pl-4 pr-4 flex items-center justify-between border-2 rounded-[7px] cursor-pointer">
            Дата похода <img src={shopimg} alt="" />
          </button>
          <p className="pt-2 font-[400] text-[14px] pb-2 pl-2">укажите диапазон</p>
        </div>

        <div className="card-item relative" ref={participantsRef}>
          <button
            onClick={() => setIsParticipantsOpen(!isParticipantsOpen)}
            className="w-[240px] pt-2.5 pb-2.5 pl-4 pr-4 flex items-center justify-between border-2 rounded-[7px] cursor-pointer bg-transparent"
          >
            {selectedParticipants}
            <img
              src={btnimg}
              alt=""
              className={`transition-transform ${isParticipantsOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          <p className="pt-2 font-[400] text-[14px] pb-2 pl-2">минимум 4 человека</p>

          {isParticipantsOpen && (
            <div className="absolute left-0 mt-2 w-[240px] bg-white text-gray-800 rounded-xl shadow-lg z-10">
              {participants.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setSelectedParticipants(p);
                    setIsParticipantsOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="card-item">
          <button className="w-[240px] pt-2.5 pb-2.5 pl-4 pr-4 text-[#1A3E3E] font-bold rounded-[7px] cursor-pointer bg-amber-50">
            Найти программу
          </button>
        </div>
      </div>
      <div className="card-item min-[500px]:hidden">
          <button className="w-[240px] pt-3 pb-3 pl-4 pr-4 text-[#1A3E3E] font-bold rounded-[7px] cursor-pointer bg-amber-50">
            Найти программу
          </button>
        </div>
    </div>
  );
};

export default Showcases;
