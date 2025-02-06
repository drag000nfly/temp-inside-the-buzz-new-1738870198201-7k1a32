import React from 'react';
import { Radio } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Radio className="w-10 h-10 text-indigo-600" />
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-indigo-600">Inside</span>
            <span className="text-gray-900">the</span>
            <span className="text-indigo-600">Buzz</span>
          </h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h2>
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          These Terms of Service ("Terms") govern the use of the Inside the Buzz website, domain insidethebuzz.com, and related services provided by Inside the Buzz Inc. ("Inside the Buzz," "we," "us," or "our"). By accessing or using our services, you agree to these Terms, as well as any supplemental terms or guidelines associated with the specific services you use (collectively, the "Terms").
        </p>
        
        <p>
          We encourage you to review these Terms thoroughly, as they form a binding agreement between you and Inside the Buzz. If you do not agree with any part of these Terms, you may not access or use our services.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By using our services, you confirm that you meet the legal requirements to enter into this agreement. If you are using our services on behalf of a business or another entity, you represent that you have the authority to bind that entity to these Terms. In such cases, "you" refers to that entity. If you lack the authority or disagree with the Terms, you must not use the services.
        </p>

        <h3>2. User Responsibilities</h3>
        <p>
          You agree to comply with all applicable laws and regulations while using the services. You must not:
        </p>
        <ul>
          <li>Attempt to access or interfere with our systems, servers, or networks without authorization.</li>
          <li>Post or share content that is unlawful, harmful, defamatory, obscene, or otherwise objectionable.</li>
          <li>Use the services to infringe on intellectual property rights, spread viruses, or engage in unauthorized commercial activities.</li>
          <li>Exploit the services for purposes contrary to these Terms or applicable laws.</li>
        </ul>

        <h3>3. Minimum Age Requirement</h3>
        <p>
          To use our services, you must meet the minimum age requirement in your region. For most jurisdictions, this is 13 years old. For services with mature content, you must be at least the age of majority in your country or have explicit permission from a parent or guardian.
        </p>

        <h3>4. Account Responsibilities</h3>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account. Notify us immediately at support@insidethebuzz.com if you suspect unauthorized access to your account.
        </p>

        <h3>5. Ownership and Intellectual Property</h3>
        <p>
          All content and intellectual property on our services remain the property of Inside the Buzz or our licensors. You may not reproduce, modify, distribute, or create derivative works from our content without our explicit written permission.
        </p>

        <h3>6. Licensing</h3>
        <p>
          We grant you a limited, non-exclusive, non-transferable license to use our services for personal, non-commercial purposes. This license is conditional on your compliance with these Terms.
        </p>

        <h3>7. Modifications to the Services</h3>
        <p>
          Inside the Buzz reserves the right to modify, suspend, or discontinue any part of the services at any time, with or without prior notice.
        </p>

        <h3>8. Payment and Fees</h3>
        <p>
          Certain services may require payment. If fees are introduced, you will be notified in advance, and continued use of the paid services will signify your acceptance of the payment terms.
        </p>

        <h3>9. Disclaimers and Limitation of Liability</h3>
        <p>
          Our services are provided "as-is" and "as available." Inside the Buzz makes no guarantees regarding the accuracy, reliability, or availability of the services. To the fullest extent permitted by law, we disclaim all liability for damages, including lost profits or data, resulting from your use of our services.
        </p>

        <h3>10. Indemnification</h3>
        <p>
          You agree to indemnify and hold Inside the Buzz and its affiliates harmless from any claims or damages arising from your use of the services, violation of these Terms, or infringement of third-party rights.
        </p>

        <h3>11. Termination</h3>
        <p>
          We may suspend or terminate your access to the services at our discretion, including for violations of these Terms. Upon termination, your rights to use the services will cease immediately.
        </p>

        <h3>12. Governing Law and Dispute Resolution</h3>
        <p>
          These Terms are governed by the laws of the United States. Any disputes will be resolved through binding arbitration or small claims court in accordance with applicable law.
        </p>

        <h3>13. Changes to Terms</h3>
        <p>
          We reserve the right to update these Terms at any time. If changes are made, we will notify you by posting an updated version on our website. Continued use of the services signifies your acceptance of the modified Terms.
        </p>

        <h3>14. Contact Us</h3>
        <p>
          For questions or concerns about these Terms, please contact us at:<br />
          Inside the Buzz Inc.<br />
          Email: support@insidethebuzz.com
        </p>
      </div>
    </main>
  );
};

export default TermsPage;