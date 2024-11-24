"use client";
import React, { useRef, useEffect, useState } from "react"
import { useFootnoteContext } from "../context/footnoteContext"

interface FootnoteProps {
  id: string
}

export const FootnoteReference = ({ id }: FootnoteProps) => {
  const { addCitation } = useFootnoteContext()
  const [citationId, setCitationId] = useState<string | undefined>(undefined)
  const hasAddedCitation = useRef(false)

  useEffect(() => {
    if (!hasAddedCitation.current) {
      hasAddedCitation.current = true
      addCitation(id).then((citation) =>
        setCitationId(citation),
      )
    }
  }, [id, addCitation])

  if (citationId === undefined) return null

  return (
    <sup id={`ref-${id}`}>
      <a href={`#note-${id}`}>[{id}]</a>
    </sup>
  )
}