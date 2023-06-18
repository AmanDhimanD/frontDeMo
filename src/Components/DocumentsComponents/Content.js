import React, { useEffect, useState } from "react";
import { TbBrandNpm } from "react-icons/tb";
import { SiYarn } from "react-icons/si";
import CustomTooltip from "../../Assets/Tooltip/CustomTooltip";


// Main content component
const Content = () => {
    const [selectedCommand, setSelectedCommand] = useState('npm');
    const [isScrolled, setIsScrolled] = useState(false);



    const handleNpmClick = () => {
        setSelectedCommand('npm');
    };

    const handleYarnClick = () => {
        setSelectedCommand('yarn');
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollThreshold = 100; // Adjust this value as needed

            if (scrollTop > scrollThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headingColor = isScrolled ? 'text-yellow-500' : '';


    return (
        <div className="w-full md:w-1/2 p-8">
            <p className="text-sm text-gray-700 font-semibold mb-2">- Documentation</p>
            <h1 className="text-4xl font-bold mb-2">Installation</h1>
            <p className="mb-2">Follow the steps below to install the library:</p>
            <div className="flex space-x-4 mb-4">
                <button
                    className={` text-white py-2 px-2 rounded-md ${selectedCommand === 'npm' ? 'bg-opacity-100' : 'bg-opacity-50'
                        }`}
                    onClick={handleNpmClick}
                >
                    <CustomTooltip text="install by npm">
                        <TbBrandNpm style={{ fontSize: '2.5em', color: 'red' }} />
                    </CustomTooltip>
                </button>
                <button
                    className={` text-white py-2 px-2 rounded-md ${selectedCommand === 'yarn' ? 'bg-opacity-100' : 'bg-opacity-50'
                        }`}
                    onClick={handleYarnClick}
                >
                    <CustomTooltip text="install by yarn">
                        <SiYarn style={{ fontSize: '2.3em', color: 'blue' }} />
                    </CustomTooltip>
                </button>
            </div>

            {selectedCommand === 'npm' ? (
                <>
                    <code className="!bg-gray-100 !text-black p-2 rounded-md block mb-4 code-to-copy">npm i demo-front
                    </code>
                </>

            ) : (
                <code className="!bg-gray-100 !text-black p-2 rounded-md block mb-4">yarn add demo-front</code>
            )}

            <p>After installation, you can import and use the library in your project.</p>
            <br />

            <h1 className={`text-4xl font-bold mb-6 ${headingColor}`} id="usage">Usage</h1>
            <p className="mb-6">
                Once the Demo-Front library is installed, you can use it in your project. Follow the steps below to get started:
            </p>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Import the necessary functions from the library in your project file:</h2>
                <pre className="bg-gray-100   !text-black p-4 rounded-lg mb-4">
                    <code>import &#123; useCRUD &#125; from 'demo-front';</code>
                </pre>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Initialize the CRUD functionality by invoking the useCRUD function:</h2>
                <pre className="bg-gray-100   !text-black p-4 rounded-lg mb-4">
                    <code>const &#123; data, createItem, readItem, updateItem, deleteItem &#125; = useCRUD();</code>
                </pre>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Use the imported functions to perform CRUD operations. Here are some examples:</h2>

                <div className="mb-4" id="create">
                    <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>Create a new item:</h3>
                    <pre className="bg-gray-100  !text-black p-4 rounded-lg">
                        <code>createItem(&#123; id: 1, name: 'Item 1' &#125;);</code>
                    </pre>
                </div>

                <div className="mb-4" id='read'>
                    <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>Read an item by its ID:</h3>
                    <pre className="bg-gray-100   !text-black p-4 rounded-lg">
                        <code>const item = readItem(1);</code>
                    </pre>
                </div>

                <div className="mb-4" id='update'>
                    <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>Update an item by its ID:</h3>
                    <pre className="bg-gray-100   !text-black p-4 rounded-lg">
                        <code>updateItem(1, &#123; name: 'Updated Item' &#125;);</code>
                    </pre>
                </div>

                <div className="mb-4" id='delete'>
                    <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>Delete an item by its ID:</h3>
                    <pre className="bg-gray-100   !text-black p-4 rounded-lg">
                        <code>deleteItem(1);</code>
                    </pre>
                </div>

                <p>Make sure to adapt the code examples to your specific use case and data structure.</p>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4" id='example'>Example</h2>
                <p className="mb-4">
                    Here's an example of how you can integrate the Demo-Front library into your project:
                </p>
                <pre className="bg-gray-100  !text-black  p-4 rounded-lg">
                    <code>
                        {`import React from 'react';
import { useCRUD } from 'demo-front';

const MyComponent = () => {
  const { data, createItem, readItem, updateItem, deleteItem } = useCRUD();

  // Example usage
  createItem({ id: 1, name: 'Item 1' });
  const item = readItem(1);
  updateItem(1, { name: 'Updated Item' });
  deleteItem(1);

  return (
    // Your component JSX code
  );
};

export default MyComponent;`}
                    </code>
                </pre>
                <p>
                    In this example, we import the <code>useCRUD</code> function from the Demo-Front library and use it within the <code>MyComponent</code> component to perform CRUD operations on the <code>data</code> array.
                </p>

                <p>Feel free to adapt the example code to your project's needs and provide additional documentation as necessary.</p>
            </div>
        </div>
    );
};

export default Content;