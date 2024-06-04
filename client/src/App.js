import React from "react";
import Header from "./components/Header";
import RightPanel from "./components/RightPannel";
import LeftPanel from "./components/LeftPannel";
import Footer from "./components/Footer";
import OrangeWave from "./assets/orange-wave.jpg";

function App() {
  return (
    <div className="App">
      <Header className="py-5" />

      <section className="orange-background d-flex justify-content-center align-items-center">
        <div className="row container ">
          <div className="col-12 col-md-4 d-flex justify-content-center flex-column">
            <LeftPanel />
          </div>
          <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
            <RightPanel />
          </div>
        </div>
      </section>

      <section className="orange-background">
        <img src={OrangeWave} alt="colored wave" width="100%" />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
