import "./App.css";
import { FAQS } from "./features/FAQS/FAQS";
import { Header } from "./features/Header/Header";
import { Hero } from "./features/Hero/Hero";
import { Partnerships } from "./features/Partnerships/Partnerships";
import { TeamLayouts } from "./features/TeamLayouts/TeamLayouts";
import { Testimonial } from "./features/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Partnerships></Partnerships>
      <TeamLayouts></TeamLayouts>
      <Testimonial></Testimonial>
      <FAQS></FAQS>
    </div>
  );
}

export default App;
