import React from 'react';
import { Radio } from 'lucide-react';

const AboutPage: React.FC = () => {
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Guide to Informed Decisions</h2>
      </div>

      {/* Mission Statement */}
      <div className="prose prose-lg max-w-none mb-16">
        <p>
          At Inside the Buzz, we're on a mission to empower you with the knowledge you need to navigate the complex world of consumer technology. We understand that in today's fast-paced digital marketplace, making the right purchasing decisions can be overwhelming. That's why we're here to demystify the technical jargon, provide clear comparisons, and offer practical insights that enhance your buying experience.
        </p>
        <p>
          Our team of experts is dedicated to delivering trustworthy, in-depth reviews and expert advice across a wide range of products and services. We're not just here to tell you what to buy; we're here to explain why, and help you get the most out of your purchases. Whether you're a tech novice or a seasoned enthusiast, we've got you covered with content that's both informative and engaging.
        </p>
      </div>

      {/* Expert Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Meet Our Expert Team</h2>
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Robert "Robby" Thorgood</h3>
            <p className="text-gray-600">
              Our resident tech guru with 15 years of experience as a technology journalist. Robby's reviews blend enthusiasm with analytical precision, breaking down complex features into easily digestible information. His knack for pop culture references makes even the most technical concepts relatable and fun to read.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Lisa Lockwood</h3>
            <p className="text-gray-600">
              Brings her professional photography and videography expertise to our camera and editing software reviews. Her vivid, descriptive writing style helps you visualize products and their real-world applications. Lisa often shares personal anecdotes from her career, giving you an insider's perspective on the gear she reviews.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Orion Dimas</h3>
            <p className="text-gray-600">
              Our smart home and IoT specialist. With a background in IT consulting, Orion excels at demystifying complex tech concepts. His patient, explanatory tone and use of everyday analogies make even the most intricate smart home setups seem approachable and manageable.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Sara D. Groves</h3>
            <p className="text-gray-600">
              Covers wellness tech and fitness gadgets with an energetic, conversational style. As a lifestyle blogger and social media influencer, Sara excels at relating products to real-life scenarios. Her reviews often include practical tips for incorporating tech into your daily routines, helping you make the most of your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Research Process</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            At Inside the Buzz, we pride ourselves on our commitment to impartial advice. Our in-house team of experts brings a combined experience of over 50 years in various tech industries, ensuring that our reviews and recommendations are backed by real-world knowledge and expertise.
          </p>
          <p>
            We subject each product to a rigorous evaluation process, assessing it on numerous key features and aspects to provide accurate, unbiased reviews. This process includes hands-on testing, where our team members use the products in real-world scenarios, evaluating performance, usability, and value for money.
          </p>
          <p>
            To ensure our research remains credible and up-to-date, we continuously monitor the market for updates and new features, adjusting our reviews accordingly. We're not cheerleaders for any company – our goal is always to be transparent, sharing both the positives and negatives of every product we review.
          </p>
        </div>
      </section>

      {/* Funding */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">How We're Funded</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Inside the Buzz is reader-supported. When you make a purchase through links on our site, we may earn an affiliate commission. For example, if you read our review of a smart home device and then purchase it after following a link on our page, the manufacturer may pay us a small commission.
          </p>
          <p>
            However, we remain completely unbiased in our reviews and are committed to providing only the best and most relevant advice to our readers. We never promote products just for the sake of an affiliate commission. In fact, our success is directly tied to your satisfaction – most companies pay us a commission only after free trial and money-back periods have expired, meaning we only make money when you're happy with your purchase.
          </p>
          <p>
            For more information on how we make money, please read our affiliate disclosure.
          </p>
        </div>
      </section>

      {/* Closing */}
      <div className="prose prose-lg max-w-none">
        <p>
          At Inside the Buzz, we're more than just reviewers – we're your partners in navigating the exciting world of consumer technology. Join us as we explore, explain, and empower, helping you make informed decisions that enhance your digital life.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;