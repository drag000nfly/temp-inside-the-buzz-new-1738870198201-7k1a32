import React from 'react';
import { Radio } from 'lucide-react';

const DisclaimerPage: React.FC = () => {
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h2>
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          The information provided on the Inside the Buzz website (insidethebuzz.com) and associated services is for general informational purposes only. Inside the Buzz Inc. ("we," "us," or "our") makes no guarantees regarding the accuracy, reliability, or completeness of any information presented on our website or through our services.
        </p>
        
        <p>
          While we strive to ensure that the content on our website is up-to-date and accurate, we cannot promise or warrant that all information will always be free from errors or omissions. Any reliance you place on the information provided is strictly at your own risk, and we are not liable for any losses or damages that may result from your use of the content.
        </p>

        <h3>Professional Advice Disclaimer</h3>
        <p>
          The materials and content available on Inside the Buzz are not intended to serve as professional advice in any field, including but not limited to legal, financial, medical, or technical areas. You should consult with qualified professionals in the relevant field for specific advice tailored to your situation. The content on our website does not replace or substitute professional guidance or advice.
        </p>

        <h3>External Links Disclaimer</h3>
        <p>
          Our website may contain links to third-party websites or resources that are not controlled or maintained by Inside the Buzz. We provide these links solely for your convenience and do not endorse the views, content, or services provided by third-party websites. We have no control over the availability, accuracy, or quality of the content on external websites. Consequently, we disclaim all responsibility for any issues or damages that may arise from your use of third-party links.
        </p>

        <h3>User-Generated Content Disclaimer</h3>
        <p>
          Inside the Buzz may feature user-generated content, such as comments, reviews, or other submissions. The views and opinions expressed in such content belong solely to the individuals who created them and do not necessarily reflect the views of Inside the Buzz. We are not responsible for the accuracy, reliability, or legality of user-generated content and disclaim all liability for any claims or damages arising from it.
        </p>

        <h3>No Warranties</h3>
        <p>
          The services provided by Inside the Buzz are offered "as is" and "as available" without any warranties of any kind, whether express or implied. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the website will be uninterrupted, secure, or error-free, or that any defects will be corrected.
        </p>

        <h3>Limitation of Liability</h3>
        <p>
          Under no circumstances shall Inside the Buzz Inc., its affiliates, employees, agents, or partners be held liable for any indirect, incidental, consequential, or punitive damages arising out of your use of the website, services, or reliance on the information provided. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.
        </p>

        <h3>Changes to the Disclaimer</h3>
        <p>
          We reserve the right to update or modify this Disclaimer at any time without prior notice. Any changes will take effect immediately upon posting on the website. By continuing to use the website or services after such changes, you agree to the revised Disclaimer.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions, concerns, or feedback about this Disclaimer, you can reach us at:<br />
          Inside the Buzz Inc.<br />
          123 Tech Avenue<br />
          Suite 456<br />
          San Francisco, CA 94105<br />
          United States<br />
          Email: support@insidethebuzz.com
        </p>
      </div>
    </main>
  );
};

export default DisclaimerPage;