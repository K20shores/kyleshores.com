// components/Citation.tsx
import fs from 'fs';
import path from 'path';
import Cite from 'citation-js';

const bibPath = path.resolve(process.cwd(), 'app', 'blog', 'bibliography.bib');
const bibliography = fs.readFileSync(bibPath, 'utf-8');
console.log('Bibliography content:', bibliography);

// Parse the bibliography
const cite = new Cite(bibliography);
console.log('Parsed citations:', cite.data);

interface CitationProps {
  id: string;
  style?: string;
}

export default function Citation({ id, style = 'apa' }: CitationProps) {
  // Find the citation by ID
  const citation = cite.format('bibliography', {
    entry: id,
    format: 'html',
    template: style,
  });
  console.log(`Formatted citation for id ${id}:`, citation);

  // Render the citation as HTML
  return <span dangerouslySetInnerHTML={{ __html: citation }} />;
}
