import Paragraph from './Paragraph';
import Link from './Link';

function App() {
  return (
    <div className="mx-auto p-8 mt-16 md:mt-28 w-full h-screen text-white">
      <div>
        <div className="text-6xl mb-3">:)</div>
        <h1 className="mb-2 text-2xl md:text-4xl font-bold mb-4">There is no problem.</h1>
        <Paragraph text="Hey there, I'm Mac, your everyday normal guy from Earth" />
        <div className="mt-4"><b>BIRTHDATE:</b> 3rd April 2008</div>
        <div><b>CONTACTS:</b> <Link text="Instagram" link="https://instagram.com/bluestar.name" />, <Link text="Discord" link="https://discord.com/users/829156179803504670" /></div>
      </div>
    </div>
  );
}

export default App;



