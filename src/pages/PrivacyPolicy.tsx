import MarkdownPage from '@/components/MarkdownPage';
import content from '@/pages/privacy-policy.md?raw'; // Aggiunto ?raw per importare come stringa

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

# Informativa sulla Privacy

## Titolare del trattamento
**ApexAI**  
Sede legale: Bergamo, Italia  
Email: info@apexai.it