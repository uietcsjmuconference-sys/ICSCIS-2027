import React from "react";
import Nigeria from "../../assets/Countryflags/Nigeria.png";
import Oman from "../../assets/Countryflags/Oman.png";
import Uganda from "../../assets/Countryflags/Uganda.jpeg";
import Egypt from "../../assets/Countryflags/Egypt.png";
import SouthKorea from "../../assets/Countryflags/southkoria.jpeg";
import Russia from "../../assets/Countryflags/Russia.png";
import Indonesia from "../../assets/Countryflags/Indonesia.png";
import Jordan from "../../assets/Countryflags/Jordon.png"; 
import USA from "../../assets/Countryflags/USA.webp";
import Germany from "../../assets/Countryflags/Germany.png";
import UK from "../../assets/Countryflags/UK.png";
import Australia from "../../assets/Countryflags/Australia.png";
import Mexico from "../../assets/Countryflags/Mexico.jpeg";
import Ireland from "../../assets/Countryflags/Ireland.webp";
import NewZealand from "../../assets/Countryflags/newzealand.png";
import Romania from "../../assets/Countryflags/Romania.png";
import Turkey from "../../assets/Countryflags/Turkey.png";
import SaudiArabia from "../../assets/Countryflags/Saudi_Arabia.png";
import Canada from "../../assets/Countryflags/Canada.png";

// Sample data - replace flag URLs with your own paths
const countries = [
  { name: "United States", flag: USA,  },
  { name: "Turkey", flag: Turkey,  },
  { name: "Saudi Arabia", flag: SaudiArabia,  },
  { name: "Russia", flag: Russia,  },
  { name: "Nigeria", flag: Nigeria,  },
  { name: "Egypt", flag: Egypt,  },
  { name: "Oman", flag: Oman,  },
  { name: "Indonesia", flag: Indonesia,  },
  { name: "Canada", flag: Canada,  },
  { name: "Romania", flag: Romania,  },
  { name: "Jordan", flag: Jordan,  },
  { name: "Germany", flag: Germany,  },
  { name: "Mexico", flag: Mexico,  },
  { name: "New Zealand", flag: NewZealand,  },
  { name: "Uganda", flag: Uganda,  },
  { name: "South Korea", flag: SouthKorea,  },
  { name: "United Kingdom", flag: UK,  },
  { name: "Australia", flag: Australia,  },
  { name: "Ireland", flag: Ireland,  },
];


const CountryFlags = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Participation in ICSCIS  </h1>
      <div className="flex justify-center gap-4 mb-6">
        <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold">
          2026
        </button>
       
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {countries.map((country, index) => (
          <a
            key={index}
            href={country.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center group"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-16 h-16 object-cover rounded-full shadow-md group-hover:scale-110 transition-transform duration-200"
            />
            <span className="mt-2 text-sm font-medium text-green-900">{country.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CountryFlags;
