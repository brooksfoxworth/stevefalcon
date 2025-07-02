import React from 'react';
import { FaAward, FaTrophy, FaStar } from 'react-icons/fa';

const AboutTheShow = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About The Show
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Show Image */}
          <div className="flex items-center justify-center">
            <img
              src="assets/images/steve-falcon-bio-box-1.jpg"
              alt="Steve Falcon Bio"
              className="rounded-lg shadow-lg max-h-80 object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Welcome to our podcast! We dive deep into captivating stories, explore intriguing topics, and chat with fascinating guests. Join us as we uncover new perspectives and share insightful conversations.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is to entertain, inform, and inspire our listeners. Whether you're commuting, working out, or relaxing at home, our podcast is the perfect companion for the curious mind.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Step into a world where reality bends, laughter is guaranteed, and you become the star! Steve Falcon’s Comedy Hypnosis Hour is a one-of-a-kind experience that will leave you amazed and in stitches.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Comedy. Hypnosis. Unforgettable.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Awards & Recognition</h3>
            <ul className="space-y-4">
              <li className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                <FaTrophy className="text-3xl text-yellow-500 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Listeners' Choice Award</h4>
                  <p className="text-gray-600">Recognized for outstanding content by our community.</p>
                </div>
              </li>
              <li className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                <FaAward className="text-3xl text-blue-500 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Best Audio Production</h4>
                  <p className="text-gray-600">Awarded for top-tier sound quality and editing.</p>
                </div>
              </li>
               <li className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                <FaStar className="text-3xl text-green-500 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Top 10 Tech Podcast</h4>
                  <p className="text-gray-600">Featured on multiple platforms as a leading show.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheShow;
