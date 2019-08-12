import React from "react";
import NameAndDate from "./NameAndDate/NameAndDate";
import Title from "./Title/Title";
import ThoughtWorksLogo from "./ThoughtWorksLogo/ThoughtWorksLogo";
import PreTableText from "./PreTableText/PreTableText";

function PreTableContent({ data }) {
  return (
    <React.Fragment>
      <ThoughtWorksLogo />
      <NameAndDate data={data} />
      <Title data={data} />
      <PreTableText data={data} />
    </React.Fragment>
  );
}

export default PreTableContent;
