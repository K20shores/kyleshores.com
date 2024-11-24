// components/Citation.tsx
import Cite from 'citation-js';

interface CitationProps {
  id: string;
  style?: string;
  bibliography: string;
}

export default function Citation({ id, style = 'apa', bibliography }: CitationProps) {
  console.log(`Formatting citation for id ${id} with style ${style}`);
  try {
    // Parse the bibliography
    const cite = new Cite(bibliography);

    // Find the citation by ID
    const citationData = cite.data.find(entry => entry.id === id);

    const citation = cite.format('bibliography', {
      entry: id,
      format: 'html',
      template: style,
    });
    console.log(`Formatted citation for id ${id}:`, citation);

    // Render the citation as HTML
    return <span dangerouslySetInnerHTML={{ __html: citation }} />;
  } catch (error) {
    console.error(`Error formatting citation for id ${id}:`, error);
    return <span>Error formatting citation</span>;
  }
}
