import "./App.css";
import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Footer/Footer";

import bg1 from "./images/bg1.jpg";
import bg2 from "./images/bg2.jpg";
import bg3 from "./images/bg3.jpg";

function App() {
  return (
    <div className="App">
      <Header title="Hello" descr="This is second" />
      <Layout
        id="01"
        title="first"
        desk="first layout"
        urlBg={bg1}
        colorBg="#ff0000"
      />
      <Layout
        id="02"
        title="second"
        desk="second layout"
        urlBg={bg2}
        colorBg="green"
      />
      <Layout
        id="03"
        title="third"
        desk="third layout"
        urlBg={bg3}
        colorBg="blue"
      />
      <Footer />
    </div>
  );
}

export default App;
