import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import Data from "./Data";


export default function App() 
{
  const cards = Data.map((item) => {
    return (
      <Card img={item.img} link={item.link} title={item.title} />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}


