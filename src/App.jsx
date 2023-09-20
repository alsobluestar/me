import { motion } from 'framer-motion';
import Paragraph from './Paragraph';
import Link from './Link';
import Clock from './Clock';
import Logtext from './Logtext';

function App() {
  return (
    <div className="mx-auto p-8 mt-16 md:mt-28 w-full h-screen text-white">
      <div>
    <Link text={ <div className="text-white w-fit text-6xl mb-3">:)</div>} link="https://discord.gg/uSGVMe9Qmm"/>


        <h1 className="mb-2 text-2xl md:text-4xl font-bold mb-4">There is no problem.</h1>
        <Logtext title="Hey there, I'm Mac, your everyday normal guy from Earth" content="" />
        <div className="mt-4 text-lg"><b>Untechnical Information:</b></div>
        <Logtext title="BIRTHDATE:" content="3rd April 2008" />
        <Logtext
          title="FAV-SONG:"
          content={<Link text="night sky patrol of tomorrow" link="https://youtu.be/XogSflwXgpw" />}
        />
        <Logtext
          title="CONTACTS:"
          content={
            <>
              <Link text="Instagram" link="https://instagram.com/bluestar.name" />,

              <Link text="Discord" link="https://discord.com/users/829156179803504670" />
              
            </>
          }
        />
        <Clock />
      </div>
    </div>
  );
}

export default App;



{/*
import Paragraph from './Paragraph';
import Link from './Link';
import Clock from './Clock';
import Logtext from './Logtext';

function App() {
  return (
    <div className="mx-auto p-8 mt-16 md:mt-28 w-full h-screen text-white">
      <div>
        <div className="text-6xl mb-3">:)</div>
        <h1 className="mb-2 text-2xl md:text-4xl font-bold mb-4">There is no problem.</h1>
        <Paragraph text="Hey there, I'm Mac, your everyday normal guy from Earth" />
        <div className="mt-4 text-lg"><b>Untechnical Information:</b></div>
        <div className="">
        <div className=""><b>BIRTHDATE:</b> 3rd April 2008</div>
        <div><b>FAV-SONG:</b> <Link text="night sky patrol of tomorrow" link="https://youtu.be/XogSflwXgpw"/> by orangestar</div>
        <div><b>CONTACTS:</b> <Link text="Instagram" link="https://instagram.com/bluestar.name" />, <Link text="Discord" link="https://discord.com/users/829156179803504670" /></div>
        <Logtext title="TEST:" content="test" />
        <Clock />
        </div>

      </div>
    </div>
  );
}

export default App;
*/}
