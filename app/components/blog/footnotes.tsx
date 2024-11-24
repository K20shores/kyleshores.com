"use client";
import React from "react";
import { useFootnoteContext } from "app/context/footnoteContext";
import Citation from "app/components/blog/citation";
import { FaArrowUp } from "react-icons/fa";

export const Footnotes = ({ bibliography }) => {
    const { citations } = useFootnoteContext()
  
    if (citations.length === 0) {
      return null
    }
  
    return (
    <section>
        <h2>References</h2>
        <ol>
          {citations.map((citation, index) => (
            <li key={index} id={`note-${citation}`}>
              <Citation id={citation} bibliography={bibliography} />
            </li>
          ))}
        </ol>
      </section>
    )
  }