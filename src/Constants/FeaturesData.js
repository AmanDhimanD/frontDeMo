import { BsDatabaseGear, BsDatabaseFillLock } from 'react-icons/bs'
import { BiCustomize } from 'react-icons/bi'
import { TbFileDatabase } from 'react-icons/tb'
import { MdLocalOffer } from 'react-icons/md'
import { FaPhoenixFramework } from 'react-icons/fa'


export const FeatureData = [
    {
        id: 1,
        icon : BsDatabaseGear,
        title: 'Data Generation',
        content: ' FrontMock offers a wide range of data generation functions to create mock data for different data types, such as strings, numbers, booleans, dates, and more. It allows you to generate random or predefined values, control the length or format of the data, and even generate complex nested structures.'
    },
    {
        id: 2,
        icon: BiCustomize,
        title: 'Customization',
        content: 'With FrontMock, you can easily customize the generated mock data to match your specific requirements. It provides options to define data ranges, specify allowed values, and create custom data generators to generate data that aligns with your application\'s business logic.'
    },
    {
        id: 3,
        icon: TbFileDatabase,
        title: 'Realistic Data',
        content: 'FrontMock includes built-in support for generating realistic data, such as names, addresses, emails, and phone numbers. It leverages popular libraries and algorithms to ensure that the generated data closely resembles real-world data, making it suitable for testing user interfaces that rely on authentic data.'
    },
    {
        id: 4,
        icon: MdLocalOffer,
        title: 'Localization',
        content: 'FrontMock supports localization, allowing you to generate mock data in different languages or locales. This feature is particularly useful when testing multilingual applications or verifying the behavior of your UI components with different language settings.'
    },
    {
        id: 5,
        icon: FaPhoenixFramework,
        title: 'Integration with Frontend Frameworks',
        content: 'FrontMock is designed to seamlessly integrate with popular frontend frameworks such as React, Angular, or Vue.js. It provides utility functions and hooks to easily incorporate mock data into your components and handle data fetching and loading states during development and testing.'
    },
    {
        id: 6,
        icon: BsDatabaseFillLock,
        title: 'Data Persistence',
        content: 'FrontMock provides the ability to persist and retrieve mock data, allowing you to simulate data storage and retrieval operations in your frontend application. This feature is especially useful when testing data manipulation or data fetching functionalities, as it enables you to mimic the behavior of a backend API or database.'
    },
]