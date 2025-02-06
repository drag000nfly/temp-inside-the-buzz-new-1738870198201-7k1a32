import React from 'react';
import { Radio } from 'lucide-react';

const TableOfContents: React.FC = () => (
  <div className="bg-gray-50 p-6 rounded-xl mb-12">
    <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
    <ul className="space-y-2">
      {[
        'Automatic Collection of Information',
        'Collection of Personal Information',
        'Use and Processing of Collected Information',
        'Payment Processing',
        'Managing Information',
        'Disclosure of Information',
        'Retention of Information',
        'Transfer of Information',
        'Region-Specific Notices',
        'How to Exercise Your Rights',
        'Cookies',
        'Data Analytics',
        'Privacy of Children',
        'Do Not Track Signals',
        'Advertisements',
        'Social Media Features',
        'Email Marketing',
        'Affiliate Links',
        'Links to Other Resources',
        'Information Security',
        'Data Breach',
        'Changes and Amendments',
        'Acceptance of This Policy',
        'Contacting Us'
      ].map((item, index) => (
        <li key={index}>
          <a 
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-indigo-600 hover:text-indigo-800"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const PrivacyPage: React.FC = () => {
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p>
          We take your privacy seriously and are dedicated to protecting it by adhering to this privacy policy ("Policy"). This Policy explains the types of information we may collect from you or that you may provide ("Personal Information") on the Inside the Buzz website ("Website" or "Service") and any associated products and services (collectively, "Services"). It also outlines our practices for gathering, using, maintaining, safeguarding, and disclosing your Personal Information. Furthermore, it details the options available to you regarding how we use your Personal Information and how you can access and update it.
        </p>
        <p>
          This Policy is a legally binding agreement between you ("User," "you," or "your") and Inside the Buzz Inc. ("Inside the Buzz," "we," "us," or "our"). If you are entering into this Policy on behalf of a business or another legal entity, you represent that you have the authority to bind that entity to this Policy. In such cases, the terms "User," "you," or "your" will refer to the entity. If you do not have this authority or disagree with any part of this Policy, you must not accept it and are prohibited from using the Website and Services. By using the Website and Services, you acknowledge that you have read, understood, and agreed to this Policy. This Policy does not apply to entities that we do not own or control or to individuals we do not employ or manage.
        </p>
      </div>

      <TableOfContents />

      {/* Policy Sections */}
      <div className="prose prose-lg max-w-none space-y-12">
        <section id="automatic-collection-of-information">
          <h2>Automatic Collection of Information</h2>
          <p>
            When you visit the Website, our servers may automatically collect information sent by your browser. This may include details such as your device's IP address, browser type and version, operating system type and version, language preferences, the webpage you visited before accessing our Website, the pages you view on the Website, the time spent on those pages, search queries, access times, dates, and other similar statistics.
          </p>
          <p>
            We use this automatically collected data only to identify potential misuse of the Website and to compile statistical information about how the Website and Services are utilized. This information is not aggregated in a way that could identify any individual User.
          </p>
        </section>

        <section id="collection-of-personal-information">
          <h2>Collection of Personal Information</h2>
          <p>
            You can browse and use the Website and Services without disclosing any Personal Information that could identify you as an individual. However, to access certain features of the Website, you may need to provide specific Personal Information, such as your name or email address.
          </p>
          <p>
            We collect and store the information you knowingly share with us when you create an account, post content, make purchases, or complete forms on the Website. This may include:
          </p>
          <ul>
            <li>Account details (e.g., username, unique user ID, password)</li>
            <li>Contact information (e.g., email address, phone number)</li>
            <li>Basic personal information (e.g., name, country of residence)</li>
            <li>Payment details (e.g., credit card information)</li>
            <li>Other materials you submit voluntarily (e.g., articles, images, feedback)</li>
          </ul>
          <p>
            While much of this information is collected directly from you, we may also obtain Personal Information from other sources, such as social media platforms or business partners. This may include demographic details, device information, geographic data, and online activity.
          </p>
          <p>
            Choosing not to provide certain information may limit your ability to use some features of the Website. If you are unsure about which details are required, feel free to contact us.
          </p>
        </section>

        <section id="use-and-processing-of-collected-information">
          <h2>Use and Processing of Collected Information</h2>
          <p>
            Depending on the context, we may act as either a data controller or a data processor when handling your Personal Information. As a data controller, we determine the purpose and means of processing your Personal Information. As a data processor, we handle the information you submit according to your instructions.
          </p>
          <p>
            We collect and process your Personal Information to provide access to the Website and Services, meet legal obligations, or achieve legitimate business purposes. If you do not provide the requested information, we may not be able to deliver the products or services you request.
          </p>
          <p>Your information may be used for the following purposes:</p>
          <ul>
            <li>Managing user accounts</li>
            <li>Fulfilling and processing orders</li>
            <li>Delivering products and services</li>
            <li>Enhancing and improving offerings</li>
            <li>Sending administrative and promotional communications</li>
            <li>Handling inquiries and feedback</li>
            <li>Publishing customer reviews and testimonials</li>
            <li>Delivering targeted advertisements</li>
            <li>Addressing legal requirements and preventing harm</li>
            <li>Operating and maintaining the Website and Services</li>
          </ul>
          <p>
            The legal basis for processing your Personal Information may include your consent, contractual obligations, compliance with legal requirements, or legitimate interests. Please contact us for more details about the applicable legal basis in your case.
          </p>
        </section>

        <section id="payment-processing">
          <h2>Payment Processing</h2>
          <p>
            If you make a payment through the Services, you may be required to provide payment details, such as credit card information. We use third-party payment processors ("Payment Processors") to securely handle your payment information.
          </p>
          <p>
            These Payment Processors adhere to strict security standards set by the PCI Security Standards Council, ensuring that sensitive data is encrypted and protected. Payment data shared with these processors is limited to what is necessary to process payments, issue refunds, and address payment-related queries.
          </p>
          <p>
            Payment Processors may collect additional details directly from you, such as billing address and contact information, as required for completing transactions. We recommend reviewing the privacy policies of these processors for more information about their data handling practices.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;