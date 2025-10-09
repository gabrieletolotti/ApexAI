import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownPageProps {
  content: string;
}

const MarkdownPage = ({ content }: MarkdownPageProps) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPage;