import React from "react";
import SpeciaItems from "./SpecialItems";
import stackblitz from "../../../assets/stackblitz.svg";
import nuxtlabs from "../../../assets/nuxtlabs.svg";
import astro from "../../../assets/astro.svg";

const SpecialContainer = () => {
  const special = [
    {
      picture: stackblitz,
    },
    {
      picture: nuxtlabs,
    },
    {
      picture: astro,
    },
  ];

  return (
    <section>
      {special.map((item) => {
        return ( <SpeciaItems 
        picture={item.image} />
    )})}
    </section>
  );
};

export default SpecialContainer;
