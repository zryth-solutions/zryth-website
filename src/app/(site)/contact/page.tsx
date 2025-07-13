import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { generateMetadata, pageSEOConfigs } from "@/utils/metadata";

export const metadata = generateMetadata(pageSEOConfigs.contact);

const ContactPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Contact Page" />
      <Contact />
    </main>
  );
};

export default ContactPage;
