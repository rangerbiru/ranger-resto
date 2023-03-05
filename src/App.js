import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import ReactLoading from "react-loading";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <div>
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <ReactLoading type="bars" color="red" width={64} height={64} />
        </div>
      ) : (
        <>
          <Header />
          <main>
            <Home />
            <About />
            <Menu />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
