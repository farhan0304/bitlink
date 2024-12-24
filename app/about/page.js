import React from 'react';
const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className=' bg-green-600 w-full text-3xl text-white mt-10 p-6 '>
        About
      </div>
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-black ">
            Welcome to Easyfy 
            <br className=" lg:inline-block " /> Simplify Your Links with Ease
          </h1>
          <p className="mb-3 leading-relaxed">
            At <b>Easyfy</b>, we believe in keeping things simple, secure, and efficient. Launched on December, 2024, our mission is to provide a seamless URL shortening experience without unnecessary distractions. No logins, no data collection—just a straightforward way to make your links shorter and your online journey smoother. <br />
            Built with the power of Next.js
    
            Discover the smarter way to share your links. Created for you Try <b>Easyfy</b> today!
          </p>
          <div className="flex justify-center">
            <button className=" mb-14 relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-2 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Try Now
              </span>
            </button>
          </div>
        </div>
        

      </div>
    </section>
  )
}
export default About