import MarkdownPage from '@/components/MarkdownPage';
import content from '@/pages/cookie-policy.md?raw'; // Aggiunto ?raw per importare come stringa

const CookiePolicy = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <MarkdownPage content={content} />
      </div>
    </section>
  );
};

export default CookiePolicy;