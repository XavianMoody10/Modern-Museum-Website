import "./App.css";
import { Header } from "./features/Header/Header";
import { Hero } from "./features/Hero/Hero";
import { Partnerships } from "./features/Partnerships/Partnerships";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Partnerships></Partnerships>
    </div>
  );
}

export default App;
