import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { VscGithub } from 'react-icons/vsc';



const HeroSection = () => {
    
    useEffect(() => {
        if (window.innerWidth >= 800) {
            Aos.init({ duration: 2000 });
        }
    }, []);

    return (
        <>
            <div className="container mx-auto px-4 py-16 sm:py-40" data-aos="fade-up">
                <div className="text-4xl sm:text-7xl font-bold mb-4 pt-10 text-center">
                    Create accessible React apps <br />
                    <span className="text-[#FCCD04]">with speed</span>
                </div>
                <div className="max-w-lg sm:max-w-2xl mx-auto py-4">
                    <div className="text-base text-center sm:text-lg font-light text-slate-400 leading-snug" data-aos="fade-left">
                        FrontMock: Simplify frontend development and testing with mock data. Generate realistic scenarios and test components without real data sources.
                    </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row justify-center" data-aos="fade-right">
                    <a
                        href="/docs"
                        className="text-white bg-[#ecc213] hover:bg-[#FCCD04] py-2 px-4 mb-2 sm:mb-0 sm:mr-2 rounded-md text-center sm:text-base" 
                    > 
                        Get Started 
                    </a>
                    <a
                        href="https://github.com/AmanDhimanD/frontend-demo"
                        className="text-white bg-[#1F2937] hover:bg-[#111827] py-2 px-4 rounded-md  sm:text-base !text-center"
                        target="_blank" style={{ alignItems: 'center' }}
                    >
                        GitHub
                        {/* <VscGithub style={{ marginLeft: '0.25em', fontSize: '1.6em' }} /> */}
                    </a>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
