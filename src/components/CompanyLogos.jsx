import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
        <h5 className="tagline mb-2 text-center text-n-1/50">Helping businesses boost their online presence for profits.</h5>
        <h5 className="tagline mb-6 text-center text-n-1/50">We create custom strategies to increase visibility, attract more leads, and drive more sales.</h5>
        <ul className="flex">
            {companyLogos.map((logo, index) => (
                <li className="flex items-center justify-center flex-1 h-[8.5rem]" key={index}>
                    <img src={logo} width={134} height={128} alt={logo}/>
                </li>
            ))}
        </ul>
    </div>
  )
};

export default CompanyLogos;
