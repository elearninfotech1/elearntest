import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./static_website/Header";
import Footer from "./static_website/Footer";
import { lazy, Suspense } from "react";
const Routing = lazy(() => import("./Routing"));
function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback="loading..">
        <Routing />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
