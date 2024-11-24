"use client";
import React, { createContext, useContext, useState, ReactNode } from "react"

// thanks to this blog post: https://tn1ck.com/blog/footnotes-in-react

interface FootnoteContextType {
  addCitation: (citation: string) => Promise<string>
  citations: string[]
}

const FootnoteContext = createContext<FootnoteContextType | undefined>(
  undefined,
)

const FootnoteProvider = ({ children }: { children: ReactNode }) => {
  const [citations, setCitations] = useState<string[]>([])

  const addCitation = (citation: string): Promise<string> => {
    return new Promise<string>((resolve) => {
      setCitations((prevCitations) => {
        resolve(citation)
        return [...prevCitations, citation]
      })
    })
  }

  return (
    <FootnoteContext.Provider value={{ addCitation, citations }}>
      {children}
    </FootnoteContext.Provider>
  )
}

const useFootnoteContext = () => {
  const context = useContext(FootnoteContext)
  if (!context) {
    throw new Error("useFootnoteContext must be used within a FootnoteProvider")
  }
  return context
}

export { FootnoteProvider, useFootnoteContext }