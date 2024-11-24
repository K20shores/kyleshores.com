// components/Citation.tsx
import Cite from 'citation-js';

interface CitationProps {
  id: string;
  style?: string;
  bibliography: string;
}

export default function Citation({ id, style = 'apa', bibliography }: CitationProps) {
  try {
    // Parse the bibliography
    const cite = new Cite(bibliography);

    let citation = cite.format('bibliography', {
      entry: id,
      format: 'html',
      template: style,
    });

    // Wrap URLs in anchor tags
    citation = citation.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

    // Render the citation as HTML
    return <span dangerouslySetInnerHTML={{ __html: citation }} />;
  } catch (error) {
    console.error(`Error formatting citation for id ${id}:`, error);
    return <span>Error formatting citation</span>;
  }
}
