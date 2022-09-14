import './App.scss';

import { Footer } from "./components/footer";
import { Main } from "./components/main";
import { FAQ } from "./components/faq";
 
function App() {
  return (
    <div className="App">
      <Main />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
