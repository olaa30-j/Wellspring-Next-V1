import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "wellSpring: About US",
    description: "BMI system analysis your body",
};

const AboutUs = () => {
    return (
        <div className='xl:container mx-[auto]'>
            <div
                className="relative flex justify-center items-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://wellspring.qodeinteractive.com/wp-content/uploads/2016/01/title-green.jpg')",
                    height: "385px",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="z-10 flex flex-col items-center text-center">
                    <h1 className="text-white text-4xl font-bold mb-2">
                        About Us
                    </h1>
                    <span className="text-white text-xl">
                        Who We Are And What We Do
                    </span>
                </div>
            </div>
            <div className='h-[100vh]'></div>
        </div>
    )
}

export default AboutUs
