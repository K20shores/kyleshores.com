"use client";
import React from "react";
import { useFootnoteContext } from "../context/footnoteContext";
import Citation from './citation'

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
              <a href={`#ref-${citation}`}> ↩</a>
            </li>
          ))}
        </ol>
      </section>
    )
  }