import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import Card_Photo from "./images/card.jpg";
import Audio_1 from "./images/Begineer.mp3"


export default function App() 
{
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card img={Card_Photo} link={Audio_1} type="Wellness" duration="1 min 36 sec" />
    </div>
  );
}


