import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Image Column */}
          <div className="lg:col-span-4">
            <div className="text-center">
              <img
                src="/profile.png"
                alt="Amrit Raj"
                className="rounded-full border-8 border-white w-64 h-64 mx-auto object-cover"
              />
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold mb-2">Amrit Raj</h2>
              <p className="text-xl font-semibold text-gray-700 mb-4">
                IIIT Ranchi '25, B.Tech. Student, Electronics & Communication Engineering
              </p>
              <p className="text-lg text-gray-600 mb-4">
                I'm an undergraduate of IIIT Ranchi's Class of 2025 and my passion is Computer Science.
                My interests include software design and development, artificial intelligence, machine learning,
                computer vision, and natural language processing.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                I'm currently an undergraduate student working towards my Bachelor of Technology (B.Tech.)
                degree in Electronics & Communication Engineering.
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">
                  Indian Institute of Information Technology, Ranchi (IIIT Ranchi)
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-lg text-gray-600">
                    Bachelor of Technology in Electronics & Communication Engineering
                  </li>
                  <li className="text-lg text-gray-600">
                    Certificate of Advanced Undergraduate Research in Jamming and Its Countermeasures
                    at CSIR - National Aerospace Laboratories
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;