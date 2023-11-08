import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import pop from './mc-pop.mp3';

const App = () => {
  const [play] = useSound(pop);


  const containerClass = "bg-zinc-900 min-h-screen flex flex-col items-center justify-center p-1";
  const cardClass = "bg-gray-800 mb-2 p-6 rounded-lg shadow-lg text-center border-2 border-gray-400 w-full md:w-2/3 lg:w-1/2";
  const sectionTitleClass = "text-xl text-cyan-500 font-bold mb-4";
  const cardContentClass = "text-pink-200 font-semibold";

  
  const data = [
    {
      title: "Hey, I'm Mac (aka bluestar)",
      content: "Just a non formal student who enjoys all sorts of stuff. 🚀",
    },
    {
      title: "A Bit About Me",
      content: "Born on April 3, 2008. I've tinkered with Python for 5 years, played around with JavaScript for a year, dabbled in Golang for a month, and had a taste of C. 🖥️",
    },
    {
      title: "What I'm Into",
      content: "I enjoy network and scripting programming. 🌐 I'm pretty fascinated by aerospace and space science. 🌌",
    },
    {
      title: "What Stupid Things I Do",
      content: "Well, I have a quirky side. Sometimes, I like to 'flood' websites. (bruh💀)",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % data.length);
  };

  return (
    <div className={containerClass}>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={activeIndex}
        className={cardClass}>
        <h1 className={sectionTitleClass}>{data[activeIndex].title}</h1>
        <p className={cardContentClass}>{data[activeIndex].content}</p>
      </motion.div>

      <div className="p-2 text-white" style={{ display: 'flex', alignItems: 'center' }}>
        <button className="text-2xl" onClick={() => { handleNext(); play(); }}>
          <MdKeyboardArrowLeft />
        </button>
        <div className="p-2">{activeIndex + 1}/{data.length}</div>
        <button className="text-2xl" onClick={() => { handleNext(); play(); }}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}

export default App;


