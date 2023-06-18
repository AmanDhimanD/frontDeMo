import React, { useEffect } from 'react';
import { FeatureData } from '../Constants/FeaturesData'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })


  return (
    // <section className="container mx-auto px-4 py-8 sm:py-16">
    //   <h2 className="text-4xl text-center font-bold text-white mb-8">Features</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //     <div className="bg-gray-800 p-6 rounded-lg">
    //       <h3 className="text-2xl font-bold mb-4">Data Generation</h3>
    //       <p className="text-white">
    //         FrontMock offers a wide range of data generation functions to create mock data for different data types, such as strings, numbers, booleans, dates, and more. It allows you to generate random or predefined values, control the length or format of the data, and even generate complex nested structures.
    //       </p>
    //     </div>
    //     <div className="bg-gray-800 p-6 rounded-lg">
    //       <h3 className="text-2xl font-bold mb-4">Customization</h3>
    //       <p className="text-white">
    //         With FrontMock, you can easily customize the generated mock data to match your specific requirements. It provides options to define data ranges, specify allowed values, and create custom data generators to generate data that aligns with your application's business logic.
    //       </p>
    //     </div>
    //     <div className="bg-gray-800 p-6 rounded-lg">
    //       <h3 className="text-2xl font-bold mb-4">Realistic Data</h3>
    //       <p className="text-white">
    //         FrontMock includes built-in support for generating realistic data, such as names, addresses, emails, and phone numbers. It leverages popular libraries and algorithms to ensure that the generated data closely resembles real-world data, making it suitable for testing user interfaces that rely on authentic data.
    //       </p>
    //     </div>
    //     <div className="bg-gray-800 p-6 rounded-lg">
    //       <h3 className="text-2xl font-bold mb-4">Localization</h3>
    //       <p className="text-white">
    //         FrontMock supports localization, allowing you to generate mock data in different languages or locales. This feature is particularly useful when testing multilingual applications or verifying the behavior of your UI components with different language settings.
    //       </p>
    //     </div>
    //     <div className="bg-gray-800 p-6 rounded-lg">
    //       <h3 className="text-2xl font-bold mb-4">Integration with Frontend Frameworks: </h3>
    //       <p className="text-white">
    //         FrontMock is designed to seamlessly integrate with popular frontend frameworks such as React, Angular, or Vue.js. It provides utility functions and hooks to easily incorporate mock data into your components and handle data fetching and loading states during development and testing.
    //       </p>
    //     </div>
    //     <div className="bg-gray-800 p-6 rounded-lg">
    //       <h3 className="text-2xl font-bold mb-4">Data Persistence</h3>
    //       <p className="text-white">
    //         FrontMock provides the ability to persist and retrieve mock data, allowing you to simulate data storage and retrieval operations in your frontend application. This feature is especially useful when testing data manipulation or data fetching functionalities, as it enables you to mimic the behavior of a backend API or database.
    //       </p>
    //     </div>

    //   </div>
    // </section>
    <section className="container mx-auto px-4 py-8 sm:py-16">
      <h2 className="text-4xl text-center font-bold mb-8" data-aos='fade-right'>Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 drop-shadow-[0_2px_1px_white]">
        {FeatureData.map((item) => {
          return (
            <div className="bg-gray-800 p-6 rounded-lg" key={item.id} data-aos="flip-up">
              <h3 className=" text-[#ffd51d] flex items-center justify-center text-2xl font-bold mb-4">
                <span className="mr-2  shadow-white">{<item.icon />}</span>
                {item.title}
              </h3>
              <p className="text-white">{item.content}</p>
            </div>
          );
        })}
      </div>
    </section>

  );
};

export default Features;
