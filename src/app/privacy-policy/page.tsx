import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicyContent from "@/components/PrivacyPolicy/PolicyContent";
import { privacyPolicyData } from "@/data/privacyPolicyData";

export const metadata: Metadata = {
  title: "Privacy Policy | Zryth",
  description: "Read our privacy policy to understand how we protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const { content } = privacyPolicyData;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <PolicyContent content={content} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
