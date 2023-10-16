const App = () => {
  const containerClass = "bg-[#B8BEDD] min-h-screen flex flex-col items-center justify-center p-1";
  const cardClass = "bg-[#9C89B8] mb-2 p-6 rounded-lg shadow-lg text-center border-2 border-[#F0E6EF] w-full md:w-2/3 lg:w-1/2"
  const sectionTitleClass = "text-xl font-bold mb-4";
  const cardContentClass = "text-zinc-900 font-semibold";

  return (
    <div className={containerClass}>
      <header className={cardClass}>
        <h1 className={sectionTitleClass}>Hey, I'm Mac <span className="text-sm">(aka bluestar)</span></h1>
        <p className={cardContentClass}>Just a non formal student who enjoys all sorts of stuff. 🚀</p>
      </header>

      <div className={cardClass}>
        <h2 className={sectionTitleClass}>A Bit About Me</h2>
        <p className={cardContentClass}>Born on April 3, 2008.</p>
        <p className={cardContentClass}>I've tinkered with Python for 5 years, played around with JavaScript for a year, dabbled in Golang for a month, and had a taste of C. 🖥️</p>
      </div>

      <div className={cardClass}>
        <h2 className={sectionTitleClass}>What I'm Into</h2>
        <p className={cardContentClass}>I enjoy network and scripting programming. 🌐</p>
        <p className={cardContentClass}>I'm pretty fascinated by aerospace and space science. 🌌</p>
      </div>

      <div className={cardClass}>
        <h2 className={sectionTitleClass}>What Stupid Things I Do</h2>
        <p className={cardContentClass}>Well, I have a quirky side. Sometimes, I like to 'flood' websites. (bruh💀)</p>
      </div>
    </div>
  );
}

export default App;




