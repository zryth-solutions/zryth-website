import { Metadata } from "next";

import TermsContent from "@/components/TermsAndConditions/TermsContent";
import { termsAndConditionsData } from "@/data/termsAndConditionsData";

export const metadata: Metadata = {
  title: "Terms and Conditions | Zryth",
  description: "Read the legal terms and conditions for using Zryth services.",
};

export default function TermsAndConditionsPage() {
  const { content } = termsAndConditionsData;

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <TermsContent content={content} />
        </div>
      </div>
    </main>
  );
}
