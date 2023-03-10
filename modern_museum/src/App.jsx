import "./App.css";
import { FAQS } from "./features/FAQS/FAQS";
import { Footer } from "./features/Footer/Footer";
import { Header } from "./features/Header/Header";
import { Hero } from "./features/Hero/Hero";
import { Partnerships } from "./features/Partnerships/Partnerships";
import { Presentation } from "./features/Presentation/Presentation";
import { Process } from "./features/Process/Process";
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
      <Process></Process>
      <Presentation></Presentation>
      <Footer></Footer>
    </div>
  );
}

export default App;
