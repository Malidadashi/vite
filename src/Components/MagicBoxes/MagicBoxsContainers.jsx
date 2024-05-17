import React from "react";
import stackblitz from "../../assets/stackblitz.svg";
import MagicBoxsitems from "./MagicBoxsitems";
import './MagicBoxsContainers.css'


const MagicBoxsContainers = () => {
  const x = [
    {
      picture: stackblitz,
      subject: "Instant Server Start",
      describe: "On demand file serving over native ESM, no bundling required!",
    },
    {
      picture: stackblitz,
      subject: "Lightning Fast HMR",
      describe: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
    },
    {
      picture: stackblitz,
      subject: "Rich Features",
      describe: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
    },
    {
      picture: stackblitz,
      subject: "Optimized Build",
      describe: "Pre-configured Rollup build with multi-page and library mode support.",
    },
    {
      picture: stackblitz,
      subject: "Universal Plugins",
      describe: "Rollup-superset plugin interface shared between dev and build.",
    },
    {
      picture: stackblitz,
      subject: "Fully Typed APIs",
      describe: "Flexible programmatic APIs with full TypeScript typing.",
    },
  ];

  return (
    <section className="boxsection">
      {x.map((boxes) => {
        return (
          <MagicBoxsitems
          image={boxes.picture}
          title={boxes.subject}
          text={boxes.describe}
          />
        );
      })}
      <magic/>
    </section>
  );
};


export default MagicBoxsContainers;
