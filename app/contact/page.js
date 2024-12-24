import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className="bg-green-500 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 mt-10 mx-3 sm:mx-5 md:mx-10 lg:mx-14 xl:mx-20 rounded-lg gap-5 pb-10 pt-8 shadow-lg">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white text-center mb-6">
        Contact Us
      </h1>
      
      {/* Address */}
      <div className="flex items-center gap-4 mb-4">
        <Image src="/location.png" alt="Address Icon" width={30} height={30} />
        <Link href="/LA" className="text-white text-sm sm:text-base md:text-lg hover:text-blue-200 hover:underline">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit
        </Link>
      </div>
      <hr className="border-gray-300" />
      
      {/* Phone */}
      <div className="flex items-center gap-4 mb-4">
        <Image src="/mobile_16076069.png" alt="Phone Icon" width={30} height={30} />
        <p className="text-white text-sm sm:text-base md:text-lg">+91-9XXXXXXXXX</p>
      </div>
      <hr className="border-gray-300" />
      
      {/* Email */}
      <div className="flex items-center gap-4 mb-4">
        <Image src="/gmail_5968534.png" alt="Email Icon" width={30} height={30} />
        <p className="text-white text-sm sm:text-base md:text-lg">hello@example.com</p>
      </div>
      <hr className="border-gray-300" />
      
      {/* Instagram */}
      <div className="flex items-center gap-4 mb-4">
        <Image src="/instagram.png" alt="Instagram Icon" width={30} height={30} />
        <p className="text-white text-sm sm:text-base md:text-lg">@instagram</p>
      </div>
      <hr className="border-gray-300"/>
    </div>
  );
};

export default page;
