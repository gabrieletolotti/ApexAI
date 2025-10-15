import MarkdownPage from '@/components/MarkdownPage';
import content from '@/pages/privacy-policy.md?raw';

const PrivacyPolicy = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <MarkdownPage content={content} />
      </div>
    </section>
  );
};

export default PrivacyPolicy;