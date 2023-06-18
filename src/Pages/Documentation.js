import React from 'react';
import LeftSideBar from '../Components/DocumentsComponents/LeftSideBar';
import Content from '../Components/DocumentsComponents/Content'
import RightSideBar from '../Components/DocumentsComponents/RightSideBar'
import Footer from '../Components/Footer'

// Documentation component
const Documentation = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row">
        <LeftSideBar className="md:w-1/4" />
        
        <Content className="md:w-1/2" />
        {/* <RightSideBar className="md:w-1/4" /> */}
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Documentation;
