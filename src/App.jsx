import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
