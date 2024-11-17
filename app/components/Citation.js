import React from "react";

const citations = {
  hairer1993: {
    author: "E. Hairer, S.P. Nørsett, G. Wanner",
    title: "Solving Ordinary Differential Equations I: Nonstiff Problems",
    year: 1993,
  },
  hairer1996: {
    author: "E. Hairer, G. Wanner",
    title:
      "Solving Ordinary Differential Equations II: Stiff and Differential-Algebraic Problems",
    year: 1996,
  },
};

const Citation = ({ key }) => {
  const citation = citations[key];
  if (!citation) return null;

  return (
    <div>
      {citation.author}, <em>{citation.title}</em>, {citation.year}
    </div>
  );
};

export default Citation;
