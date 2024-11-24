import React from "react";
import Cite from "citation-js";
import { FaArrowUp } from "react-icons/fa";

interface CitationProps {
  id: string;
  bibliography: string;
}

export default function Citation({ id, bibliography }: CitationProps) {
  try {
    // Parse the bibliography
    const cite = new Cite(bibliography);
    const citationData = cite.get().find((entry: any) => entry.id === id);
    console.log(citationData);

    const authors = citationData.author.map((author: any) => `${author.family}, ${author.given}`).join(", ");
    const year = citationData.issued["date-parts"][0][0];
    const title = citationData.title;
    const publisher = citationData.publisher;
    const url = citationData.URL;

    const formatted = `${authors}. (${year}). ${title}. ${publisher}. ${url}`;
    console.log(formatted);

    return (
      <span>
        {authors}. ({year}). <i>{title}</i>. {publisher}. {url ? <a href={url} target="_blank" rel="noopener noreferrer">{url}</a> : null}  
        <a style={{display: "inline-flex", alignItems: "baseline"}} href={`#ref-${id}`}>&nbsp;<FaArrowUp /></a>
      </span>
    );
  } catch (error) {
    console.error(`Error formatting citation for id ${id}:`, error);
    return <span>Error formatting citation</span>;
  }
}
